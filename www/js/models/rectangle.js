var F = function(){

};

window.Rectangle = function(){
  var that = new createjs.Shape(
    new createjs.Graphics().beginFill("black").drawRect(30,30,30,30)
  );
  window.Vec.apply(that,[that.x,that.y]);


  return that;
};