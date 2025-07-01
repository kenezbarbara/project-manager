import React from 'react'
import type { TeamMember } from '@/types'
import './TeamMemberList.css'

interface TeamMemberListProps {
  members: TeamMember[]
  onRemove?: (name: string, position: string) => void
  isEditable?: boolean
}

const TeamMemberList: React.FC<TeamMemberListProps> = ({
  members,
  onRemove,
  isEditable = false,
}) => {
  if (members.length === 0) {
    return null
  }

  return (
    <div className="added-team-members-container">
      <h4>Current Team Members</h4>
      <div className="team-members-list">
        {members.map((member) => (
          <div
            key={`${member.name}-${member.position}`}
            className="team-member-box"
          >
            <span className="member-name">{member.name}</span>
            <span className="member-position">({member.position})</span>
            {isEditable && (
              <button
                className="remove-member-btn"
                onClick={() => onRemove?.(member.name, member.position)}
              >
                x
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMemberList
