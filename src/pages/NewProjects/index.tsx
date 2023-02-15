import { ChangeEvent, useEffect, useState } from 'react';
import { UserPlus } from "phosphor-react";
import { FormContainer, NewProjectContainer, ProfilePic } from "./styles";
import { Cards } from '../../Assets/Components/Cards';
import { axiosInstance } from '../../Config/axiosSettings';

const githubImage = "https://avatars.githubusercontent.com/u/65309377?v=4"

export function Portifolio() {

    
    const [projectName, setProjectName] = useState("")
    const [projectUrl, setProjectUrl] = useState("")
    const [projectRepositoryURL, setprojectRepositoryURL] = useState("")
    const [projecDescription, setprojecDescription] = useState("")
    const [data, setData] = useState(null);

    const defaultProjectName = projectName || 'Project Title';

    const defaultProjectDescription= projecDescription || 'Add some good content about your work, please keep between 60 to 80 words';
    
    function handleProjectNameInput(evt: ChangeEvent<HTMLInputElement>){
        setProjectName(evt.target.value)
    }

    function handleProjectURLInput(evt: ChangeEvent<HTMLInputElement>){
        setProjectUrl(evt.target.value)
    }

    function handleProjectRepositoryURLInput(evt: ChangeEvent<HTMLInputElement>){
        setprojectRepositoryURL(evt.target.value)
    }

    function handleProjectDescriptionInput(evt: ChangeEvent<HTMLTextAreaElement>){
        setprojecDescription(evt.target.value)
    }
    async function createNewProject(){
        try{
          const response = await axiosInstance.post('http://localhost:3000/user/projects', {
          name: defaultProjectName,
          URL: projectUrl,
          repositoryURL: projectRepositoryURL,
          description: defaultProjectDescription
        })
          console.log(response.data);
            setData(response.data);
            
      
        }catch(error){
            console.log(error);
          }
    }
    
    return (
        <NewProjectContainer>

            <ProfilePic className="profile-pic">
                <img src="https://avatars.githubusercontent.com/u/65309377?v=4" alt="Your Profile Picture" />
                <UserPlus className="add-button"/>
            </ProfilePic>

        <FormContainer>
            <h1>Project information</h1>
            <form onSubmit={createNewProject} action="/">
                <label htmlFor="projectName">Name:</label>
                <input onChange={(evt) => handleProjectNameInput(evt)} type="text" id="projectName" placeholder="Select a good name" required/>
                <article>Type a good name for your project</article>

                <label htmlFor="projectUrl">URL:</label>
                <input onChange={(evt) => handleProjectURLInput(evt)} type="text" id="projectName" placeholder="Type your project url" required/>
                <article>tips: Build it and deploy with Netlify</article>

                <label htmlFor="projectUrl">Code Repository:</label>
                <input onChange={(evt) => handleProjectRepositoryURLInput(evt)} type="text" id="projectName" placeholder="Type your project repository url" required/>
                <article>tips: Use Github or Gitlab</article>
                
                <label htmlFor="projectDescription">Description:</label>
                <textarea placeholder="Add some awesome description of your amazing work !" onChange={(evt) => handleProjectDescriptionInput(evt)} name="" id="projectDescription" cols={60} rows={3} required></textarea>

                <button>Add Project</button>
            </form>
        </FormContainer>
        <Cards
                defaultProjectName={defaultProjectName}
                defaultProjectDescription={defaultProjectDescription}
                projectUrl={projectUrl}
                projectRepositoryURL={projectRepositoryURL}
              />
        </NewProjectContainer>
    )
}
