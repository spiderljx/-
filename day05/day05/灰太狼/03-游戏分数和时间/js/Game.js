class Game{
  constructor(width,height){
    this.width  = width;
    this.height = height;
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

    var t = this;
    // 给canvas标签添加点击事件
    canvas.onclick = function(e){
      // console.log(e);
      var clickX = e.offsetX;
      var clickY = e.offsetY;
      // console.log(this);
      t.view.canvasClick(clickX,clickY);
    }
  }
  initView(){
    this.view = new GameView();
  }
  start(){
    setInterval(()=>{
      // console.log('start');
      this.view.run(this.ctx);
    },200)
  }
}