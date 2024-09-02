import { useState } from "react"
import Cards from "./components/Cards"
import ToggleButton from "./components/ToggleButton"

function App() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <div className="container">
      <h1>Our Pricing</h1>
      <ToggleButton isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      
      <Cards isMonthly={isMonthly} />
    </div>
  )
}

export default App
