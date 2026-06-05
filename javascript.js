
const botao = document.getElementById("localizar") 
const texto = document.getElementById("textoinput")
const elementovogais = document.getElementById("vogais")
const elementoconsoantes = document.getElementById("consoantes")
const elementototal = document.getElementById("total")
const botaoreset = document.getElementById("resetar")

function botaolocalizar() {

const textoDigitado = texto.value.toLowerCase(); //captura o texto do input e transforma em minusculo 
 //console.log("texto digitado:" , textoDigitado); < TESTE

let contadorVogais = 0;
let contadorConsoantes = 0;

const vogais = "aeiouáéíóúãâêîôõû"

for (let i = 0; i < textoDigitado.length; i++) {
let letraAtual = textoDigitado[i];

if (letraAtual === " ") {
    continue;
}

if (vogais.includes(letraAtual)) {
    contadorVogais++;
}  else if (letraAtual >= "a" && letraAtual <= "z" || letraAtual === "ç" ) {
    contadorConsoantes++;
}
}

let letrastotais = contadorVogais + contadorConsoantes;

elementovogais.innerText = contadorVogais;
elementoconsoantes.innerText = contadorConsoantes;
elementototal.innerText = letrastotais;

}

function resetar() {
    elementovogais.innerText = "0"
    elementoconsoantes.innerText = "0"
    elementototal.innerText = "0"
    texto.value = ""
}


