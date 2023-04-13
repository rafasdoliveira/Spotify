import styles from "./checkbox.module.css"

export default function Checkbox(props) {
  return (
    <div>
      <div className={styles.checkbox}>
        <forms>
          <div className={styles.termos}>
            <input type="checkbox" />
            <label for="checkbox">{props.checkbox}</label>
          </div>
        </forms>
      </div>
    </div>
  );
}
