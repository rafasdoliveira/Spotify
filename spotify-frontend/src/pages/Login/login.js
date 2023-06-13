import Header from "../../components/Header/Header";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [txtEmail, setTxtEmail] = useState('')
    const [txtSenha, setTxtSenha] = useState('')
    const navigate = useNavigate()

    function logar(){
        axios.post('http://localhost:8081/usuarios/login', {
            email: txtEmail,
            senha: txtSenha
            })
            .then(function (response) {
                if(response.data.authorized)
                    navigate("/webplayer")
                else
                alert("Combinação de e-mail e senha inválida.")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Header/>
            <div className={styles.body}>
                <div className={styles.main}>
                    <div className={styles.login}>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" onChange={(e)=> setTxtEmail(e.target.value)} placeholder="E-mail" required=""/>
                            <input type="password" name="pswd" onChange={(e)=> setTxtSenha(e.target.value)} placeholder="Senha" required=""/>
                            <button className={styles.button}><Link onClick={logar}>Entrar</Link></button>
                            <button className={styles.button}><Link to="/cadastro">Cadastre-se</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}