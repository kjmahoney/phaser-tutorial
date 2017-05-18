var game = new Phaser.Game(500,500,Phaser.AUTO, 'area', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
  this.load.image('background', 'assets/images/background.png')
  this.load.image('monkey', 'assets/images/monkey.png')

}

function create() {
  console.log('new function working');
  this.background = this.game.add.sprite(0,0, 'background');
}

function update() {
}
