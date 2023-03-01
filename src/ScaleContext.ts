import React, { createContext, useState } from "react";

interface ScaleContextProps {
  scale: string;
  setScale: (scale: string) => void;
}

export const ScaleContext = createContext<ScaleContextProps>({
  scale: "major",
  setScale: () => {}
});
