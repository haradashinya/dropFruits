window.Manager =function(canvas,stage){
  var canvas = canvas;
  var gameOverText;
  var playButtonText;

  var addGameOverTitle = function(){
    gameOverText = new createjs.Text();
    gameOverText.x = canvas.width/2;
    gameOverText.y = canvas.height/2 - 50;
    gameOverText.text = "GAME OVER";
    gameOverText.color = "red";
    gameOverText.font = "bold 36px serif";
    gameOverText.textAlign = "center";
    stage.addChild(gameOverText);

  };

  var addPlayButton = function(){
    playButton = new createjs.Shape();
    playButton.graphics.beginFill("black").drawRect(canvas.width/2 - 100,canvas.height/2,200,50);
    playButton.opacity = 0.3;
    playButton.onPress = handlePlayButtonPress;
    playButtonText = new createjs.Text();
    playButtonText.text = "Play Again";
    playButtonText.x = canvas.width/2;
    playButtonText.y = canvas.height/2;
    playButtonText.color = "red";
    playButtonText.font = "bold 36px serif";
    playButtonText.textAlign = "center";
    stage.addChild(playButton);
    stage.addChild(playButtonText);
  };
  // reset by reload browser.
  var handlePlayButtonPress = function(e){
    stage.removeChild(playButtonText);
    stage.removeChild(playButton);
    stage.removeChild(gameOverText);
//    location.reload();


  };

  var that = {
    showGameOver: function(){
      console.log("called");
      addGameOverTitle();
      addPlayButton();
    }

  };


  return that;

};