
//c * Licensed to the Apache Software oloundation (ASF) under one
 //* or more contributor license agreements.  See the NOTICE file
 //* distributed with this work for additional information
 //* regarding copyright ownership.  The ASF licenses this file
 //* to you under the Apache License, Version 2.0 (the
 //* "License"); you may not use this file except in compliance
 //* with the License.  You may obtain a copy of the License at
 //*
 //* http:www.apache.org/licenses/LICENSE-2.0
 //*
 //* Unless required by applicable law or agreed to in writing,
 //* software distributed under the License is distributed on an
 //* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 //* KIND, either express or implied.  See the License for the
 //* specific language governing permissions and limitations
 //* under the License.
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("DOMContentLoaded",this.onDeviceReady,false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    run:function(){




    },
	receivedEvent: function(id) {
		var canvas = document.getElementById("test");
    var ctx = canvas.getContext("2d");



		var isIphone = true;
		if (isIphone){
			canvas.width = 320;
			canvas.height = 480;
		}else{
			// admobを使用するので、下半分にはる
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}


		stage = new createjs.Stage(canvas);
		createjs.Touch.enable(stage);
		stage.enableMouseOver(10);
		var circle = new createjs.Shape();
      var rec = new createjs.Shape( );
      rec.graphics.beginFill("red");
      rec.graphics.alpha = 0.1;
      rec.graphics.drawRoundRect(20,canvas.height - 50,30,30,15);
      window.Vec.apply(rec,[rec.x,rec.y]);
      var eye = new createjs.Shape();
      eye.graphics.beginFill("black");
      eye.graphics.setStrokeStyle(7);
      eye.graphics.beginStroke("white");
      eye.graphics.drawCircle(10,canvas.height - 50,7);
      rec.alpha = 1;
      var game = window.Game();
      game.state = "playing";


      game.enemies = [];
//      var enemy = Enemy(100,30);


      var currentSpeed = 1;
      var addEnemy = function(){
        currentSpeed += 0.2;
        for(var i = 0;i < 1;++i){
          var randY = Math.max(Math.floor(canvas.height * Math.random()) - 10,0);
          var enemy = Enemy(canvas.width + 30 + 80*i,randY);
          enemy.speed =currentSpeed;
          game.enemies.push(enemy);
          stage.addChild(enemy);
        }
      };
      addEnemy();
      circle.graphics.beginFill("#ffcccc");
      circle.graphics.drawCircle(0,canvas.height - 25,50);
      circle.graphics.endFill();
      //shapeを表示
      stage.addChild(circle);
      stage.addChild(rec);
      stage.addChild(eye);

      // position the text on screen, relative to the stage coordinates:
      // fire tick method
      createjs.Ticker.setFPS(50);
      createjs.Ticker.useRAF = false;
      createjs.Ticker.addListener(stage);

      stage.onMouseDown = function(e){
        if (game.state === "playing"){
          window.mx = e.stageX;
          window.my = e.stageY;
          var ball =  window.Ball(25,canvas.height -25);
          game.objects.push(ball);
          stage.addChild(ball);
        }

      };

      var sm = SoundManager();
      sm.playBackground();
      var isCollid = function(ball,enemy){
        if (!ball || !enemy) return;
        var vec = Vec(0,0);
        vec.vx = enemy.x - ball.x;
        vec.vy = enemy.y - ball.y;
        var distance = vec.length();
        if (distance < (ball.radius + enemy.radius) ){
          enemy.removeMe = true;
          return true;
        }
        return false;

      };

    window.manager = Manager(canvas,stage);

    var reset = function(){
      currentSpeed = 1;

    };



      // call update on the stage to make it render the current display list to the canvas:
      // setup stage
      stage.update();
      var cnt =0;



    var playingScene = function(){
      if (game.enemies.length > 0){
        var e = game.enemies[0];
        e.move();
        if (e.x < 15){
          stage.tick = gameOverScene;
        }
      }

      // if game.enemis doesn't exist , then add make more enemy
      if (game.enemies.length === 0){
        addEnemy();
      }

      for(var i= 0,l = game.objects.length; i < l;i++){
        //obj is instance of Ball;
        var obj = game.objects[i];
        if (obj.removeMe === true){
          game.objects.splice(i,1);
          stage.removeChild(obj);
          return ;
        }
        obj.move(eye);
        var e = game.enemies[0];
        if (isCollid(obj,e)){
          // init game.enemies.
          window.e = e;
          game.enemies = [];
          stage.removeChild(e);
        }
      }
      stage.update();
    };



    var gameOverScene = function(){
      game.state = "gameover";
      game.enemies = [];
      stage.removeChild(game.enemies[0]);
      stage.onMouseDown = null;
      manager.showGameOver();
      stage.update();
    };

    stage.init = function(){
      location.reload();
    };



      stage.tick = playingScene;
    }

};
