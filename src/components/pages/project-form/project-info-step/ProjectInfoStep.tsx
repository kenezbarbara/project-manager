import type { Dispatch, SetStateAction } from 'react'
import './ProjectInfoStep.css'
import type { ProjectFormValues } from '../project-form/ProjectForm'

interface ProjectInfoStepProps {
  setFormValues: Dispatch<SetStateAction<ProjectFormValues>>
}

const ProjectInfoStep: React.FC<ProjectInfoStepProps> = ({ setFormValues }) => {
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
      <label htmlFor="projectName">Your project name</label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        onChange={handleInputChange}
      />
      <label htmlFor="projectDescription">Detailed description</label>
      <textarea
        name="projectDescription"
        id="projectDescription"
        onChange={handleInputChange}
      ></textarea>
    </form>
  )
}

export default ProjectInfoStep
