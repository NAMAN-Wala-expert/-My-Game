var bg,bullet,bullet1,coins,bg_img;
var player1,player2;
var p1_img,p2_img;
var bullet_img,con_img;
var bullet1Group,bulletGroup;
var lives =3,life_img,life1,life2;
var PLAY=1;
var gameState=PLAY;
var END=0;
var boom,bm_img,boom1;
var bullet_1,bullet1_1,bullet_2,bullet1_2,bullet1_3,bullet1_4;
var win,win_img,lose,lose_img;





function preload()
{
  bullet_img = loadImage("bullet.png");
  p1_img = loadImage("plane.png");
  p2_img = loadImage("opponent.png");
  con_img = loadImage("coins.png");
  life_img = loadImage("life.png") 
  bg_img = loadImage("night sky.png");
  bm_img = loadImage("boom-removebg-preview.png");
  win_img = loadImage("win.jpeg");
  lose_img = loadImage("lose.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //frameRate(80);


  bg = createSprite(windowWidth/2,windowHeight/2-8);
  bg.addImage(bg_img);
  bg.scale = 1.5;

  player1 = createSprite(1250,windowHeight/2,30,30);
  player1.addImage(p1_img);
  player1.scale = 0.5;
  player1.rotation=-90;
  //player1.debug=true;

  player2 = createSprite(100,random(100,500),30,30);
  player2.addImage(p2_img);
  player2.scale = 0.5;
  player2.rotation=90;
  //player2.debug=true;

  life = createSprite(1240,50,30,30);
  life.addImage(life_img);
  life.scale = 0.09;

  life1 = createSprite(1280,50,30,30);
  life1.addImage(life_img);
  life1.scale = 0.09;

  life2 = createSprite(1200,50,30,30);
  life2.addImage(life_img);
  life2.scale = 0.09;

  boom = createSprite(1240,player1.y,30,30);
  boom.addImage(bm_img);
  boom.scale = 0.9;
  boom.visible=false;

  boom1 = createSprite(100,player2.y,30,30);
  boom1.addImage(bm_img);
  boom1.scale = 0.9;
  boom1.visible=false;

  win = createSprite(windowWidth/2,windowHeight/2,130,130);
  win.addImage(win_img);
  win.scale = 0.9;
  win.visible=false;

  lose = createSprite(windowWidth/2,windowHeight/2,130,130);
  lose.addImage(lose_img);
  lose.scale = 0.9;
  lose.visible=false;




 

  bulletGroup = new Group();
  bullet1Group = new Group();

  

  




  



  //rectMode(CENTER);
  //textSize(15);
}

function draw() 
{
  background(51);



  //player2.y =player1.y;

  if (gameState===PLAY) {
    if (keyDown("SPACE") )  {
      bullet = createSprite(1250,player1.y,30,30);
      bullet.addImage(bullet_img);
      bullet.scale = 0.1;
      bullet.visible=true;
      bullet.rotation=-90;
      bullet.velocityX=-20;
      //bullet.debug=true;
      bulletGroup.add(bullet); 

      bullet_1 = createSprite(1250,player1.y-25,30,30);
      bullet_1.addImage(bullet_img);
      bullet_1.scale = 0.1;
      bullet_1.visible=true;
      bullet_1.rotation=-90;
      bullet_1.velocityX=-20;
      //bullet_1.debug=true;
      bulletGroup.add(bullet_1); 

      bullet_2 = createSprite(1250,player1.y+25,30,30);
      bullet_2.addImage(bullet_img);
      bullet_2.scale = 0.1;
      bullet_2.visible=true;
      bullet_2.rotation=-90;
      bullet_2.velocityX=-20;
      //bullet_2.debug=true;
      bulletGroup.add(bullet_2); 
  
      bullet1 = createSprite(100,player2.y,30,30);
      bullet1.addImage(bullet_img);
      bullet1.scale = 0.1;
      bullet1.visible=true;
      bullet1.rotation=90;
      bullet1.velocityX=24;
      //bullet1.debug=true;
      bullet1Group.add(bullet1);  
      
      bullet1_1 = createSprite(100,player2.y-50,30,30);
      bullet1_1.addImage(bullet_img);
      bullet1_1.scale = 0.1;
      bullet1_1.visible=true;
      bullet1_1.rotation=90;
      bullet1_1.velocityX=24;
      //bullet1_1.debug=true;
      bullet1Group.add(bullet1_1);

      bullet1_2 = createSprite(100,player2.y+50,30,30);
      bullet1_2.addImage(bullet_img);
      bullet1_2.scale = 0.1;
      bullet1_2.visible=true;
      bullet1_2.rotation=90;
      bullet1_2.velocityX=24;
      //bullet1_2.debug=true;
      bullet1Group.add(bullet1_2);

      /*bullet1_3 = createSprite(100,player2.y+25,30,30);
      bullet1_3.addImage(bullet_img);
      bullet1_3.scale = 0.1;
      bullet1_3.visible=true;
      bullet1_3.rotation=90;
      bullet1_3.velocityX=24;
      //bullet1_3.debug=true;
      bullet1Group.add(bullet1_3);
      bullet1_4 = createSprite(100,player2.y-25,30,30);
      bullet1_4.addImage(bullet_img);
      bullet1_4.scale = 0.1;
      bullet1_4.visible=true;
      bullet1_4.rotation=90;
      bullet1_4.velocityX=24;
      //bullet1_4.debug=true;
      bullet1Group.add(bullet1_4);*/


      
      
  
  
    }
    if (keyDown("DOWN_ARROW"))  {
      player1.y += 3 
  
    }
  
    if (keyDown("UP_ARROW"))  {
      player1.y -= 3
  
    }

    if (bullet1Group.isTouching(bulletGroup)){
      for (var i=0;i<bullet1Group.length; i++)  {
        if (bullet1Group[i].isTouching(bulletGroup)) {
          //player1.destroy();
          bullet1Group[i].destroy();
          bulletGroup[i].destroy();     
  
        }
      }
    }

    if (bulletGroup.isTouching(player2) || bullet1Group.isTouching(player1)) {
      gameState=END;
    }

  } 
  else if(gameState===0)  {

    
  
  
    if (bullet1Group.isTouching(player1)){
      for (var i=0;i<bullet1Group.length; i++)  {
        if (bullet1Group[i].isTouching(player1)) {
          //player1.destroy();
          bullet1Group[i].destroy();
          bulletGroup[i].destroy(); 
          lives -=1;
          life2.destroy();
          //boom.visible=true;
        }    
      }
    } 
    if (bulletGroup.isTouching(player2)){
      for (var a=0;a<bulletGroup.length; a++)  {
        if (bulletGroup[a].isTouching(player2)) {
          player2.destroy();
          bulletGroup.setVelocityXEach(0);
          bullet1Group.setVelocityXEach(0);
          bullet1Group[a].destroy();
          bulletGroup[a].destroy(); 
          boom1.visible=true; 
        }
      }
      /*if (player2.destroy())  {
        bullet1Group.destroy();
        boom1.visible=true;
      }*/
    }
  
    if (lives===1) {
      life1.destroy();
    }
  
    if (lives===0) {
      life.destroy(); 
      player1.destroy();
      boom.visible=true;
      lose.visible=true;
    } 

    if (player1.visible && boom1.visible)  {    
        win.visible=true;
        lose.visible=false;
    }

    if (player2.visible)  {
      if (boom.visible)  {      
        win.visible=false;
        lose.visible=true;
  
      } 
    }
  }







 



  
 

  //fall down



  drawSprites();
}
