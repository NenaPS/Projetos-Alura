

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}