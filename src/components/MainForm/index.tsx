import { PlayCircleIcon } from "lucide-react"
import Cycles from "../Cycles"
import DefaultButton from "../DefaultButton"
import DefaultInput from "../DefaultInput"

const MainForm = () => {
  return (
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
  )
}

export default MainForm