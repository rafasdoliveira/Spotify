import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/*Links para as outras páginas juntamente da logo e slogan do Spotify*/}
      <div className={styles.imgwhite}>
        <Link to="/">
          <img
            width="170px"
            height="50px"
            src="/images/logos/Spotify_Logo_RGB_White.png"
            alt="Logo Spotify Branca"
          />
        </Link>
      </div>

      <div className={styles.links}>
        <div className={styles.linktop}>
          <Link to="/signup" className="aheader">
            <strong>Inscreva-se</strong>
          </Link>
        </div>
        <div className={styles.linktop}>
          <Link to="/faq" className="aheader">
            <strong>Suporte</strong>
          </Link>
        </div>
        <div className={styles.linktop}>
          <Link className="aheader" to="/webplayer">
            <strong>Web player</strong>
          </Link>
        </div>
      </div>
    </header>
  );
}
