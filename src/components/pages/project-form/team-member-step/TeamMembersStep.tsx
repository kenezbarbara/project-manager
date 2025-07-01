import { useEffect, useState } from 'react'
import FormButton from '../form-button/FormButton'
import './TeamMembersStep.css'
import { getAllEmployees, getAllPositions } from '@/services/dataService'

export default function TeamMembersStep() {
  const [positions, setPositions] = useState<Array<string>>([])
  const [employees, setEmployees] = useState<Array<string>>([])
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [selectedEmployee, setSelectedEmployee] = useState<string>('')

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
      const target = event.target as HTMLElement
      if (!target.closest('.select-collector')) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

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
              {employees.map((employee, index) => (
                <div
                  key={index}
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
          <select id="employee-position">
            <option value="">Select a position</option>
            {positions.map((position, index) => (
              <option key={index} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-holder">
          <FormButton text="Add Team Member" color="#848789" />
        </div>
      </div>
    </div>
  )
}
