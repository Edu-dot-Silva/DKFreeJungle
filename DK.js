function setup() {
  createCanvas(700, 625);
  somTrilha.loop();
}

function draw() {
  background(imagemBackground);
  mostraAtor(imagemAtor);
  mostraObstaculo();
  movimentaObstaculo();
  movimentaAtor();
  voltaPosicaoInicialDoObstaculo();
  verificaColisao0();
  verificaColisao1();
  verificaColisao2();
  verificaColisao3();
  verificaColisao4();
  verificaColisao5();
  incluiPontos();
  marcaPonto();
  podeSeMover();

}



