import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Playing from "../../components/Playing/playing";
import styles from "../../components/Playing/playing.module.css";

export default function Playlist (){
  const {id} = useParams();
  let m1={
    song: '',
    artist: ''
  }
  const m2={
    song: '',
    artist: ''
  }
  const m3={
    song: '',
    artist: ''
  }

  switch(id){
    case '1':
      m1.song = 'Quero ser feliz também'
      m1.artist = 'Nossa missão'

      m2.song = 'Você me encantou demais'
      m2.artist = 'Natiruts Acústico'
      
      m3.song = 'Sorri, Sou Rei'
      m3.artist = 'Raçaman'
    break;
    case '2':
      m1.song = 'Para Onde Eu Irei?'
      m1.artist = 'Live Church - 2020'

      m2.song = 'Só Tu És Santo'
      m2.artist = 'Uma Coisa (Ao Vivo) - 2017'
      
      m3.song = 'Para Que Entre o Rei'
      m3.artist = 'Uma Coisa (Ao Vivo) - 2017'
      break;
    case '3':
      m1.song = 'Música 1 da PlayList 3'
      m1.artist = 'Artista 1 da PlayList 3'

      m2.song = 'Música 2 da PlayList 3'
      m2.artist = 'Artista 2 da PlayList 3'
      
      m3.song = 'Música 3 da PlayList 3'
      m3.artist = 'Artista 3 da PlayList 3'
      break;
      default:
  }
return (
  <main>
    <Header />
    <div className={styles.main}>
      <div className={styles.currentplaying}>
        <p className={styles.heading}>Tocando Agora</p>
      </div>
    </div>
    <Playing
    song={m1.song}
    artist={m1.artist}
    />
    <Playing
    song={m2.song}
    artist={m2.artist}
    />
    <Playing
    song={m3.song}
    artist={m3.artist}
    />
    <Footer />
  </main>
);}
