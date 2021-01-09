class GameView{
  constructor(){

    // 初始化地图
    this.initMap();
    // 初始化小矮人的类
    this.initGameMan();
  }
  initMap(){
    this.map = new GameMap();
  }
  initGameMan(){
    this.gameman = new GameMan();
  }
  run(ctx){
    // 绘制地图
    this.map.run(ctx);
    // 绘制小矮人
    this.gameman.run(ctx);
  }
}