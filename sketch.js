//Create variables here
var dog,happydog,database,foodS,foodstock;
var dogimage,happydogimage;
var Button,feed;
var bone,boneImg;
var full,fullImg;
var eat,empty,emptyImg;
var backgroundImg;
//var button=createButton("get food");
function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg1.png");
happydogimage=loadImage("images/dogImg.png");
boneImg=loadImage("images/Milk.png");
fullImg=loadImage("images/full.jpg");
emptyImg=loadImage("images/empty.jpg");
backgroundImg=loadImage("images/garden.jpg");
}

function setup() {
  createCanvas(1200, 800);
  database = firebase.database();
  var dog = database.ref('Food');
  //dogo.on("value", readPosition);
  dog=createSprite(1000,400,10,10);
  dog.addImage(dogimage);
  dog.scale=0.3;
  feed = createButton("ADD FOOD")
  feed.position(500,15);
  feed.mousePressed(addfood);
  eat=createButton("GIVE FOOD")
  eat.position(400,15);
  eat.mousePressed(givefood)
  bone=createSprite(500,500,1,1);
  
  full=createSprite(1000,600,1,1);

 // feed.mousePressed(FeedDog)
 // button.position(250,200);
 

}


function draw() {  
//dog.display();
  background(backgroundImg)
  drawSprites();
  //add styles here

}
function keyPressed(){
if(keyDown(LEFT_ARROW)){
  dog.velocityX=-4;
dog.addImage(happydogimage);
}
 if(keyDown(RIGHT_ARROW)){
  dog.velocityX=4;
  dog.addImage(happydogimage);
}
 if(keyDown(UP_ARROW)){
  dog.velocityY=-4;
  dog.addImage(happydogimage);
}
 if(keyDown(DOWN_ARROW)){
 dog.velocityY=4;
 dog.addImage(happydogimage);
}
if(keyCode === 32){
dog.velocityX=0;
dog.velocityY=0;
}
if(mousePressed(feed)){
bone.addImage(boneImg);
}
}
function addfood(){
bone.addImage(boneImg);
bone.scale=0.2;
dog.addImage(happydogimage);
}
function givefood(){

full.addImage(fullImg)
full.scale=0.1
bone.addImage(emptyImg);
}