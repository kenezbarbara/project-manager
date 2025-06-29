import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  iconClass?: string
}

const Button: React.FC<ButtonProps> = ({ text, iconClass, ...props }) => {
  return (
    <button className="btn btn-outline-light mt-2" {...props}>
      <i className={`${iconClass} me-2 icon-white icon-small`}></i>
      {text}
    </button>
  )
}

export default Button
