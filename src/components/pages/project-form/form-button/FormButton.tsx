import type { ButtonHTMLAttributes } from 'react'
import './FormButton.css'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color: string
  visibility?: 'visible' | 'hidden'
}

const FormButton: React.FC<FormButtonProps> = ({
  text,
  color,
  visibility,
  ...props
}) => {
  return (
    <button
      className="step-button"
      {...props}
      style={{ backgroundColor: color, visibility }}
    >
      {text}
    </button>
  )
}

export default FormButton
