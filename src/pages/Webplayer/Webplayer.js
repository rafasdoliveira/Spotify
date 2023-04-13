import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardWebPlayer from "../../components/CardWebPlayer/Cards";
import styles from "./webplayer.module.css";

export default function Webplayer() {
  return (
    <div>
      <main>
        <Header />
        <div className={styles.webplayer}>
          <div className={styles.cardtop}>
            <CardWebPlayer
              src="/playlist/1"
              className={styles.image}
              image="/cards/reggae.jpg"
              title="Natiruts"
              subtitle="O melhor de Natiruts!"
            />
            <CardWebPlayer
              src="/playlist/2"
              image="/cards/morada.jpg"
              title="Morada"
              subtitle="Os melhores louvores para se concetar com o Pai."
            />
            <CardWebPlayer
              src="/playlist/3"
              image="/cards/workout.jpg"
              title="Run This Town"
              subtitle="Run to the world of R&B and hip-hop."
            />
            <CardWebPlayer
              src="/playlist/4"
              image="/cards/hipster.jpg"
              title="Hipsters Ponto Tech"
              subtitle="Discussões sobre tecnologia, programação, desgin, startups e as útilmas tendências."
            />
          </div>
          <div className={styles.carddown}>
            <CardWebPlayer
              src="/playlist/5"
              image="/cards/surf.jpg"
              title="Surf Trip"
              subtitle="Entre na vibe do surf com os melhores sons e as melhores vibrações!"
            />
            <CardWebPlayer
              src="/playlist/6"
              image="/cards/jazz.jpg"
              title="Jazz for Reading"
              subtitle="Jazz piano to accompany your reading."
            />
            <CardWebPlayer
              src="/playlist/7"
              image="/cards/keepcalm.jpg"
              title="Keep Calm"
              subtitle="Um pouco de tudo para você."
            />
            <CardWebPlayer
              src="/playlist/8"
              image="/cards/Parachutes.jpg"
              title="Parachutes"
              subtitle="Album 2000 Coldplay!"
            />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
