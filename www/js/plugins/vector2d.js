window.Vector2d = function(x,y){
  var vec = {
    vx:x,
    vy:y,

    scale:function(scale){
      vec.vx *= scale;
      vec.vy *= scale;
    },

    add:function(vec2){
      vec.vx += vec2.vx;
      vec.vy += vec2.vy;
    },
    sub: function(vec2){
      vec.vx -= vec2.vx;
      vec.vy -= vec2.vy;
    },
    /**
     * restore vector
     * ベクトルを逆向きにする
     */
    negate:function(){
      vec.vx = -vec.vx;
      vec.vy = -vec.vy;
    },
    /**
     * return length of vector
     * @return {Number}
     */
    length:function(){
      return Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
    },
    /**
     * 単位長のベクトルにする。
     * return normalized vector.
     * @return {Number}
     */
    normalize:function(){
      var len = this.length();
      if (len){
        vec.vx /= len;
        vec.vy /= len;
      }
      return len;
    },
    /**
     * ラジアン単位で指定した角度だけベクトルを回転する。
     * rotate vector
     * @param angle
     */
    rotate:function(angle){
      var vx = vec.vx;
      var vy = vec.vy;
      var cosVal = Math.cos(angle);
      var sinVal = Math.sin(angle);
      vec.vx = vx * cosVal - vy * sinVal;
      vec.vy = vx * sinVal + vy * cosVal;
    },
    log:function(){
      return '(' + vec.vx.toFixed(3) + ',' + vec.vy.toFixed(3) + ')';
    }
    };
  return vec;

};


// for prototype inheritance.
window.Vec = function(x,y){
  this.vx = x;
  this.vy = y;
  this.length = function(){
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  };
  this.normalize = function(){
    var len = this.length();
    if (len){
      this.vx /= len;
      this.vy /= len;
    }
    return len;
  };
  return this;
};




