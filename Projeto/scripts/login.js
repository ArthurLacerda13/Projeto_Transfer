// Passar para um lado e Para o outro

var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
    btnSignin.style.color = "white";
    btnSignup.style.color = "black";
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "94px"
    btnSignin.style.color = "black";
    btnSignup.style.color = "white";
})

// Exibir senha

function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
    else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }
}

// mensagem de erro

const form = document.getElementById('signin'); 
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const botaoEntrar = form.querySelector('button[type="submit"]');
const divMensagem = document.getElementById('message');

let emailTimeout;

const validarInputs = () => {
    const email = inputEmail.value.trim();
    const password = inputSenha.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const emailValido = regexEmail.test(email);
    const senhaValida = password.length >= 6;

    botaoEntrar.disabled = !(emailValido && senhaValida);
    return { emailValido, senhaValida };
};

const exibirMensagem = (msg, type) => {
    divMensagem.textContent = msg;
    divMensagem.className = type;
    divMensagem.style.display = msg ? 'block' : 'none';
};

const tratarMudancaEmail = () => {
    clearTimeout(emailTimeout);
    emailTimeout = setTimeout(() => {
        const { emailValido } = validarInputs();
        exibirMensagem(emailValido ? "" : "Por favor, insira um email válido.", "error");
    }, 1000);
};

const tratarMudancaSenha = () => {
    const { senhaValida } = validarInputs();
    exibirMensagem(senhaValida ? "" : "A senha deve ter pelo menos 6 caracteres.", "error");
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const { emailValido, senhaValida } = validarInputs();
    if (!emailValido) return exibirMensagem("Por favor, insira um email válido.", "error");
    if (!senhaValida) return exibirMensagem("A senha deve ter pelo menos 6 caracteres.", "error");

    exibirMensagem("Enviando dados...", "success");
    setTimeout(() => exibirMensagem("Login efetuado com sucesso!", "success"), 1000);
});

inputEmail.addEventListener('input', tratarMudancaEmail);
inputSenha.addEventListener('input', tratarMudancaSenha);
