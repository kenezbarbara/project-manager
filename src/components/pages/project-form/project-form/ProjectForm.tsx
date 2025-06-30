import ProgressBar from '@/components/progress-bar/ProgressBar'
import './ProjectForm.css'
import FormButton from '../form-button/FormButton'
import LinksStep from '../link-step/LinksStep'

export default function ProjectForm() {
  return (
    <div>
      <div className="project-form-header">
        <ProgressBar />
        <LinksStep />
        <div className="btn-container">
          <FormButton text="Back" color="#212529" />
          <FormButton text="Continue" color="#0dcaf0" />
        </div>
      </div>
    </div>
  )
}
