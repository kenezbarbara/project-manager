import './TeamMemberStep.css'

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
      <h3>Add Team Members</h3>
      <p>Specify the colleagues working on this project.</p>

      <div className="team-member-row">
        <div className="select-collector">
          <label htmlFor="employee-name">Employee Name</label>
          <input
            type="text"
            id="employee-name"
            placeholder="Start typing a name..."
          />
          <div className="autocomplete-dropdown">
            {/* Példa autocomplete elemek */}
            <div className="autocomplete-item">Alice Smith</div>
            <div className="autocomplete-item">Bob Johnson</div>
            <div className="autocomplete-item">Charlie Brown</div>
            {/* ...további szűrt nevek */}
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
      </div>
    </div>
  )
}
