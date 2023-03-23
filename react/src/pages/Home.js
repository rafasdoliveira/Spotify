import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
  return (
    <body>
      <Header/>
      {/*Chamada para promo spotify*/}
        <div class="promo">
          <div class="promotitle">
            <h2>Curta o Premium grátis por 2 meses</h2>
            <p>Depois, pague somente R$ 19,90/mês. Cancele quando quiser.</p>
          </div>
        </div>
        <div class="promo">
          <div class="botoespromo">
            <form action="signup.html">
              <button class="signup" type="singup">
                <strong>COMECE AGORA</strong>
              </button>
            </form>
            <form action="#planos">
              <button class="verplanos" type="planos">
                <strong>VER PLANOS</strong>
              </button>
            </form>
          </div>

          <p class="termos">
            <a class="aheader" href="https://www.spotify.com/br-pt/legal/premium-promotional-offer-terms/">
              Sujeito a Termos e Condições.
            </a>
            Oferta de 2 meses grátis não disponível para quem já usou o Premium.
          </p>
        </div>
        {/*Nessa div colocamos os motivos para ser Spotify Premium */}
        <div class="premium">
          <div class="premiumtitle">
            <h2>Por que ser Premium?</h2>
          </div>
        </div>
        <div class="premium">
          <div class="motivos">
            <ul>
              <li class="lip">
                <div class="imgpremium">
                  <img width="140px" height="120px" src={require("./../assets/imgs/premium/musicdown.png")} alt="music download"/>
                </div>
                <h4>Modo offline.</h4>
                <p>Ouça música onde estiver.</p>
              </li>
            </ul>
          </div>
          <div class="motivos">
            <ul>
              <li class="lip">
                <div class="imgpremium">
                  <img width="140px" height="120px" src={require("./../assets/imgs/premium/anuncios.png")} alt="anuncios"/>
                </div>
                <h4>Ouça música sem anúncios.</h4>
                <p>Curta música sem anúncios.</p>
              </li>
            </ul>
          </div>

          <div class="motivos">
            <ul>
              <li class="lip">
                <div class="imgpremium">
                  <img width="140px" height="120px" src={require("./../assets/imgs/premium/ordem.png")} alt="ordem"/>
                </div>
                <h4>Ouça na ordem que quiser.</h4>
                <p>Qualquer música em qualquer ordem.</p>
              </li>
            </ul>
          </div>

          <div class="motivos">
            <ul>
              <li class="lip">
                <div class="imgpremium">
                  <img width="140px" height="120px" src={require("./../assets/imgs/premium/qualidade.jpg")} alt="qualidade"/>
                </div>
                <h4>Qualidade de som superior.</h4>
                <p>Sinta o som.</p>
              </li>
            </ul>
          </div>
        </div>
        {/*Nessa div disponibilizamos os planos disponíveis*/}
        <div class="planos">
          <div class="row">
            <div class="planotitle">
              <h1>Escolha seu plano <strong>Premium</strong></h1>
              <p>Ouça sem limites no seu celular, alto-falante e em outros dispositivos.</p>
            </div>
          </div>
          <div class="row">
            {/*Conta individual*/}
            <div class="card-plano">
              <div style={{height: '400px'}}>
                {/* Texto */}
                <h3>Individual</h3>
                <p>R$ 19,90/mês após o período da oferta</p>
                <p>1 conta</p>
                <ul>
                  <li>Ouça músicas sem anúncios</li>
                  <li>Ouça em qualquer lugar — até quando estiver offline</li>
                  <li>Ouça músicas na ordem que quiser</li>
                  <li>Faça um plano pré-pago ou uma assinatura</li>
                </ul>
              </div>
              <div class="botaoplano">
                <form action="signup.html">
                  <button class="signup" type="singup">
                    <strong>COMECE AGORA!</strong>
                  </button>
                </form>
              </div>
            </div>
            {/*Conta Duo*/}
            <div class="card-plano">
              <div style={{height: '400px'}}>
                <h3>Duo</h3>
                <p>R$ 24,90/mês após o período da oferta</p>
                <p>2 contas</p>
                <ul>
                  <li>2 contas Premium para pessoas que moram juntas</li>
                  <li>Música sem anúncios, no modo offline e na ordem que você quiser</li>
                  <li>Faça um plano pré-pago ou uma assinatura</li>
                </ul>
              </div>
              <div class="botaoplano">
                <form action="signup.html">
                  <button class="signup" type="singup">
                    <strong>COMECE AGORA!</strong>
                  </button>
                </form>
              </div>
            </div>
            {/*Conta Família*/}
            <div class="card-plano">
              <div style={{height: '400px'}}>
                <h3>Família</h3>
                <p>R$ 34,90/mês após o período da oferta</p>
                <p>Até 6 contas</p>
                <ul>
                  <li>6 contas Premium para familiares que moram no mesmo endereço</li>
                  <li>Bloqueie músicas com conteúdo explícito</li>
                  <li>Música sem anúncios, no modo offline e na ordem que você quiser</li>
                  <li>Spotify Kids: um app separado, feito especialmente para crianças</li>
                  <li>Faça um plano pré-pago ou uma assinatura</li>
                </ul>
              </div>
              <div class="botaoplano">
                <form action="signup.html">
                  <button class="signup" type="singup">
                    <strong>COMECE AGORA!</strong>
                  </button>
                </form>
              </div>
            </div>
            {/*Conta Universitaria*/}
            <div class="card-plano">
              <div style={{height: '400px'}}>
                <h3>Universitário</h3>
                <p>R$ 9,90/mês após o período da oferta</p>
                <p>1 conta</p>
                <ul>
                  <li>Desconto especial para estudantes universitários elegíveis</li>
                  <li>Ouça músicas sem anúncios</li>
                  <li>Ouça em qualquer lugar — até quando estiver offline</li>
                  <li>Ouça músicas na ordem que quiser</li>
                </ul>
              </div>
              <div class="botaoplano">
                <form action="signup.html">
                  <button class="signup" type="singup">
                    <strong>COMECE AGORA!</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </body>
  );
}

export default App;