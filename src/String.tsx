import React from "react";
import Fret from "./Fret";

interface Props {
  intervals: { [key: string]: string };
  selectedNote: string | null;
  stringNumber: number;
}

const String: React.FC<Props> = ({ intervals, selectedNote, stringNumber }) => {
  const notesByString = {
    1: [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#"
    ].reverse(),
    2: [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#"
    ].reverse(),
    3: [
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#"
    ].reverse(),
    4: [
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#"
    ].reverse(),
    5: [
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#"
    ].reverse(),
    6: [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#"
    ].reverse()
  };
  const notes = notesByString[stringNumber];

  return (
    <div className="string">
      {notes.map((note, index) => (
        <Fret
          key={index}
          note={note}
          intervals={intervals}
          selectedNote={selectedNote}
        />
      ))}
    </div>
  );
};

export default String;
