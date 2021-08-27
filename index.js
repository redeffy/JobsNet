'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const cepValido = (numero) => /^[0-9]{8}$/.test(numero);


const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            alert ('CEP não encontrado!');
        }else {
            preencherFormulario(endereco);
        }
    }else{
        alert ('CEP incorreto, tente novamente!');
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);


        
    async function submit(){
        console.log('Submiting');

    try{ 
        const url = 'http://127.0.0.1:3000/register';
        const dados = await fetch(url, {
            method: "POST", headers: {
                'Content-Type': 'application/json'
              }, body:JSON.stringify({
                 nome : document.getElementById('nome').value,
                 cargo: document.getElementById('cargo').value,
                 dataNascimento: document.getElementById('dataNasc').value,
                 estadoCivil: document.getElementById('estCivil').value,
                 sexo: document.getElementById('sexo').value,
                 cep: document.getElementById('cep').value,
                 endereco: document.getElementById('endereco').value,
                 número: document.getElementById('num').value,
                 complemento: document.getElementById('comp').value,
                 bairro: document.getElementById('bairro').value,
                 cidade: document.getElementById('cidade').value,
                 estado: document.getElementById('estado').value,
                 telefone: document.getElementById('telfixo').value,
                 celular: document.getElementById('cel').value,
                 linkedln: document.getElementById('link').value,
                 email: document.getElementById('email').value,
                 identidade: document.getElementById('rg').value,
                 cpf: document.getElementById('cpf').value,
                 possuiVeiculo: document.getElementById('carro').value,
                 habilitacao: document.getElementById('cnh').value
                
            })
        });
    } catch (error) {
        if (error.code == 11000){
            alert('CPF duplicado!');
        }
    }
    }
