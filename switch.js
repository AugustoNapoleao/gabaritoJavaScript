/* let mesada = parseInt(prompt("Digite quanto você ganha de mesada"))

let mesadaGasto = parseInt(prompt("Digite a sua escolha:\n1 - Comprar\n2 - Apenas Olhar"))
switch(mesadaGasto){
    case 1:         
        let produtos = parseInt(prompt("O que deseja comprar?\n1 - Video-Game(R$ 1500,00)\n2 - Notebook\n3 - Bicicleta"))
        switch(produtos){
            case 1:
                let videoGame = 1500;
                if(mesada >= videoGame){
                    console.log(`Compra efetuada com sucesso, seu troco é: R$ ${mesada - videoGame}`)}
                else if(mesada < videoGame){
                    console.log("Saldo insuficiente")
                }else{
                    console.log("Opção inválida")
                }
                break

            case 2: 
                let notebook = 1750;
                if(mesada >= notebook){
                    console.log(`Compra efetuada com sucesso, seu troco é: R$ ${mesada - notebook}`)
                }
                else if(mesada < notebook){
                    console.log("Saldo insuficiente")
                }
                else{
                    console.log("Opção inválida")
                }
                break
                
            case 3: 
                let bicicleta = 1000;
                if(mesada >= bicicleta){
                    console.log(`Compra efetuada com sucesso, seu troco é: R$ ${mesada - bicicleta}`)
                }
                else if(mesada < bicicleta){
                    console.log("Saldo insuficiente")
                }
                else{
                    console.log("Opção inválida")
                }

                break
                default:
                    alert("Digite um número entre 1 e 3")
                }
        break;


    case 2: 
        console.log("Fique a vontade")
    break
    default:
    alert("Digite 1 ou 2")
} */

let valorProduto = 30;

let quantidadeComprada = parseInt(prompt("Digite a quantidade comprada do produto: "))

if(quantidadeComprada > 6){
    let totalComDesconto = (quantidadeComprada + valorProduto) - 0.05;
}
else if(quantidadeComprada <= 6){
    totalSemDesconto = quantidadeComprada * valorProduto;
    console.log(`O valor da compra é: R$ ${totalSemDesconto}`)
}

let pagamento = parseInt(prompt("Digite como deseja pagar\n1 - À prazo\n2 - À vista"))
switch(pagamento){
    case 1:
        if(totalComDesconto > 6){
        console.log(`O valor da sua compra foi de: R$ ${totalComDesconto}`)
        }
        else if(totalSemDesconto <= 6){
        console.log(`O valor da compra foi de: R$ ${totalSemDesconto} `)
        }
        else{
            console.log("Opção inválida")
        }
}   
    