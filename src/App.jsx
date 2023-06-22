import "./App.css";
import Table from "./Table.jsx";
import Pizza from "./Pizza.jsx";
import Menu from "./Navbar.jsx";
import Mapa from './assets/mapa.png';
import Carrosel from './Carrosel.jsx';

function App() {
  return (
    <>
      <Menu />
      <Carrosel />
      <div className="conteudo">
        <div>
          <h1>O que é Feminicidio?</h1>
          <p>
            O feminicídio é o assassinato de mulheres devido à sua condição de
            gênero. É uma forma extrema de violência de gênero que ocorre
            globalmente. As vítimas podem ser de diferentes origens e idades, mas
            as mais vulneráveis são aquelas que enfrentam múltiplas formas de
            discriminação. O feminicídio está enraizado em desigualdades de gênero
            e normas sociais prejudiciais. Combater esse problema requer leis e
            políticas eficazes, igualdade de gênero, fortalecimento de
            instituições jurídicas e conscientização. É uma luta que exige o
            envolvimento de governos, organizações e indivíduos para criar uma
            sociedade mais justa e segura para as mulheres.
          </p>
        </div>

        <div className="barra">
          <h3>Crescimento do numero de vitimas por ano!</h3>
          <div className="d-flex flex-row align-items-center">
            <p>
              Entre 2015 e 2022, o feminicídio teve um crescimento alarmante globalmente.
              O número de assassinatos de mulheres devido à sua condição de gênero aumentou
              significativamente nesse período.Esse crescimento reflete a necessidade urgente
              de ações efetivas para combater essa forma extrema de violência de gênero.
            </p>
            <Table />
          </div>
        </div>

        <div className="pizza">
          <h3>Diveranca no numero de vitimas pela cor de pele!</h3>
          <div className="d-flex flex-row align-items-center">
            <Pizza />
            <p>
              Houve um maior número de casos de feminicídio entre mulheres brancas em comparação
              com mulheres de outras cores nos últimos anos. Essa disparidade pode ser
              atribuída a fatores como visibilidade, acesso a recursos e desigualdades sociais.
            </p>
          </div>
        </div>

        <div className="mapa">
          <h3>Municipios com maior numerode de vitimas</h3>
          <div className="d-flex flex-column align-items-center">
            <p>
              O município de São Paulo tem registrado um dos maiores números de vítimas de feminicídio
              no Brasil. A cidade enfrenta desafios significativos no combate a esse tipo de violência
              de gênero, refletindo uma preocupação importante dentro do contexto urbano. Esforços têm
              sido feitos para implementar medidas preventivas, leis de proteção e fortalecimento dos
              sistemas de justiça, a fim de enfrentar esse problema grave. No entanto, é fundamental
              que haja uma abordagem abrangente, envolvendo o engajamento da sociedade civil, governos
              e instituições para garantir a segurança e a igualdade de direitos para todas as mulheres
              no município de São Paulo.
            </p>
            <img src={Mapa} alt="Mapa" />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
