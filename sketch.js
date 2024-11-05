
let cor;
let cor1;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
  background("rgb(145,12,12)");
  cor = color(random(0, 255), random(0, 255), random(0,255));
  posicaoHorizontal=200;
  posicaoVertical=200;
let cor;
let cor1;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
  background("rgb(145,12,12)");
  cor = color(random(0, 255), random(0, 255), random(0,255));
  posicaoHorizontal=200;
  posicaoVertical=200;
}

function draw() {
  circle(posicaoHorizontal, posicaoVertical, 50);
  fill(cor);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal=posicaoHorizontal - 3;
  }
    if(mouseX > posicaoHorizontal){
    posicaoHorizontal=posicaoHorizontal + 3;
  }
   if(mouseY < posicaoVertical){
    posicaoVertical=posicaoVertical - 3;
  }
  if(mouseY > posicaoVertical){
    posicaoVertical=posicaoVertical + 3;
  }
  if (mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
}

function draw() {
  circle(posicaoHorizontal, posicaoVertical, 50);
  fill(cor);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal=posicaoHorizontal - 3;
  }
    if(mouseX > posicaoHorizontal){
    posicaoHorizontal=posicaoHorizontal + 3;
  }
   if(mouseY < posicaoVertical){
    posicaoVertical=posicaoVertical - 3;
  }
  if(mouseY > posicaoVertical){
    posicaoVertical=posicaoVertical + 3;
  }
  if (mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
