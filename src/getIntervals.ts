const allNotes = [
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
  "A#",
  "B"
];

const majorIntervals = ["1", "2", "3", "4", "5", "6", "7"];

const minorIntervals = ["1", "2", "b3", "4", "5", "b6", "b7"];

export const getIntervals = (
  currentScaleNote: string,
  currentScale: string
) => {
  const intervals = {};
  const scale = currentScale === "Major" ? majorIntervals : minorIntervals;
  const startIndex = allNotes.indexOf(currentScaleNote);

  for (let i = 0; i < allNotes.length; i++) {
    const index = (startIndex + i) % allNotes.length;
    intervals[allNotes[index]] = scale[i % scale.length];
  }

  return intervals;
};
