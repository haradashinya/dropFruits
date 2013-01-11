var canvas;
var stage;
var t;
var shape;
var count = 0;
var rec;
window.sand = function(){
  var that = this;
  that.init = function(){
    console.log("init");
    canvas = document.getElementById("sand");
    stage = new createjs.Stage(canvas);
    var t = new createjs.Shape(
      new createjs.Graphics().beginFill("black").drawRect(10,10,10,10)
    );
    rec = window.Rectangle();
    stage.addChild(rec);
    stage.addChild(t);

    // we want to do some work before we update the canvas,
    // otherwise we could use Ticker.addListener(stage);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addListener(window);

  };


  return that;
};

  //find canvas and load images, wait for last image to load


var gravity = 0;
function tick() {
  gravity += 1;
  count++;
  rec.vx += 0.1;
  rec.x += rec.vx/rec.normalize();
  rec.vy = gravity;
  rec.y += rec.vy/rec.normalize();
  console.log(rec.normalize());


  // update the text:
  // update the stage:
  stage.update();
}
