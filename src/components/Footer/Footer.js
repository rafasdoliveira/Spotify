import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imgwhite}>
        <a href="index.html">
          <img
            width="170px"
            height="50px"
            src="/images/logos/Spotify_Logo_RGB_White.png"
            alt="Logo Spotify Branca"
          />
        </a>
      </div>

      <div className={styles.developers}>
        <label>Powered By </label>
        <a
          class={styles.linkfooter}
          rel="noreferrer"
          href="https://github.com/jeosafaferreira"
          target="_blank"
        >
          Jeosafá Ferreira |
        </a>
        <a
          class={styles.linkfooter}
          rel="noreferrer"
          href="https://github.com/leonardovioliveira"
          target="_blank"
        >
          Leonardo Vincente |
        </a>
        <a
          class={styles.linkfooter}
          rel="noreferrer"
          href="https://github.com/rafasdoliveira"
          target="_blank"
        >
          Rafael Oliveira
        </a>
      </div>
    </footer>
  );
}
