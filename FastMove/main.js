var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create,update: update , render: render });

function preload () {
  game.load.image('circle', 'assets/circle.png');
  game.load.image('block', 'assets/earth.png');
  // Firefox does not support MP3 Files so we will use OGG for firefox
  game.load.audio('failMusic', ['assets/failMusic.mp3', 'assets/failMusic.ogg']);
  game.load.audio('mainMusic', ['assets/mainMusic.mp3', 'assets/mainMusic.ogg']);
};

function create (){
  this.status = 'play';
  game.stage.backgroundColor = '#fff';
  game.physics.startSystem(Phaser.Physics.ARCADE);

  this.circle = game.add.sprite(40, (window.innerHeight / 2) - 20, 'circle');
  game.physics.enable(this.circle);

  // load main music and play it
  this.failMusic = game.add.audio('this.failMusic');
  this.mainMusic = game.add.audio('this.mainMusic');
  this.mainMusic.play();

  this.blocks = game.add.group();

  this.velo = -100;
  this.count = 1;
  this.timer = game.time.events.loop(1000, () => {
    var randomC = (Math.random() * (this.count - 1)) + 1;
    for (var i = 1; i <= randomC; i++){
      var randomY = (Math.random() * (window.innerWidth - 25));
      this.block = game.add.sprite(window.innerWidth, randomY, 'block');
      game.physics.enable(this.block);
      this.block.body.velocity.x = this.velo - 50;
      this.velo -= 5;
      this.blocks.add(this.block);
    }
    this.count += 1;
    this.score += 1;
    this.labelScore.text = this.score;
  }, this);

  this.score = 0;
  this.labelScore = game.add.text(20, 20, "0",
  { font: "30px Arial", fill: "#000" });

  setInterval(() => {
    if (this.status == 'play'){
      this.mainMusic.play();
    }
  }, 177000);
  setInterval(() => {
    if (this.status == 'loose'){
      this.failMusic.play();
    }
  }, 46000);


  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  upKey.onDown.add(upKeyFunc, this);
  upKey.onUp.add(upKeyFuncUp, this);

  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  downKey.onDown.add(downKeyFunc, this);
  downKey.onUp.add(downKeyFuncUp, this);
};

function upKeyFunc(){
  this.circle.body.velocity.y = -300;
}

function downKeyFunc(){
  this.circle.body.velocity.y = +300;
}

function upKeyFuncUp(){
  this.circle.body.velocity.y = 0;
}

function downKeyFuncUp(){
  this.circle.body.velocity.y = 0;
}

function update(){
  if (this.circle.y < 0 || this.circle.y > window.innerHeight){
    this.failMusic.play();
    this.status = 'loose';
    alert('Really?! No cheat, that is our rule!! Play again?');
    this.mainMusic.play();
    this.status = 'play';
    this.count = 0;
    this.velo = -100;
    this.blocks.removeAll();
    this.score = 0;
    this.circle.body.velocity.y = 0;
    this.circle.position.x = 40;
    this.circle.position.y = (window.innerHeight / 2) - 20;
  }
  game.physics.arcade.overlap(
    this.circle, this.blocks, restartGame, null, this);
}

function restartGame(){
  this.failMusic.play();
  this.status = 'loose';
  alert('Really?! You got only '+this.score+' ! Play again?');
  this.mainMusic.play();
  this.status = 'play';
  this.count = 0;
  this.velo = -100;
  this.blocks.removeAll();
  this.score = 0;
  this.circle.body.velocity.y = 0;
  this.circle.position.x = 40;
  this.circle.position.y = (window.innerHeight / 2) - 20;
}

function render() {
    game.debug.text("Next Attack In: " + game.time.events.duration.toFixed(0), 32, 32 );
}
