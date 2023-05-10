import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import CardPlanos from "../../components/CardPlanos/CardPlano";
import CardPremium from "../../components/CardPremium/CardPremium";
import ButtonComece from "../../components/ButtonComece/ButtonComece";
import styles from "./home.module.css";

export default function App() {
  return (
    <main>
      {/*Importamos o componente Header*/}
      <Header />
      {/*Chamada para promo spotify*/}
      <div className={styles.promo}>
        <div className={styles.promotitle}>
          <h2>Curta o Premium grátis por 2 meses</h2>
          <p>Depois, pague somente R$ 19,90/mês. Cancele quando quiser.</p>
        </div>
      </div>
      <div className={styles.promo}>
        <div className={styles.botoespromo}>
          <ButtonComece />
        </div>

        <p className={styles.termos}>
          <a
            className={styles.aheader}
            href="https://www.spotify.com/br-pt/legal/premium-promotional-offer-terms/"
          >
            Sujeito a Termos e Condições.
          </a>
          Oferta de 2 meses grátis não disponível para quem já usou o Premium.
        </p>
      </div>
      {/*Nessa div colocamos os motivos para ser Spotify Premium */}
      <div className={styles.premium}>
        <div className={styles.title}>
          <h2>Por que ser Premium?</h2>
        </div>
      </div>

      <div className={styles.premium}>
        {/*Importamos o componente CardPremium*/}
        <CardPremium
          image="/images/premium/musicdown.png"
          alt="music download"
          title="Modo offline."
          subtitle="Ouça música onde estiver."
        />
        <CardPremium
          image="/images/premium/anuncios.png"
          alt="cell phone"
          title="Ouça música sem anúncios."
          subtitle="Curta música sem anúncios."
        />
        <CardPremium
          image="/images/premium/ordem.png"
          alt="musics"
          title="Ouça na ordem que quiser."
          subtitle="Qualquer música, qualquer ordem."
        />
        <CardPremium
          image="/images/premium/qualidade.jpg"
          alt="phone"
          title="Qualidade de som superior."
          subtitle="Sinta o som."
        />
      </div>

      {/*Nessa div colocamos os planos Spotify Premium */}
      <div className={styles.text}>
        <h1 className={styles.title}>Escolha seu plano Premium</h1>
        <p className={styles.subtitle}>
          Ouça sem limites no seu celular, alto-falante e em outros
          dispositivos.
        </p>
      </div>

      <div className={styles.planos}>
        {/*Importamos o componente CardPlanos*/}
        <CardPlanos
          tipo="Individual"
          oferta="R$ 19,90/mês após o período da oferta"
          conta="1 conta"
          beneficio1="Ouça músicas sem anúncios"
          beneficio2="Ouça em qualquer lugar — até quando estiver offline"
          beneficio3="Ouça músicas na ordem que quiser"
          beneficio4="Faça um plano pré-pago ou uma assinatura"
        />
        <CardPlanos
          tipo="Duo"
          oferta="R$ 24,90/mês após o período da oferta"
          conta="2 contas"
          beneficio1="2 contas Premium para pessoas que moram juntas"
          beneficio2="Música sem anúncios, no modo offline e na ordem que você quiser"
          beneficio3="Ouça músicas na ordem que quiser"
          beneficio4="Faça um plano pré-pago ou uma assinatura"
        />
        <CardPlanos
          tipo="Família"
          oferta="R$ 34,90/mês após o período da oferta"
          conta="Até 6 contas"
          beneficio1="6 contas Premium para familiares que moram no mesmo endereço"
          beneficio2="Bloqueie músicas com conteúdo explícito"
          beneficio3="Música sem anúncios, no modo offline e na ordem que você quiser"
          beneficio4="Faça um plano pré-pago ou uma assinatura"
        />
        <CardPlanos
          tipo="Universitário"
          oferta="R$ 9,90/mês após o período da oferta"
          conta="1 conta"
          beneficio1="Desconto especial para estudantes universitários elegíveis"
          beneficio2="Ouça músicas sem anúncios"
          beneficio3="Ouça em qualquer lugar — até quando estiver offline"
          beneficio4="Ouça músicas na ordem que quiser"
        />
      </div>
      {/*Importamos o componente Footer*/}
      <Footer />
    </main>
  );
}
