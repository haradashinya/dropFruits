window.Enemy = function(x,y){
  var that = Object.create(new createjs.Shape);
  that.radius = 30;
  that.x = x;
  that.y = y;
  // inherit Vec
  Vec.apply(that,[x,y]);
  that.graphics.beginFill("black");
  that.graphics.drawCircle(0,0,that.radius);

  that.normalize();
  // vx,vyを3倍する。
  // scaleで玉の勢いを変更する
  that.scale(40);
  return that;
};