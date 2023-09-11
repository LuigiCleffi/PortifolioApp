import { FaCameraRetro } from "react-icons/fa";
import { About, Bio, InfoCard, SectionTitle } from "../styles/AboutMe";

export function AboutMe() {
  return (
    <>
      <div id="about" className="container w-100">
        <About className="mt-5  bg-dark p-4">
          <Bio className="text-center">
            <InfoCard className={`bg-light infoCard`}>
              <div className="imgBorder">
                <img
                  src="https://avatars.githubusercontent.com/u/65309377?v=4"
                  className="ProfilePic"
                  alt=""
                />
              </div>
              <div>
                <span className="h4 text-dark">Luigi Cleffi</span>
                <br />
                <span className="h6 text-dark">Web Developer</span>
              </div>
            </InfoCard>
          </Bio>

          <div className="sectionDivider m-2"></div>

          <div className="w-100 bg-dark text-light text-left p-2">
            <SectionTitle>Get to know me! </SectionTitle>
            <p>
              My name is Luigi Cleffi, I am from Brazil. I code since I was 16
              now I am 21 and still in love for coding,
            </p>
            <p>
              I'm a photographer on my free time <FaCameraRetro />,
            </p>
            <p>
              Currently studying Computer Science at FURB/Blumenau, SC -
              Brazil💻🚀
            </p>
          </div>
        </About>
      </div>
    </>
  );
}
