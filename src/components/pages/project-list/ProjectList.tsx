import { Button } from '@/components'

export default function ProjectList() {
  return (
    <div className="row flex-grow-1 justify-content-center align-items-start project-list-bg">
      <div className="col-8 text-center mt-5 p-5 bg-light rounded-2 bg-opacity-50">
        <h1>All Corporate Projects</h1>
        <h6>browse company projects or add a new project easily</h6>
        <form className="d-flex justify-content-center" role="search">
          <input
            className="form-control me-2 mt-2"
            type="search"
            placeholder="Search for projects..."
            aria-label="Search"
            style={{ width: '40%' }}
          />
          <Button text="Search" iconClass="bi bi-search" />
        </form>
        <div className="mt-3">
          <Button text="Add Project" iconClass="bi bi-plus-circle-dotted" />
        </div>
      </div>
    </div>
  )
}
