/**
 * 発射するボール
 * @param x
 * @param y
 * @param vector
 * @param canvas
 * @return {{}}
 * @constructor
 */

window.Ball = function(x,y){
  var canvas = document.querySelector("#test");
  var gravity = 0;
  var that = Object.create(new createjs.Shape());
  window.Vec.apply(that,[0,0]);
  that.x = x;
  that.y = y;
  that.removeMe = false;
  that.type = "dynamic" ;
  that.graphics.beginFill("#ff0000");
  that.graphics.drawCircle(10,10,10);
  that.graphics.endFill();
  that.alpha = 1;

  var length = function(){
    return Math.sqrt(that.vx * that.vx + that.vy * that.vy);
  };

  that.move = function(){
    that.angle = Math.atan2(window.my - that.y,window.mx - that.x);
    console.log(that.angle);
    gravity += 0.1;
    that.x += that.vx;
    that.vy += gravity;
    that.y += that.vy;
    if (that.y > canvas.height){
      that.removeMe = true;
    }
  };

  that.vx = window.mx - that.x;
  that.vy = window.my - that.y;
  // vx,vy の値を正規化する。
  that.normalize();
  // vx,vyを3倍する。
  // scaleで玉の勢いを変更する
  that.scale(40);
  return that;
};

