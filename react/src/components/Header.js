import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
            {/*Links para as outras páginas juntamente da logo e slogan do Spotify*/}
            <div class="imgwhite">
                <Link to="/">
                    <img width="170px" height="50px" src={require("../assets/imgs/logos/Spotify_Logo_RGB_White.png")} alt="Logo Spotify Branca"/>
                </Link>
            </div>

            <div class="links">
                <div class="link-top">
                    <Link to="/signup" class="aheader"><strong>Inscreva-se</strong></Link>
                </div>
                <div class="link-top">
                    <Link to="/faq"  class="aheader" ><strong>Suporte</strong></Link>
                </div>
                <div class="link-top">
                    <a class="aheader" href="webplayer.html"><strong>Web player</strong></a>
                </div>
            </div>
        </header>
    )
}