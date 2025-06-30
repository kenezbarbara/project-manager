import FormButton from '../form-button/FormButton'
import './TeamMembersStep.css'

export default function TeamMembersStep() {
  const mockPositions = [
    'Software Engineer',
    'Data Scientist',
    'DevOps Engineer',
    'Cybersecurity Analyst',
    'Cloud Architect',
    'UI/UX Designer',
    'Network Administrator',
    'Database Administrator',
    'IT Project Manager',
    'Quality Assurance Engineer',
  ]
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
            {mockPositions.map((pos, index) => (
              <option key={index} value={pos}>
                {pos}
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
