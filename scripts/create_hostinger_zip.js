const fs = require('fs');
const path = require('path');
const { ZipArchive } = require('archiver');

async function createHostingerZip() {
  const outDir = path.resolve(__dirname, '../out');
  const zipPath = 'C:\\Users\\Hp\\OneDrive\\Documents\\Antigravity\\kingsford-leather-hostinger-build.zip';

  if (!fs.existsSync(outDir)) {
    throw new Error(`Directory ${outDir} does not exist. Run "npm run build" first.`);
  }

  console.log(`Packaging ${outDir} -> ${zipPath}`);

  // Create output write stream
  const output = fs.createWriteStream(zipPath);
  const archive = new ZipArchive({
    zlib: { level: 9 }, // Maximum compression
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

    // Append all files from out/ directly to root of zip (including dotfiles like .htaccess)
    archive.glob('**/*', {
      cwd: outDir,
      dot: true,
      nodir: true,
    });

    archive.finalize();
  });
}

createHostingerZip().catch((err) => {
  console.error('Failed to create zip:', err);
  process.exit(1);
});
