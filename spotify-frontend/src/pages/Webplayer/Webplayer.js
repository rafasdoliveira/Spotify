/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardWebPlayer from "../../components/CardWebPlayer/Cards";
import styles from "./webplayer.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Webplayer() {
  const [playlists, setPlaylists] = useState([])
  const getPlaylists = async () => {
    const res = await axios.get('http://localhost:8081/playlists')  
    setPlaylists(res.data)
    console.log(playlists)
  }

  useEffect(()=>{
      getPlaylists()
  }, [])

  return (
    <div>
      <main>
        <Header />
        <div className={styles.webplayer}>
          <div className={styles.cardtop}>
            {playlists.map((playlist) => (
              <CardWebPlayer
              src={`/playlist/${playlist.id}`}
              className={styles.image}
              image={playlist.url_imagem}
              title={playlist.titulo}
              subtitle={playlist.subtitulo}
            />
            ))}
             <CardWebPlayer
              src="/playlist/add"
              className={styles.image}
              image="/cards/plus.jpg"
              title="Nova playlist ..."
              subtitle=""
            />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
