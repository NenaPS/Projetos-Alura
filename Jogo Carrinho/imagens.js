let estrada;
let ator;
let carro;
let carro1;
let carro2;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  estrada=loadImage("imagens/estrada.png");
  ator=loadImage("imagens/ator-1.png");
  carro=loadImage("imagens/carro-1.png");
  carro1=loadImage("imagens/carro-2.png");
  carro2=loadImage("imagens/carro-3.png");
  
  imagemCarros=[carro, carro1, carro2, carro, carro1, carro2]

somTrilha = loadSound ("sons/somtrilha.mp3");
somColisao=loadSound("sons/colidiu.mp3");
somPonto=loadSound("sons/somponto.mp3");
}