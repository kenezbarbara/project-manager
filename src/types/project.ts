import type { teamMember } from './teamMember'
import type { link } from './link'

export type Project = {
  id: string
  name: string
  description: string
  imageUrl: string
  teamMembers: teamMember[]
  links: link[]
}
