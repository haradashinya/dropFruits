
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
//      setInterval(function(){
//        window.clearPersistence(canvas);
//        gameObjectsFresh = [];
//        for(var i = 0, len = gameObjects.length; i < len;i++){
//          var obj = gameObjects[i];
//          obj.move();
//          obj.draw();
//          if (obj.removeMe == false){
//            gameObjectsFresh.push(obj);
//          }
//        }
//        gameObjects = gameObjectsFresh;
//
//      },30);




    },
    receivedEvent: function(id) {
      var canvas = document.getElementById("test");
      var ctx = canvas.getContext("2d");
      stage = new createjs.Stage(canvas);
      createjs.Touch.enable(stage);
      stage.enableMouseOver(10);

      var circle = new createjs.Shape();
      var t = new createjs.Text();
      t.text = "hello";
      t.x = 30;
      t.y = 220;
      circle.graphics.beginFill("#FF0000");
      circle.graphics.setStrokeStyle(3);
      circle.graphics.beginStroke("#0000FF");
      //円を描画
      // circleの中心点 50,420
      // drawCircle(originX,originY,radius);
      circle.graphics.drawCircle(50 + 10,420,50);
      circle.graphics.endFill();
      //shapeを表示
      stage.addChild(circle);

      // position the text on screen, relative to the stage coordinates:
      // fire tick method
      createjs.Ticker.setFPS(10);
      createjs.Ticker.useRAF = true;
      createjs.Ticker.addListener(stage);

      stage.onMouseMove = function(e){
        console.log(e);
      };



      // call update on the stage to make it render the current display list to the canvas:
      // setup stage
      stage.update();

      var cnt =0;
      stage.tick = function(){


        stage.update();
      };
























    }

};
