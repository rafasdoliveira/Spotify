import styles from "./playing.module.css";

export default function Playing(props) {
  return (
      <div className={styles.main}>
        <div className={styles.loader}>
          <div className={styles.song}>
            <p className={styles.name}>{props.song}</p>
            <p className={styles.artist}>{props.artist}</p>
          </div>
          <div className={styles.albumcover}></div>
          <div className={styles.play}>
            <div className={styles.load}></div>
            <div className={styles.load}></div>
            <div className={styles.load}></div>
            <div className={styles.load}></div>
          </div>
        </div>
      </div>
  );
}
