var tom
var jerry
var tomImage1,tomImage2,tomImage3
var jerryImage1,jerryImage2,jerryImage3,jerryImage4
var backGround

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600,50,10)
tom.addAnimation("tomSleping",tomImage1)
tom.scale = 0.2
jerry = createSprite(200,600,50,50)
jerry. addAnimation("jerryStanding",jerryImage1)
jerry.scale =  0.15
}
function preload() {
    //load the images here
tomImage1 = loadAnimation("images/cat1.png")
tomImage2 = loadAnimation("images/cat2.png","images/cat3.png")
tomImage3 = loadAnimation("images/cat4.png")
jerryImage1 = loadAnimation("images/mouse1.png")
jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
jerryImage3 = loadAnimation("images/mouse4.png")
backGround = loadImage("images/garden.png")
}


function draw() {

    background(backGround);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x-jerry.x<(tom.width/2-jerry.width/2)){
        tom.velocityX = 0 
        tom.addAnimation("tom3",tomImage3)
        tom.x = 300
        tom.scale = 0.2 
        tom.changeAnimation ("tom3")
        jerry.addAnimation("jerry3",jerryImage3)
        jerry.scale = 0.15
        jerry.changeAnimation("jerry3")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    tom.velocityX = -5 
    tom.addAnimation("tomrunning",tomImage2)
    tom.changeAnimation("tomrunning")
    jerry.addAnimation("jerryteasing",jerryImage2)
    jerry.frameDelay = 25
    jerry.changeAnimation("jerryteasing")
}

}
