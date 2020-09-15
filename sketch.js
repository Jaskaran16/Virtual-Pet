//Create variables here
var dog,dogImage,dogImage2;
var database;
var foodS,foodstock;
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  dogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  dog = createSprite(250,300,150,150)
  dog.addImage(dogImage)
  dog.scale = 0.2
  foodstock = database.ref('Food')
  foodstock.on("value",readStock)
}


function draw() {  
background(255)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogImage2)
}
drawSprites();
stroke ("black")
text ("Food Remaining" + foodS,170,200)
text ("Press Up Arrow To Feed The Dog Some Milk",130,10)
}
function readStock (data){
foodS = data.val()
}
function writeStock(x){
if(x<=0){
x = 0
}
else{
x = x-1
}
database.ref('/').update({
Food:x
})
}