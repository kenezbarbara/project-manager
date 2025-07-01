import { useState, type Dispatch, type SetStateAction } from 'react'
import FormButton from '../form-button/FormButton'
import './LinksStep.css'
import ProjectLinkList from '../../project-link-list/ProjectLinkList'
import type { ProjectFormValues } from '../project-form/ProjectForm'

interface LinksStepProps {
  setFormValues: Dispatch<SetStateAction<ProjectFormValues>>
  formValues: ProjectFormValues
}

const LinksStep: React.FC<LinksStepProps> = ({ setFormValues, formValues }) => {
  const [selectedLink, setSelectedLink] = useState<string>('')
  const links = formValues.links

  const handleAddLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newLink = selectedLink
    if (newLink.trim() !== '') {
      // Check if the link is not empty
      if (links.includes(newLink)) {
        alert('This link has already been added.')
        return
      }
      // Check if the link already exists
      setFormValues((prevValues: ProjectFormValues) => ({
        ...prevValues,
        links: [...prevValues.links, newLink],
      }))
      setSelectedLink('')
    }
  }

  const handleRemoveLink = (link: string) => {
    setFormValues((prevValues: ProjectFormValues) => {
      const filteredlinks = prevValues.links.filter((l) => l !== link)

      return {
        ...prevValues,
        links: [...filteredlinks],
      }
    })
  }

  return (
    <form className="link-form">
      <h5>As a final step, add links to your project</h5>
      <label htmlFor="url">Enter an https:// URL:</label>
      <input
        type="url"
        name="url"
        id="url"
        placeholder="https://example.com"
        pattern="https://.*"
        size={30}
        onChange={(e) => {
          setSelectedLink(e.target.value)
        }}
        value={selectedLink}
      />
      <FormButton text="Add link" color="#848789" onClick={handleAddLink} />
      <ProjectLinkList links={links} onRemove={handleRemoveLink} isEditable />
      {/* We are in edit mode here, show 'x' */}
    </form>
  )
}
export default LinksStep
