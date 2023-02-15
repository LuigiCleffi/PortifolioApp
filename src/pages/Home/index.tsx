import { useState, useEffect } from "react"

import { NavLink } from "react-router-dom";
import { ArrowBendLeftUp, ArrowCircleUp, PlusCircle } from "phosphor-react";
import { AboutContainer, ProjectsSection, ReadMoreButton } from "./styles";
import { AboutSection } from "../../Assets/Styles/AboutMe";
import { Cards } from "../../Assets/Components/Cards";
import { scrollDown } from "../../Assets/Components/Navbar";
import { Skills } from "../../Assets/Components/SkillsSection";
import { AboutMe } from "../../Assets/Components/AboutMe";
import { Footer } from "../../Assets/Components/Footer";

const githubImage = "https://avatars.githubusercontent.com/u/65309377?v=4"

export function UserProjectsPage() {
  const [visible, setVisible] = useState(false)

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

              <Cards
                defaultProjectName="Card title"
                defaultProjectDescription="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint."
                projectUrl="https://www.google.com.br"
                projectRepositoryURL="https://www.google.com.br"
              />


              <Cards
                defaultProjectName="Card title"
                defaultProjectDescription="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint."
                projectUrl="https://www.google.com.br"
                projectRepositoryURL="https://www.google.com.br"
              />


              <Cards
                defaultProjectName="Card title"
                defaultProjectDescription="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint."
                projectUrl="https://www.google.com.br"
                projectRepositoryURL="https://www.google.com.br"
              />
            </div>

            <div className="row">

              <Cards
                defaultProjectName="Card title"
                defaultProjectDescription="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint."
                projectUrl="https://www.google.com.br"
                projectRepositoryURL="https://www.google.com.br"
              />

              <Cards
                defaultProjectName="Card title"
                defaultProjectDescription="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint."
                projectUrl="https://www.google.com.br"
                projectRepositoryURL="https://www.google.com.br"
              />


              <Cards
                defaultProjectName="Card title"
                defaultProjectDescription="lorem ipsum Dolore ullamco minim aute officia aliqua nulla ad. Sunt anim laborum amet voluptate magna veniam dolor amet exercitation sit anim sint consequat. Sit nulla culpa excepteur enim excepteur esse elit do esse est et. Dolor do pariatur fugiat tempor Lorem ex. Aliquip voluptate velit magna est do in. Nostrud velit minim id commodo. Fugiat aliqua non velit duis et sint."
                projectUrl="https://www.google.com.br"
                projectRepositoryURL="https://www.google.com.br"
              />

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
