const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(`Static server running on http://127.0.0.1:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

// Keep process alive
process.stdin.resume();
setInterval(() => {}, 1000);