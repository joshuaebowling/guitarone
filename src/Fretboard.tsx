import React, { useState } from "react";
import DropTo from "./DropToSelector";
import Octave from "./Octave";
import ScaleNoteSelector from "./ScaleNoteSelector";
import { ScaleNoteContext } from "./ScaleNoteContext";
import ScaleSelector from "./ScaleSelector";

const Fretboard: React.FC = () => {
  const { setSelectedScaleNote } = React.useContext(ScaleNoteContext);
  return (
    <div>
      <ScaleSelector />
      <ScaleNoteSelector setSelectedNote={setSelectedScaleNote} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Octave />
        <Octave />
      </div>
    </div>
  );
};

export default Fretboard;
