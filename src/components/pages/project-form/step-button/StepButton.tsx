import type { ButtonHTMLAttributes } from 'react'
import '@/components/pages/project-form/step-button/StepButton.css'

interface StepButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color: string
}

const StepButton: React.FC<StepButtonProps> = ({ text, color, ...props }) => {
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

export default StepButton
