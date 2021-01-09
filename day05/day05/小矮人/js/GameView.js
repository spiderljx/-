class GameView{
  constructor(){

    // 初始化地图
    this.initMap();
    // 初始化小矮人
    this.initMan();
  }
  initMap(){
    this.map = new GameMap();
  }
  initMan(){
    this.man = new GameMan();
  }
  run(ctx){
    console.log('开始运行游戏');
    // 绘制地图
    this.map.run(ctx);
    // 绘制小矮人
    this.man.run(ctx);
  }
}