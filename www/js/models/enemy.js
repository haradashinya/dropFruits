window.Enemy = function(x,y){
  var that = Object.create(new createjs.Shape);
  that.radius = 30;
  that.x = x;
  that.y = y;
  that.speed = 1;
  that.removeMe = false;
  // inherit Vec
  Vec.apply(that,[x,y]);
//  that.graphics.beginFill("black");
//  that.graphics.drawCircle(0,0,that.radius);
  var colors = ["white","black","yellow","blue","#ffcccc"];
  var c = colors[0];
  that.graphics.setStrokeStyle(5).beginFill("white").beginStroke("black").drawCircle(0,0,that.radius).endStroke();
  that.graphics.setStrokeStyle(3).beginFill("black").beginStroke("white").drawCircle(-10,-10,5).endStroke();
  that.graphics.setStrokeStyle(3).beginFill("black").beginStroke("white").drawCircle(10,-10,5).endStroke();
  that.graphics.beginFill("red").drawCircle(0,15,10);




  that.normalize();
  // vx,vyを3倍する。
  // scaleで玉の勢いを変更する
  that.move = function(){
    // 正規化して、力を一定にする。
    that.normalize();
    that.x +=  -that.speed;
  };
  that.stop = function(){
    that.normalize();
    that.vx = 0;
  };
  return that;
};
