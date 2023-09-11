import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { SkillsContainer, SkillTitle } from "../styles/Skills";

interface Props {
  fullStars: number;
  halfStars?: number;
}
export function Skills() {
  let programmingLanguages = [
    [
      "React.js",
      "JavaScript ",
      "Bootstrap",
      "Tailwind",
      "TypeScript",
      "EJS",
      "CSS",
    ],
    ["Node JS", "Java", "Express JS"],
  ];

  const Stars: React.FC<Props> = ({ fullStars, halfStars }) => {
    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={i} />
          ))}
        {halfStars
          ? Array(halfStars)
              .fill(0)
              .map((_, i) => <FaStarHalfAlt key={i + fullStars} />)
          : null}
      </>
    );
  };

  return (
    <SkillsContainer>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <table>
              <thead>
                <tr>
                  <h4>Front-End</h4>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][0]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={5} />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][1]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={5} />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][2]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={5} />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][3]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={5} />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][4]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={4} halfStars={1} />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][5]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={5} />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <SkillTitle> {programmingLanguages[0][6]}</SkillTitle>
                  </td>
                  <td>
                    {" "}
                    <Stars fullStars={5} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <table>
              <thead>
                <tr>
                  <h4>Backend</h4>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <SkillTitle>{programmingLanguages[1][0]}</SkillTitle>
                  </td>
                  <td>
                    <Stars fullStars={4} halfStars={1} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SkillTitle>{programmingLanguages[1][1]}</SkillTitle>
                  </td>
                  <td>
                    <Stars fullStars={3} halfStars={1} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <SkillTitle>{programmingLanguages[1][2]}</SkillTitle>
                  </td>
                  <td>
                    <Stars fullStars={5} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
}
