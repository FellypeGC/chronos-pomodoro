import styles from "./Heading.module.css"

const Heading = (props) => {
  console.log(props);
  return <h1 className={styles.heading}>{props.children}</h1>
}

export default Heading