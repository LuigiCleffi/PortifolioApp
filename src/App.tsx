import { Navbar } from './Assets/Components/Navbar'
import { Body } from './Assets/Components/Body'
import { ProjectMaintenance } from "./Assets/Components/Warnings/ProjectMaintenance";
export function App() {

  return (
    <div className="App">
      <div className="container mt-2">
        <Navbar />
  <ProjectMaintenance>
        <Body />
  </ProjectMaintenance>

      </div>

    </div>
  )
}

