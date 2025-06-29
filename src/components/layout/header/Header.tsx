import { Button } from '@/components'

export default function Header() {
  return (
    <div className="row flex-grow-2">
      <div className="col-12 p-0">
        <nav className="navbar bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              Corporate Projects
              <i className="bi bi-kanban-fill ms-2 icon-white icon-medium"></i>
            </a>
            <Button text="Add Project" iconClass="bi bi-plus-circle-dotted" />
          </div>
        </nav>
      </div>
    </div>
  )
}
