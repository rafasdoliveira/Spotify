// import Header from "../../components/Header/Header";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario, setUsuario] = useState('')

    function login(){
        try {
        axios.get('https://keztncwqdiwmjhvxyczy.supabase.co/rest/v1/usuarios?email=eq.' + email + '&senha=eq.' + senha,{
            headers:{
               apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRuY3dxZGl3bWpodnh5Y3p5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjYzOTk3NywiZXhwIjoxOTk4MjE1OTc3fQ.7-urr08m7_KARrZ0_FuuJEDopAdzw1MIeOZSDmSvEyQ'
            }
        }).then(function (response){
            setUsuario(response.data)
            localStorage.setItem("usuarioLogado", JSON.stringify(response.data));
            console.log(response.data[0].nome)
        });

        
    } catch(e) {
        console.log(e)
    }
    }

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.login}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail" required=""/>
                        <input type="password" name="pswd" onChange={(e)=> setSenha(e.target.value)} placeholder="Senha" required=""/>
                        <button className={styles.button}><Link onClick={login} to="">Entrar</Link></button>
                        <button className={styles.button}><Link to="/cadastro">Cadastre-se</Link></button>
                </div>
            </div>
        </div>
    );
}