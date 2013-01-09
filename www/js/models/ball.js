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

  console.log(that);
  return that;
};

var b= window.Ball();
