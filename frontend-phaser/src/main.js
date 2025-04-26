import Phaser from 'phaser';
const socket = io('http://'+window.location.hostname+':3000');

class MyScene extends Phaser.Scene {
  constructor() { super('play'); }
  preload() {}
  create() {
    // crea un quadrato (graphics) al centro
    this.box = this.add.rectangle(400, 300, 50, 50, 0x8888ff);
    // ascolta input dal controller
    socket.on('input-controller', key => {
      const step = 10;
      if (key === 'UP')    this.box.y -= step;
      if (key === 'DOWN')  this.box.y += step;
      if (key === 'A')     this.box.x -= step;
      if (key === 'B')     this.box.x += step;
    });
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: MyScene,
  backgroundColor: '#222222'
});

