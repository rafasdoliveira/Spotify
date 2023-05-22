const pool = require('../db/connection.js')

const list = (request, response) => {
  pool.query('SELECT * FROM public.musica_playlist JOIN public.musicas USING(musica_id) ORDER BY playlist_id ASC', (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getByMusicaId = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM public.musica_playlist WHERE musica_id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getByPlaylistId = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM public.musica_playlist WHERE playlist_id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const create = (request, response) => {
  const { musica_id, playlist_id } = request.body;

  pool.query(
    'INSERT INTO public.musica_playlist (musica_id, playlist_id) VALUES ($1, $2) RETURNING musica_playlist_id',
    [musica_id, playlist_id],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao cadastrar.")
        throw error;
      }
      response.status(201).json({
        mensagem:'Cadastro realizado com sucesso!',
        musica_playlist_id: results.rows[0].musica_playlist_id
      });
    }
  );
};

const update = (request, response) => {
  const musica_playlist_id = parseInt(request.params.id);
  const { musica_id, playlist_id } = request.body;

  pool.query(
    'UPDATE public.musica_playlist SET musica_id=$2, playlist_id=$3 WHERE musica_playlist_id=$1',
    [musica_id, playlist_id],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao atualizar dados.")
        throw error;
      }
      response.status(200).send(`Registro ${musica_playlist_id} atualizado com sucesso`);
    }
  );
};

const del = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM public.musica_playlist WHERE musica_playlist_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Usuário ${id} deletado com sucesso.`);
  });
};

module.exports = {
  list,
  getByMusicaId,
  getByPlaylistId,
  create,
  update,
  del
};
