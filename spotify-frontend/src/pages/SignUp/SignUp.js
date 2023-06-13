import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import styles from "./signup.module.css";
import button from "../../components/ButtonComece/buttoncomece.module.css";
import { Link } from "react-router-dom";
import styleForm from "./forms.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp(){

  const navigate = useNavigate()
  const [txtNome, setTxtNome] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtSenha, setTxtSenha] = useState('')

   const cadastrar = () =>{
      axios.post('http://localhost:8081/usuarios/', {
        nome: txtNome,
        email: txtEmail,
        senha: txtSenha
        })
        .then(function (response) {
          alert(response.data.mensagem)
          navigate("/login")
        })
        .catch(function (error) {
            console.log(error);
            alert(error)
        });
}

  return (
    <main>
      <Header />
      <div className={styles.css}>
        <div className={styles.formstitle}>
          <h2>Inscreva-se grátis e comece a curtir.</h2>
        </div>
      </div>
      <div className={styleForm.dados}>
          <div className={styleForm.formulario}>
            <input
              className={styleForm.input}
              type='text'
              placeholder='Nome completo'
              onChange={(e)=> setTxtNome(e.target.value)}
              required
            />
            <input
              className={styleForm.input}
              type='text'
              placeholder='E-mail'
              onChange={(e)=> setTxtEmail(e.target.value)}
              required
            />
            <input
              className={styleForm.input}
              type='password'
              placeholder='Senha'
              onChange={(e)=> setTxtSenha(e.target.value)}
              required
            />
          </div>
      </div>
        <center>
          <button className={button.signup} type="signup">
            <strong><Link onClick={cadastrar}> COMECE AGORA!</Link></strong>
          </button>
          </center>
          <br/><br/>
      <Footer />
    </main>
  );
}
