import React, { useContext } from "react";
import { ScaleContext } from "./ScaleContext";

const ScaleSelector: React.FC = () => {
  const { scale, setScale } = useContext(ScaleContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setScale(event.target.value);
  };

  return (
    <select value={scale} onChange={handleChange}>
      <option value="major">Major</option>
      <option value="minor"> Minor</option>
    </select>
  );
};

export default ScaleSelector;
