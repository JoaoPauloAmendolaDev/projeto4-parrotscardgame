let pergunta = prompt("Escolha o número de cartas entre 4 e 14, sem números impares: ")

const gif1 = document.querySelector('.Gif1')
const gif2 = document.querySelector('.Gif2')
const gif3 = document.querySelector('.Gif3')
const gif4 = document.querySelector('.Gif4')
const gif5 = document.querySelector('.Gif5')
const gif6 = document.querySelector('.Gif6')
const gif7 = document.querySelector('.Gif7')
const Conteiner = document.querySelector('.Cartas')

let contadorDeEscolha = 0
let contadorDeCartas = 0
let lista= [gif1 , gif2 , gif3 , gif4 , gif5 , gif6 , gif7] //ESSA É A LISTA COM TODAS AS IMAGENS
let listaEscolhida = [] //ESSA É A LISTA COM A QUANTIDADE DE IMAGENS QUE O USUÁRIO ESCOLHEU

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
    Conteiner.innerHTML += (`<div class="Papagaio" onclick="virarCarta(this)">`+listaFinal[contadorDeCartas].outerHTML+`<div class="fotoPapagaioComum"><img class="papagaioComum tamanhoPapagaioComum"src="./imagens/front.png" alt="papagaio_Comum"></div></div>`)
    contadorDeCartas += 1
}
function virarCarta(carta){
    let papagaio = carta //ESSA É A DIV TODA DA CARTA
    let papagaio_Comum = papagaio.children[1] //ESSA É A DIV QUE FICA EM VOLTA DA IMAGEM
    let papagaio_Comum_Foto = papagaio_Comum.children[0] //ESSA É A IMAGEM DO PAPAGAIO COMUM
    let papagaioGif = papagaio.children[0] //ESSA É A DIV DO GIF
    console.log(papagaioGif)
    papagaio_Comum_Foto.classList.add("Escondido")
    papagaioGif.classList.remove("Escondido")
    console.log("passei aqui de novo")
}