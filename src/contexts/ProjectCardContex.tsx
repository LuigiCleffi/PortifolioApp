import { AxiosResponse } from "axios";
import { ReactNode, createContext, useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";

interface Project {
  id: string;
  name: string;
  description: string;
  URL: string;
  repositoryURL: string;
  isVisible: boolean;
};

interface ProjectsContextType {
  projects: Project[],
  getProjects: () => Promise<void>,
  deleteProject: (id: string) => Promise<void>;
}

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectContext = createContext({} as ProjectsContextType)

export function ProjectProvider({children}: ProjectProviderProps){
  const [projects, setProjects] = useState<Project[]>([]);

  async function fetchProjects(){
    try{
      const response: AxiosResponse<Project[]> = await axiosClient.get('user/projects')
      setProjects(response.data)
  
    }catch(error){
        console.log(error);
      }
  }

  async function deleteProject(id: string) {
    try {
      await axiosClient.delete(`user/project/${id}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    } catch (error) {
      console.log(error);
    }
  }
  
useEffect(() => {
  fetchProjects();
}, [])
const contextValue: ProjectsContextType = {
  projects,
  getProjects: fetchProjects,
  deleteProject
}
return (
  <ProjectContext.Provider value={contextValue}>
    {children}
  </ProjectContext.Provider>
)
}