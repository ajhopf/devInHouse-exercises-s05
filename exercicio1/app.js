import Funcionario from './Funcionario.js';

const ada = new Funcionario('528.442.040-31', 'Ada Lovelace', 1000);
ada.promover(50);

const andre = new Funcionario('022.567.470-01', 'André Hopf', 3000);
andre.promover(25);

console.log(ada);
console.log(ada.cpfValido());
console.log(andre);
console.log(andre.cpfValido());
