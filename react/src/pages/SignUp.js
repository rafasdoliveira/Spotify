import Header from '../components/Header'
import Footer from '../components/Footer'

function SignUp() {
  return (
    <body>
        <Header/>
    
        <div class="formstitle">
            <h2>Inscreva-se grátis e comece a curtir.</h2>
        </div>

        <div class="dados">
        <forms>
            <div class="formulario">
            <label class="formslabel">
                <strong>Qual é o seu e-mail?</strong>
            </label>
            <input class="input" type="email" placeholder="Insira seu e-mail." required/>
            </div>

            <div class="formulario">
            <label class="formslabel">
                <strong>Confirme seu e-mail</strong>
            </label>
            <input class="input" type="email" placeholder="Insira o e-mail novamente." required/>
            </div>

            <div class="formulario">
            <label class="formslabel">
                <strong>Crie uma senha</strong>
            </label>
            <input class="input" type="password" placeholder="Cria uma senha." required/>
            </div>

            <div class="formulario">
            <label class="formslabel">
                <strong>Como devemos chamar você?</strong>
            </label>
            <input class="input" type="text" placeholder="Insira um nome de perfil" required/>
            <p class="p-perfil">Isso aparece no seu perfil</p>
            </div>

            <div class="formulario">
                <label class="formslabel">
                    <strong>Qual sua data de nascimento?</strong>
                </label>
                <input class="input" type="date" placeholder="" required/>
            </div>
        </forms>
        
        </div>
        <div class="dados">
        <div class="formulario">
            <forms>
            <label>
                <strong>Qual é o seu gênero?</strong>
            </label>
            <label for="masculino">
                Masculino
            </label>
            <input type="radio" id="masculino" name="genero" value="masculino"/>

            <label for="feminino">
                Feminio
            </label>
            <input type="radio" id="feminino" name="genero" value="feminino"/>
            <label for="nbinario">
                Não binário
            </label>
            <input type="radio" id="nbinario" name="genero" value="nbinario"/>
            <label for="outros">
                Outros
            </label>
            <input type="radio" id="outros" name="genero" value="outros"/>
            <label for="notsay">
                Prefiro não dizer
            </label>
            <input type="radio" id="notsay" name="genero" value="notsay"/>
            </forms>
        </div>
        </div>

        <div class="dados">
        <forms>
            <div class="formstermos">
            <input type="checkbox"/>
            <label for="checkbox">Não quero receber mensagens de marketing do Spotify</label>
            </div>
            <div class="formstermos">
            <input type="checkbox"/>
            <label for="checkbox">Compartilhar meus dados cadastrais com os provedores de conteúdo do Spotify para fins de
                marketing.</label>
            </div>
            <div class="formstermos">
            <input type="checkbox"/>
            <label for="checkbox">Eu concordo com os <a href="https://www.spotify.com/br/legal/end-user-agreement/">Termos e
                Condições de Uso do Spotify.</a></label>
            </div>
        </forms>
        </div>

        <div class="lgpd">
        <p class="plgpd">Para saber mais sobre como o Spotify coleta, utiliza,
            compartilha e protege seus dados pessoais, leia a
            <a href="https://www.spotify.com/br/legal/privacy-policy/">Política de Privacidade do Spotify.</a>
        </p>
        </div>

        <div class="dados">
        <form action="webplayer.html">
            <button class="inscrevase" type="signup">
            <strong>Inscrever-se</strong>
            </button>
        </form>
        </div>
        <Footer/>
    </body>
)}
export default SignUp;