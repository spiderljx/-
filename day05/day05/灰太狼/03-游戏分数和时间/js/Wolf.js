class Wolf{
  constructor(){

    // 初始化狼图片
    this.initWolfImg();
    // 初始化数据
    this.initData();
  }
  initData(){
    // 游戏分数
    this.score = 0;
    // 正常状态  打击状态
    this.normal = 0;
    this.blow   = 1;
    this.state  = this.normal;
    // 狼的位置坐标
    this.positionArr = [
      { x: 170, y: 245 },
      { x: 50, y: 320 },
      { x: 45, y: 420 },
      { x: 70, y: 540 },
      { x: 200, y: 506 },
      { x: 330, y: 545 },
      { x: 320, y: 405 },
      { x: 305, y: 290 },
      { x: 200, y: 510 }
    ];
    // 狼的宽高
    this.wolfW = 108;
    this.wolfH = 101;
    // 狼图片下标
    this.wImgIndex = 0;
    // 狼播放的位置坐标的下标值 [0,this.positionArr.length-1] => [0,8] => 
    // this.wPindex = 0;
    // [0,1)*(this.positionArr.length-1) =>  [0,0.999*8=7.99...]
    this.wPindex = Math.ceil(Math.random()*(this.positionArr.length-1));
  }
  initWolfImg(){
    // this.wolfImg = document.createElement('img');
    // this.wolfImg.src = '../img/wolf/h0.png';
    var imgUrl = [
      '../img/wolf/h0.png',
      '../img/wolf/h1.png',
      '../img/wolf/h2.png',
      '../img/wolf/h3.png',
      '../img/wolf/h4.png',
      '../img/wolf/h5.png',

      '../img/wolf/h6.png',
      '../img/wolf/h7.png',
      '../img/wolf/h8.png',
      '../img/wolf/h9.png'
    ]
    this.wolfImgs = [];
    for(var i=0;i<imgUrl.length;i++){
      var img = document.createElement('img');
      img.src = imgUrl[i];
      this.wolfImgs.push(img);
    }
    // console.log(this.wolfImgs);
  }
  run(ctx){
    this.onDraw(ctx);
  }
  onDraw(ctx){
    ctx.drawImage(this.wolfImgs[this.wImgIndex],this.positionArr[this.wPindex].x,this.positionArr[this.wPindex].y,this.wolfW,this.wolfH);
    this.wImgIndex++;//this.wImgIndex = this.wImgIndex+1;
    switch(this.state){
      case this.normal:
        if(this.wImgIndex >= 6){
          this.wImgIndex = 0;
          // 播放完后再重新去随机位置下标
          this.wPindex = Math.ceil(Math.random()*(this.positionArr.length-1));
        }
        break;
      case this.blow:
        if(this.wImgIndex >= 9){
          this.wImgIndex = 0;
          // 播放完后再重新去随机位置下标
          this.wPindex   = Math.ceil(Math.random()*(this.positionArr.length-1));
          this.state     = this.normal;
        }
        break;
    }
  }
  canvasClick(clickX,clickY){
    // console.log(clickX,clickY);
    // != 不等于
    if(
      clickX >= this.positionArr[this.wPindex].x&&
      clickX <= this.positionArr[this.wPindex].x+this.wolfW&&
      clickY >= this.positionArr[this.wPindex].y&&
      clickY <= this.positionArr[this.wPindex].y+this.wolfH&&
      this.state != this.blow
    ){
      // console.log('打击到了');
      this.state = this.blow;
      this.wImgIndex = 6;
      this.score = this.score+10;
      // console.log(this.score);
    }
  }
}
/* 
  1.先把狼绘制到第一个位置坐标
  2.先让狼在第一个位置坐标动起来
  3.狼在第一个位置播放完了之后，下一次播放应该随机一个位置
*/