import { NavLink } from "react-router-dom";
import { PlusCircle } from "phosphor-react";
import {
  AboutContainer,
  PageWrapper,
  ProjectsSection,
  ReadMoreButton,
} from "./styles";
import { AboutSection } from "../../assets/styles/AboutMe";
import { Cards } from "../../assets/components/Cards";
import { scrollDown } from "../../assets/components/Navbar";
import { Skills } from "../../assets/components/SkillsSection";
import { AboutMe } from "../../assets/components/AboutMe";
import { Footer } from "../../assets/components/Footer";
import { selectPortifolioData } from "../../state/local/portifolio/selector";
import { useAppSelector } from "../../state/local/hooks";

export function Home() {
  const portifolioData = useAppSelector(selectPortifolioData);
  return (
    <PageWrapper>
      <AboutContainer>
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

        <a
          id="aboutMe"
          className="goToAboutSection"
          onClick={() =>
            scrollDown({ section: "aboutMe", whereToSection: "about" })
          }
          href="#about">
          <ReadMoreButton>About me</ReadMoreButton>
        </a>
      </AboutContainer>

      <ProjectsSection id="projects" className="container">
        <div className="card text-bg-dark my-3 p-3 pb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="card-header fw-bold">Projects</h2>
            <NavLink to="/portifolio">
              <PlusCircle size={40} />
            </NavLink>
          </div>
          <div className="card-body">
            <div className="row">
              {portifolioData.map((project) => (
                <>
                  {/* <TrashIcon
                    isVisible={true}
                    size={30}
                    onClick={() => deleteProject(project.id)}
                  /> */}
                  <Cards
                    key={project.id}
                    title={project.name}
                    description={project.description}
                    url={project.url}
                    repositoryURL={project.repository}
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
    </PageWrapper>
  );
}
