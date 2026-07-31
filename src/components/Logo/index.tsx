import { TimerIcon } from "lucide-react"
import styles from "./styles.module.css"

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  )
}

export default Logo

