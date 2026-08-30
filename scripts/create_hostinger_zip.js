const fs = require('fs');
const path = require('path');
const { ZipArchive } = require('archiver');

async function createHostingerZip() {
  const outDir = path.resolve(__dirname, '../out');
  const targetDir = 'C:\\Users\\Hp\\OneDrive\\Documents\\Antigravity';
  const zipPath = path.join(targetDir, 'kingsford-leather-hostinger-build.zip');

  if (!fs.existsSync(outDir)) {
    throw new Error(`Directory ${outDir} does not exist. Run "npm run build" first.`);
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Packaging ${outDir} -> ${zipPath}`);

  // Create a 1-click unzip helper script
  const unzipHelperContent = `<?php
/**
 * 1-Click Hostinger Instant Unzipper
 * Extracts kingsford-leather-hostinger-build.zip directly on the server in < 1 second.
 */
ini_set('max_execution_time', 300);
ini_set('memory_limit', '512M');

$zipFile = __DIR__ . '/kingsford-leather-hostinger-build.zip';

if (!file_exists($zipFile)) {
    die('<div style="font-family:sans-serif;padding:30px;color:#dc2626;"><h2>Error: kingsford-leather-hostinger-build.zip not found in public_html!</h2><p>Please upload kingsford-leather-hostinger-build.zip into public_html first.</p></div>');
}

$zip = new ZipArchive;
if ($zip->open($zipFile) === TRUE) {
    $zip->extractTo(__DIR__);
    $zip->close();
    
    // Clean up
    @unlink(__FILE__);
    @unlink($zipFile);
    echo '<div style="font-family:sans-serif;padding:40px;text-align:center;">';
    echo '<h1 style="color:#16a34a;">🎉 Website Successfully Extracted & Deployed!</h1>';
    echo '<p style="color:#4b5563;font-size:18px;">All pages, images, and Next.js assets are live in public_html.</p>';
    echo '<a href="/" style="display:inline-block;padding:12px 24px;background:#2563eb;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:10px;">Go to Website Homepage &rarr;</a>';
    echo '</div>';
} else {
    die('<h2>Failed to extract zip file.</h2>');
}
?>`;

  const unzipHelperPath = path.join(targetDir, 'unzip.php');
  fs.writeFileSync(unzipHelperPath, unzipHelperContent, 'utf8');
  console.log(`Created unzip helper at: ${unzipHelperPath}`);

  const output = fs.createWriteStream(zipPath);
  const archive = new ZipArchive({
    zlib: { level: 6 }, // Fast standard compression
  });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      const mb = (archive.pointer() / 1024 / 1024).toFixed(2);
      console.log(`Zip successfully created: ${zipPath}`);
      console.log(`Total bytes: ${archive.pointer()} (~${mb} MB)`);
      resolve();
    });

    archive.on('warning', (err) => {
      if (err.code === 'ENOENT') {
        console.warn(err);
      } else {
        reject(err);
      }
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);

    // Recursively collect all files
    function getAllFiles(dir, baseDir = dir) {
      let results = [];
      const list = fs.readdirSync(dir, { withFileTypes: true });
      for (const item of list) {
        const fullPath = path.join(dir, item.name);
        const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        if (item.isDirectory()) {
          results.push({ fullPath, relPath, isDir: true });
          results = results.concat(getAllFiles(fullPath, baseDir));
        } else {
          results.push({ fullPath, relPath, isDir: false });
        }
      }
      return results;
    }

    const allItems = getAllFiles(outDir);

    // Order: Root files & core pages FIRST, media LAST
    allItems.sort((a, b) => {
      const isImgA = a.relPath.startsWith('images/');
      const isImgB = b.relPath.startsWith('images/');
      if (isImgA && !isImgB) return 1;
      if (!isImgA && isImgB) return -1;

      const isRootA = !a.relPath.includes('/');
      const isRootB = !b.relPath.includes('/');
      if (isRootA && !isRootB) return -1;
      if (!isRootA && isRootB) return 1;

      return a.relPath.localeCompare(b.relPath);
    });

    for (const item of allItems) {
      if (item.isDir) {
        archive.append(null, {
          name: item.relPath + '/',
          mode: 0o755,
        });
      } else {
        const isMedia = /\.(webp|jpg|jpeg|png|gif|ico|woff2?)$/i.test(item.relPath);
        archive.file(item.fullPath, {
          name: item.relPath,
          mode: 0o644,
          store: isMedia, // Store media uncompressed for lightning fast decompression
        });
      }
    }

    archive.finalize();
  });
}

createHostingerZip().catch((err) => {
  console.error('Failed to create zip:', err);
  process.exit(1);
});
