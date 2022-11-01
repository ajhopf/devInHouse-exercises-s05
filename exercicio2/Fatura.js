export default class Fatura {
  constructor(id, descricao, quantia, preco) {
    if (!quantia || quantia < 0) {
      this.quantia = 0;
    } else {
      this.quantia = quantia;
    }
    if (!preco || preco < 0) {
      this.preco = 0;
    } else {
      this.preco = preco;
    }
    this.id = id;
    this.descricao = descricao;
  }

  // obterValorTotal() {
  //   return this.quantia * this.preco;
  // }

  get valorTotal() {
    return this.quantia * this.preco;
  }
}
