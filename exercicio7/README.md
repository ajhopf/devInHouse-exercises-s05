# Exercicio 7

Em quatro arquivos (index.html, app.js, Time.js, Partida.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

O sistema de pontuação por partida no Campeonato Brasileiro de Futebol funciona assim:

Vitória = 3 pontos
Derrota = 0 pontos
Empate = 1 ponto
a) Em Time.js, implemente uma classe Time com os atributos: nome do time, sigla do time, quantidade de vitorias, derrotas, empates,
quantidade de golsMarcados e golsSofridos.

b) Adicione nesta classe métodos getters para atributos calculados: numeroDeJogos (soma de vitorias, derrotas e empates) e numeroDePontos (aplicando regra de pontuação acima).

c) Em Partida.js, crie uma classe Partida, com os atributos: siglaTimeA, golsTimeA, siglaTimeB, golsTimeB.

d) Adicione na classe Time um método computarPartida, que receba uma instância (objeto) de Partida como argumento. Se a partida recebida como argumento tiver como time participante (time A ou B) o time da classe,
deve-se atualizar os atributos de vitorias/derrotas/empates do time dependendo do resultado da partida e golsMarcados/golsSofridos conforme placar da partida.

e) Adicione mais um método exibirSituacao() que imprima no console todos os atributos do time (para conferência das implementações acima).

f) Em app.js importe e teste suas classes criando uma instâncias dela e instâncias de partidas a serem computadas, para conferir os resultados.

Atividade
