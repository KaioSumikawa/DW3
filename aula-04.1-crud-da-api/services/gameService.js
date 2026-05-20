import Game from '../models/Games.js';

class GamesService { 
    async getAll() {
        try {
            return await Game.find();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async create(title, platform, year, price) {
        try {
            const newGame = new Game({ title, platform, year, price });
            return await newGame.save();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async delete(id) {
        try {
            return await Game.findByIdAndDelete(id);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async update(id, title, platform, year, price) {
        try {
            const updatedGame = await Game.findByIdAndUpdate(
                id, 
                { title, platform, year, price }, 
                { new: true }
            );
            return updatedGame;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getOne(id) {
        try {
            // findById é mais direto que findOne({ _id: id })
            return await Game.findById(id);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new GamesService();