import express from 'express';
import http from 'http';

const app = express();
app.get('/', (req, res) => res.send('Hello from test server!'));

const server = app.listen(3002, '127.0.0.1', () => {
  console.log('Test server listening on 127.0.0.1:3002');
  console.log('Server address:', server.address());
  
  // Try to connect to ourselves
  http.get('http://127.0.0.1:3002', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Self-connection successful! Response:', data);
      server.close();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Self-connection failed:', err.message);
    server.close();
    process.exit(1);
  });
});
server.on('error', (err) => console.error('Server error:', err));