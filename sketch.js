
var waitimg
var play,how,playimg,howimg,back,backimg,reset,resetimg
var GameState="wait"
var bgimg

function preload(){
waitimg=loadImage("bg1.png")

bgimg= loadImage("logo.gif")
buttonimg=loadImage("button.png")


}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)

play=createImg("play1.png")
play.position(width/2,height-190)
play.size(200,200)

how=createImg("how1.png")
how.size(200,200)
how.position(play.x-200,height-190)


/*back=createImg("buttonplain.png")
back.position(play.x+200,height-200)
back.size(200,200)*/

/*reset=createImg("Reset.png")
reset.position(100,700)*/

logo=createSprite(windowWidth/2,windowHeight/2.75)
logo.addImage(bgimg)
logo.scale=2.5

}

function draw(){
background(waitimg)


drawSprites()
}