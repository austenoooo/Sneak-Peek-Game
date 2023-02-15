// refresh page when resized
// window.onresize = function () {
//   location.reload();
// };



let myCanva;


// all the computer eyes
let leftEyeCom;
let rightEyeCom;

let leftPupilOutCom;
let leftPupilInCom;

let rightPupilOutCom;
let rightPupilInCom;

let eyeHeightCom = 50;

// all the player eyes
let leftEyePlay;
let rightEyePlay;

let leftPupilOutPlay;
let leftPupilInPlay;

let rightPupilOutPlay;
let rightPupilInPlay;

let eyeHeightPlay = 0;

// p5 code
function setup(){
  myCanva = createCanvas(window.innerWidth, window.innerHeight);
  myCanva.parent("canva");

  background("#FFFEEC");
  smooth();

  textFont("Unbounded");

  computerEyeStarter();
  playerEyeStarter();
  
  
}

function draw(){

  background("#FFFEEC");
  
  // if(eyeHeightCom - 10 > 0 && frameCount % 2 == 0){
  //   // eyeHeight -= 10;
  // }

  if (playerEyeOpen){
    eyeHeightPlay = 50;
  }
  else{
    eyeHeightPlay = 0;
  }

  interfaceFrame();
  
  drawComputerEye();

  drawPlayerEye(eyeHeightPlay);

}



function interfaceFrame(){
  // draw computer side
  // square block
  fill("#00EAC9");
  stroke("#4747FC");
  strokeWeight(30);
  rect(width/2 - 30 - 380, height/2 - 380/2, 380, 380, 0, 30, 30, 30);
  // label
  noStroke();
  fill("#4747FC");
  rect(width/2 - 30 - 380 - 15, height/2 - 380/2 - 70, 220, 70, 10);
  // text
  fill("#FFFEEC");
  textSize(22);
  text("COMPUTER", width/2 - 30 - 380 + 15, height/2 - 380/2 - 30);
  

  // draw player side
  // square block
  fill("#FF4F14");
  stroke("#FFC8FF");
  strokeWeight(30);
  rect(width/2 + 30, height/2 - 380/2, 380, 380, 0, 30, 30, 30);
  // label
  noStroke();
  fill("#FFC8FF");
  rect(width/2 + 30 - 15, height/2 - 380/2 - 70, 220, 70, 10);
  // text
  fill("#FF4F14");
  textSize(22);
  text("YOU", width/2 + 30 + 15, height/2 - 380/2 - 30);
}




function computerEyeStarter(){
  rightEyeCom = createGraphics(width, height);
  leftEyeCom = createGraphics(width, height);
  
  leftPupilOutCom = createGraphics(width, height);
  leftPupilInCom = createGraphics(width, height);

  rightPupilOutCom = createGraphics(width, height);
  rightPupilInCom = createGraphics(width, height);
  
  // pupil outside
  leftPupilOutCom.fill('red');
  leftPupilOutCom.noStroke();
  leftPupilOutCom.ellipse(50, 25, 50, 50);
  leftPupilOutCom = leftPupilOutCom.get();
  
  // pupil inside
  leftPupilInCom.fill('black');
  leftPupilInCom.noStroke();
  leftPupilInCom.ellipse(50, 25, 35, 35);
  leftPupilInCom = leftPupilInCom.get();
  
  // pupil outside
  rightPupilOutCom.fill('red');
  rightPupilOutCom.noStroke();
  rightPupilOutCom.ellipse(200, 25, 50, 50);
  rightPupilOutCom = rightPupilOutCom.get();

  // pupil inside
  rightPupilInCom.fill('black');
  rightPupilInCom.noStroke();
  rightPupilInCom.ellipse(200, 25, 35, 35);
  rightPupilInCom = rightPupilInCom.get();
}




function playerEyeStarter(){
  rightEyePlay = createGraphics(width, height);
  leftEyePlay = createGraphics(width, height);
  
  leftPupilOutPlay = createGraphics(width, height);
  leftPupilInPlay = createGraphics(width, height);

  rightPupilOutPlay = createGraphics(width, height);
  rightPupilInPlay = createGraphics(width, height);
  
  // // pupil outside
  // leftPupilOutPlay.fill('#8EA1FF');
  // leftPupilOutPlay.noStroke();
  // leftPupilOutPlay.ellipse(50, 25, 50, 50);
  // // leftPupilOutPlay = leftPupilOutPlay.get();
  
  // // pupil inside
  // leftPupilInPlay.fill('black');
  // leftPupilInPlay.noStroke();
  // leftPupilInPlay.ellipse(50, 25, 35, 35);
  // leftPupilInPlay = leftPupilInPlay.get();
  
  // // pupil outside
  // rightPupilOutPlay.fill('#8EA1FF');
  // rightPupilOutPlay.noStroke();
  // rightPupilOutPlay.ellipse(200, 25, 50, 50);
  // rightPupilOutPlay = rightPupilOutPlay.get();

  // // pupil inside
  // rightPupilInPlay.fill('black');
  // rightPupilInPlay.noStroke();
  // rightPupilInPlay.ellipse(200, 25, 35, 35);
  // rightPupilInPlay = rightPupilInCom.get();
}




