import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Forms from "../../components/Forms/forms";
import Checkbox from "../../components/Checkbox/checkbox";
import styles from "./signup.module.css";
import button from "../../components/ButtonComece/buttoncomece.module.css";
import { Link } from "react-router-dom";

export default function SignUp(){
  return (
    <main>
      <Header />
      <div className={styles.css}>
        <div className={styles.formstitle}>
          <h2>Inscreva-se grátis e comece a curtir.</h2>
        </div>
      </div>
        <Forms
          label="Informe seu nome"
          type="text"
          placeholder="Informe seu nome"
        />
        <Forms
          label="Escolha um nome de usuário"
          type="text"
          placeholder="Aparecerá no seu perfil"
        />
          <Forms
            label="Qual sua data de nascimento"
            type="date"
            placeholder="Informe sua data de nascimento"
          />
        <Forms
          label="Qual seu e-mail"
          type="email"
          placeholder="Informe seu e-mail"
        />
        <Forms
          label="Confirme seu e-mail"
          type="email"
          placeholder="Informe seu e-mail"
        />
        <Forms
          label="Escolha uma senha"
          type="password"
          placeholder="Insira sua senha"
        />
      <Checkbox />
      <div className={styles.lgpd}>
        <p className={styles.plgpd}>
          Para saber mais sobre como o Spotify coleta, utiliza, compartilha e
          protege seus dados pessoais, leia a
          <a href="https://www.spotify.com/br/legal/privacy-policy/">
            Política de Privacidade do Spotify.
          </a>
        </p>
        <div className={button.botaoplano}>
          <form action={button.signup}>
            <button className={button.signup} type="singup">
              <strong><Link to="/userOk"> COMECE AGORA!</Link></strong>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
