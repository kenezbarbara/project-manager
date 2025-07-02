import { ProgressBar } from '@/components'
import './ProjectForm.css'
import {
  FormButton,
  ProjectInfoStep,
  TeamMembersStep,
  LinksStep,
} from '@/components/pages'
import { useState } from 'react'
import type { TeamMember } from '@/types'
import { addProject } from '@/services/dataService'
import { useNavigate } from 'react-router'

export interface ProjectFormValues {
  name: string
  description: string
  teamMembers: TeamMember[]
  links: string[]
}

export interface ProjectFormErrors {
  projectNameError: string
  projectDescriptionError: string
}

export default function ProjectForm() {
  const initialFormValues: ProjectFormValues = {
    name: '',
    description: '',
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
      const { name, description } = formValues

      const isProjectNameEmpty = !name
      const isProjectNameTooLong = name.length > 255
      const isProjectDescriptionNotInRange =
        description !== '' &&
        (description.length < 50 || description.length > 500)

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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    addProject(formValues).then(() => navigate('/'))
  }

  const navigate = useNavigate()

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
            onClick={currentStep === 3 ? handleSubmit : handleContinue}
          />
        </div>
      </div>
    </div>
  )
}
