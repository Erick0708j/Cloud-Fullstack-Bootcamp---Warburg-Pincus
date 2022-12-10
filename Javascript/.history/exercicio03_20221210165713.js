/* 
1 - a vista debito 10% desconto;
2 - a vista no dinhero ou pix 15% desconto ;
3 - em duas vezes, preço normal sem juro;
4 - Acima de duas vezes, preço normal mais 10% de juros; 

*/


const precoEtiqueta = 100;
const formaPagamento = 1;

if(formaPagamento === 1 ){
    console.log(precoEtiqueta * 0.1)
}