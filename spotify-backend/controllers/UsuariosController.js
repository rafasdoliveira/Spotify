const pool = require('../db/connection.js')

const list = (request, response) => {
  pool.query('SELECT * FROM public.usuarios ORDER BY usuario_id ASC', (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM public.usuarios WHERE usuario_id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).json("Erro ao consultar base de dados.")
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const create = (request, response) => {
  const { nome, email, senha, url_foto } = request.body;

  pool.query(
    'INSERT INTO public.usuarios (nome, email, senha, url_foto) VALUES ($1, $2, $3, $4) RETURNING usuario_id',
    [nome, email, senha, url_foto],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao cadastrar usuário.")
        throw error;
      }
      response.status(201).json({
        mensagem:'Usuário cadastrado com sucesso!',
        usuario_id: results.rows[0].usuario_id
      });
    }
  );
};

const update = (request, response) => {
  const usuario_id = parseInt(request.params.id);
  const { nome, email, senha, url_foto } = request.body;

  pool.query(
    'UPDATE public.usuarios SET nome=$2, email=$3, senha=$4, url_foto=$5 WHERE usuario_id=$1',
    [usuario_id, nome, email, senha, url_foto],
    (error, results) => {
      if (error) {
        response.status(500).json("Erro ao atualizar dados do usuário.")
        throw error;
      }
      response.status(200).send(`Usuário ${usuario_id} modificado com sucesso`);
    }
  );
};

const del = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM public.usuarios WHERE usuario_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Usuário ${id} deletado com sucesso.`);
  });
};

const login = (req, res) => {
  const {email, senha} = req.body;
  pool.query("SELECT (CASE WHEN count(*)>0 THEN TRUE ELSE FALSE END) as authorized FROM public.usuarios WHERE email = $1 AND senha = $2;",
  [email, senha], 
  (error, results) =>{
    if(error)
      throw error;
    res.status(200).json(results.rows[0])
  }
  )
};

module.exports = {
  list,
  getById,
  create,
  update,
  del,
  login
};
