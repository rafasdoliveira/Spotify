import { Link } from "react-router-dom";
import styles from "./cards.module.css";

export default function CardWebPlayer(props) {
  return (
    <Link to={props.src} >
      <div className={styles.card}>
        <div className={styles.cardimage}>
          <img className={styles.image} src={props.image} alt=""/>
        </div>
        <div className={styles.category}> {props.title} </div>
        <div className={styles.heading}>{props.subtitle}</div>
      </div>
    </Link>
  );
}
