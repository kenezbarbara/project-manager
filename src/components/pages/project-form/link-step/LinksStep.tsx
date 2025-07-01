import { useState } from 'react'
import FormButton from '../form-button/FormButton'
import './LinksStep.css'

export default function LinksStep() {
  const [selectedLink, setSelectedLink] = useState<string>('')
  const [links, setLinks] = useState<string[]>([])

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
      setLinks((prevLinks) => [...prevLinks, newLink])
      setSelectedLink('')
    }
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
      <div className="added-link-container">
        <h4>Added links</h4>
        <div className="link-list">
          {links.map((link) => (
            <div className="link-box" key={link}>
              <a href="">{link}</a>
              <button className="remove-link-btn">x</button>
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}
