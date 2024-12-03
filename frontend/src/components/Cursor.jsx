import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update cursor position
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add hover effect on interactive elements
    const addHoverEffect = () => setIsHovering(true);
    const removeHoverEffect = () => setIsHovering(false);

    // Attach event listeners
    window.addEventListener("mousemove", updateCursorPosition);
    document.querySelectorAll("button, a, div").forEach((el) => {
      el.addEventListener("mouseover", addHoverEffect);
      el.addEventListener("mouseout", removeHoverEffect);
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.querySelectorAll("button, a, div").forEach((el) => {
        el.removeEventListener("mouseover", addHoverEffect);
        el.removeEventListener("mouseout", removeHoverEffect);
      });
    };
  }, []);

  return (
    <div
      className={`fixed blur-sm pointer-events-none z-50 rounded-full transition-transform duration-300 ${
        isHovering ? "bg-zinc-300 scale-100" : "bg-indigo-600 scale-100"
      }`}
      style={{
        width: "20px",
        height: "20px",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default Cursor;