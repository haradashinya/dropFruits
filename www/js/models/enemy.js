window.Enemy = function(x,y){
  var that = Object.create(new createjs.Shape);
  that.radius = 30;
  that.x = x;
  that.y = y;
  that.speed = 1;
  // inherit Vec
  Vec.apply(that,[x,y]);
  that.graphics.beginFill("black");
  that.graphics.drawCircle(0,0,that.radius);

  that.normalize();
  // vx,vyを3倍する。
  // scaleで玉の勢いを変更する
  that.move = function(){
    // 正規化して、力を一定にする。
    that.normalize();
    that.x +=  -that.speed;
  };
  return that;
};