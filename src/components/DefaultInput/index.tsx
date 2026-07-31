type DefaultInputProps = {
  id: string;
} & React.ComponentProps<"input">;

const index = ({ id, type }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input type={type} id={id} />
    </>
  )
}

export default index