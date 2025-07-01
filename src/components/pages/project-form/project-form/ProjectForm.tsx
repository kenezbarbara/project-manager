import ProgressBar from '@/components/progress-bar/ProgressBar'
import './ProjectForm.css'
import FormButton from '../form-button/FormButton'
import { useState } from 'react'
import ProjectInfoStep from '../project-info-step/ProjectInfoStep'
import TeamMembersStep from '../team-member-step/TeamMembersStep'
import LinksStep from '../link-step/LinksStep'

export interface ProjectFormValues {
  projectName: string
  projectDescription: string
}

export default function ProjectForm() {
  const initialFormValues: ProjectFormValues = {
    projectName: '',
    projectDescription: '',
  }

  const [currentStep, setCurrentStep] = useState<number>(1)

  const [formValues, setFormValues] =
    useState<ProjectFormValues>(initialFormValues)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProjectInfoStep setFormValues={setFormValues} />
      case 2:
        return <TeamMembersStep />
      case 3:
        return <LinksStep />
      default:
        return <ProjectInfoStep setFormValues={setFormValues} />
    }
  }

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1)
    }
  }

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  return (
    <div>
      <div className="project-form-header">
        <ProgressBar currentStep={currentStep} />
        {renderStep()}
        <div className="btn-container">
          <FormButton text="Back" color="#212529" onClick={handleBack} />
          <FormButton
            text="Continue"
            color="#0dcaf0"
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  )
}
