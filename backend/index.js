const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, { cors: { origin: '*' } });
const fs = require('fs');

io.on('connection', (socket) => {
  console.log('Utente connesso:', socket.id);

  socket.on('input-controller', (data) => {
    fs.writeFileSync('../frontend-love2d/primo-gioco/input.txt', data);
  });
});

app.use(express.static('public'));

http.listen(3000, () => console.log('Server avviato su porta 3000'));