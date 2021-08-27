const { text } = require('body-parser');
const mongoose = require('mongoose');
const { stringify } = require('qs');

const CandidateSchema = new mongoose.Schema({
    nome: {type: String, unique: false, required: true},
    cargo: {type: String, unique: false, required: true},
    dataNascimento: {type: String, unique: false, required: true},
    estadoCivil: {type: ['solteiro(a), casado(a), divorciado(a), viúvo(a)'], unique: false, required: false},
    sexo: {type: ['feminino', 'masculino', 'não binário', 'prefiro não informar'], unique: false, required: true},
    cep: {type:String, unique: false, required: true},
    endereco: {type: String, unique: false, required: true},
    número: {type: Number, unique: false, required:true},
    complemento: {type: String, unique:false, required: false},
    bairro:{type: String, unique:false, required: true},
    cidade:{type: String, unique: false, required: true},
    estado: {type: String, unique: false, required: true},
    telefone:{type: String, unique: false, required:false},
    celular:{type: String, unique: false, required:true},
    linkedln:{type:String, unique: false, required: false},
    email:{type: String, unique: false, required: true},
    identidade:{type:String, unique: false, required: false},
    cpf:{type: String, unique: true, required:true},
    possuiVeiculo: {type:['sim', 'não'], unique: false, required: false},
    habilitacao: {type: String, unique: false, required: false}
},{
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);