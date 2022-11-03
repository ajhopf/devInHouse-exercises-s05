# Exercicio 6

Em três arquivos (index.html, app.js, Juros.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

Os juros de uma aplicação podem ser calculados de forma simples ou composta.
Para o cálculo, geralmente se usa a letra C ou M para representar o montante final da aplicação, a letra i para representar a taxa aplicada (ao mês ou anual) e a letra t indicando o tempo (em meses ou anos) da aplicação.

Em Juros.js, crie uma classe Juros, que tenha como atributos o capitalInicial, a taxaAplicada e o tempo (no mesmo período: meses ou anos) exportando-a como padrão (export default).

a) Adicione o método calcularJurosSimples() que faça o cálculo usando a fórmula J = C _ i _ t

b) Adicione o método calcularJurosCompostos() que faça o cálculo usando a fórmula M = C \* (1 + i) \*\* t

c) Importe a classe em app.js e teste a implementação da classe imprimindo no console os valores de juros simples e composto para uma aplicação de 10.000 reais a uma taxa de 7% ao mês (ou seja, 0.07) pelo período de 24 meses.

d) Teste também (imprimindo igualmente no console) os valores de juros simples e composto para uma aplicação de 10.000 reais a uma taxa de 15% ao ano (ou seja, 0.15) pelo período de 10 anos.
