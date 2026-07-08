import { Button } from '@repo/ui'
import { formatCurrency } from "@repo/utils"
import './App.css'

function App() {


  return (
    <>
      <div> <h1> Complete Frontend Dev and Deployement Lifecycle</h1>
        <Button onClick={() => {
          alert(formatCurrency(1234))
        }} />
        <p>Added the new feature</p>
      </div>
      <p>Branch Rules added - fixed</p>


    </>
  )
}

export default App
