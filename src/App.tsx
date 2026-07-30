import Heading from "./components/Heading"
import Container from "./components/Container"

import "./styles/theme.css"
import "./styles/global.css"
import { TimerIcon } from "lucide-react"

function App() {

  return (
    <>
      <Container>
        <Heading>
          Chronos Logo
        </Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}

export default App
