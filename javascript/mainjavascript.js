var bg = new Image();
bg.src = "img/baggrund.png";
function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;

    function Background(){
        this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
        this.render = function(){
            ctx.drawImage(bg, this.x--, 0);
            if(this.x <= -499){
                this.x = 0;
            }
        }
    }