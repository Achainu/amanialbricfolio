// src/components/LoadingScreen.jsx
import React, { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete(); // Appelle une fonction si elle est fournie
    }, 3000); // 3 secondes

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        Bonjour <span className="animate-blink ml-1">Alberic</span>
      </div>
      <div className="w-12 h-12 border-4 border-white border-dotted rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400 text-sm">Chargement en cours...</p>
    </div>
  );
};
export default LoadingScreen;