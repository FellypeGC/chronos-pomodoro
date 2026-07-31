import Container from "./components/Container"
import Logo from "./components/Logo"
import Menu from "./components/Menu"
import CountDown from "./components/CountDown"

import "./styles/theme.css"
import "./styles/global.css"
import DefaultInput from "./components/DefaultInput"
import Cycles from "./components/Cycles"

function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput id="meuInput" type="text" labelText="Task" placeholder="Digite algo" />
          </div>
          
          <div className="formRow">
            <p>Task description</p>
          </div>
          
          <div className="formRow">
            <Cycles />
          </div>
          
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default App
