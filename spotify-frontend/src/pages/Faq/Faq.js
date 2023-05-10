import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import styles from "./faq.module.css";

function Faq() {
  return (
    <body>
      <Header />
      <div>
        <p className={styles.enfase}>FAQ</p>
      </div>

      <div className={styles.row} style={{ height: "800px" }}>
        <div className={styles.faqcolumn}>
          <div className={styles.card}>
            <div>
              <p className={styles.title} >
                Eu já tenho uma conta Spotify Premium. Preciso criar uma segunda
                conta para o Spotify Family?
              </p>
            </div>
            <div>
              <p className={styles.text}>
                Não. Você pode fazer o upgrade para o Spotify Family na seção
                Gerenciar minha assinatura das configurações de sua conta. Todo
                o seu conteúdo favorito e baixado também será salvo quando você
                fizer o upgrade do seu plano.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <p className={styles.title}>
                Qual é a diferença entre uma Conta independente e um perfil do
                seu plano Spotify Family?
              </p>
            </div>
            <div>
              <p className={styles.text}>
                Contas independentes são convidadas pelo Admin e depois de
                juntarem-se elas têm suas próprias credenciais privadas de
                login. Perfis são criados pela conta Admin e usam as mesmas
                credenciais de login. Você pode adicionar um total de 5 contas
                independentes e perfis em um plano Spotify Family.
              </p>
            </div>
          </div>
        </div>
        <div div className={styles.faqcolumn}>
          <div className={styles.card}>
            <div>
              <p class={styles.title}>
                Nós já temos duas ou mais contas Spotify na nossa casa. Posso
                mesclar todos os nossos favoritos em uma única conta?
              </p>
            </div>
            <div>
              <p className={styles.text}>
                Sim. Você vai precisar configurar sua conta Spotify Family de
                uma de suas assinaturas existentes, o que permitirá que você
                adicione 5 membros adicionais. Seus favoritos e os membros
                convidados por você serão automaticamente transferidos.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <p className={styles.title}>
                Como adiciono membros ao meu plano Spotify Family?
              </p>
            </div>
            <div>
              <p className={styles.text}>
                Para criar um perfil, abra suas configurações, selecione
                Adicionar um membro, e então Criar um perfil. Preencha os dados
                do perfil e conclua o processo. Para adicionar contas
                independentes ao seu plano, siga as mesmas etapas, mas depois de
                Adicionar um membro clique em Enviar um convite. Depois que
                tiverem aceito seu convite para se unirem ao seu plano, as
                contas independentes podem usar suas credenciais de conta
                Spotify para fazerem login e serem adicionadas ao plano Spotify
                Family. Elas também têm a opção de criar uma conta Spotify nova,
                se já não tiverem uma antes de receber o convite.
              </p>
            </div>
          </div>
        </div>
        <div div clasNames={styles.faqcolumn}>
          <div className={styles.card}>
            <div>
              <p className={styles.title}>
                Quantos dispositivos podem ser pareados com uma conta Spotify
                Family?
              </p>
            </div>
            <div>
              <p className={styles.text}>
                Você pode parear um total de 13 dispositivos entre todas as
                contas Spotify Family. A conta Admin pode ser vinculada a 3
                dispositivos conectados. Cada conta adicional pode ser pareada
                com até 2 dispositivos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
export default Faq;
