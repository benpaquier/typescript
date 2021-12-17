type ButtonProps = {
  label :string
  backgroundColor :string
  // type de fonction
  handleCLick? :() => void
}

const Button = ({ label, backgroundColor, handleCLick } :ButtonProps) :JSX.Element => {
  return (
    <button
      style={{ backgroundColor }}
      onClick={handleCLick}
    >
      {label}
    </button>
  )
}

export default Button
