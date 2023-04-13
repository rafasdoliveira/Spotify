import styles from "./buttoncomece.module.css";

export default function ButtonComece(props) {
  return (
    <div className={styles.botaoplano}>
      <button className={styles.signup} type="singup">
      <strong>COMECE AGORA!</strong>
      </button>
    </div>
  );
}
