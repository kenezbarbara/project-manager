import './ProjectLinkList.css'

interface ProjectLinkListProps {
  links: string[]
  onRemove?: (link: string) => void
  isEditable?: boolean
}

const ProjectLinkList: React.FC<ProjectLinkListProps> = ({
  links,
  onRemove,
  isEditable = false,
}) => {
  if (links.length === 0) {
    return null
  }

  return (
    <div className="added-link-container">
      <h4>Added links</h4>
      <div className="link-list">
        {links.map((link) => (
          <div className="link-box" key={link}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
            {isEditable && (
              <button
                className="remove-link-btn"
                onClick={() => onRemove?.(link)}
              >
                x
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectLinkList
