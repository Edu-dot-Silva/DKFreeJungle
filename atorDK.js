let yAtor = 550;
let xAtor = 200;
let colisao = false; 
let fonte;
let meusPontos = 0;

function mostraAtor() {
    image(imagemAtor, xAtor, yAtor, 60, 60)
    image(imagemBananaPontos,640,30,45,45);
  
  }

  function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
      yAtor -= 3;}
    
    if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()){
      yAtor += 3;
    }}
    if (keyIsDown(RIGHT_ARROW)) {
      xAtor += 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
      
      xAtor -= 3;
    }
  }
  function verificaColisao0(){
  
    colisao = collideRectCircle(xObstaculos[0], yObstaculos[0], larguraObstaculos[0], alturaObstaculos[0], xAtor, yAtor, 30)
    if(colisao){
      colidiu();
      somColissao.play();
      if (pontosMaiorQueZero()){
      meusPontos-=1;
    }
    }
  }
  function verificaColisao1(){
    
    colisao = collideRectCircle(xObstaculos[1], yObstaculos[1], larguraObstaculos[1], alturaObstaculos[1], xAtor, yAtor, 30)
    if(colisao){
      colidiu();
      somColissao.play();

      if (pontosMaiorQueZero()){
        meusPontos-=1;}
      }
  }
  function verificaColisao2(){
    
    colisao = collideRectCircle(xObstaculos[2], yObstaculos[2], larguraObstaculos[2], alturaObstaculos[2], xAtor, yAtor, 0)
    if(colisao){
      colidiu();
      somColissao.play();

      if (pontosMaiorQueZero()){
        meusPontos-=1;}
      }
  }
  function verificaColisao3(){
    
    colisao = collideRectCircle(xObstaculos[3], yObstaculos[3], larguraObstaculos[3], alturaObstaculos[3], xAtor, yAtor, 0)
    if(colisao){
      colidiu();
      somColissao.play();

      if (pontosMaiorQueZero()){
        meusPontos-=1;}
      }
  }
  function verificaColisao4(){
  
    colisao = collideRectCircle(xObstaculos[4], yObstaculos[4], larguraObstaculos[4], alturaObstaculos[4], xAtor, yAtor, 0)
    if(colisao){
      colidiu();
      somColissao.play();

      if (pontosMaiorQueZero()){
        meusPontos-=1;}
      }
  }
  function verificaColisao5(){
    
    colisao = collideRectCircle(xObstaculos[5], yObstaculos[5], larguraObstaculos[5], alturaObstaculos[5], xAtor, yAtor, 0)
    if(colisao){
      colidiu();
      somColissao.play();

      if (pontosMaiorQueZero()){
        meusPontos-=1;}
      }
  }
  function colidiu(){
    yAtor = 550
  }
  function incluiPontos(){
    textAlign(CENTER)
    textSize(40)
    textFont(fonte)
    fill(color(255,215,0))
    text(meusPontos,630,65);
  }
  function marcaPonto(){
if(yAtor<20){
  meusPontos +=1;
  somPonto.play();
  colidiu();
}
  }
  function pontosMaiorQueZero(){
    return meusPontos>0
  }

  function podeSeMover(){
    return yAtor < 550;  }
  