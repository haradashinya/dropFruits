var SoundManager = function(){
  var assetPath = "../../audio";
  var preload;
  var instance;
  var manifest = [
    {src:assetPath + "/background.mp3",id:"music"}
  ];





  var that = {
    handleLoadComplete:function(){
      console.log('called ');
      instance = createjs.SoundJS.play("music");

      console.log(instance);
    },
    handleProgress:function(){
      console.log("loading...");

    },
    setup:function(){
      preload = new createjs.PreloadJS();
      preload.onProgress = that.handleProgress;
      preload.onComplete = that.handleLoadComplete;
      preload.installPlugin(manifest);
      preload.loadManifest(manifest);
    },
    playBackground:function(){
      var el = document.getElementById("bg-audio");
      el.play();

    }

  };




  return that;
};