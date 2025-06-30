import ProgressBar from '@/components/progress-bar/ProgressBar'
import ProjectBasicInfo from '../project-basic-info/ProjectBasicInfo'
import './ProjectForm.css'

export default function ProjectForm() {
  return (
    <div>
      <div className="project-form-header">
        <ProgressBar />
        <ProjectBasicInfo />
        <div className="btn-container">
          <button>Back</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}
