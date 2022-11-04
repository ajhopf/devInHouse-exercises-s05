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
    if (this.percentualVida <= 90) {
      this.percentualVida += 10;
    } else {
      this.percentualVida = 100;
    }
  }
}
