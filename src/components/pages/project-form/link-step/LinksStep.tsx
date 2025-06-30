import FormButton from '../form-button/FormButton'
import './LinksStep.css'

export default function LinksStep() {
  return (
    <form className="link-form">
      <h5>As a final step, add links to your project</h5>
      <label htmlFor="url">Enter an https:// URL:</label>
      <input
        type="url"
        name="url"
        id="url"
        placeholder="https://example.com"
        pattern="https://.*"
        size={30}
        required
      />
      <FormButton text="Add link" color="#848789" />
    </form>
  )
}
