export default class Personagem {
  percentualVida = 100;

  constructor(nome) {
    this.nome = nome;
  }

  sofreuDano(percentualDano) {
    this.percentualVida -= percentualDano;

    if (this.percentualVida < 0) {
      this.percentualVida = 0;
    }
  }

  usouKitMedico() {
    this.percentualVida += 10;
  }
}
