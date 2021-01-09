class GameMan{
  constructor(){

    // 初始化小矮人图片
    this.initImg();
    // 初始化数据
    this.initData();
  }
  initData(){
    this.manW = 160/4;
    this.manH = 260/4;
    this.cutX = 0;
    this.cutY = 2*this.manH;
    this.x    = 0;
    this.y    = 0;
    this.direction = 0;
  }
  initImg(){
    // 创建图片
    this.manImg = document.createElement('img');
    this.manImg.src = './img/DMMban.png';
  }
  run(ctx){
    this.onDraw(ctx);
  }
  onDraw(ctx){
     // 绘制
     // ctx.drawImage(img,0,2*260/4,160/4,260/4,0,0,160/4,260/4);
    //  var manW = 160/4;
    //  var manH = 260/4;
    //  var cutX = 0;
    //  var cutY = 2*manH;
    //  var x    = 0;
    //  var y    = 0;
    //  var direction = 0;//默认为0，默认往右手边走
    //  setInterval(()=>{
       // 清除画布 ctx.clearRect(x,y,width,height);
      //  ctx.clearRect(0,0,500,500);
      //  var map = new GameMap();
      //  map.run(ctx);
       switch(this.direction){
         case 0://往右
           ctx.drawImage(this.manImg,this.cutX,this.cutY,this.manW,this.manH,this.x,this.y,this.manW,this.manH);
           this.x = this.x + 4;
           // 判断是否撞墙(右边墙)，如果撞墙了就改变走向
           if(this.x > 500-this.manW){
            this.direction = 1;
             // 撞墙了改变裁剪的y坐标
             this.cutY      = 1*this.manH;
           }
           break;
         case 1://往左
           ctx.drawImage(this.manImg,this.cutX,this.cutY,this.manW,this.manH,this.x,this.y,this.manW,this.manH);
           this.x = this.x - 4;
           // 判断是否撞墙（左边墙），如果撞墙了就改变走向
           if(this.x<=0){
            this.direction = 0;
             // 撞墙了改变裁剪的y坐标
             this.cutY      = 2*this.manH;
           }
           break;
         case 2://往下
           ctx.drawImage(this.manImg,this.cutX,this.cutY,this.manW,this.manH,this.x,this.y,this.manW,this.manH);
           this.y = this.y+4;
           if(this.y>500-this.manH){
            this.direction = 3;
            this.cutY      = 3*this.manH;
           }
           break;
         case 3://往上
           ctx.drawImage(this.manImg,this.cutX,this.cutY,this.manW,this.manH,this.x,this.y,this.manW,this.manH);
           this.y = this.y-4;
           if(this.y<=0){
            this.direction = 2;
            this.cutY      = 0*this.manH;
           }
           break;
       }

       this.cutX = this.cutX+this.manW;
       if(this.cutX == 160){
         this.cutX = 0;
       }
    //  },200)

    //  window.onkeydown = function (e) {
    //   console.log(e);
    //   switch(e.keyCode){
    //     case 37://往左
    //       this.direction = 1;
    //       this.cutY      = 1*this.manH;
    //       break;
    //     case 38://往上
    //       this.direction = 3;
    //       this.cutY      = 3*this.manH;
    //       break;
    //     case 39://往右
    //       this.direction = 0;
    //       this.cutY      = 2*this.manH;
    //       break;
    //     case 40://往下
    //       this.direction = 2;
    //       this.cutY      = 0*this.manH;
    //       break;
    //   }
    // }
  }
}