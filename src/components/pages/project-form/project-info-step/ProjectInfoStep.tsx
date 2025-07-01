import type { Dispatch, SetStateAction } from 'react'
import './ProjectInfoStep.css'
import type {
  ProjectFormErrors,
  ProjectFormValues,
} from '../project-form/ProjectForm'

interface ProjectInfoStepProps {
  setFormValues: Dispatch<SetStateAction<ProjectFormValues>>
  formValues: ProjectFormValues
  formErrors: ProjectFormErrors
}

const ProjectInfoStep: React.FC<ProjectInfoStepProps> = ({
  setFormValues,
  formValues,
  formErrors,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormValues((prevValues: ProjectFormValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <form className="project-form" action="">
      <h5>Enter your project details as a first step</h5>
      <label htmlFor="name">Your project name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleInputChange}
        value={formValues.name}
      />
      <small>{formErrors.projectNameError}</small>
      <label htmlFor="description">Detailed description</label>
      <textarea
        name="description"
        id="description"
        onChange={handleInputChange}
        value={formValues.description}
      ></textarea>
      <small>{formErrors.projectDescriptionError}</small>
    </form>
  )
}

export default ProjectInfoStep
