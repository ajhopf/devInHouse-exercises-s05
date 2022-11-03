export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  calcularJurosSimples() {
    const jurosSimples = this.capitalInicial * this.taxaAplicada * this.tempo;
    return jurosSimples;
  }

  calcularJurosCompostos() {
    const jurosCompostos =
      this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;

    return jurosCompostos;
  }
}
