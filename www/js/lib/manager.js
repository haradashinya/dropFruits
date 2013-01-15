window.Manager =function(canvas,stage){
  var canvas = canvas;
  var that = {
    showGameOver: function(){
      var t = new createjs.Text();
      t.x = canvas.width/2;
      t.y = canvas.height/2 - 50;
      t.text = "GAME OVER";
      t.color = "red";
      t.font = "bold 36px serif";
      t.fontColor = "red";
      t.textAlign = "center";
      stage.addChild(t);
    }
  };


  return that;

};