var maincanvas = document.getElementById('menu')

var canvas = maincanvas.getContext('2d')

var menubg = document.createElement('img')

menubg.src = '../imag/game_menu.jpg'

//0 menu
//1 game
//2 end
var state = 0;
var fps = 30;

menubg.onload = ()=>{
    canvas.drawImage(menubg,0,0,320,480)
    maincanvas.onclick= ()=>
    {
        if(state == 0)
        {
            console.log('开始游戏');
            canvas.clearRect(0,0,320,480)
            var gamebg = document.createElement('img')
            gamebg.src = '../imag/game_bg.jpg'
            gamebg.onload = ()=>{
               // canvas.drawImage(gamebg,0,0,320,480)
                state = 1;
                console.log('test');
            //    new GameLogic();
                //canvas.clearRect(0,0,320,480)
                var im = document.createElement("img")
                im.src = '../imag/progress.png'
                canvas.drawImage(im,100,100)


            }
        }
    }
}


class GameLogic
{
    constructor()
    {
        // 启动计时器
        this.isRunning = false;
        var wolf1 = new Wolf(0,3);
        wolf1.Show(0,0,100,100)
        console.log('game start')

        //gameInit();
       // gameUpdate(true);
    }
    
    gameInit()
    {
        // 初始化洞口的位置

        // 加载狼的资源

        // test
        var wolf1 = new Wolf(0,3);


    }

    gameUpdate(state)
    {
        if(state && !this.isRunning)
        {
            this.timer =setInterval(this.run,1000/fps)
            this.isRunning = true;
        }else
        {
            clearInterval(this.timer);
            this.isRunning = false;
        }
    }

    run()
    {
        console.log('game update');
    }


}


class Wolf
{
    constructor(wolftype,staytime)
    {
        // 0 灰太狼
        // 1 小灰灰
        this.wolfType = wolftype
        this.stayTime = staytime

        // 初始化资源
        this.loadRes();
    }

    loadImg(imgname)
    {
        var str;
        switch(this.wolfType)
        {
            case 0:
                str = 'h'
            break
            case 1:
                str = 'x'
            break
        }
        var img = document.createElement("img")
        img.src = '../imag/wolf/'+str+imgname + ".png"
        //console.log('../imag/wolf/'+str+imgname + ".png")
        return img
    }

    loadRes()
    {
        this.ShowHideImges = [this.loadImg('0'),this.loadImg('1'),
                            this.loadImg('2'),this.loadImg('3'),this.loadImg('4'),this.loadImg('5')]
        this.HitImages = [this.loadImg('6'),this.loadImg('7'),this.loadImg('8'),this.loadImg('9')]

    }

    Show(x,y,width,height)
    {

        canvas.clearRect(0,0,320,480)
        var img = document.createElement("img")
        img.src = '../imag/progress.png'
        canvas.drawImage(img,x,y,200,200)


/*
        var index = 0;
        this.showTimer = setInterval(()=>{
            this.ShowHideImges[index].onload=function(){
                
                canvas.drawImage(ShowHideImges[index],x,y,width,height)
                index++;
                if(index >= this.ShowHideImges.length)
                {
                    clearInterval(this.showTimer)
                }
                console.log(index)          
            }
            console.log('show');
        },500);
        */
        
    }

    Hide()
    {

    }

    Hit()
    {

    }
}


