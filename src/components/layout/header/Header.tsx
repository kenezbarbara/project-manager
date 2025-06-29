import { Button } from '@/components'
import { Link, useNavigate } from 'react-router'

export default function Header() {
  const navigate = useNavigate()

  const handleNewProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    navigate('/project-form')
  }
  return (
    <div className="row flex-grow-2">
      <div className="col-12 p-0">
        <nav className="navbar bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Corporate Projects
              <i className="bi bi-kanban-fill ms-2 icon-white icon-medium"></i>
            </Link>
            <Button
              text="Add Project"
              iconClass="bi bi-plus-circle-dotted"
              onClick={handleNewProject}
            />
          </div>
        </nav>
      </div>
    </div>
  )
}
