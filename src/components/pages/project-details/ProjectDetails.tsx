import { getProjectById } from '@/services/dataService'
import type { Project } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TeamMemberList, ProjectLinkList } from '@/components/pages'
import './ProjectDetails.css'

type RouteParams = {
  id: string
}

export default function ProjectDetails() {
  const [projectDetails, setProjectDetails] = useState<Project | null>(null)
  const { id } = useParams<RouteParams>()

  useEffect(() => {
    if (id) {
      getProjectById(id).then((resp) => {
        if (resp) {
          setProjectDetails(resp)
        }
      })
    }
  }, [id])

  if (!projectDetails) {
    return (
      <div className="project-details-container">
        <h2>Loading project details...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className="project-details-container">
        <h1>{projectDetails.name}</h1>
        {projectDetails.description && <h6>{projectDetails?.description}</h6>}
        {projectDetails.teamMembers.length > 0 && (
          <TeamMemberList
            members={projectDetails?.teamMembers}
            isEditable={false}
          />
        )}

        {projectDetails.links.length > 0 && (
          <ProjectLinkList links={projectDetails.links} isEditable={false} />
        )}
      </div>
    </div>
  )
}
