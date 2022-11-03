# Exercicio 4

Em três arquivos (index.html, app.js, Animal.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

No arquivo Animal.js, crie a classe Animal com os atributos nome, idade e som.

Depois crie as subclasses (de Animal) Cachorro e Gato com os atributos nome e idade, inicializando o atributo som da superclasse com "latido" e "miado", respectivamente e exporte ambas com export comuns.

Importe as classes Cahorro e Gato para app.js, crie uma instância de cada subclasse para testar, conforme abaixo.

Exemplos:

const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som ); // "latido"  
const frajola = new Gato('frajola', 8);
console.log( frajola.som ); // "miado"
