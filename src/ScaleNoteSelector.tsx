import React, { useContext } from "react";
import { ScaleNoteContext } from "./ScaleNoteContext";

const ScaleNoteSelector: React.FC = () => {
  const { selectedScaleNote, setSelectedScaleNote } = useContext(ScaleNoteContext);

  const handleChange = (event) => {
    setSelectedScaleNote(event.target.value);
  };

  return (
    <div className="scale-selector">
      <select value={selectedScaleNote} onChange={handleChange}>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="D">D</option>
        <option value="D#">D#</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="F#">F#</option>
        <option value="G">G</option>
        <option value="G#">G#</option>
        <option value="A">A</option>
        <option value="A#">A#</option>
        <option value="B">B</option>
      </select>
    </div>
  );
};

export default ScaleNoteSelector;
