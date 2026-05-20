import express from 'express';
// importando o mongoose
import mongoose from 'mongoose';
// importando os modelos
import Game from './models/Games.js';
// importando as rotas (routes)
import gameRoutes from './routes/gameRoutes.js';
 
const app = express();
 
// Configurações do express
app.use(express.json()); // Permite o uso de JSON na aplicação
 
// ATIVANDO A UTILIZAÇÃO DAS ROTAS (routes) NA APLICAÇÃO
app.use("/", gameRoutes);
 
// Iniciando a coneexão com o banco de dados MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/api-the-games')
 
// Rota de teste para verificar se a API está rodando
// app.get('/', (req, res) => {
//     const games = [
//         {
//             title: 'The Legend of Zelda: Breath of the Wild',
//             year : 2017,
//             platform : 'Nintendo Switch',
//             price : 299.99
//         },
//         {
//             title: 'Super Mario Odyssey',
//             year : 2017,
//             platform : 'Nintendo Switch',
//             price : 249.99
//         }
//     ]
//   res.status(200).json(games);
// });
 
// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
})
 