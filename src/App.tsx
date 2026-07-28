import Heading from "./components/Heading"


import "./styles/theme.css"
import "./styles/global.css"
import { TimerIcon } from "lucide-react"

function App() {

  return (
    <>
      <Heading>
        Olá, Mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatibus architecto recusandae quam commodi est dolorum quasi quos accusantium nesciunt? Corrupti possimus ea facilis modi corporis voluptatem eum eaque beatae?</p>
    </>
  )
}

export default App
