class Game{
  constructor(){

    // 初始化画布
    this.initCanvas();
    // 初始化视图
    this.initView();
  }
  initCanvas(){
    var canvas    = document.getElementById('mycanvas');
    // 设置canvas宽高
    canvas.width  = this.width;
    canvas.height = this.height;
    // 获取绘制对象
    this.ctx = canvas.getContext('2d');
  }
  initView(){
    this.view = new GameView();
  }
  start(){
    setInterval(()=>{
      // console.log('start');
      this.view.run();
    },200)
  }
}