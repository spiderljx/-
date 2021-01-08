class Game
{
    constructor(width , height)
    {
        var gamecanvas = document.getElementById('gamecanvas');
        this.canvas = gamecanvas.getContext('2d');
        this.canvas.height = height;
        this.canvas.width = width;

    }

    Start()
    {
        
    }
}