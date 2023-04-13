import ButtonComece from "../ButtonComece/ButtonComece";
import styles from "./cardplanos.module.css";

export default function CardPlanos(props) {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        {/*Conta individual*/}
        <div>
          <div>
            {/* Texto */}
            <h3>{props.tipo}</h3>
            <p>{props.oferta}</p>
            <p>{props.conta}</p>
            <ul>
              <li>{props.beneficio1}</li>
              <li>{props.beneficio2}</li>
              <li>{props.beneficio3}</li>
              <li>{props.beneficio4}</li>
            </ul>
          <ButtonComece className={styles.botao} />
          </div>
        </div>
      </div>
    </div>
  );
}
