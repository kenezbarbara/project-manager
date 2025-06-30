import type { TeamMember } from './teamMember'

export type Project = {
  id: string
  name: string
  description: string
  imageUrl: string
  teamMembers: TeamMember[]
  links: string[]
}
