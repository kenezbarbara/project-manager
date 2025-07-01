import React, {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'
import FormButton from '../form-button/FormButton'
import './TeamMembersStep.css'
import { getAllEmployees, getAllPositions } from '@/services/dataService'
import type { TeamMember } from '@/types'
import TeamMemberList from '../../team-member-list/TeamMemberList'
import type { ProjectFormValues } from '../project-form/ProjectForm'

// TeamMembersStep component allows users to add, view, and remove team members for a project,
// including selecting employees and their positions.

interface TeamMemberStepProps {
  setFormValues: Dispatch<SetStateAction<ProjectFormValues>>
  formValues: ProjectFormValues
}

const TeamMembersStep: React.FC<TeamMemberStepProps> = ({
  setFormValues,
  formValues,
}) => {
  const [positions, setPositions] = useState<string[]>([])
  const [employees, setEmployees] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedEmployee, setSelectedEmployee] = useState<string>('')
  const [selectedPosition, setSelectedPosition] = useState<string>('')
  const teamMembers = formValues.teamMembers

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

  const filteredEmployees = employees.filter((employee) =>
    employee.toLowerCase().includes(selectedEmployee.toLowerCase())
  )

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
      setFormValues((prevValues: ProjectFormValues) => ({
        ...prevValues,
        teamMembers: [...prevValues.teamMembers, newTeamMember],
      }))

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
    setFormValues((prevValues: ProjectFormValues) => {
      const filteredMembers = prevValues.teamMembers.filter(
        (member) =>
          !(
            member.name === memberNameToRemove &&
            member.position === memberPositionToRemove
          )
      )

      return {
        ...prevValues,
        teamMembers: [...filteredMembers],
      }
    })
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
            onChange={(e) => {
              setSelectedEmployee(e.target.value)
              // Show dropdown on input change
              if (!showDropdown) setShowDropdown(true)
            }}
            onFocus={() => setShowDropdown(true)}
            autoComplete="off"
          />
          {showDropdown && (
            <div className="autocomplete-dropdown">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
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
                ))
              ) : (
                // Display a message if no results are found after filtering
                <div className="autocomplete-item">No matching employees</div>
              )}
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
        <TeamMemberList
          members={teamMembers}
          onRemove={handleRemoveTeamMember}
          // We are in edit mode here, show 'x'
          isEditable
        />
      )}
    </div>
  )
}
export default TeamMembersStep
