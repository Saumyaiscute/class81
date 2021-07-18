canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.strokeStyle="blue";

canvas.addEventListener("mmousedown", mymousedown);

function mymousedown(e){
    mouse_X=e.clientX-canvas.offsetLeft;

    mouse_Y=e.clientY-canvas.offsetTop;
    circle(mouse_X,mouse_Y)
}

function circle(mouse_X, mouse_Y){
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.arc(mouse_X, mouse_Y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
}