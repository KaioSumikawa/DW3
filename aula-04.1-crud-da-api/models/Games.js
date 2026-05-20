import mongoose from "mongoose";
 
const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    platform: { type: String, required: true },
    price: { type: Number, required: true }
});
 
const Game = mongoose.model('Game', gameSchema);
 
export default Game;