// import Header from "../../components/Header/Header";
import styles from "./cadastro.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    function cadastrar(){
        axios.post('https://keztncwqdiwmjhvxyczy.supabase.co/rest/v1/usuarios',{
            nome: nome,
            email: email,
            senha: senha
        }, {headers:{

            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRuY3dxZGl3bWpodnh5Y3p5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjYzOTk3NywiZXhwIjoxOTk4MjE1OTc3fQ.7-urr08m7_KARrZ0_FuuJEDopAdzw1MIeOZSDmSvEyQ'
        }}).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        
    }

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <input type="checkbox" className={styles.chk} aria-hidden="true"/>

                <div className={styles.signup}>
                        <label className={styles.label} htmlFor="chk" aria-hidden="true">Cadastre-se</label>
                        <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} placeholder="Nome de Usuário" required=""/>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required=""/>
                        <input type="password" name="pswd" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" required=""/>
                        <button className={styles.button}><Link onClick={cadastrar} to="/login">Efetuar Cadastro</Link></button>
                </div>
            </div>
        </div>
    );
}