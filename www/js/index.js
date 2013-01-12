
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
      // admobを使用するので、下半分にはる
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");
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


      game.enemies = [];
//      var enemy = Enemy(100,30);


      var addEnemy = function(){
        for(var i = 0;i < 5;++i){
          var enemy = Enemy(canvas.width + 30 + 80*i,30);
          game.enemies.push(enemy);
          stage.addChild(enemy);
        }
      };
      addEnemy();





      circle.graphics.beginFill("#ffcccc");
//      circle.graphics.setStrokeStyle(10);
//      circle.graphics.beginStroke("#ccc");
      //円を描画
      // circleの中心点 50,420
      // drawCircle(originX,originY,radius);
      circle.graphics.drawCircle(0,canvas.height - 25,50);
      circle.graphics.endFill();
      //shapeを表示
      stage.addChild(circle);
      stage.addChild(rec);
      stage.addChild(eye);





      // position the text on screen, relative to the stage coordinates:
      // fire tick method
      createjs.Ticker.setFPS(60);
      createjs.Ticker.useRAF = false;
      createjs.Ticker.addListener(stage);


      stage.onMouseMove = function(e){
      };


      stage.onMouseDown = function(e){
        window.mx = e.stageX;
        window.my = e.stageY;
        var ball =  window.Ball(25,canvas.height -25);
        game.objects.push(ball);
        stage.addChild(ball);
      };

      var isCollid = function(ball,enemy){
        if (!ball || !enemy) return;
        var vec = Vec(0,0);
        vec.vx = enemy.x - ball.x;
        vec.vy = enemy.y - ball.y;
        var distance = vec.length();
        if (distance < (ball.radius + enemy.radius) ){
          console.log("detect");
          return true;
        }
        return false;

      };


      // call update on the stage to make it render the current display list to the canvas:
      // setup stage
      stage.update();
      var cnt =0;
      stage.tick = function(){
        game.enemies.forEach(function(enemy){
          enemy.move();
        },this);




        for(var i= 0,l = game.objects.length; i < l;i++){
          //obj is instance of Ball;
          var obj = game.objects[i];
          if (obj.removeMe === true){
            game.objects.splice(i,1);
            stage.removeChild(obj);
            return ;
          }
          obj.move(eye);

          if (game.enemies.length ===0) continue;
          //ひとつのボールに対して、現在存在しているenemie全てに対して、どれかひとつ当たれば、そいつを消す。
          // あと、enemiyそれぞれを動かす。
          for  (var i2 = 0 ,l2 = game.enemies.length; i2< l2;i2++){
            var enemy = game.enemies[i2];
            if (isCollid(obj,enemy)){
              game.enemies.splice(i2,1);
              stage.removeChild(enemy);
            };
          }
        }







        stage.update();
      };
























    }

};
