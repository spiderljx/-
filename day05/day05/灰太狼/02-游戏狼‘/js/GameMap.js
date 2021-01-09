class GameMap{
  constructor(){

    // 初始化地图图片
    this.initMapImg();
  }
  initMapImg(){
    // 创建地图图片
    this.mapImg = document.createElement('img');
    this.mapImg.src = '../img/game_bg.jpg';
  }
  run(ctx){
    this.onDraw(ctx);
  }
  onDraw(ctx){
    ctx.drawImage(this.mapImg,0,0,480,800);
  }
}