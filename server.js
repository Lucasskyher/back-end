const express = require('express');
const cors = require('cors');
const fs = require('fs');

const server = express();
server.use(express.json());
server.use(cors());

const DB_FILE = 'db.json';

//  Função para ler os dados do `db.json`
function readDB() {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data).items;
}

//  Função para salvar os dados no `db.json`
function writeDB(items) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ items }, null, 2));
}

//  Retorna todos os investimentos
server.get('/items', (req, res) => {
    return res.json(readDB());
});

//  Retorna um único investimento pelo ID
server.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const items = readDB();
    const item = items.find(it => it.id == id);
    return item ? res.json(item) : res.status(404).json({ message: 'Item não encontrado' });
});

//  Criar um novo investimento
server.post('/items', (req, res) => {
    const { name, type, value, date } = req.body;
    const items = readDB();
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, name, type, value, date };

    items.push(newItem);
    writeDB(items);
    
    return res.status(201).json(newItem);
});

//  Atualizar um investimento
server.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, type, value, date } = req.body;
    let items = readDB();
    const index = items.findIndex(it => it.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Item não encontrado' });
    }

    items[index] = { id: Number(id), name, type, value, date };
    writeDB(items);
    
    return res.json(items[index]);
});

//  Deletar um investimento
server.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    let items = readDB();
    const index = items.findIndex(it => it.id == id);

    if (index === -1) {
        return res.status(404).json({ message: 'Item não encontrado' });
    }

    items.splice(index, 1);
    writeDB(items);
    
    return res.json({ message: "Item deletado com sucesso" });
});

server.listen(3000, () => {
    console.log("🚀 Servidor rodando na porta 3000");
});