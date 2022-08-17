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
    console.log('123123')
    listaEscolhida.push(lista[contadorDeEscolha])
    contadorDeEscolha+= 1
}
listaEscolhida.sort(comparador) //PARA SORTEAR O ARRAY DE CARTAS ESCOLHIDAS

while (contadorDeCartas < pergunta){
    Conteiner.innerHTML = (Conteiner.innerHTML + '<div class="Papagaio" onclick="virarCarta(this)"><img src="./imagens/front.png" alt="papagaio_Comum"></div>')
    contadorDeCartas += 1
}

virarCarta(gif-da-carta){
    
}