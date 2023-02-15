import { Card, Button } from "react-bootstrap";
import { CardContainer, CardFooter, CodeIcon } from "./styles";

const githubImage = "https://avatars.githubusercontent.com/u/65309377?v=4";
interface CardProps {
  defaultProjectName: string;
  defaultProjectDescription: string;
  projectUrl: string;
  projectRepositoryURL: string;
}
function redirectToWebSite(page: string){
 window.location.href = page
}
export function Cards({
  defaultProjectName,
  defaultProjectDescription,
  projectUrl,
  projectRepositoryURL,
}: CardProps) {
  return (
    <CardContainer className="text-light">
      <Card.Img variant="top" src={githubImage} />
      <Card.Body>
        <Card.Title>{defaultProjectName}</Card.Title>
        <Card.Text>{defaultProjectDescription}</Card.Text>
      </Card.Body>
      <CardFooter>
        <div className="buttons">
          <Button
            onClick={() => {redirectToWebSite(projectUrl)}}
            variant="secondary"
          >
            Check it out
          </Button>

          <CodeIcon
            size={24}
            onClick={() => redirectToWebSite(projectRepositoryURL)}
          />
        </div>
      </CardFooter>
    </CardContainer>
  );
}
