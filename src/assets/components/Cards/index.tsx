import { Card, Button } from "react-bootstrap";
import {
  CardContainer,
  CardFooter,
  CodeIcon,
  EditContainer,
  TrashIcon,
} from "./styles";

const githubImage = "https://avatars.githubusercontent.com/u/65309377?v=4";

type CardsProps = {
  title: string;
  description: string;
  url: string;
  repositoryURL: string;
};

function redirectToWebSite(page: string) {
  window.location.href = page;
}
export function Cards({ title, description, repositoryURL, url }: CardsProps) {
  return (
    <>
      <CardContainer className="text-light">
        <EditContainer>
          <Card.Img variant="top" src={githubImage} />
        </EditContainer>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <CardFooter>
          <div className="buttons">
            <Button
              onClick={() => {
                redirectToWebSite(url);
              }}
              variant="secondary">
              Check it out
            </Button>

            <CodeIcon
              size={24}
              onClick={() => redirectToWebSite(repositoryURL)}
            />
          </div>
        </CardFooter>
      </CardContainer>
    </>
  );
}
