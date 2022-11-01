# Exercicio 3

Em três arquivos (index.html, app.js, Personagem.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

Para modelar um jogo de ação, em Personajem.js, crie a classe Personagem que possua os atributos nome e percentualVida e a exporte como padrão (export default).

O nome deve ser indicado no construtor da classe, e o percentual de vida é iniciado com 100.

Crie o método sofreuDano(percentualDano) cuja implementação diminua o valor de percentualDano do percentual de vida do personagem
(até o limite de zero).

Crie também o método usouKitMedico() que adiciona 10 pontos ao percentual de vida do personagem (até o limite de 100).

Importe a classe Personagem em app.js e crie pelo menos uma instância de personagem para testar.

Exemplo:

const alyx = new Personagem("Alyx");

console.log(alyx.percentualVida); // 100

alyx.sofreuDano(50);

console.log(alyx.percentualVida); // 50

alyx.usouKitMedico();

console.log(alyx.percentualVida); // 60
