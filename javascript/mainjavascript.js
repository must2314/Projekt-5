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
var background = new Background();

    function animate(){
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        // Start drawing here
        background.render();
        ctx.fillStyle = "purple";
        ctx.fillRect(5,5,2,2); //firkant er så lille man ikke kan se de//
        // End drawing here
        ctx.restore();
    }
    var animateInterval = setInterval(animate, 30);
}
window.addEventListener('load', function(event) {
    initCanvas();
});

//-------- Alert-pop up ---------//




// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
