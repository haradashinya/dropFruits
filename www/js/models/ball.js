/**
 * 発射するボール
 * @param x
 * @param y
 * @param vector
 * @param canvas
 * @return {{}}
 * @constructor
 */

window.Ball = function(){
  var canvas = document.querySelector("#test");
  var gravity = 0;
  var that = Object.create(new createjs.Shape());
  that.removeMe = false;
  that.type = "dynamic" ;
  that.graphics.beginFill("#ff0000");
  that.graphics.drawCircle(10,10,10);
  that.graphics.endFill();
  that.alpha = 1;
  that.foo = function(){
    console.log("foo");
  };

  var length = function(){
    return Math.sqrt(that.vx * that.vx + that.vy * that.vy);
  };

  var scale = function(scale){
    that.vx *= scale;
    that.vy *= scale;
  };

  var normalize = function(){
    var len = length();
    if (len){
      that.vx = that.vx / len;
      that.vy =  that.vy / len;
    }
    return len;
  };

  var rotate = function(angle){
    var vx = that.vx;
    var vy = that.vy;
    var cosVal = Math.cos(angle);
    var sinVal = Math.sin(angle);
    that.vx =   (vx * cosVal - vy * sinVal);
    that.vy = vx * sinVal + vy * cosVal ;
  };


  that.move = function(){
    var angle = Math.atan2(window.my - that.y,window.mx - that.x);
    that.vy += gravity;
    gravity -= 0.1;
    that.x += that.vx;
    that.y -= that.vy;
    if (that.y > canvas.height){
      that.removeMe = true;
      console.log('removeMe');
    }
  };

  that.vx = window.mx - that.x;
  that.vy = window.my - that.y;
  // vx,vy の値を正規化する。
  normalize();

  // vx,vyを3倍する。
  scale(30);

  var angle =  Math.atan2(window.my - that.y,window.mx - that.x);
  return that;
};

var b= window.Ball();
