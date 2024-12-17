const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

nome.addEventListener('change', ()=> {
    nome.classList.remove('campo-vazio');
    nome.parentElement.classList.remove('aviso-de-campo-vazio');
    if(nome.value === ''){
        nome.classList.add('campo-vazio');
        nome.parentElement.classList.add('aviso-de-campo-vazio');
    };
});

email.addEventListener('change', ()=> {
    email.classList.remove('campo-vazio');
    email.parentElement.classList.remove('aviso-de-campo-vazio');
    if(email.value === ''){
        email.classList.add('campo-vazio');
        email.parentElement.classList.add('aviso-de-campo-vazio');
    };
});

telefone.addEventListener('change', ()=> {
    telefone.classList.remove('campo-vazio');
    telefone.parentElement.classList.remove('aviso-de-campo-vazio');
    if(telefone.value === ''){
        telefone.classList.add('campo-vazio');
        telefone.parentElement.classList.add('aviso-de-campo-vazio');
    };
});

mensagem.addEventListener('change', ()=> {
    mensagem.classList.remove('campo-vazio');
    mensagem.parentElement.classList.remove('aviso-de-campo-vazio');
    if(mensagem.value === ''){
        mensagem.classList.add('campo-vazio');
        mensagem.parentElement.classList.add('aviso-de-campo-vazio');
    };
});

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if(nome.value && email.value && telefone.value && mensagem.value){
        formulario.submit();
    };
});
