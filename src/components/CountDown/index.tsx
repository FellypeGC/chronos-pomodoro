import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css"

const CountDown = () => {
  const taskContext = useTaskContext();

  return (
    <div className={styles.container}>00:00</div>
  )
}

export default CountDown

