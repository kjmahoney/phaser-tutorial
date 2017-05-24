var game = new Phaser.Game(500,500,Phaser.AUTO, 'area', {
  preload: preload,
  create: create,
  update: update
});

console.log($);

function preload() {
  this.load.image('background', 'assets/images/background.png')
  this.load.image('monkey', 'assets/images/monkey.png')
}

function create() {
  console.log('new function working');
  this.background = this.game.add.sprite(0,0, 'background');
  this.monkey = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'monkey');
  this.monkey.anchor.setTo(0.5,0.5);
  this.monkey.scale.setTo(.5);
  //trick for turning around object
  this.monkey.scale.setTo(-1,1);
  this.monkey.angle = 45 + 20;
}

 distance = 1;
function update() {
  distance += .001;
  this.monkey.scale.setTo(distance);
  this.monkey.angle += 5;
}
