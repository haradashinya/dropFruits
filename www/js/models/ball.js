/**
 * 発射するボール
 * @param x
 * @param y
 * @param vector
 * @param canvas
 * @return {{}}
 * @constructor
 */

window.Ball = function(x,y,canvas,vector){
  var gravity = 0,
    that = {
      x: x,                       // 初期 x座標
      y: y,                       // 初期 y座標
      removeMe: false,            // 削除フラグ

      // move() メソッドは座標と速度を更新し、
      // 弾丸が地面に着いたかどうか判定する
      move: function() {
        vector.vy += gravity;   // 垂直速度として重力成分を足す
        gravity += 0.1;         // 重力成分を増やす
        that.x += vector.vx;    // 速度を座標に足し合わせる
        that.y += vector.vy;

        // 弾丸が地面についたら、削除フラグを立てる
        if (that.y > canvas.height - 150) {
          that.removeMe = true;
        }
      },

      // draw()メソッドは、弾丸の座標を中心に塗り潰し円を描画する。
      draw: function() {

      }
    };
  return that;

};