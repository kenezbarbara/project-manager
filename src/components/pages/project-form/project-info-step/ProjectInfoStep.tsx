import './ProjectInfoStep.css'

export default function ProjectInfoStep() {
  return (
    <form className="project-form" action="">
      <h5>Enter your project details as a first step</h5>
      <label htmlFor="projectName">Your project name</label>
      <input type="text" id="projectName" name="projectName" />
      <label htmlFor="projectDescription">Detailed description</label>
      <textarea name="projectDescription" id="projectDescription"></textarea>
    </form>
  )
}
