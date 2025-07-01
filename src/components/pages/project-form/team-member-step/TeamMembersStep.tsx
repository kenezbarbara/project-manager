import { useEffect, useState } from 'react'
import FormButton from '../form-button/FormButton'
import './TeamMembersStep.css'
import { getAllEmployees, getAllPositions } from '@/services/dataService'
import type { TeamMember } from '@/types'

// TeamMembersStep component allows users to add, view, and remove team members for a project,
// including selecting employees and their positions.

export default function TeamMembersStep() {
  const [positions, setPositions] = useState<string[]>([])
  const [employees, setEmployees] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedEmployee, setSelectedEmployee] = useState<string>('')
  const [selectedPosition, setSelectedPosition] = useState<string>('')
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  const loadPositions = () => {
    getAllPositions().then((resp) => setPositions(resp))
  }

  const loadEmployees = () => {
    getAllEmployees().then((resp) => setEmployees(resp))
  }

  useEffect(() => {
    loadEmployees()
    loadPositions()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as HTMLElement
      if (!clickedElement.closest('.select-collector')) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleAddTeamMember = () => {
    if (selectedEmployee && selectedPosition) {
      const newTeamMember: TeamMember = {
        name: selectedEmployee,
        position: selectedPosition,
      }
      const isDuplicate = teamMembers.some(
        (member) =>
          member.name === newTeamMember.name &&
          member.position === newTeamMember.position
      )
      if (isDuplicate) {
        alert('This team member has already been added!')
        return
      }
      setTeamMembers((prevMembers) => [...prevMembers, newTeamMember])

      setSelectedEmployee('')
      setSelectedPosition('')
      setShowDropdown(false)
    } else {
      alert('Please select an employee and a position!')
    }
  }

  const handleRemoveTeamMember = (
    memberNameToRemove: string,
    memberPositionToRemove: string
  ) => {
    setTeamMembers((prevMembers) =>
      prevMembers.filter(
        (member) =>
          !(
            member.name === memberNameToRemove &&
            member.position === memberPositionToRemove
          )
      )
    )
  }

  return (
    <div className="form-step-container">
      <h3 className="form-step-container-text">Add Team Members</h3>
      <p className="form-step-container-text">
        Specify the colleagues working on this project
      </p>

      <div className="team-member-row">
        <div className="select-collector">
          <label htmlFor="employee-name">Employee Name</label>
          <input
            type="text"
            id="employee-name"
            placeholder="Start typing a name..."
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && (
            <div className="autocomplete-dropdown">
              {employees.map((employee) => (
                <div
                  key={employee}
                  className="autocomplete-item"
                  onClick={() => {
                    setSelectedEmployee(employee)
                    setShowDropdown(false)
                  }}
                >
                  {employee}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="select-collector">
          <label htmlFor="employee-position">Position</label>
          <select
            id="employee-position"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
          >
            <option value="">Select a position</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-holder">
          <FormButton
            text="Add Team Member"
            color="#848789"
            onClick={handleAddTeamMember}
          />
        </div>
      </div>
      {teamMembers.length > 0 && (
        <div className="added-team-members-container">
          <h4>Current Team Members</h4>
          <div className="team-members-list">
            {teamMembers.map((member) => (
              <div
                key={`${member.name}-${member.position}`}
                className="team-member-box"
              >
                <span className="member-name">{member.name}</span>
                <span className="member-position">({member.position})</span>
                {/* Remove member button */}
                <button
                  className="remove-member-btn"
                  onClick={() =>
                    handleRemoveTeamMember(member.name, member.position)
                  }
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
