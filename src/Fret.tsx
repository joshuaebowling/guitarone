import React, { useContext } from "react";
import { ScaleNoteContext } from "./ScaleNoteContext";

interface Props {
  note: string;
  intervals: { [key: string]: string };
}

const Fret: React.FC<Props> = ({ note, intervals }) => {
  const { selectedScaleNote } = useContext(ScaleNoteContext);

  let interval = "";
  if (intervals[note]) {
    interval = intervals[selectedScaleNote];
  }

  return (
    <div className="fret">
      <div className="note">{note}</div>
      {selectedScaleNote !== "" && <div className="interval">{interval}</div>}
    </div>
  );
};

export default Fret;
