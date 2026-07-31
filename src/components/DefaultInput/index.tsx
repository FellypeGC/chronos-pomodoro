import styles from "./styles.module.css"

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

const index = ({ id, labelText, type, ...rest }: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} {...rest} id={id} />
    </>
  )
}

export default index