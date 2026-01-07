//Laço de repetição FOR
/* 
let numeroUsuario = parseInt(prompt("Digite um número"))

let numero = 11;

for(let i = 1; i < numero; i++){
    console.log(`O resultado é: ${numeroUsuario * i}`)
} */

/* let aluno = "Wallis";

let alunos = ["Perim", "Maria", "Augusto"]
let idades = [20, 20, 21]

for(let i = 0; i < 5; i++){
    console.log(alunos[i])
} */

let contagem = parseInt(prompt("Digite a contagem da bomba para explodir:"))

numero = contagem;

if(numero <= 0){
    console.log("Valor inválido")
}

for(i=0; i < numero; i++){
    if(contagem != 0){
        console.log(contagem--)
    }
    
}
console.log("BOOOOOOMMMMMM!!!!!!!!!!!")