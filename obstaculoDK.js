let yObstaculos = [85,170,225,290,370,460]
let velocidadeObstaculos = [7,6.5,7.5,6,7,5]
let xObstaculos = [700,700,700,-200,-200,-200]
let larguraObstaculos = [60,90,100,70,80,50]
let alturaObstaculos = [60,50,70,70,70,60]

function mostraObstaculo() {
    image(imagemObstaculos[0], xObstaculos[0], yObstaculos[0], larguraObstaculos[0], alturaObstaculos[0])
    image(imagemObstaculos[1], xObstaculos[1], yObstaculos[1], larguraObstaculos[1], alturaObstaculos[1])
    image(imagemObstaculos[2], xObstaculos[2], yObstaculos[2], larguraObstaculos[2], alturaObstaculos[2])
    image(imagemObstaculos[3], xObstaculos[3], yObstaculos[3], larguraObstaculos[3], alturaObstaculos[3])
    image(imagemObstaculos[4], xObstaculos[4], yObstaculos[4], larguraObstaculos[4], alturaObstaculos[4])
    image(imagemObstaculos[5], xObstaculos[5], yObstaculos[5], larguraObstaculos[5], alturaObstaculos[5])
  }
  function movimentaObstaculo() {
    xObstaculos[0] -= velocidadeObstaculos[0];
    xObstaculos[1] -= velocidadeObstaculos[1];
    xObstaculos[2]-=velocidadeObstaculos[2];
    xObstaculos[3]+=velocidadeObstaculos[3];
    xObstaculos[4]+=velocidadeObstaculos[4];
    xObstaculos[5]+=velocidadeObstaculos[5];
  }

  function voltaPosicaoInicialDoObstaculo(){
    if(xObstaculos[0]<-200)
    xObstaculos[0]=700;
    if(xObstaculos[1]<-200)
    xObstaculos[1]=700;
    if(xObstaculos[2]<-200)
    xObstaculos[2]=700;

    if(xObstaculos[3]>750)
    xObstaculos[3]=-200;
    if(xObstaculos[4]>750)
    xObstaculos[4]=-200;
    if(xObstaculos[5]>750)
    xObstaculos[5]=-200;
  }