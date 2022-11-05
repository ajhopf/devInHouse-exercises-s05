import Usuario from './Usuario.js';

const andre = new Usuario('André Hopf', 'andre.hopf@gmail.com', 'andre123');

const form = document.getElementById('logarForm');
const mensagemPosLogin = document.querySelector('.mensagem h2');

const mostraMensagemDeSucesso = () => {
  // const h2 = document.createElement('h2');
  // h2.innerText = 'Usuário logado com sucesso!';
  // document.querySelector('.mensagem').appendChild(h2);

  mensagemPosLogin.innerText = 'Usuário logado com sucesso!';
  mensagemPosLogin.classList.remove('erro');
};

const mostraMensagemDeErro = () => {
  mensagemPosLogin.innerText = 'Credenciais inválidas';
  mensagemPosLogin.classList.add('erro');
};

form.addEventListener('submit', event => {
  event.preventDefault();

  let emailInformado = event.target.email.value;
  let senhaInformada = event.target.senha.value;

  if (andre.autenticar(emailInformado, senhaInformada)) {
    mostraMensagemDeSucesso();
  } else {
    mostraMensagemDeErro();
  }
});
