import "./styles.css";
import Guitar from "./Fretboard";
import { useState } from "react";
import { ScaleNoteContext } from "./ScaleNoteContext";
import { DropToContext } from "./DropToContext";
import { ScaleContext } from "./ScaleContext";
export default function App() {
  const [dropTo, setDropTo] = useState("");
  const [selectedScale, setSelectedScale] = useState("");
  const [scale, setScale] = useState("");
  return (
    <div className="App">
      <ScaleContext.Provider value={{ scale, setScale }}>
        <ScaleNoteContext.Provider value={{ selectedScaleNote: selectedScale, setSelectedScaleNote: setSelectedScale }}>
          <DropToContext.Provider
            value={{ dropTo: dropTo, setDropTo: setDropTo }}
          >
            <Guitar />
          </DropToContext.Provider>
        </ScaleNoteContext.Provider>
      </ScaleContext.Provider>
    </div>
  );
}
