let pergunta = prompt("Escolha o número de cartas entre 4 e 14, sem números impares: ")

const gif1 = document.querySelector('.Gif1')
const gif2 = document.querySelector('.Gif2')
const gif3 = document.querySelector('.Gif3')
const gif4 = document.querySelector('.Gif4')
const gif5 = document.querySelector('.Gif5')
const gif6 = document.querySelector('.Gif6')
const gif7 = document.querySelector('.Gif7')
const Conteiner = document.querySelector('.Cartas')

let carta_gif1 = 0
let carta_imagem1 = 0
let contadorParImpar = 0
let contadorDeEscolha = 0
let contadorDeCartas = 0
let contadorDeDivs = 0
let contador_vitoria = 0
let id_carta1 = 0
let id_carta2 = 0
let lista= [gif1 , gif2 , gif3 , gif4 , gif5 , gif6 , gif7] //ESSA É A LISTA COM TODAS AS IMAGENS
let listaEscolhida = [] //ESSA É A LISTA COM A QUANTIDADE DE IMAGENS QUE O USUÁRIO ESCOLHEU
let listaDeEscolhas = []


while ((pergunta < 4) || (pergunta > 14) || (pergunta % 2 != 0)){
    alert("Número incorreto, digite novamente")
    pergunta = prompt("Escolha o número de cartas entre 4 e 14, sem números impares: ")
}

function comparador() { 
	return Math.random() - 0.3; 
}

while (contadorDeEscolha < (pergunta/2)){
    console.log('Passei aqui também')
    listaEscolhida.push(lista[contadorDeEscolha])
    contadorDeEscolha+= 1
}
listaFinal = listaEscolhida.concat(listaEscolhida)
listaFinal.sort(comparador) //PARA SORTEAR O ARRAY DE CARTAS ESCOLHIDAS

while (contadorDeCartas < pergunta){
    console.log('Passei Aqui')
    Conteiner.innerHTML += (`<div class="Papagaio" id='${contadorDeDivs}' onclick=SelecionarCarta(this,${contadorDeDivs})>${listaFinal[contadorDeCartas].outerHTML}<div class="fotoPapagaioComum"><img class="papagaioComum tamanhoPapagaioComum"src="./imagens/front.png" alt="papagaio_Comum"></div></div>`)
    contadorDeCartas += 1
    contadorDeDivs += 1
    console.log
}

function PrimeiraCarta(carta_gif, carta_imagem, id_da_carta){
    carta_gif1 = carta_gif
    carta_imagem1 = carta_imagem
    id_carta1 = id_da_carta
    VirarCarta(carta_gif, carta_imagem)
}
function SegundaCarta(carta_gif, carta_imagem, id_da_carta){
    id_carta2 = id_da_carta
    VirarCarta(carta_gif, carta_imagem)
    CompararCartas(carta_gif, carta_imagem, id_carta2)
}
function VirarCarta(carta_gif, carta_imagem){
    carta_gif.classList.remove('Escondido')
    carta_imagem.classList.add('Escondido')
    console.log('AQUI EU VIREI A CARTA')
}
function DesvirarCarta(carta_gif, carta_imagem){
    carta_gif.classList.add('Escondido')
    carta_imagem.classList.remove('Escondido')
    carta_gif1.classList.add('Escondido')
    carta_imagem1.classList.remove('Escondido')
    
}
function SelecionarCarta(carta, id){
    let carta_papagaio = carta
    let carta_numero = id
    console.log(carta_numero)
    let carta_papagaio_gif = carta_papagaio.children[0]
    let carta_papagaio_imagem = carta_papagaio.children[1]
    listaDeEscolhas.push(carta_papagaio_gif.classList[0])
    if (contadorParImpar == 0 || contadorParImpar % 2 == 0){
        console.log("if da carta 1")
        PrimeiraCarta(carta_papagaio_gif, carta_papagaio_imagem, carta_numero)
    }
    if (contadorParImpar % 2 != 0){
        console.log("if da carta 2")
        SegundaCarta(carta_papagaio_gif, carta_papagaio_imagem, carta_numero)
    }
    contadorParImpar+= 1
}

function CompararCartas(carta_gif, carta_imagem, id_da_carta){
    let carta1 = listaDeEscolhas[(listaDeEscolhas.length - 2)]
    let carta2 = listaDeEscolhas[(listaDeEscolhas.length - 1)]
    if (id_carta1 === id_carta2){
        setTimeout(() => {
            DesvirarCarta(carta_gif, carta_imagem)
        }, 1500);

    }
    if (carta2 == carta1){
        console.log('SÃO IGUAIS!')
        contador_vitoria += 1
    }
    else{
        VirarCarta(carta_gif, carta_imagem)
        setTimeout(() => {
            DesvirarCarta(carta_gif, carta_imagem)
        }, 1500); 
        console.log('SÃO DIFERENTES')

    }
}
if (contador_vitoria == (pergunta / 2)){

}
