import { v4 } from "uuid";
import { type Header } from "./utils";

export type PortifolioData = {
  id: string;
  name: string;
  url: string;
  repository: string;
  description: string;
};
export type PortifolioPayload = Omit<PortifolioData, "id">;

const createData = (
  name: string,
  url: string,
  repository: string,
  description: string
): PortifolioData => {
  return {
    id: v4(),
    name,
    url,
    repository,
    description,
  };
};

export const portifolioData = [
  createData(
    "Facebook Copy",
    "https://facebook-copy-ten.vercel.app/",
    "https://github.com/LuigiCleffi/facebook-copy",
    "amazing copy of facebook"
  ),
  createData(
    "Instagram Copy",
    "https://instagram-copy-ten.vercel.app/",
    "https://github.com/LuigiCleffi/instagram-copy",
    "amazing copy of instagram"
  ),
];

type PortifolioKeys = keyof PortifolioPayload;

export type PortifolioHeader = Header<PortifolioKeys>;
