## Exercício 1:

Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Crie uma classe Funcionario para representar um(a) empregado(a) de uma empresa, contendo os atributos cpf, nomeCompleto e salario.

Implemente também um método promover(percentual) que recebe como parâmetro um percentual, devendo o salário ser aumentado pelo percentual indicado no argumento do método.

Crie e utilize um objeto desta classe para testar a implementação.

Exemplo:

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500
Extras:

• Crie a classe em um arquivo separado Funcionario.js, a exporte como padrão (export default), importe-a em app.js e use-a no código.

• Valide o CPF informado e imprima no console se o CPF informado é válido ou não.
