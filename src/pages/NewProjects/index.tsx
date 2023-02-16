import { ChangeEvent, useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import { FormContainer, NewProjectContainer, ProfilePic } from "./styles";
import { Cards } from "../../Assets/Components/Cards";
import axiosClient from "../../api/axiosClient";
interface ProjectTypes {
  name: string;
  url: string;
  repositoryURL: string;
  description: string;
  id: string;
}

export function Portifolio() {
  const [project, setProject] = useState({} as ProjectTypes);
  const [data, setData] = useState(null);

  const defaultProjectName = project.name || "Project Title";

  const defaultProjectDescription =
    project.description ||
    "Add some good content about your work, please keep between 60 to 80 words";

  function handleProjectNameInput(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setProject((prevProject) => ({ ...prevProject, name: value }));
  }

  function handleProjectURLInput(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setProject((prevProject) => ({ ...prevProject, url: value }));
  }

  function handleProjectRepositoryURLInput(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    setProject((prevProject) => ({ ...prevProject, repositoryURL: value }));
  }

  function handleProjectDescriptionInput(
    evt: ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value } = evt.target;
    setProject((prevProject) => ({ ...prevProject, description: value }));
  }
  async function createNewProject() {
    try {
      const response = await axiosClient.post("user/projects", {
        name: defaultProjectName,
        URL: project.url,
        repositoryURL: project.repositoryURL,
        description: defaultProjectDescription,
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewProjectContainer>
      <ProfilePic className="profile-pic">
        <img
          src="https://avatars.githubusercontent.com/u/65309377?v=4"
          alt="Your Profile Picture"
        />
        <UserPlus className="add-button" />
      </ProfilePic>

      <FormContainer>
        <h1>Project information</h1>
        <form onSubmit={createNewProject} action="/">
          <label htmlFor="projectName">Name:</label>
          <input
            onChange={(evt) => handleProjectNameInput(evt)}
            type="text"
            id="projectName"
            placeholder="Select a good name"
            required
          />
          <article>Type a good name for your project</article>

          <label htmlFor="projectUrl">URL:</label>
          <input
            onChange={(evt) => handleProjectURLInput(evt)}
            type="text"
            id="projectName"
            placeholder="Type your project url"
            required
          />
          <article>tips: Build it and deploy with Netlify</article>

          <label htmlFor="projectUrl">Code Repository:</label>
          <input
            onChange={(evt) => handleProjectRepositoryURLInput(evt)}
            type="text"
            id="projectName"
            placeholder="Type your project repository url"
            required
          />
          <article>tips: Use Github or Gitlab</article>

          <label htmlFor="projectDescription">Description:</label>
          <textarea
            placeholder="Add some awesome description of your amazing work !"
            onChange={(evt) => handleProjectDescriptionInput(evt)}
            name=""
            id="projectDescription"
            cols={60}
            rows={3}
            required
          ></textarea>

          <button>Add Project</button>
        </form>
      </FormContainer>
      <Cards
        key={parseInt(project.id)}
        defaultProjectName={defaultProjectName}
        defaultProjectDescription={defaultProjectDescription}
        projectUrl={project.url}
        projectRepositoryURL={project.repositoryURL}
      />
    </NewProjectContainer>
  );
}
