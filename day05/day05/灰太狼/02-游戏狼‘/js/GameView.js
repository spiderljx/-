class GameView{
  constructor(){

    // 初始化地图
    this.initMap();
    // 初始化狼
    this.initWolf();
  }
  initMap(){
    this.map = new GameMap();
  }
  initWolf(){
    this.wolf = new Wolf();
  }
  run(ctx){
    // 绘制游戏地图
    this.map.run(ctx);
    // 绘制灰太狼
    this.wolf.run(ctx);
    // 绘制分数
  }
  canvasClick(clickX,clickY){
    // console.log(clickX,clickY);
    this.wolf.canvasClick(clickX,clickY);
  }
}