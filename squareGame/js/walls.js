function walls(game) {
  this.walls = game.add.group();
  this.walls.enableBody = true;

  var top = this.walls.create(0,0,
    box({
      length: game.world.width,
      width: 16,
      color: '#374A59'
    }));
    top.body.immovable = true;

  var bottom = this.walls.create(0,game.world.height - 16,
    box({
      length: game.world.width,
      width: 16,
      color: '#374A59'
    }));
    bottom.body.immovable = true;

  var leftWall = this.walls.create(0,16,
    box({
      length: 16,
      width: game.world.height - 32,
      color: '#374A59'
    }));
    leftWall.body.immovable = true;

    var rightWall = this.walls.create(game.world.width - 16, 16,
      box({
        length: 16,
        width: game.world.height - 32,
        color: '#374A59'
      }));
      rightWall.body.immovable = true;

    var innerWall1 = this.walls.create(game.world.width /4, 16,
      box({
        length: 16,
        width: game.world.height - game.world.height/4,
        color: '#374A59'
      }));
      innerWall1.body.immovable = true;

      var innerWall2 = this.walls.create(game.world.width /2, 128,
        box({
          length: 16,
          width: game.world.height - game.world.height/4,
          color: '#374A59'
      }));
      innerWall2.body.immovable = true;

  return(this.walls);
}
