export default class Time {
  constructor(
    nome,
    sigla,
    vitorias = 0,
    derrotas = 0,
    empates = 0,
    golsMarcados = 0,
    golsSofridos = 0
  ) {
    this.nome = nome;
    this.sigla = sigla;
    this.vitorias = vitorias;
    this.derrotas = derrotas;
    this.empates = empates;
    this.golsMarcados = golsMarcados;
    this.golsSofridos = golsSofridos;
  }

  get numeroDeJogos() {
    return this.vitorias + this.derrotas + this.empates;
  }

  get numeroDePontos() {
    return this.vitorias * 3 + this.empates;
  }

  computarPartida(obj) {
    if (obj.siglaTimeA === this.sigla) {
      this.golsMarcados += obj.golsTimeA;
      this.golsSofridos += obj.golsTimeB;
      if (obj.golsTimeA > obj.golsTimeB) {
        this.vitorias++;
      } else if (obj.golsTimeA < obj.golsTimeB) {
        this.derrotas++;
      } else {
        this.empates++;
      }
    }
    if (obj.siglaTimeB === this.sigla) {
      this.golsMarcados += obj.golsTimeB;
      this.golsSofridos += obj.golsTimeA;
      if (obj.golsTimeB > obj.golsTimeA) {
        this.vitorias++;
      } else if (obj.golsTimeB < obj.golsTimeA) {
        this.derrotas++;
      } else {
        this.empates++;
      }
    }
  }

  exibirSituacao() {
    const situacaoAtual = {
      time: this.nome,
      partidasJogadas: this.numeroDeJogos,
      vitorias: this.vitorias,
      empates: this.empates,
      derrotas: this.derrotas,
      pontos: this.numeroDePontos,
      golsMarcados: this.golsMarcados,
      golsSofridos: this.golsSofridos,
      saldoDeGols: this.golsMarcados - this.golsSofridos
    };
    console.log(situacaoAtual);
    return situacaoAtual;
  }
}
