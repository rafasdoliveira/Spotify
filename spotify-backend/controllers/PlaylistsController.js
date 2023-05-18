const pool = require('../db/connection.js')

const list = (request, response) => {
  pool.query('SELECT * FROM public.playlists ORDER BY titulo ASC', (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM public.playlists WHERE playlist_id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const create = (request, response) => {
  const { titulo, subtitulo, url_imagem } = request.body;

  pool.query(
    'INSERT INTO public.playlists (titulo, subtitulo, url_imagem) VALUES ($1, $2, $3) RETURNING playlist_id',
    [titulo, subtitulo, url_imagem],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao cadastrar.")
        throw error;
      }
      response.status(201).json({
        mensagem:'Cadastrado realizado com sucesso!',
        playlist_id: results.rows[0].playlist_id
      });
    }
  );
};

const update = (request, response) => {
  const id = parseInt(request.params.id);
  const { titulo, subtitulo, url_imagem } = request.body;

  pool.query(
    'UPDATE public.playlists SET titulo=$2, subtitulo=$3, url_imagem=$4 WHERE playlist_id=$1',
    [id, titulo, subtitulo, url_imagem],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao atualizar dados.")
        throw error;
      }
      response.status(200).send(`Playlist ${id} modificadaa com sucesso`);
    }
  );
};

const del = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM public.playlists WHERE playlist_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Playlist ${id} deletada com sucesso.`);
  });
};

module.exports = {
  list,
  getById,
  create,
  update,
  del
};
