import Time from './Time.js';
import Partida from './Partida.js';

const inter = new Time('Internacional', 'INT');

console.log(inter);

const gremio = new Time('Gremio', 'GRE');

console.log(gremio);

const matchDay = new Partida('INT', 4, 'GRE', 2);

const matchDayReturn = new Partida('INT', 3, 'GRE', 3);
const anotherMatch = new Partida('INT', 4, 'FLA', 3);

inter.computarPartida(matchDay);
gremio.computarPartida(matchDay);
console.log('Primeiro turno');
inter.exibirSituacao();
gremio.exibirSituacao();
console.log('Segundo turno');
inter.computarPartida(matchDayReturn);
gremio.computarPartida(matchDayReturn);
inter.exibirSituacao();
gremio.exibirSituacao();
inter.computarPartida(anotherMatch);
//testando se não houver jogado se muda algo
gremio.computarPartida(anotherMatch);

inter.exibirSituacao();
console.log(
  `Número de pontos do inter após ${inter.numeroDeJogos} jogos: ${inter.numeroDePontos}`
);
gremio.exibirSituacao();
console.log(
  `Número de pontos do gremio após ${gremio.numeroDeJogos} jogos: ${gremio.numeroDePontos}`
);
