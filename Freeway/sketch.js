






// faz um pre load aa imagem da estrada de fundo
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}
// a função draw desenha os objetos na tela
function draw() {
  background(imagemDaEstrada);
  // coloca a imagem da estrada de fundo
  mostraCarro();
  mostraAtor();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();

  
 
}





