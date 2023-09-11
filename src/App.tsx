import { ProjectMaintenance } from "./assets/components/Warnings/ProjectMaintenance";
import { env } from "./config/env";
import { Home } from "./pages/Home";
export function App() {
  return (
    <div className="App">
      <div className="mt-2">
        {env.NODE_ENV === "development" ? (
          <Home />
        ) : (
          <ProjectMaintenance>
            <Home />
          </ProjectMaintenance>
        )}
      </div>
    </div>
  );
}
