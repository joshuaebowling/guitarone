import { createContext } from "react";

interface DropToContextProps {
  dropTo: string;
  setDropTo: (dropTo: string) => void;
}

export const DropToContext = createContext<DropToContextProps>({
  dropTo: "",
  setDropTo: () => {}
});
