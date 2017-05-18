var game = new Phaser.Game(500, 500, Phaser.AUTO);

var GameState = {
  preload: function(){
    // this.load.image('background', 'assets/images/background.png')
  },
  create: function(){
    // this.background = this.game.add.sprite(0,0, 'background');
  },
  update: function(){

  }
}

// helloText = game.add.text(250, 250, 'Hello, Phaser!', {
//   fontSize: '32px',
//   fill: '#00F'
// });
// helloText.anchor.set(0.5, 0.5);

game.state.add('GameState', GameState);
game.state.start('GameState');
