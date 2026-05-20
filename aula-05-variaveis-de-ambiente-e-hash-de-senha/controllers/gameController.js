import gamesService from '../services/gameService.js';
import { ObjectId } from 'mongodb';

const getAllGames = async (req, res) => {
    try {
        const games = await gamesService.getAll();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar jogos.' });
    }
};

const createGame = async (req, res) => {
    try {
        const { title, platform, year, price } = req.body;
        const newGame = await gamesService.create(title, platform, year, price);
        res.status(201).json({ message: 'Jogo cadastrado com sucesso!', game: newGame });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar jogo.' });
    }
};

const deleteGame = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID inválido.' });

        const result = await gamesService.delete(id);
        if (result) {
            res.status(200).json({ message: "Jogo excluído com sucesso!" });
        } else {
            res.status(404).json({ message: "Jogo não encontrado." });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

const updateGame = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) return res.status(400).json({ error: 'ID inválido.' });

        const { title, platform, year, price } = req.body;
        const game = await gamesService.update(id, title, platform, year, price);
        
        if (game) {
            res.status(200).json({ message: 'Jogo atualizado com sucesso!', game });
        } else {
            res.status(404).json({ message: 'Jogo não encontrado para atualizar.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

const getOneGame = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'A ID informada é inválida.' });
        }

        // CORREÇÃO: gamesService (com 's')
        const game = await gamesService.getOne(id);

        if (!game) {
            res.status(404).json({ error: 'O jogo buscado não foi encontrado.' });
        } else {
            res.status(200).json({ game });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
};

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame };