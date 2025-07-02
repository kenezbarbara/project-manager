import { Button, ProjectCard } from '@/components'
import { getAllProjects } from '@/services/dataService'
import type { Project } from '@/types'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'

export default function ProjectList() {
  const [allProjects, setAllProjects] = useState<Array<Project>>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const navigate = useNavigate()

  const handleNewProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    navigate('/project-form')
  }

  const loadProjects = () => {
    getAllProjects().then((resp) => setAllProjects(resp))
  }

  useEffect(() => {
    loadProjects()
  }, [])

  const displayedProjects = useMemo(() => {
    if (!searchTerm.trim()) {
      return allProjects // If the search text is empty, display all projects
    }

    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase()
    return allProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        project.description.toLowerCase().includes(lowerCaseSearchTerm)
    )
  }, [allProjects, searchTerm])

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setSearchTerm(e.target.value)
  }

  return (
    <div className="row flex-grow-1 justify-content-center align-items-start ">
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
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <i className="bi bi-search ms-2 fs-2"></i>
        </form>
      </div>

      <div className="d-flex justify-content-center row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 my-5">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            to={`/project-details/${project.id}`}
          />
        ))}
        {/* Show message if no match found*/}
        {searchTerm && displayedProjects.length === 0 && (
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ minHeight: '10rem' }}
          >
            <div className="text-center bg-light bg-opacity-50 rounded-2 p-3 mx-auto">
              <p>No projects found matching "{searchTerm}".</p>
            </div>
          </div>
        )}
      </div>
      <div className="col text-center my-5 p-0 bg-light rounded-2 bg-opacity-50">
        {allProjects.length > 0 ? (
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
