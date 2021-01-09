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
    var canvas    = document.getElementById('mycanvas');
    // 设置canvas宽高
    canvas.width  = this.width;
    canvas.height = this.height;
    // 获取绘制对象
    this.ctx = canvas.getContext('2d');

    window.onkeydown = function(e){
      console.log(e);
      switch(e.keyCode){
        case 37://往左
          
          break;
        case 38://往上
          
          break;
        case 39://往右
          
          break;
        case 40://往下
          
          break;
      }
    }
  }
  initView(){
    this.view = new GameView();
  }
  start(){
    setInterval(()=>{
      this.view.run(this.ctx);
    },200)
  }
}