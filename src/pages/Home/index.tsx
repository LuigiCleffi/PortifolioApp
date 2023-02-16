import { NavLink } from "react-router-dom";
import { PlusCircle } from "phosphor-react";

import { AboutContainer, ProjectsSection, ReadMoreButton } from "./styles";
import { AboutSection } from "../../Assets/Styles/AboutMe";
import { Cards } from "../../Assets/Components/Cards";
import { scrollDown } from "../../Assets/Components/Navbar";
import { Skills } from "../../Assets/Components/SkillsSection";
import { AboutMe } from "../../Assets/Components/AboutMe";
import { Footer } from "../../Assets/Components/Footer";
import { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectCardContex";
import { TrashIcon } from "../../Assets/Components/Cards/styles";
import axiosClient from "../../api/axiosClient";
import { AxiosResponse } from "axios";


export function UserProjectsPage() {
  const { projects, deleteProject } = useContext(ProjectContext);
  return (
    <>
      <AboutContainer className="col col-sm-4 col-md-6 col-lg-8 col-xl-12">
        <div>
          <h1 className="mt-4">Web Developer</h1>
          <h3>React | Express JS | Node</h3>
        </div>
        <AboutSection className="w-50 pt-3">
          <div className="text-white">
            <p>
              You are reading about an experienced web developer with a year
              working in a company and doing part time as freelancer
            </p>
            <p>
              I managed to create beutiful websites, one of them is a bevarage
              eCommerce website, backend was developed with Django and Frontend
              with React.{" "}
            </p>
            <p>
              Also looking to improve my skills, you are looking for a tech
              lover!{" "}
            </p>
          </div>
        </AboutSection>

        <a id="aboutMe" className="goToAboutSection" onClick={() => scrollDown({ section: "aboutMe", whereToSection: "about" })} href="#about">
          <ReadMoreButton>
            About me
          </ReadMoreButton>
        </a>


      </AboutContainer>


      <ProjectsSection id="projects" className="container">
        <div className="card text-bg-dark my-3 p-3 pb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-header fw-bold">Projects</h2>
            <NavLink to="/newProject"><PlusCircle size={40} /></NavLink>
          </div>
          <div className="card-body">
            <div className="row">
              {projects.map(project => (
               <>
                <TrashIcon isVisible={true} size={30} onClick={() => deleteProject(project.id)}/>
                <Cards
                  key={parseInt(project.id)}
                  defaultProjectName={project.name}
                  defaultProjectDescription={project.description}
                  projectUrl={project.URL}
                  projectRepositoryURL={project.repositoryURL}
                />
               </>
              ))}


            </div>
          </div>
        </div>
      </ProjectsSection>
      <div className={` mt-5`}></div>
      <Skills />
      <div className={` mt-5`}></div>
      <AboutMe />
      <Footer />
    </>
  );
}
