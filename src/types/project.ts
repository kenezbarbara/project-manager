import type { TeamMember } from './teamMember'

export type Project = {
  id: string
  name: string
  description: string
  teamMembers: TeamMember[]
  links: string[]
}
