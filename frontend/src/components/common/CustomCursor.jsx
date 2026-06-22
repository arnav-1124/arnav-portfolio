import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      const target = event.target;
      const pointerElement = target.closest(
        "a, button, input, textarea, select, [role='button']",
      );

      setIsPointer(Boolean(pointerElement));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={isPointer ? "custom-cursor is-pointer" : "custom-cursor"}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <span />
    </div>
  );
}

export default CustomCursor;
