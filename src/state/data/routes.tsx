import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Portifolio } from "../../pages/Portifolio";

type RoutesProps = {
  title: string;
  path: string;
  element: JSX.Element;
};

const RoutesArea: RoutesProps[] = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/portifolio",
    title: "Portifolio",
    element: <Portifolio />,
  },
  {
    path: "/login",
    title: "Login",
    element: <Login />,
  },
] as const;

export default RoutesArea;
