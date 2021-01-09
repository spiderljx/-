class GameMap{
  constructor(){

    // 初始化地图图片
    this.initMapImg();
  }
  initMapImg(){
    // 创建图片
    this.mapImg = document.createElement('img');
    this.mapImg.src = './img/bg.jpg';
  }
  run(ctx){
    this.onDraw(ctx);
  }
  onDraw(ctx){
    // 绘制地图
    ctx.drawImage(this.mapImg,0,0,500,500);
  }
}