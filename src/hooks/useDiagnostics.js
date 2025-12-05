import { useState } from "react";

const useDiagnostics = () => {
  const [isRunning, setIsRunning] = useState(false);

  const startDiagnostics = () => {
    setIsRunning(true);
    setTimeout(() => {
      alert("Diagnostics completed successfully!");
      setIsRunning(false);
    }, 2000);
  };

  return { startDiagnostics, isRunning };
};

export default useDiagnostics;
