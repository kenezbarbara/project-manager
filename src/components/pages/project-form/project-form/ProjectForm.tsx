import ProgressBar from '@/components/progress-bar/ProgressBar'
import './ProjectForm.css'
import StepButton from '../step-button/StepButton'
import TeamMembersStep from '../team-member-step/TeamMembersStep'

export default function ProjectForm() {
  return (
    <div>
      <div className="project-form-header">
        <ProgressBar />
        <TeamMembersStep />
        <div className="btn-container">
          <StepButton text="Back" color="#212529" />
          <StepButton text="Continue" color="#0dcaf0" />
        </div>
      </div>
    </div>
  )
}
