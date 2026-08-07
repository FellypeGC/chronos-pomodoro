import styles from "./styles.module.css"

type GenericHtmlProps = {
  children: React.ReactNode;
}

const GenericHtml = ({ children }: GenericHtmlProps ) => {
  return (
    <div className={styles.genericHtml}>{children}</div>
  )
}

export default GenericHtml