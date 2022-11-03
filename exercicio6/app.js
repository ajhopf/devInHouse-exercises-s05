import Juros from './Juros.js';

const aplicacao1 = new Juros(10000, 0.07, 24);

const jurosCompostosAplicacao1 = aplicacao1.calcularJurosCompostos();
const jurosSimplesAplicacao1 = aplicacao1.calcularJurosSimples();

const aplicacao2 = new Juros(10000, 0.15, 10);

const jurosCompostosAplicacao2 = aplicacao2.calcularJurosCompostos();
const jurosSimplesAplicacao2 = aplicacao2.calcularJurosSimples();

console.log(
  `Os juros compostos da aplicação 1 após ${
    aplicacao1.tempo
  } meses é de: R$${jurosCompostosAplicacao1}. \n O capital total (capital inicial + juros) após o período é de R$${
    aplicacao1.capitalInicial + jurosCompostosAplicacao1
  }`
);

console.log(
  `Os juros simples da aplicação 1 após ${
    aplicacao1.tempo
  } meses é de: R$${jurosSimplesAplicacao1}. \n O capital total (capital inicial + juros) após o período é de R$${
    aplicacao1.capitalInicial + jurosSimplesAplicacao1
  }`
);

console.log(
  `Os juros compostos da aplicação 2 após ${
    aplicacao2.tempo
  } anos é de: R$${jurosCompostosAplicacao2}. \n O capital total (capital inicial + juros) após o período é de R$${
    aplicacao2.capitalInicial + jurosCompostosAplicacao2
  }`
);

console.log(
  `Os juros simples da aplicação 2 após ${
    aplicacao2.tempo
  } anos é de: R$${jurosSimplesAplicacao2}. \n O capital total (capital inicial + juros) após o período é de R$${
    aplicacao2.capitalInicial + jurosSimplesAplicacao2
  }`
);
