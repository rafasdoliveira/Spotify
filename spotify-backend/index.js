const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

const usuariosController = require('./controllers/UsuariosController');
const playlistsController = require('./controllers/PlaylistsController');
const musicasController = require('./controllers/MusicasController');
const musicaPlaylistController = require('./controllers/MusicaPlaylistController');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

try{

//USUÁRIOS
app.get('/usuarios', usuariosController.list);  
app.get('/usuarios/:id', usuariosController.getById);
app.post('/usuarios', usuariosController.create);
app.put('/usuarios/:id', usuariosController.update);
app.delete('/usuarios/:id', usuariosController.del);
app.post('/usuarios/login', usuariosController.login);

//MÚSICAS
app.get('/musicas', musicasController.list);
app.get('/musicas/:id', musicasController.getById);
app.get('/musicas/titulo/:titulo', musicasController.getByTitulo);
app.post('/musicas', musicasController.create);
app.put('/musicas/:id', musicasController.update);
app.delete('/musicas/:id', musicasController.del);

//PLAYLISTS
app.get('/playlists', playlistsController.list);
app.get('/playlists/:id', playlistsController.getById);
app.post('/playlists', playlistsController.create);
app.put('/playlists/:id', playlistsController.update);
app.delete('/playlists/:id', playlistsController.del);

//MÚSICA PLAYLIST
app.get('/musicaplaylist', musicaPlaylistController.list);
app.get('/musicaplaylist/musica/:id', musicaPlaylistController.getByMusicaId);
app.get('/musicaplaylist/playlist/:id', musicaPlaylistController.getByPlaylistId);
app.post('/musicaplaylist', musicaPlaylistController.create);
app.put('/musicaplaylist/:id', musicaPlaylistController.update);
app.delete('/musicaplaylist/:id', musicaPlaylistController.del);
}catch(error){
  console.log("erro ...!")
}
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});