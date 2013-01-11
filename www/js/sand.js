var canvas = document.getElementById("test");
var ctx = canvas.getContext("2d");

var gameObj = function(x,y,radius,mass){
  var that = {
    x:x,
    y:y,
    vel: Vec(0,0),
    radius: radius,
    mass: mass,
    removeMe: false,
    move:function(){
      that.x += that.vel.vx;
      that.y += that.vel.vy;
      if (that.vel.vx < 0 && that.x < -50){
        that.x += canvas.width + 100;
      }else if (that.vel.vx > 0 && that.x > canvas.width + 50){
        that.x -= canvas.width + 100;
      }
      if (that.vel.vy < 0 && that.y < -50){
        that.y += canvas.height + 100;
      }else if (that.vel.vy > 0 && that.y > canvas.height + 50){
        that.y -= canvas.height + 100;
      }
    },
    draw:function(){
      return;
    }

  };
  return that;
};

var obstacle = function(x,y,radius){
  var that = gameObj(x,y,radius,radius);
  var randColor1 = Math.floor(Math.random() * 0xfffff);
  var randColor2 = Math.floor((randColor1 & oxfefefe)>>1).toString(16);
  randColor1 = randColor1.toString(16);
  randColor1 = '#000000'.sclie(0,7-randColor1.length) + randColor1;
  randColor2 = '#000000'.slice(0,7-randColor2.length) + randColor2;
  that.draw = function(){
    ctx.beginPath();
    var radgrad = ctx.createRadialGradient(that.x,that.y,radius,
     (that.x - (radius/4)),(that.y - (radius/4)),(radius/8));
    radgrad.addColorStop(0,randColor2);
    radgrad.addColorStop(1,randColor1);
    ctx.fillStyle = radGrad;
    ctx.arc(that.x,that.y,that.radius,0,Math.PI*2,true);
    ctx.fill();
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

  };
};



var rocket = function(x, y) {
  // mxとmy には、Canvas上のマウス座標を保存する
  var mx = 0,
    my = 0,
  // 初期の角度と推進ベクトルはゼロ
    angle = 0,
    thrust = Vec(0, 0),
  // gameObject は、半径15、質量15として初期化する
    that = gameObj(x, y, 15, 15),
  // 親オブジェクト(gameObject)のmove()メソッドの参照を保存し、
  // オーバーライドしたmove()メソッドの中で呼び出せるようにする
    move = that.move;

  // ロケットを描画するメソッド
  // Adobe IllustratorのAI->Canvas プラグインで生成した出力
  that.draw = function() {
    ctx.save();
    ctx.translate(that.x, that.y);
    ctx.rotate(angle);
    ctx.scale(0.5, 0.5);
    ctx.beginPath();
    ctx.moveTo(-49.5, -16.0);
    ctx.lineTo(-48.9, 16.5);
    ctx.bezierCurveTo(-10.0, 19.9, 32.4, 31.4, 68.3, -1.6);
    ctx.bezierCurveTo(31.3, -33.5, -10.9, -21.8, -49.5, -16.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fill();
    ctx.lineWidth = 6.0;
    ctx.lineJoin = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40.1, 5.6);
    ctx.bezierCurveTo(36.1, 5.7, 32.8, 2.5, 32.7, -1.4);
    ctx.bezierCurveTo(32.7, -5.3, 35.8, -8.6, 39.8, -8.7);
    ctx.bezierCurveTo(39.8, -8.7, 39.8, -8.7, 39.8, -8.7);
    ctx.bezierCurveTo(43.8, -8.7, 47.1, -5.6, 47.2, -1.6);
    ctx.bezierCurveTo(47.2, 2.3, 44.1, 5.6, 40.1, 5.6);
    ctx.bezierCurveTo(40.1, 5.6, 40.1, 5.6, 40.1, 5.6);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 127, 127)";
    ctx.fill();
    ctx.lineWidth = 3.6;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(19.7, 5.9);
    ctx.bezierCurveTo(15.7, 6.0, 12.4, 2.9, 12.4, -1.1);
    ctx.bezierCurveTo(12.3, -5.0, 15.5, -8.3, 19.5, -8.3);
    ctx.bezierCurveTo(19.5, -8.3, 19.5, -8.3, 19.5, -8.3);
    ctx.bezierCurveTo(23.5, -8.4, 26.7, -5.3, 26.8, -1.3);
    ctx.bezierCurveTo(26.9, 2.6, 23.7, 5.9, 19.7, 5.9);
    ctx.bezierCurveTo(19.7, 5.9, 19.7, 5.9, 19.7, 5.9);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-1.0, 6.3);
    ctx.bezierCurveTo(-4.9, 6.3, -8.2, 3.2, -8.3, -0.7);
    ctx.bezierCurveTo(-8.4, -4.7, -5.2, -7.9, -1.2, -8.0);
    ctx.bezierCurveTo(-1.2, -8.0, -1.2, -8.0, -1.2, -8.0);
    ctx.bezierCurveTo(2.8, -8.1, 6.1, -4.9, 6.2, -1.0);
    ctx.bezierCurveTo(6.2, 3.0, 3.0, 6.2, -0.9, 6.3);
    ctx.bezierCurveTo(-1.0, 6.3, -1.0, 6.3, -1.0, 6.3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-49.5, -16.0);
    ctx.lineTo(-68.3, -25.1);
    ctx.bezierCurveTo(-56.3, -31.0, -39.9, -37.8, -29.5, -35.3);
    ctx.bezierCurveTo(-22.7, -33.7, -14.5, -21.6, -14.5, -21.6);
    ctx.lineTo(-49.5, -16.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fill();
    ctx.lineWidth = 6.0;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-47.9, 16.4);
    ctx.lineTo(-66.4, 26.2);
    ctx.bezierCurveTo(-54.3, 31.7, -37.7, 38.0, -27.4, 35.2);
    ctx.bezierCurveTo(-20.6, 33.3, -12.8, 21.0, -12.8, 21.0);
    ctx.lineTo(-47.9, 16.4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };

  that.move = function() {
    var speed;
    // マウスポインタへの角度を計算する
    angle = Math.atan2(my - that.y, mx - that.x);
    // 推進ベクトルを現在の速度に加算する
    that.vel.add(thrust);
    speed = that.vel.length();
    // スピードが5を超えるときは、速度を抑える
    if (length > 5) {
      that.vel.normalize();
      that.vel.scale(5);
    }
    move();
  };

  // マウスボタンが押下されれば、推進する
  canvas.onmousedown = function(event) {
    // Create a vector from rocket postion in direction of mouse.
    thrust = Vec(mx - that.x, my - that.y);
    thrust.normalize(); // 単位ベクトルにする
    thrust.scale(0.1); // 大きさを0.1にする
  };

  // マウスボタンが離されれば、推進をなくす
  canvas.onmouseup = function(event) {
    thrust = vector2d(0, 0);
  };

  // Canvas上のマウス座標を保存する
  canvas.onmousemove = function(event) {
    var bb = canvas.getBoundingClientRect();
    mx = (event.clientX - bb.left);
    my = (event.clientY - bb.top);
  };

  return that;
};

