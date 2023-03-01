import { createContext } from "react";

interface ScaleNoteContextProps {
  selectedScaleNote: string;
  setSelectedScaleNote: (selectedScale: string) => void;
}

export const ScaleNoteContext = createContext<ScaleNoteContextProps>({
  selectedScaleNote: "",
  setSelectedScaleNote: () => {}
});
