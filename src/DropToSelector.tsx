import React, { useContext } from "react";
import { DropToContext } from "./DropToContext";

const DropTo: React.FC = () => {
  const { dropTo, setDropTo } = useContext(DropToContext);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDropTo(event.target.value);
  };

  return (
    <select value={dropTo} onChange={handleChange}>
      <option value="E">E</option>
      <option value="A">A</option>
      <option value="D">D</option>
      <option value="G">G</option>
      <option value="B">B</option>
      <option value="E">E</option>
    </select>
  );
};

export default DropTo;
