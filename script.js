/*let saldo = parseFloat(prompt("Digite o valor do saldo: "));

let saque = parseFloat(prompt("Digite o valor do saque: "));

if(saque < saldo){
    dinheiroSacado = saldo - saque;
    console.log("Saque efetuado com sucesso: R$ " + dinheiroSacado)
}

else{
    console.log("Saldo insuficiente!!!")
}

 let nome = prompt("Digite o seu nome: ");

let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));
let nota4 = parseFloat(prompt("Digite a quarta nota"));

somaNotas = nota1 + nota2 + nota3 + nota4

media = somaNotas / 4

if(media >= 7){
    console.log(`Olá ${nome}, a média foi ${media}, aprovado`)
}
else if(media <= 4){
    console.log(`Olá ${nome}, a média foi ${media}, reprovado`)
}
else{
    console.log(`Olá ${nome}, a média foi ${media}, recuperação`)
} 


let nome = prompt("Digite seu nome: ")

let idade = parseInt(prompt("Digite a sua idade: "))

let carteirinha = parseInt(prompt("Digite 1 para sim e 2 para não: "))

if(idade > 18 && carteirinha == 1){
    console.log(`Olá ${nome}, seja bem vindo! Você possui desconto de estudante, o valor do seu ingresso é: R$ 17,50 reais`)
}else if(idade > 18 && carteirinha == 2){
    console.log(`Olá ${nome}, seja bem vindo! Você não possui desconto de estudante, o valor do seu ingresso é: R$ 35, 00 reais`)
}
else{
console.log(`Olá ${nome}, seja bem vindo! Você possui desconto de estudante, o valor do seu ingresso é: R$ 17,50 reais`)} */

let menosMacas = 0.30;

let maisMacas = 0.25

let qtdMacas = parseInt(prompt("Digite quantas maçãs quer comprar: "));

if(qtdMacas < 12){
    console.log(`O valor do total da compra é: R$ ${qtdMacas * menosMacas}`)
}else if(qtdMacas >= 12){
    console.log(`O valor do total da compra é: R$ ${qtdMacas * maisMacas}`)

}
else{console.log("Não conseguimos efetuar o cálculo")}