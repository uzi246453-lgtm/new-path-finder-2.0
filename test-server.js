import express from 'express';
const app = express();
app.get('/', (req, res) => res.send('Hello'));
const server = app.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
  console.log('Server address:', server.address());
});
server.on('error', (err) => console.error('Server error:', err));