let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i=0; i<imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i], comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for (let c=0;c<xCarros.length;c++){
    xCarros[c] -= velocidadeCarros[c];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let xc=0;xc<xCarros.length;xc++){
      if (passouTodaATela(xCarros[xc])){
        xCarros[xc] = 600;
      }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}