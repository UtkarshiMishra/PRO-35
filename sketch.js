var dog
var happyDog
var database
var foodS
var foodStock
var doggy
var firebase

function preload()
{
  dog = loadImage ("images/dogImg.png");
  happydog = loadImage ("images/dogImg1.pmg")
}

function setup() {
	createCanvas(500,500);
  
    database = firebase.database();
    console.log(database);

    doggy = createSprite (250,350,50,50)
    doggy.addImage(dog);

    foodStock = database.ref("food")
    foodStoke.on("value",readStoke)
}


function draw() {  
  background(46,139,87)
 
  //if (keyDown(UP_ARROW)) {
    //changeStoke()
 // }

  //if(keyWentDown(UP_ARROW)) {
    //writeStroke(foodS);
    //doggy.addImage(dogHappy)
  //}

  drawSprites();
  //add styles here
  text("PRESS UP_ARROW KEY TO FEED DRAGO MILK");
  fill("blue");
  textSize(20);
  stroke(3);

}


