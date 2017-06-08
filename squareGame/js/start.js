game = new Phaser.Game(500,500, Phaser.AUTO);

var box = function(options) {
  var bmd = game.add.bitmapData(options.length, options.width);
  bmd.ctx.beginPath();
  bmd.ctx.rect(0,0,options.length,options.width);
  bmd.ctx.fillStyle = options.color;
  bmd.ctx.fill();
  return bmd;
}

var mainState = {
  create: function(){
    game.stage.backgroundColor = '#BDC2C5';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.enableBody = true;

    this.player = game.add.sprite(32,32,box({
      length:32,
      width: 32,
      color: '#FF0000'
    }));

    this.cursor = game.input.keyboard.createCursorKeys();
    this.player.body.collideWorldBounds = true;

    this.walls = walls(game);

    this.enemy = game.add.sprite(200, 32,
      box({
        length: 32,
        width: 32,
        color: '#A96262'
      }))
  },
  update: function(){

    game.physics.arcade.collide(this.player, this.walls);

    var speed = 250;
    this.player.body.velocity.y = 0;
    this.player.body.velocity.x = 0;

    if (this.cursor.up.isDown) {
      this.player.body.velocity.y -= speed;
    } else if (this.cursor.down.isDown) {
      this.player.body.velocity.y += speed;
    }
    if (this.cursor.left.isDown) {
      this.player.body.velocity.x -= speed;
    } else if (this.cursor.right.isDown) {
      this.player.body.velocity.x += speed;
    }
  }
}

game.state.add('main',mainState);
game.state.start('main');
