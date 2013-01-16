var SoundManager = function(){
  var assetPath = "../../audio";
  var preload;
  var instance;
  var manifest = [
    {src:assetPath + "/background.mp3",id:"bg-audio"},
    {src:assetPath + "/shot.mp3",id:"shot-audio"}
  ];




  preload = new createjs.PreloadJS();
  //Install SoundJS as a plugin, then PreloadJS will initialize it automatically.
  preload.installPlugin(createjs.SoundJS);

  //Available PreloadJS callbacks
  preload.onFileLoad = function(event) {
  };
  preload.onComplete = function(event) {
    console.log("done");
  };

  //Load the manifest and pass 'true' to start loading immediately. Otherwise, you can call load() manually.
  preload.loadManifest(manifest, true);


  var div = document.getElementById(event.id);


  var that = {
    handleLoadComplete:function(){
      console.log('called ');
      instance = createjs.SoundJS.play("music");

      console.log(instance);
    },
    handleProgress:function(){
      console.log("loading...");

    },
    playBackground:function(){
//      var instance = createjs.SoundJS.play("bg-audio",createjs.SoundJS.INTERRUPT_NONE,0,0,false,1);
    },
    playShotSound:function(){
      var audio = document.getElementById("shot-audio");
      audio.load();
      audio.play();
    }

  };




  return that;
};