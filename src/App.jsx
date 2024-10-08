import { useState } from "react"
import "./styles.css"

function App() {

  const [consent, setConset] = useState(false)

  const [name, setName] = useState("")

  function handleChange(e) {
    setConset(e.target.checked);
  }

  return (
    <div className="consent-top-level">
      <h1>This is Consent Form</h1>
      <div className="enter-name-field">
        <input className="text-field" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} id="name" />
      </div>
      <div className="checkbox-section">
        <label className="checkbox-label">
          <input type="checkbox" onClick={handleChange}></input>
          I hereby give consent.
        </label>
      </div>
      {consent ? (<h1> Thank you for giving consent {name}!</h1>): (<div>Please click on checkbox to give consent. </div>)}
    </div>
  )
}

export default App