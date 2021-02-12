var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invisibleLine1;
var invisibleLine2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	invisibleLine1 = createSprite(695,350,5,800);
	invisibleLine1.visible = false;

	invisibleLine2 = createSprite(650,510,50,5);
	invisibleLine2.visible = false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  
  if(fairy.isTouching(invisibleLine1)){
	star.y=star.y+3;
  }
  if(star.isTouching(invisibleLine2)&&star.bounceOff(invisibleLine2)){
	star.y=star.y+0;
  }
  
  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("right")){
		fairy.x=fairy.x+5;
	  }
	  if(keyDown("left")){
		fairy.x=fairy.x-5;
	  }

}
