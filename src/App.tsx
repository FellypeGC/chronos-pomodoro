import Container from "./components/Container"
import Logo from "./components/Logo"
import Menu from "./components/Menu"
import CountDown from "./components/CountDown"
import DefaultInput from "./components/DefaultInput"
import Cycles from "./components/Cycles"
import DefaultButton from "./components/DefaultButton"
import Heading from "./components/Heading"
import Footer from "./components/Footer"

import { PlayCircleIcon, StopCircleIcon } from "lucide-react"

import "./styles/theme.css"
import "./styles/global.css"
import { useState } from "react"

function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero((prevState) => prevState + 1);
  }

  return (
    <>
      <Heading>numero: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

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
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default App
