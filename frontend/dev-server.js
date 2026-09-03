const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4200;

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/api')) {
        // Proxy to Express backend
        const options = {
            hostname: 'localhost',
            port: 5000,
            path: req.url,
            method: req.method,
            headers: req.headers
        };

        const proxyReq = http.request(options, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });

        proxyReq.on('error', (err) => {
            console.error('Proxy error:', err.message);
            res.writeHead(502);
            res.end('Bad Gateway');
        });

        req.pipe(proxyReq);
    } else {
        // Serve index.html or other assets from the root directory
        const urlPath = req.url.split('?')[0];
        let filePath = path.join(__dirname, '..', urlPath);
        
        // If directory, check for index.html
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html');
        }

        // If file does not exist, serve index.html (client-side routing fallback)
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
            filePath = path.join(__dirname, '..', 'index.html');
        }

        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon'
          };
          const contentType = mimeTypes[ext] || 'application/octet-stream';

          fs.readFile(filePath, (err, data) => {
              if (err) {
                  res.writeHead(500);
                  res.end('Error loading asset');
              } else {
                  res.writeHead(200, { 'Content-Type': contentType });
                  res.end(data);
              }
          });
      }
  });

  server.listen(PORT, () => {
      console.log(`React Dev Server running on http://localhost:${PORT}`);
  });
