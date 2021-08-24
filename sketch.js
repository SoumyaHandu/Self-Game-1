var lander, background;
var posX = 0;
var posY = 0;
var landerImg;
var backgroundImg;
var invisibleBg;

function preload() {

landerImg = loadImage("normal.png"); 
backgroundImg = loadImage("bg_sur.png");
}

function setup() {
createCanvas(1000,1000);  

lander = createSprite(100,50,10,10);
lander.addImage(landerImg);
lander.scale = 0.1;
lander.setCollider("rectangle",0, 0, 200, 200);
invisibleBg = createSprite(100,600,50,50);
invisibleBg.visible = false;
rectMode(CENTER);
textSize(15);
}

function draw() {
background(60);
image(backgroundImg,0,0)
push()
fill(255);
text("VERTICAL VELOCITY: " + posY, 800, 100);

pop()

posY = posY + 2;
lander.position.y = posY;

if(lander.bounceOff(invisibleBg)) 
{velocityY = 0
}

drawSprites();
}