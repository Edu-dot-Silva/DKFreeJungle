let imagemBackground;
let imagemAtor;
let imagemObstaculo;
let imagemObstaculo2;
let imagemObstaculo3;
let imagemObstaculo4;
let imagemObstaculo5;
let imagemObstaculo6;
let imagemBananaPontos;
let somTrilha;
let somColissao;
let somPonto;

function preload() {

    imagemAtor = loadImage("atorDK/atorOficial.gif");
    imagemBackground = loadImage("imagensDK/backgroundOficial.png");
    imagemObstaculo = loadImage("obstaculosDK/kong-donkey.gif");
    imagemObstaculo2 = loadImage("obstaculosDK/kruncha-donkey.gif");
    imagemObstaculo3 = loadImage("obstaculosDK/krusha-krusha.gif");
    imagemObstaculo4 = loadImage("obstaculosDK/surfistaOficial.gif");
    imagemObstaculo5 = loadImage("obstaculosDK/roda.gif");
    imagemObstaculo6 = loadImage("obstaculosDK/dkJr.gif");
    imagemBananaPontos = loadImage("obstaculosDK/Banana_Bunch2.webp");
    imagemObstaculos = [imagemObstaculo,imagemObstaculo2,imagemObstaculo3,imagemObstaculo4,imagemObstaculo5,imagemObstaculo6];
    somTrilha = loadSound("sonsDK/trilha.mpe");
    somColissao = loadSound("sonsDK/hit.mp3");
    somPonto = loadSound("sonsDK/ponto.mp3");
    fonte = loadFont('obstaculosDK/Jumpman.ttf')
  }