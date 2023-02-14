import { UserPlus } from "phosphor-react";
import { FormContainer, NewProjectContainer, ProfilePic } from "./styles";

export function Portifolio() {
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
                <input type="text" id="projectName" placeholder="Select a good name" required/>
                <article>Type a good name for your project</article>

                <label htmlFor="projectUrl">URL:</label>
                <input type="text" id="projectName" placeholder="Select a good name" required/>
                <article>tips: Build it and deploy with Netlify</article>

                <label htmlFor="projectUrl">Code Repository:</label>
                <input type="text" id="projectName" placeholder="Select a good name" required/>
                <article>tips: Use Github or Gitlab</article>
                
                <label htmlFor="projectDescription">Description:</label>
                <textarea name="" id="projectDescription" cols={60} rows={3} required></textarea>

                <button>Add Project</button>
            </form>
        </FormContainer>

        </NewProjectContainer>
    )
}
