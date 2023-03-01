import React, { useContext, useState, useEffect } from "react";
import String from "./String";
import { ScaleContext } from "./ScaleContext";
import { ScaleNoteContext } from "./ScaleNoteContext";
import { getIntervals } from "./getIntervals";

const Octave: React.FC = () => {
  const { scale } = useContext(ScaleContext);
  const { selectedScaleNote } = useContext(ScaleNoteContext);
  const [intervals, setIntervals] = useState<any>(null);
  const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11];
  const minorScaleIntervals = [0, 2, 3, 5, 7, 8, 10];
  useEffect(() => {
    getIntervals(selectedScaleNote, scale);
  }, [scale, selectedScaleNote]);
  if (intervals === null) return <></>;
  return (
    <div className="fretboard">
      <String stringNumber={1} intervals={intervals} />
      <String stringNumber={2} intervals={intervals} />
      <String stringNumber={3} intervals={intervals} />
      <String stringNumber={4} intervals={intervals} />
      <String stringNumber={5} intervals={intervals} />
      <String stringNumber={6} intervals={intervals} />
    </div>
  );
};

export default Octave;
