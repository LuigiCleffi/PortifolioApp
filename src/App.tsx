import { ProjectMaintenance } from "./Assets/Components/Warnings/ProjectMaintenance";
import { UserProjectsPage } from './pages/Home';
export function App() {

  return (
    <div className="App">
      <div className="container mt-2">
      <ProjectMaintenance>
         <UserProjectsPage />
      </ProjectMaintenance>
      </div>
    </div>
  )
}

