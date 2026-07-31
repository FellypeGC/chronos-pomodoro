type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

const index = ({ id, labelText, type, ...rest }: DefaultInputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} {...rest} id={id} />
    </>
  )
}

export default index