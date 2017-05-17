var game = new Phaser.Game(500,500,Phaser.AUTO, 'area', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
}

function create() {
  var helloText = game.add.text(250, 250,'Hello, Phaser!', {
    fontSize: '32px',
    fill: '#00F'
  });
  helloText.anchor.set(0.5,0.5);
}

function update() {
}
