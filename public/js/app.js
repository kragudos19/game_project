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

function drawImage(image, x, y){
  destX = x;
  destY = y;
  destWidth = 180;
  destHeight = 200;

  ctx.drawImage(image, destX, destY, destWidth, destHeight);
};
// ========== PLAYER ============================

var Player = function(args) {
  this.username = args.username; //taken from database ajax call
  this.currentPosition = 0;

  this.speed = .3;
  this.image = new Image();
  this.image.src = '/images/alien.png';
  this.width = 25;
  this.height = 50;
  this.x = 80;
  this.y = 50;

}//ends the Player object

// =================== GAME =======================================
var player;
var ctx;
var canvas;
var left;
var right;
var up;
var down;
var destX;
var destY;
var player2;
var destX2;
var destY2;


$(function(){
// ==== CANVAS ========
  loadCanvas();

// ========================== LOAD PLAYERS ====================================================

  var player = new Player({username: "getAjaxCall", speed: 3});
  var image = new Image();
  image.onload = function() {
    drawImage(image, 300, 500);
  };

  image.src = '/images/alien.png';


  //======= PLAYER 2 =======

  var player2 = new Player({username: "getAjaxCall2", speed: 3});
  var image2 = new Image();
  image2.onload = function() {
    drawImage(image2, 500, 500);
  };

  image2.src = '/images/alien.png';

// =================== GAMEPLAY FUNCTIONS====================================================================

  // $('#start-game').on('click', function(event){

  // });

// ====== MOVE LEFT AND RIGHT =======
  document.addEventListener("keydown", function(){
    console.log(event.keyCode);
    if (event.keyCode == 37 || event.keycode == 65) {
      if(!left) {
        left = setInterval(function () {
          destX = destX - 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImage(image,destX,destY);
        }, player.speed)
      }
    } else if (event.keyCode == 39 || event.keycode == 68) {
      if(!right) {
          right = setInterval(function () {
          destX = destX + 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImage(image,destX,destY);
          }, player.speed)
      }
    }
  }, true);
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 37 || event.keycode == 65) {
        clearInterval(left);
        left = false;
    } else if (event.keyCode == 39 || event.keycode == 68) {
        clearInterval(right);
        right = false;

    }
  }, true);


//===== MOVE UP AND DOWN=======================

  document.addEventListener("keydown", function(){
    console.log(event.keyCode);
    if (event.keyCode == 38 || event.keyCode == 87) {
      if(!up) {
        up = setInterval(function () {
          destY = destY - 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImage(image,destX,destY);
        }, player.speed)
      }
    } else if (event.keyCode == 40 || event.keyCode == 88 ) {
      if(!down) {
          down = setInterval(function () {
          destY = destY + 1;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawImage(image,destX,destY);
          }, player.speed)
      }
    }
  }, true);
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 38 || event.keyCode == 87) {
        clearInterval(up);
        up = false;
    } else if (event.keyCode == 40 || event.keyCode == 88 ) {
        clearInterval(down);
        down = false;
    }
  }, true);


});//end of document load











