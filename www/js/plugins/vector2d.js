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
  this.friction = 0.9;
  this.scale = function(scale){
    this.vx *= scale;
    this.vy *= scale;
  };

  this.rotate = function(angle){
    var vx = this.vx;
    var vy = this.vy;
    var cosVal = Math.cos(angle);
    var sinVal = Math.sin(angle);
    this.vx = vx * cosVal - vy * sinVal;
    this.vy = vx * sinVal + vy * cosVal;
  };

  this.add = function(vec2){
    this.vx += this.vx;
    this.vy += this.vy;
  };
  this.sub =  function(vec2){
    this.vx -= this.vx;
    this.vy -= this.vy;
  };
  this.negate = function(){
    this.vx = -this.vx;
    this.vy = -this.vy;
  };




  return this;
};




