class GameView{
  constructor(){

    // 初始化地图
    this.initMap();
    // 初始化狼
    this.initWolf();
    // 初始化时间
    this.initTime();
  }
  initMap(){
    this.map = new GameMap();
  }
  initWolf(){
    this.wolf = new Wolf();
  }
  initTime(){
    this.time = new GameTime();
  }
  run(ctx){
    // 绘制游戏地图
    this.map.run(ctx);
    // 绘制灰太狼
    this.wolf.run(ctx);
    // 绘制分数
    ctx.font = '30px 微润雅黑';
    ctx.fillStyle = '#E49401';
    ctx.fillText(this.wolf.score,110,48);
    // 绘制时间图片
    this.time.run(ctx);
  }
  canvasClick(clickX,clickY){
    // console.log(clickX,clickY);
    this.wolf.canvasClick(clickX,clickY);
  }
}