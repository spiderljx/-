class GameTime{
  constructor(){

    // 初始化时间图片
    this.initTimeImg();

    this.timeW = 270;
  }
  initTimeImg(){
    this.timeImg = document.createElement('img');
    this.timeImg.src = '../img/progress.png';
  }
  run(ctx){
    this.onDraw(ctx)
  }
  onDraw(ctx){
    ctx.drawImage(this.timeImg,94,110,this.timeW,28);
    this.timeW = this.timeW - 10;
    if(this.timeW < 0){
      // 弹框
      // alert('Game Over');
      console.log('Game Over');
      // 时间结束跳转页面
      // window.location.href = './index.html';
      window.location.href = '../../小矮人/index.html';
    }
  }
}