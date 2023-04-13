import styles from "./cardpremium.module.css";

export default function CardPremium(props) {
  return (
    <div>
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <div className={styles.image}>
              <img src={props.image} alt={props.alt} />
            </div>
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}