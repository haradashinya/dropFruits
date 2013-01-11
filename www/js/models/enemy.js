window.Enemy = function(x,y){
  var that = Object.create(new createjs.Shape);
  // inherit Vec
  Vec.apply(that,[x,y]);
  that.graphics.beginFill("black");
  that.graphics.drawCircle(x,y,30);
  return that;
};