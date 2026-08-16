import styles from "./styles.module.css"
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

const CountDown = () => {
  const taskContext = useContext(TaskContext);

  return (
    <div className={styles.container}>00:00</div>
  )
}

export default CountDown

