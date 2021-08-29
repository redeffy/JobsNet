const Candidate = require('./candidate');

module.exports = {
    async register(req, res){
        console.log('body',req.body)
        const {nome, cargo, dataNascimento, estadoCivil, sexo, cep, endereco, número, complemento, bairro, cidade, estado, telefone, celular, linkedln, email, identidade, cpf, possuiVeiculo, habilitacao} = req.body;
        
        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.número = número;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.telefone = telefone;
        newCandidate.celular = celular;
        newCandidate.linkedln = linkedln;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.possuiVeiculo = possuiVeiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) =>{
            if (err){
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(savedCandidate);
        });
    },
};