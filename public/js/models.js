function loadCanvas(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = '#414a4c';
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
};

function Player(args) {
  this.username = args.username; //taken from database ajax call
  this.currentPosition = 0;

  this.speed = .3;
  this.image = new Image();
  this.image.src = '/images/alien.png';
  this.width = 15;
  this.height = 40;
  this.x = 60;
  this.y = 50;

}//ends the Player object
