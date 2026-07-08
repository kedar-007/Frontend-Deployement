import { Button } from '@repo/ui'
import { formatCurrency } from "@repo/utils"
import './App.css'

function App() {


  return (
    <>
      <div> <h1> Complete Frontend Dev and Deployement Lifecycle</h1>
        <Button onClick={() => {
          alert(formatCurrency(1234))
        }} /></div>
    </>
  )
}

export default App
