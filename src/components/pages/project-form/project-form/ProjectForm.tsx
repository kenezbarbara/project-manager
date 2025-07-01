import ProgressBar from '@/components/progress-bar/ProgressBar'
import './ProjectForm.css'
import FormButton from '../form-button/FormButton'
import { useState } from 'react'
import ProjectInfoStep from '../project-info-step/ProjectInfoStep'
import TeamMembersStep from '../team-member-step/TeamMembersStep'
import LinksStep from '../link-step/LinksStep'
import type { TeamMember } from '@/types'

export interface ProjectFormValues {
  projectName: string
  projectDescription: string
  teamMembers: TeamMember[]
  links: string[]
}

export interface ProjectFormErrors {
  projectNameError: string
  projectDescriptionError: string
}

export default function ProjectForm() {
  const initialFormValues: ProjectFormValues = {
    projectName: '',
    projectDescription: '',
    teamMembers: [],
    links: [],
  }

  const initialFormErrors: ProjectFormErrors = {
    projectNameError: '',
    projectDescriptionError: '',
  }

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formValues, setFormValues] =
    useState<ProjectFormValues>(initialFormValues)
  const [formErrors, setFormErrors] =
    useState<ProjectFormErrors>(initialFormErrors)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProjectInfoStep
            setFormValues={setFormValues}
            formValues={formValues}
            formErrors={formErrors}
          />
        )
      case 2:
        return (
          <TeamMembersStep
            setFormValues={setFormValues}
            formValues={formValues}
          />
        )
      case 3:
        return (
          <LinksStep setFormValues={setFormValues} formValues={formValues} />
        )
      default:
        return (
          <ProjectInfoStep
            setFormValues={setFormValues}
            formValues={formValues}
            formErrors={formErrors}
          />
        )
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

    if (!validateFormValues() && currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const validateFormValues = (): boolean => {
    if (currentStep === 1) {
      const { projectName, projectDescription } = formValues

      const isProjectNameEmpty = !projectName
      const isProjectNameTooLong = projectName.length > 255
      const isProjectDescriptionNotInRange =
        projectDescription !== '' &&
        (projectDescription.length < 50 || projectDescription.length > 500)

      setFormErrors({
        projectNameError: isProjectNameEmpty
          ? 'Project name is required.'
          : isProjectNameTooLong
            ? 'Project name must be less than 255 characters.'
            : '',
        projectDescriptionError: isProjectDescriptionNotInRange
          ? 'Project description must be between 50 and 500 characters.'
          : '',
      })

      return (
        isProjectNameEmpty ||
        isProjectDescriptionNotInRange ||
        isProjectNameTooLong
      )
    }

    return false
  }

  return (
    <div>
      <div className="project-form-header">
        <ProgressBar currentStep={currentStep} />
        {renderStep()}
        <div className="btn-container">
          <FormButton
            text="Back"
            color="#212529"
            onClick={handleBack}
            visibility={currentStep > 1 ? 'visible' : 'hidden'}
          />
          <FormButton
            text={currentStep === 3 ? 'Submit' : 'Continue'}
            color="#0dcaf0"
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  )
}
