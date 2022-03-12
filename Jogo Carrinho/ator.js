let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;
let iniciou = true;

function mostraAtor(){
  image(ator, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW) && iniciou){
    yAtor-=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor+=3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor-=3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor+=3;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    iniciou = true;
  }
}

function verificaColisao (){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro,xAtor, yAtor, 15)
    if (colisao){
      voltaPosicaoInicial()
      somColisao.play();
      if(meusPontos>0){
        meusPontos-=1
      }
    }
  }
}
function voltaPosicaoInicial(){
  yAtor=366;
  iniciou = false;
}

function incluiPontos(){
  fill(255,140,0);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 27);
}

function marcaPontos(){
  if(yAtor<15){
    meusPontos +=1
    somPonto.play();
    voltaPosicaoInicial();
  }
}

function podeSeMover(){
  return yAtor<366;
}