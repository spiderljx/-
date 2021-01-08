var maincanvas = document.getElementById('menu')

var canvas = maincanvas.getContext('2d')

var menubg = document.createElement('img')

menubg.src = '../imag/game_menu.jpg'

//0 menu
//1 game
//2 end
var state = 0;

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
                canvas.drawImage(gamebg,0,0,320,480)
                state = 1;

                new GameLogic();



            }
        }
    }
}


class GameLogic
{
    constructor()
    {
        // 启动计时器
        setInterval(this.run,16)
    }

    run()
    {
        console.log('game update');
    }


}