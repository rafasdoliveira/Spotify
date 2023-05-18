const pool = require('../db/connection.js')

const list = (request, response) => {
  pool.query('SELECT * FROM public.musicas ORDER BY titulo ASC', (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM public.musicas WHERE musica_id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getByTitulo = (req, res) => {
    const titulo = req.params.titulo;
    pool.query(
        `SELECT * FROM public.musicas WHERE titulo ILIKE '%${titulo}%'`, (error, result) => {
            if(error){
                res.status(500).json("Erro ao consultar base de dados.")
                throw error;
            }
            res.status(200).json(result.rows)
            }
    )
}

const create = (request, response) => {
  const { titulo, duracao, artista } = request.body;

  pool.query(
    'INSERT INTO public.musicas (titulo, duracao, artista) VALUES ($1, $2, $3) RETURNING musica_id',
    [titulo, duracao, artista],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao cadastrar.")
        throw error;
      }
      response.status(201).json({
        mensagem:'Cadastrado realizado com sucesso!',
        musica_id: results.rows[0].musica_id
      });
    }
  );
};

const update = (request, response) => {
  const id = parseInt(request.params.id);
  const { titulo, duracao, artista } = request.body;

  pool.query(
    'UPDATE public.musicas SET titulo=$2, duracao=$3, artista=$4 WHERE musica_id=$1',
    [ id, titulo, duracao, artista ],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao atualizar dados do usuário.")
        throw error;
      }
      response.status(200).send(`Música ${id} modificada com sucesso`);
    }
  );
};

const del = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM public.musicas WHERE musica_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Música ${id} deletada com sucesso.`);
  });
};

module.exports = {
  list,
  getById,
  getByTitulo,
  create,
  update,
  del
};
