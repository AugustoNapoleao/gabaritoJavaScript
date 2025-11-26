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

/* let menosMacas = 0.30;

let maisMacas = 0.25

let qtdMacas = parseInt(prompt("Digite quantas maçãs quer comprar: "));

if(qtdMacas < 12){
    console.log(`O valor do total da compra é: R$ ${qtdMacas * menosMacas}`)
}else if(qtdMacas >= 12){
    console.log(`O valor do total da compra é: R$ ${qtdMacas * maisMacas}`)

}
else{console.log("Não conseguimos efetuar o cálculo")} */

/* let valorProduto = 1;

let quantidadeCompra = parseInt(prompt("Quantos produtos deseja comprar?"));

let valorFinal = valorProduto * quantidadeCompra;

if(quantidadeCompra > 6){
    valorFinal = valorFinal - (valorFinal * 0.05)
}
let pagamento = parseInt(prompt("Como deseja realizar o pagamento?\n1 - À prazo\n2 - À vista"))

switch(pagamento){
    case 1:
        let parcelas = parseInt(prompt("Em quantas parcelas?\n1\n2\n3"))

        let valorParcelado = valorFinal / parcelas;

        alert(`O valor total da compra foi: ${valorFinal}\nDividido em ${parcelas} parcelas de ${valorParcelado.toFixed(2)}`)
        break

    case 2:
        valorFinal = valorFinal - (valorFinal * 0.03);

        alert(`O valor da sua compra à vista foi: ${valorFinal.toFixed(2)}`)
}

 */
let valorNaConta = parseFloat(prompt("Digite quanto você tem na conta: "))

let opcoes = parseInt(prompt("O que você deseja fazer?\n1 - Saque\n2 - Depósito\n3 - Transferência"))

switch(opcoes){
    case 1:
        valorSaque = parseFloat(prompt("Digite o valor que você deseja sacar:"))
        if(valorNaConta >= valorSaque){
            alert(`Saque efetuado com sucesso, o seu saldo agora é: R$ ${valorNaConta - valorSaque},00`)
        }
        else{valorNaConta < valorSaque
            alert("Saldo insuficiente")
        }
    break
    case 2:
        valorDeposito = parseFloat(prompt("Digite quanto deseja depositar:"))
        valorNaConta = valorNaConta + valorDeposito;
        alert(`O valor atual em conta é: R$ ${valorNaConta},00`)
    break
        
    case 3:
        let transferencias = parseInt(prompt("Digite qual a opção de transferência?\n1 - PIX\n2 - TED"))
        switch(transferencias){
            case 1:
                valorTransferenciaPix = parseFloat(prompt("Digite quanto deseja transferir:"))
                if(valorNaConta >= valorTransferenciaPix){
                valorNaConta = valorNaConta - valorTransferenciaPix;
                alert(`O valor atual restante na conta é: R$ ${valorNaConta.toFixed(2)}`);
                }
                else{
                    alert("Saldo insuficiente")
                }
            break
            case 2:
                valorTransferenciaTed = parseFloat(prompt("Digite quanto deseja transferir"))
                if(valorNaConta >= valorTransferenciaTed){
                    valorNaConta = valorNaConta - valorTransferenciaTed - 9.80;
                    if(valorNaConta < 0){
                        alert("Saldo insuficiente")
                        break
                    }    
                    alert(`O valor atual restante na conta é: R$ ${valorNaConta.toFixed(2)}`);
                }
                else{
                    alert("Saldo insuficiente")
                }
            break
        }    
}