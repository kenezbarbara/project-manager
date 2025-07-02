import { Link } from 'react-router'
import './ProjectCard.css'

interface ProjectCardProps {
  name: string
  description: string
  to: string
}

export default function ProjectCard({
  name,
  description,
  to,
}: ProjectCardProps) {
  const getPlaceholderImageUrl = (projectName: string) => {
    const words = projectName.split(' ')
    let initials = words.map((word) => word.charAt(0).toUpperCase()).join('')
    if (!initials) {
      initials = 'N/A' // Not Available
    }
    return `https://placehold.co/150x75?text=${encodeURIComponent(initials)}`
  }

  const imageUrl = getPlaceholderImageUrl(name)

  return (
    <div className="col">
      <Link to={to} className="text-decoration-none">
        <div className="card text-center shadow mx-auto mx-md-3 mx-lg-5">
          <img src={imageUrl} alt={name} />
          <div className="card-body text-white card-bg-color ">
            <h5 className="card-title ">{name}</h5>
            <p
              className="card-text d-inline-block text-truncate"
              style={{ maxWidth: '100%' }}
            >
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
