 
var balloon 
var position
var Bg
var database

function preload(){
 Air1 = loadAnimation("Image2.png","Image3.png","Image4.png")
   Bg= loadImage("Image1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  balloon = createSprite(500,200,50,50)
   balloon.addAnimation("flying",Air1)
   var balloonposition= database.ref('balloon/position')
   balloonposition.on("value",readPosition,showError)
}

function draw() {
  background(Bg);
  
  
 textSize(20)
  text('press the keys in order to move balloons ',100,100)

   
  
 
 
// is for the balloon's movement
if(keyDown(LEFT_ARROW)){
 
   balloon.x= balloon.x-10
   }
   if(keyDown(RIGHT_ARROW)){
   
    balloon.x= balloon.x+10
    }
    if(keyDown(UP_ARROW)){
      
      balloon.scale= balloon.scale-.01
      balloon.x= balloon.x-10
      }
      if(keyDown(DOWN_ARROW)){
        balloon.scale= balloon.scale+.01
        balloon.x= balloon.x+10
        }
           // is for the  when you immediately click and the project
        if(position !== undefined){
          if(keyDown(LEFT_ARROW)){
              writePosition(-1,0);
          }
          else if(keyDown(RIGHT_ARROW)){
              writePosition(1,0);
          }
          else if(keyDown(UP_ARROW)){
              writePosition(0,-1);
          }
          else if(keyDown(DOWN_ARROW)){
              writePosition(0,+1);
          } 
        }
          
       
       drawSprites();
      
    }




// is used to coordinate the balloon to the right position in every tab
function readPosition(Data){
  position= Data.val()
  balloon.x= position.x
balloon.y= position.y
}
function writePosition (x,y){
  database.ref('balloon/position').set({
      'x':position.x+x,
      'y':position.y+y

  })
}

// 
function showError(){
  console.log("error")
}
