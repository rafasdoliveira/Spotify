import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";

export default function UserOk(){
    return(
    <main>
      <Header />
        <div style={{height: "400px", border:"1px solid red"}}>
          Usuário cadastrado com sucesso!
        </div>
      <Footer/>
    </main>
    )
}