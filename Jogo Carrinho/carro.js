let yCarros=[40, 96, 150, 210, 270, 318];
let velocidadeCarro=[2, 7, 3, 6, 4, 5];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro= 50;
let alturaCarro = 40;



function mostraCarro(){
  for (let i=0; i<imagemCarros.length; i++){
  image(imagemCarros[i],xCarros[i],yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for(let i=0; i<imagemCarros.length; i++){
  xCarros[i]-= velocidadeCarro[i];
  }
}

function voltaPosicaoCarro(){
  for (let i=0; i<imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i]=600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros<-50;
}