function drawComputerEye(){
  push();
  // width: 125 -> (width - 30 - 380/2)
  // height: 25 -> height/2
  translate(width/2 - 30 - 380/2 - 125, height/2 - 25);

  // left eye
  leftEyeCom.clear();
  leftEyeCom.noStroke();
  leftEyeCom.fill('white');
  leftEyeCom.ellipse(50, 25, 100, eyeHeightCom);

  image(leftEyeCom, 0, 0, width, height);
  
  // right eye
  rightEyeCom.clear();
  rightEyeCom.noStroke();
  rightEyeCom.fill('white');
  rightEyeCom.ellipse(200, 25, 100, eyeHeightCom);
  
  image(rightEyeCom, 0, 0, width, height);
  
  
  leftPupilOutCom.mask(leftEyeCom);
  image(leftPupilOutCom, 0, 0, width, height);
  
  leftPupilInCom.mask(leftEyeCom);
  image(leftPupilInCom, 0, 0, width, height);

  rightPupilOutCom.mask(rightEyeCom);
  image(rightPupilOutCom, 0, 0, width, height);

  rightPupilInCom.mask(rightEyeCom);
  image(rightPupilInCom, 0, 0, width, height);

  // eyebrows
  fill("#4747F3");
  circle(125 - 30, -30, 10);
  circle(125 + 30, -30, 10);

  pop();
}

function drawPlayerEye(){
  push();
  // width: 125 -> (width/2 + 30 + 380/2)
  // height: 25 -> height/2
  translate(width/2 + 30 + 380/2 - 125, height/2 - 25);

  // left eye
  leftEyePlay.clear();
  leftEyePlay.noStroke();
  leftEyePlay.fill('white');
  leftEyePlay.ellipse(50, 25, 100, eyeHeightPlay);

  image(leftEyePlay, 0, 0, width, height);
  
  // right eye
  rightEyePlay.clear();
  rightEyePlay.noStroke();
  rightEyePlay.fill('white');
  rightEyePlay.ellipse(200, 25, 100, eyeHeightPlay);
  
  image(rightEyePlay, 0, 0, width, height);
  
  leftPupilOutPlay.clear();
  leftPupilOutPlay.fill('#8EA1FF');
  leftPupilOutPlay.noStroke();
  leftPupilOutPlay.ellipse(50, 25, 50, 50);
  let leftPupilOutPlayImg = leftPupilOutPlay.get();
  leftPupilOutPlayImg.mask(leftEyePlay);
  image(leftPupilOutPlayImg, 0, 0, width, height);
  
  leftPupilInPlay.clear();
  leftPupilInPlay.fill('black');
  leftPupilInPlay.noStroke();
  leftPupilInPlay.ellipse(50, 25, 35, 35);
  let leftPupilInPlayImg = leftPupilInPlay.get();
  leftPupilInPlayImg.mask(leftEyePlay);
  image(leftPupilInPlayImg, 0, 0, width, height);

  rightPupilOutPlay.clear();
  rightPupilOutPlay.fill('#8EA1FF');
  rightPupilOutPlay.noStroke();
  rightPupilOutPlay.ellipse(200, 25, 50, 50);
  let rightPupilOutPlayImg = rightPupilOutPlay.get();
  rightPupilOutPlayImg.mask(rightEyePlay);
  image(rightPupilOutPlayImg, 0, 0, width, height);

  rightPupilInPlay.clear();
  rightPupilInPlay.fill('black');
  rightPupilInPlay.noStroke();
  rightPupilInPlay.ellipse(200, 25, 35, 35);
  let rightPupilInPlayImg = rightPupilInPlay.get();
  rightPupilInPlayImg.mask(rightEyePlay);
  image(rightPupilInPlayImg, 0, 0, width, height);

  // eyebrows
  fill("#FFC8FF");
  circle(125 - 30, -30, 10, 10);
  circle(125 + 30, -30, 10, 10);

  pop();
}


