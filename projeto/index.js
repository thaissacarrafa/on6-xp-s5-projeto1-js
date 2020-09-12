console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

/* Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior). Utilize a lista contida no arquivo database.js */

const db = require('./database')
const readline = require('readline-sync')

 console.log(db)  

const {produtos}=db
console.table(produtos) 

/* aqui faço a lista em ordem crescente de preço */
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)


/* No terminal receberei as informações das perguntas a seguir.( id, quantidade e cupom de desconto) */

const idProdutos = parseInt(readline.question("Qual o ID do produto que deseja adquirir?: "))

const quantidade = parseInt(readline.question("Qual a quantidade de produtos que deseja comprar?: "))

const desconto = parseInt(readline.question("Deseja aplicar algum cupom de desconto a sua compra? "))


function procurar(produto){
  return produto.id === idProdutos
}

// definindo a const produtoEncontrado //
const produtoEncontrado = produtos.find(procurar)
console.table (produtoEncontrado) 


// Calculo do subtotal sem desconto //
const subTotal = produtoEncontrado.preco * quantidade
subTotal.toLocaleString('pt-BR');
console.log (`Sem o seu cupom de desconto, o valor da sua compra seria de R$ ${subTotal}`)


// Calculo do total com o desconto do cupom //
// primeiro vou calcular o valor do desconto //
 const descontoaplicado = subTotal * (desconto /100)
 descontoaplicado.toLocaleString('pt-BR');
 console.log( `O valor do desconto a ser aplicado em sua compra é de R$ ${descontoaplicado}`)

 // agora devo calcular o valor total já com o desconto //
 const valorTotal = subTotal - descontoaplicado
 subTotal.toLocaleString('pt-BR');
 console.log(`O valor total de sua compra aplicando o seu cupom de desconto é de R$ ${valorTotal}`)

 /* mostrar no console a data da compra */


 const hoje = new Date()
 const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log( `Data da compra: ${dia} / ${mes} / ${ano}`);
