canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    bg_image=new Image();
    bg_image.onload=uploadbackground;
    bg_image.src=background_image;
    rv_image=new Image();
    rv_image.onload=uploadrover;
    rv_image.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(bg_image, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rv_image, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
var key_pressed=e.keyCode;
console.log(key_pressed);
if(key_pressed=='38'){
    up();
    console.log("up");
}
if(key_pressed=='40'){
    down();
    console.log("down");
}
if(key_pressed=='37'){
    left();
    console.log("left");
}
if(key_pressed=='39'){
    right();
    console.log("right");
}
}




