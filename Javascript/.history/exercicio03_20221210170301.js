/* 
1 - a vista debito 10% desconto;
2 - a vista no dinhero ou pix 15% desconto ;
3 - em duas vezes, preço normal sem juro;
4 - Acima de duas vezes, preço normal mais 10% de juros; 

*/


const precoEtiqueta = 100;
const formaPagamento = 50;

if(formaPagamento === 1 ){
    console.log(precoEtiqueta- (precoEtiqueta * 0.1));
}else if (formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
}else if (formaPagamento ===3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}