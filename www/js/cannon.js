var Cannon = function(x,y,canvas){
  var ctx = canvas.getContext("2d");
  var mx = 0;
  var my = 0;
  var angle =0;
  var that = {
    x: x,
    y: y,
    angle: 0,
    removeMe: false,
    move:function(){
      angle = Math.atan2(my - that.y,mx - that.x);
      console.log(that.x);
    },
    draw:function(){
    }
  };

  canvas.onmousedown = function(e){
    var vec = Vector2d(mx - that.x,my - that.y);
    vec.normalize();
    vec.scale(25);
  };
  canvas.onmousemove = function(e){
    var bb = canvas.getBoundingClientRect();
    mx = (event.clientX - bb.left);
    my = (event.clientY - bb.top);
  };

  return that;

};