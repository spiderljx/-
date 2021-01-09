class Game{
  constructor(width,height){
    this.width  = width;
    this.height = height;

    // 初始化视图
    this.initView();
    // 初始化画布
    this.initCanvas();
  }
  initCanvas(){
    var canvas = document.getElementById('mycanvas');
    // js设置画布宽高
    canvas.width  = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d'); 

    // console.log(this);
    var t = this;
    window.onkeydown = function (e) {
      console.log(e);
      switch(e.keyCode){
        case 37://往左
          // this.direction = 1;
          // this.cutY      = 1*this.manH;
          // console.log(t);
          // console.log(t.view);
          t.view.gameman.direction = 1;
          t.view.gameman.cutY = 1*t.view.gameman.manH;
          break;
        case 38://往上
          // this.direction = 3;
          // this.cutY      = 3*this.manH;
          t.view.gameman.direction = 3;
          t.view.gameman.cutY = 3*t.view.gameman.manH;
          break;
        case 39://往右
          // this.direction = 0;
          // this.cutY      = 2*this.manH;
          t.view.gameman.direction = 0;
          t.view.gameman.cutY = 2*t.view.gameman.manH;
          break;
        case 40://往下
          // this.direction = 2;
          // this.cutY      = 0*this.manH;
          t.view.gameman.direction = 2;
          t.view.gameman.cutY = 0*t.view.gameman.manH;
          break;
      }
    } 
  }
  initView(){
    this.view = new GameView();
  }
  start(){
    // console.log('start')
    this.run();
  }
  run(){
    // this.view.run(this.ctx);
    setInterval(()=>{
      this.ctx.clearRect(0,0,500,500);
      this.view.run(this.ctx);
    },200)
  }
}