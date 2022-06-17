canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

rover_X=10;
rover_Y=10;

rover_img="rover.png";

rover_width=100;
rover_height=90;

img=["imgi0.jpeg","imgi1.jpg","imgi2.jpg","imgi3.jpg"]
random_number= Math.floor(Math.random()*4)
background_image = img[random_number]

function add(){
    bg_tag=new Image();
    bg_tag.onload=uploadBackground;
    bg_tag.src=background_image;

    ro_tag=new Image();
    ro_tag.onload=uploadRover;
    ro_tag.src=rover_img;
}
function uploadBackground(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(ro_tag,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
  var key_pressed=e.keyCode;
  console.log(key_pressed)
  if(key_pressed=='38'){
    console.log("up")
    up()
  }
  if(key_pressed=='39'){
    console.log("right")
    right()
  }
  if(key_pressed=='40'){
    console.log("down")
    down()
  }
  if(key_pressed=='37'){
    console.log("left")
    left()
  }
}
function up(){
  if(rover_Y > 0){
    rover_Y=rover_Y-10
    console.log(rover_Y)
    uploadBackground()
    uploadRover()
  }
}
function down() {
  if(rover_Y < 500){
     rover_Y=rover_Y+10
     console.log(rover_Y)
     uploadBackground()
     uploadRover()
  }
}
function left(){
  if(rover_X > 0){
     rover_X=rover_X-10
     console.log(rover_X)
     uploadBackground()
     uploadRover()
  }
}
function right(){
  if(rover_X < 700){
     rover_X=rover_X+10
     console.log(rover_X)
     uploadBackground()
     uploadRover()
  }
}