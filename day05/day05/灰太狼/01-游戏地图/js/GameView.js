class GameView{
  constructor(){

    // 初始化地图
    this.initMap();
  }
  initMap(){
    this.map = new GameMap();
  }
  run(ctx){
    // 绘制游戏地图
    this.map.run(ctx);
    // 绘制灰太狼

    // 绘制分数
  }
}