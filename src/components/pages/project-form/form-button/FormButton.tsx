import type { ButtonHTMLAttributes } from 'react'
import './FormButton.css'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color: string
}

const FormButton: React.FC<FormButtonProps> = ({ text, color, ...props }) => {
  return (
    <button
      className="step-button"
      {...props}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  )
}

export default FormButton
