var fixed_circle, moving_circle;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixed_circle = createSprite(200,200,50,100);
  moving_circle = createSprite(200,200,400, 400);
  
  moving_circle.shapeColor = "orange";
  fixed_circle.shapeColor = "orange";
  
}

function draw() {
  background(255,255,255);  

  console.log(moving_circle.x - fixed_circle.x);
  if (moving_circle.x - fixed_circle.x < fixed_circle.width/2 + moving_circle.width/2
    && fixed_circle.x - moving_circle.x < fixed_circle.width/2 + moving_circle.width/2
    && fixed_circle.y - moving_circle.y < fixed_circle.height/2 + moving_circle.height/2
    && moving_circle.y - fixed_circle.y < fixed_circle.height/2 + moving_circle.height/2
    ){
    moving_circle.shapeColor = "blue";
  fixed_circle.shapeColor = "green";
  }
  else{
    if mouseClicked(fixed_circle){
    moving_circle.shapeColor = "green";
    fixed_circle.shapeColor = "blue";
    var fixed_circle, moving_circle;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixed_circle = createSprite(200,200,50,50);
  moving_circle = createSprite(300,200, 50,50);
  
  moving_circle.shapeColor = "orange";
  fixed_circle.shapeColor = "orange";
  
}

function draw() {
  background(255,255,255);  
  fixed_circle.x = random.mouseX;
  fixed_circle.y = random.mouseY;
  moving_circle.x = random.mouseX;
  moving_circle.y = random.mouseY;
  console.log(moving_circle.x - fixed_circle.x);
  if (moving_circle.x - fixed_circle.x < fixed_circle.width/2 + moving_circle.width/2
    && fixed_circle.x - moving_circle.x < fixed_circle.width/2 + moving_circle.width/2
    && fixed_circle.y - moving_circle.y < fixed_circle.height/2 + moving_circle.height/2
    && moving_circle.y - fixed_circle.y < fixed_circle.height/2 + moving_circle.height/2
    ){
    moving_circle.shapeColor = "blue";
  fixed_circle.shapeColor = "orange";
  }
  else{
   if mouseClicked(fixed_circle){
    moving_circle.shapeColor = "orange";
    fixed_circle.shapeColor = "blue";
   }
  }
  

  drawSprites();
}
  }
  

  drawSprites();
}