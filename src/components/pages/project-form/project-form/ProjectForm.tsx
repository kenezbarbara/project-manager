import ProgressBar from '@/components/progress-bar/ProgressBar'
import ProjectBasicInfo from '../project-basic-info/ProjectBasicInfo'
import './ProjectForm.css'
import StepButton from '../step-button/StepButton'

export default function ProjectForm() {
  return (
    <div>
      <div className="project-form-header">
        <ProgressBar />
        <ProjectBasicInfo />
        <div className="btn-container">
          <StepButton text="Back" color="#212529" />
          <StepButton text="Continue" color="#0dcaf0" />
        </div>
      </div>
    </div>
  )
}
