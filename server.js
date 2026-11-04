const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const FILE = path.join(__dirname, 'carpinteria-logistica-36.html');
const server = http.createServer((req, res) => {
  fs.readFile(FILE, (err, data) => {
    if (err) { res.writeHead(404); res.end('Archivo no encontrado'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});
server.listen(PORT, '0.0.0.0', () => console.log('Sendway en http://localhost:' + PORT));
