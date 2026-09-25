import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = process.env.PORT || 3001;
const OUT_DIR = path.resolve('out');
const PUBLIC_DIR = path.resolve('public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  let decodedPath = decodeURI(cleanUrl);

  let candidatePath = path.join(OUT_DIR, decodedPath);

  // If directory, look for index.html
  if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isDirectory()) {
    candidatePath = path.join(candidatePath, 'index.html');
  } else if (!fs.existsSync(candidatePath) && fs.existsSync(candidatePath + '.html')) {
    candidatePath = candidatePath + '.html';
  } else if (!fs.existsSync(candidatePath) && fs.existsSync(path.join(candidatePath, 'index.html'))) {
    candidatePath = path.join(candidatePath, 'index.html');
  }

  // Fallback to public directory if file not in out (e.g. newly downloaded images)
  if (!fs.existsSync(candidatePath)) {
    const publicCandidate = path.join(PUBLIC_DIR, decodedPath);
    if (fs.existsSync(publicCandidate) && !fs.statSync(publicCandidate).isDirectory()) {
      candidatePath = publicCandidate;
    }
  }

  if (!fs.existsSync(candidatePath) || fs.statSync(candidatePath).isDirectory()) {
    const notFoundPage = path.join(OUT_DIR, '404.html');
    if (fs.existsSync(notFoundPage)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(notFoundPage));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
    return;
  }

  const ext = path.extname(candidatePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(candidatePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Kingsford Leather Local Server is LIVE!`);
  console.log(`👉 Open in your browser: http://localhost:${PORT}`);
  console.log(`👉 Shop Catalogue:        http://localhost:${PORT}/shop/`);
  console.log(`👉 Custom Jackets:        http://localhost:${PORT}/custom-jackets/\n`);
});
