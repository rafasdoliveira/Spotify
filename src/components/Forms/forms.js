import styles from "./forms.module.css";

export default function Forms(props) {
  return (
    <div>
      <div className={styles.dados}>
        <forms>
          <div className={styles.formulario}>
            <label className={styles.label}>{props.label}</label>
            <input
              className={styles.input}
              type={props.type}
              placeholder={props.placeholder}
              required
            />
          </div>
        </forms>
      </div>
    </div>
  );
}
