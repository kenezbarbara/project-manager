import { Button, ProjectCard } from '@/components'
import { getAllProjects } from '@/services/dataService'
import type { Project } from '@/types'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function ProjectList() {
  const [projects, setProjects] = useState<Array<Project>>([])
  const navigate = useNavigate()

  const handleNewProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    navigate('/project-form')
  }

  const loadProjects = () => {
    getAllProjects().then((resp) => setProjects(resp))
  }

  useEffect(() => {
    loadProjects()
  }, [])

  return (
    <div className="row flex-grow-1 justify-content-center align-items-start ">
      {projects.length > 0 && (
        <div className="col text-center mt-5 p-5 bg-light rounded-2 bg-opacity-50">
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
        </div>
      )}

      <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 my-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
      <div className="col text-center my-5 p-0 bg-light rounded-2 bg-opacity-50">
        {projects.length > 0 ? (
          <>
            <h4 className="mt-3">Can't find the project you're looking for?</h4>
            <h6>Start adding projects!</h6>
          </>
        ) : (
          <>
            <h4 className="mt-3">There are currently no projects...</h4>
            <h6>Start adding them!</h6>
          </>
        )}

        <div className="mb-3">
          <Button
            text="Add Project"
            iconClass="bi bi-plus-circle-dotted"
            onClick={handleNewProject}
          />
        </div>
      </div>
    </div>
  )
}
