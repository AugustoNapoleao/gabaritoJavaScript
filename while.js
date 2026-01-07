/* let opcaoUsuario = 1;

let numeroUsuario = 0;

 while(numeroUsuario <= 10){
    alert("Seu número é: " + numeroUsuario);
    numeroUsuario++;
} 
 while(opcaoUsuario != 1){
    } 
do {
    opcaoUsuario = parseInt(prompt("Deseja encerrar?\n1 - Sim\n2 - Não"))
    
} while (opcaoUsuario != 1); */

// Caixa Padaria

/* let totalCompra = 0;

let encerrarCompra = 0;

while (encerrarCompra != 2) {
    let precoDoProduto = parseInt(prompt("Digite o preço do produto:"))
    totalCompra = totalCompra + precoDoProduto;
 
    encerrarCompra = parseInt(prompt("Deseja continuar comprando\n1 - Sim\n2 - Não"))
}

alert(`O total compra é: ${totalCompra}`) */

// Maior Número

/* let numeroUsuario = 1;

let maiorNumero = 0;

while (numeroUsuario <= 5) {

    let numero = parseInt(prompt(`Digite o ${numeroUsuario}º número`))

    if(numero > maiorNumero){
        maiorNumero = numero
    }
    numeroUsuario++
}

alert(`O maior número digitado foi: ${maiorNumero}`); */


/* let calculo = 0;

while (calculo != 2) {
    let numero1 = parseInt(prompt("Digite o primeiro número"))
    let numero2 = parseInt(prompt("Digite o segundo número"))
    let resultado = 0
    operacao = parseInt(prompt("Digite a operação a ser realizada\n1 - +\n2 - -\n3 - *\n4 - /"))

    switch(operacao){
        case 1:
            resultado = numero1 + numero2
            alert(resultado)
        break
        case 2: 
            resultado = numero1 - numero2
            alert(resultado)
        break
        case 3:
            resultado = numero1 * numero2
            alert(resultado)
        break
        case 4:
            resultado = numero1 / numero2
            alert(resultado)
        break
    }
    calculo = parseInt(prompt("Digite se deseja encerrar os cálculos\n1 - Sim\n2 - Não"))
}
 */

//Exercicío dos patos

let patinhosForam = parseInt(prompt("Digite o número de patos:"))

let patinhos = patinhosForam
alert(`${patinhosForam} patinhos foram passear, além das montanhas para brincar`)


while (patinhosForam != 0) {
    patinhosForam--;
    if(patinhosForam > 1){
        alert(`A mamãe gritou quá quá quá quá, mas só ${patinhosForam} patinhos voltaram de lá`)
    }
    else if(patinhosForam == 1){
        alert(`A mamãe gritou quá quá quá quá, mas só ${patinhosForam} patinho voltou de lá`)
    }
    else {
        alert("Mas nenhum patinho voltou de lá")
    }
}
alert(`A mamãe patinha foi procurar, além das montanhas na beira do mar, a mamãe gritou quá quá quá quá e os ${patinhos} patinhos voltaram de lá`)

