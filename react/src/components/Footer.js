export default function Footer(){
    return(
        <footer>
            <div class="imgwhite">
                <img width="170px" height="50px" src={require("../assets/imgs/logos/Spotify_Logo_RGB_White.png")} alt="Logo Spotify Branca"/>
            </div>
            <div class="developers">
                <label>Powered By </label>
                <a class="link-footer" rel="noreferrer" href="https://github.com/jeosafaferreira" target="_blank">Jeosafá Ferreira |</a>
                <a class="link-footer" rel="noreferrer" href="https://github.com/leonardovioliveira" target="_blank">Leonardo Vincente |</a>
                <a class="link-footer" rel="noreferrer" href="https://github.com/rafasdoliveira" target="_blank">Rafael Oliveira</a>
            </div>
        </footer>
    )
}