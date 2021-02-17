
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pc, prisonBed1, prisonBed2;
var pcImg, pcUpImg,pcUpWalk, pcDownImg,pcDownWalk, pcRightImg,pcRightWalk, pcLeftImg,pcLeftWalk;
var wall1, wall2, wall3;
var prisonBedImg, wallImg;
var floor1, floor2, floor3, floor4, floor5, floor6;
var floorImg;
var key, keyImg;


function preload()
{
	pcImg = loadAnimation("PCwalkingImages/PC.png");

	pcUpWalk = loadAnimation("PCwalkingImages/PCwalkingU1.png","PCwalkingImages/PCwalkingU2.png",
	"PCwalkingImages/PCwalkingU3.png");
	pcUpImg = loadImage("PCwalkingImages/PCwalkingU2.png");

	pcDownWalk = loadAnimation("PCwalkingImages/PCwalkingD1.png","PCwalkingImages/PCwalkingD2.png",
	"PCwalkingImages/PCwalkingD3.png");
	pcDownImg = loadImage("PCwalkingImages/PCwalkingD2.png");

	pcRightWalk = loadAnimation("PCwalkingImages/PCwalkingR1.png","PCwalkingImages/PCwalkingR2.png",
	"PCwalkingImages/PCwalkingR3.png");
	pcRightImg = loadImage("PCwalkingImages/PCwalkingR2.png");

	pcLeftWalk = loadAnimation("PCwalkingImages/PCwalkingL1.png","PCwalkingImages/PCwalkingL2.png",
	"PCwalkingImages/PCwalkingL3.png");
	pcLeftImg = loadImage("PCwalkingImages/PCwalkingL2.png");

	prisonBedImg = loadImage("PrisonImages/prisonBed.png");
	wallImg = loadImage("PrisonImages/prisonWall.jpg");
	floorImg = loadImage("PrisonImages/prisonFloor2.png");
	keyImg = loadImage("prisonImages/prisonKey.png");
	
}

function setup() {
	createCanvas(1000,500);
	engine = Engine.create();
	world = engine.world;

	
	

	for(var i = 30; i < 1000; i= i + 60){
		wall1 = createSprite(i,20,60,40);
		wall1.addImage(wallImg);
		wall1.scale = 0.1;
		wall2 = createSprite(i,62,60,40);
		wall2.addImage(wallImg);
		wall2.scale = 0.1;
		wall3 = createSprite(i,104,60,40);
		wall3.addImage(wallImg);
		wall3.scale = 0.1;
	}

	for(var i = 30; i < 1000; i= i + 60){
		
		floor1 = createSprite(i,157,60,40);
		floor1.addImage(floorImg);
		floor1.scale = 0.23;
		floor2 = createSprite(i,220,60,40);
		floor2.addImage(floorImg);
		floor2.scale = 0.23;
		floor3 = createSprite(i,283,60,40);
		floor3.addImage(floorImg);
		floor3.scale = 0.23;
		floor4 = createSprite(i,346,60,40);
		floor4.addImage(floorImg);
		floor4.scale = 0.23;
		floor5 = createSprite(i,409,60,40);
		floor5.addImage(floorImg);
		floor5.scale = 0.23;
		floor6 = createSprite(i,472,60,40);
		floor6.addImage(floorImg);
		floor6.scale = 0.23;
	}

	for(var i = 30; i < 300; i= i + 60){
		wall1 = createSprite(i,220,60,40);
		wall1.addImage(wallImg);
		wall1.scale = 0.1;
		wall2 = createSprite(i,262,60,40);
		wall2.addImage(wallImg);
		wall2.scale = 0.1;
		wall3 = createSprite(i,304,60,40);
		wall3.addImage(wallImg);
		wall3.scale = 0.1;
	}

	key = createSprite(60,330,50,50);
	key.addImage(keyImg);
	
	prisonBed1 = createSprite(65,115,100,50);
	prisonBed1.addImage(prisonBedImg);
	prisonBed1.scale = 0.45;

	prisonBed2 = createSprite(65,315,100,50);
	prisonBed2.addImage(prisonBedImg);
	prisonBed2.scale = 0.45;


	pc = createSprite(500,250,40,40);
	//pc.addAnimation("standing",pcImg);
	//pc.scale = 0.2;

	Engine.run(engine);

	
  
}


function draw() {
  	rectMode(CENTER);
  	background(200,200,200);
  

  	//adding PC functions
	if(keyDown("UP_ARROW")||keyDown("W")){
		pc.y = pc.y-2;
	}
	if(keyWentDown("UP_ARROW")||keyWentDown("W")){
		//pc.addImage(pcUpImg);
		pc.addAnimation("u",pcUpWalk);
		//pc.scale = 1;
	}
	else if(keyWentUp("UP_ARROW")||keyWentUp("W")){
		//pc.addAnimation("standing",pcImg);
		//pc.scale = 0.2;
	}

	
	if(keyDown("DOWN_ARROW")||keyDown("S")){
		pc.y = pc.y+2;
		//pc.addImage(pcDownImg);
		//pc.addAnimation("d",pcDownWalk);
		pc.scale = 1;
	}

	
	if(keyDown("RIGHT_ARROW")||keyDown("D")){
		pc.x = pc.x+2;
		//pc.addImage(pcRightImg);
		//pc.addAnimation("r",pcRightWalk);
		pc.scale = 1;
	}
	
	if(keyDown("LEFT_ARROW")||keyDown("A")){
		pc.x = pc.x-2;
		//pc.addImage(pcLeftImg);
		//pc.addAnimation("l",pcLeftWalk);
		pc.scale = 1;
	}

	
	




  	drawSprites();

	  if(pc.isTouching(prisonBed2)){
		textSize(15);
		fill(255);
		text("you have found the key",805,400);
	}
 
}



