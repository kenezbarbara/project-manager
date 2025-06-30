import { useEffect, useState } from 'react'
import FormButton from '../form-button/FormButton'
import './TeamMembersStep.css'
import { getAllPositions } from '@/services/dataService'

export default function TeamMembersStep() {
  const [positions, setPositions] = useState<Array<string>>([])

  const loadPositions = () => {
    getAllPositions().then((resp) => setPositions(resp))
  }

  useEffect(() => {
    loadPositions()
  }, [])

  return (
    <div className="form-step-container">
      <h3 className="form-step-container-text">Add Team Members</h3>
      <p className="form-step-container-text">
        Specify the colleagues working on this project.
      </p>

      <div className="team-member-row">
        <div className="select-collector">
          <label htmlFor="employee-name">Employee Name</label>
          <input
            type="text"
            id="employee-name"
            placeholder="Start typing a name..."
          />
          <div className="autocomplete-dropdown">
            <div className="autocomplete-item">Alice Smith</div>
            <div className="autocomplete-item">Bob Johnson</div>
            <div className="autocomplete-item">Charlie Brown</div>
          </div>
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
