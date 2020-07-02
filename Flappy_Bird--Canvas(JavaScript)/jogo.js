console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');
const somHit = new Audio()
somHit.src= './efeitos/hit.wav'

let frames = 0


// Tela de início
const mensagemGetReady = {
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width/2) - 174/2,
  y: 50,
  
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.sX, mensagemGetReady.sY,
      mensagemGetReady.w, mensagemGetReady.h,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.w, mensagemGetReady.h
    );
  }
}

// [Plano de Fundo]
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,

  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  },
};

// [Chao]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,

  atualiza() {    // Animação do chão andando infinito
    chao.x -= 1
    if (chao.x <= -112) {
      chao.x = 0
    }
  },

  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura,
    );

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x + chao.largura), chao.y,
      chao.largura, chao.altura,
    );
  },
};

//  Canos 
const canos = {
  uX: 52,
  uY: 169,
  dX: 0,
  dY: 169,
  w: 52,
  h: 400,
  x: 100,
  y: 130,
  espaco: 90,
  pares: [{x: 150, y: 10},{x: 250, y: 260}],

  atualiza() {
    const passouSemFrames = frames%100 === 0
    if (passouSemFrames) {
      //console.log('PAssou 100');
    }

  },

  desenha() {
    canos.pares.forEach(function(par){

      let posicao = par.x
      let alt = Math.random()*235 + 20
      contexto.drawImage(     // Cano de Cima
        sprites,
        canos.uX, canos.uY,
        canos.w, canos.h,
        posicao, (alt - canos.h),
        canos.w, canos.h
      )

      contexto.drawImage(     // Cano de Baixo
        sprites,
        canos.dX, canos.dY,
        canos.w, canos.h,
        posicao, (alt + canos.espaco),
        canos.w, canos.h
      )
    })
  }

}

// Flappy Bird
let anim = 0
const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  gravidade: 0.25,
  velocidade: 0,
  pulo: 4.6,
  movimentoAsas: [0, 26, 52, 26],

  atualiza(){
    if (colisaoChao(flappyBird, chao) == true) {
      somHit.play()
      setTimeout(()=>{
        mudaParaTela(Telas.Inicio)
      }, 600)
      return
    }
    flappyBird.velocidade += this.gravidade
    flappyBird.y += flappyBird.velocidade
  },

  desenha() {
    let mov = flappyBird.movimentaAsasFlappy()

    contexto.drawImage(
      sprites,
      flappyBird.spriteX, flappyBird.movimentoAsas[mov], // Sprite X, Sprite Y
      flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
      flappyBird.x, flappyBird.y,
      flappyBird.largura, flappyBird.altura,
    );
  },

  movimentaAsasFlappy() {
    let velBatidaAsas = 5    // Quanto maior o valor, mais lento é o movimento
    let act = ''
    if (anim >= velBatidaAsas*4) {
      anim = 0
    }

    if (anim < velBatidaAsas) {
      act = 0
    } else if (anim < velBatidaAsas*2) {
      act = 1
    } else if (anim < velBatidaAsas*3) {
      act = 2
    } else {
      act = 3
    }

    anim += 1
    return act
  },

  pula() {
    flappyBird.velocidade = - flappyBird.pulo
  },
  
  reset() {
    flappyBird.x = 10
    flappyBird.y = 50
    flappyBird.velocidade = 0
  }
}

function colisaoChao (flappyBird, chao) {
  const flappyColisaoChao =flappyBird.y + flappyBird.altura
  const chaoColisao = chao.y

  if (flappyColisaoChao >= chaoColisao ) {
    return true
  }
  return false
}


// Telas 
let telaAtiva = {}
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;
}
const Telas = {
  Inicio: {
    atualiza() {
      flappyBird.reset()
      canos.atualiza()
      chao.atualiza()
    },
    click() {
      mudaParaTela(Telas.Jogo)
    },
    desenha(){
      planoDeFundo.desenha();
      canos.desenha()
      chao.desenha();
      flappyBird.desenha();
      //mensagemGetReady.desenha()
    }
  },

  Jogo: {
    atualiza() {
      chao.atualiza()
      flappyBird.atualiza()
    },
    click() {
      flappyBird.pula()
    },
    desenha() {
      planoDeFundo.desenha();
      chao.desenha();
      flappyBird.desenha();
    }
  }
}

function loop() {
  telaAtiva.atualiza()
  telaAtiva.desenha()

  frames += 1
  requestAnimationFrame(loop);
}

window.addEventListener('click', function(){
  if (telaAtiva.click) {
    telaAtiva.click()
  }
})
mudaParaTela(Telas.Inicio)    // Carregar a Tela inicial ao abrir a página 
loop();