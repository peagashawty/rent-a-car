import db from './db.js';
import Usuario from "./data-models/Usuario.js";
// Sincroniza o banco de dados
await db.sync();

// Cria novo usuário
const novoUsuario = {nome:"Maria", email:"maria@gmail.com"};
// Salva o novo usuário no banco de dados
await Usuario.create(novoUsuario);
// Lista todos os usuários da tabela;
const usuarios = await Usuario.findAll();

usuarios.forEach(usuario => {
    console.log(usuario.id);
    console.log(usuario.nome);
    console.log(usuario.email);
    console.log(usuario.papel);
});

