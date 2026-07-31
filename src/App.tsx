import Container from "./components/Container"
import Logo from "./components/Logo"
import Menu from "./components/Menu"
import CountDown from "./components/CountDown"

import "./styles/theme.css"
import "./styles/global.css"

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
            <label htmlFor="meuInput">Task</label>
            <input type="text" id="meuInput" />
          </div>
          
          <div className="formRow">
            <p>Task description</p>
          </div>
          
          <div className="formRow">
            <p>Cycles</p>
            <p>0 0 0 0 0 0 0</p>
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
