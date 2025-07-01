import ProgressBar from '@/components/progress-bar/ProgressBar'
import './ProjectForm.css'
import FormButton from '../form-button/FormButton'
import { useState } from 'react'
import ProjectInfoStep from '../project-info-step/ProjectInfoStep'

export interface ProjectFormValues {
  projectName: string
  projectDescription: string
}

export default function ProjectForm() {
  const initialFormValues: ProjectFormValues = {
    projectName: '',
    projectDescription: '',
  }

  const [formValues, setFormValues] =
    useState<ProjectFormValues>(initialFormValues)

  return (
    <div>
      <div className="project-form-header">
        <ProgressBar />
        <ProjectInfoStep setFormValues={setFormValues} />
        <div className="btn-container">
          <FormButton text="Back" color="#212529" />
          <FormButton text="Continue" color="#0dcaf0" />
        </div>
      </div>
    </div>
  )
}
