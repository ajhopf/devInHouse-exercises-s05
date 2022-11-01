import Fatura from './Fatura.js';

const produto1 = new Fatura(1, 'produto1');
const produto2 = new Fatura(2, 'produto2', 10, 7);

console.log(produto1);
console.log(produto1.valorTotal);

console.log(produto2);
console.log(produto2.valorTotal);
