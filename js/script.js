function olaMundo(){

    alert("Olá Mundo")

}
function mostrarNome(){
    let name = String(prompt("Digite o seu nome: "));

    console.log(name);
}
function contatenapalavras(){

let pala1 = String(prompt("Digite a Primeira palavra"));

let pala2 = String(prompt("Digite a Segunda palavra"));

const res = pala1+pala2;

console.log(res);

}


function somaNumeros() {
let n1 = parseInt(prompt("Digite o primeiro numero"))
let n2 = parseInt(prompt("Digite o segundo numero"))

const resul = n1+n2
console.log(resul)
}

function subtrairNum(n1, n2){
    var n1 = parseInt(prompt("Digite o primeiro numero"));
    var n2 = parseInt(prompt("Digite o segundo numero"));
    
    console.log(n1-n2)
}
function criaObjeto(){

let name = String(prompt("Digite o seu nome"));
let age = parseInt(prompt("Digite a sua idade"));
let time_fav = String(prompt("Digite o seu time favorito"));

const usuario = [name, age, time_fav]

console.log(usuario)
}
function calculadora(){
    let n1 = parseInt(prompt("Digite o primeiro numero"))
    let n2 = parseInt(prompt("Digite o segundo numero"))
    let operacao = String(prompt("Digite a Operação (Somar, Subtrair, Dividir, Multiplicar)"))
    let resultado

    switch (operacao) {
        case "Somar":
            resultado = n1+n2
            console.log("Resultado da soma: " + resultado)
            break;

        case "Subtrair":
            resultado = n1-n2
            console.log("Resultado da subtração: " + resultado)
            break;

        case "Dividir":
            if (n2 == 0) {
                console.log("Não é possível dividir por zero.");
                break
              } else {
                resultado = n1 / n2;
                console.log("Resultado da divisão: " + resultado)
                break}
        case "Multiplicar":
            resultado = n1*n2
            console.log("Resultado da multiplicação: " + resultado)
            break;

        default:
      console.log("Operação inválida.");
    }
}
function mudaConstante(){
const nome = String(prompt("Digite seu Nome"))
console.log(nome)
}
function manipulaArrays(){
    let cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"]
    console.log(cores)
    cores.push("Laranja")
    console.log("Novo Console.log depois do push no laranja: ")
    console.log(cores)
    cores.pop()
    console.log("Novo Console.log depois do Pop: ")
    console.log(cores)
    //cores.sort()
    //console.log("Novo Console.log em Ordem Alfabética: ")
    //console.log(cores)
    cores.splice(1, 1)
    console.log("Novo Console.log com Splice: ")
    console.log(cores)
    let lenght = cores.length;
    console.log(lenght)
    cores.unshift("fucsia")
    console.log(cores)
    let primeiraCor = cores.shift()
    console.log(cores)
   
}

