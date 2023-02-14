import { ChangeEvent ,useState } from 'react';
import { UserPlus } from "phosphor-react";
import { CardContainer, CardFooter, CodeIcon, FormContainer, NewProjectContainer, ProfilePic } from "./styles";
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
const githubImage = "https://avatars.githubusercontent.com/u/65309377?v=4"
export function Portifolio() {
    const [projectName, setProjectName] = useState("")
    const [projectUrl, setProjectUrl] = useState("")
    const [projectRepositoryURL, setprojectRepositoryURL] = useState("")
    const [projecDescription, setprojecDescription] = useState("")

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

    return (
        <NewProjectContainer>

            <ProfilePic className="profile-pic">
                <img src="https://avatars.githubusercontent.com/u/65309377?v=4" alt="Your Profile Picture" />
                <UserPlus className="add-button"/>
            </ProfilePic>

        <FormContainer>
            <h1>Project information</h1>
            <form action="">
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
        <CardContainer className="text-light bg-dark">
            <Card.Img variant="top" src={githubImage}/>
            <Card.Body>
        <Card.Title>{defaultProjectName}</Card.Title>
        <Card.Text>
       {defaultProjectDescription}
        </Card.Text>
      </Card.Body>
      <CardFooter>
        <div className="buttons">
        <a href={projectUrl}><Button variant="secondary">Check it out</Button></a >
        <a href={projectRepositoryURL} className='codeAnchorTag' ><CodeIcon size={24}/></a>
        </div>
      </CardFooter>
        </CardContainer>
        </NewProjectContainer>
    )
}
