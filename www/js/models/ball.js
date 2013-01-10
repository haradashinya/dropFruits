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
  var that = Object.create(new createjs.Shape());
  var vec  = window.Vector2d();
  that.rotate = function(){
  };

  that.type = "dynamic" ;
  that.graphics.beginFill("#ff0000");
  that.graphics.drawCircle(10,10,10);
  that.graphics.endFill();
  return that;
};

var b= window.Ball();
