import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const latestPosition = useRef({ x: -100, y: -100 });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${latestPosition.current.x}px, ${latestPosition.current.y}px, 0)`;
      }

      frameRef.current = null;
    };

    const handleMouseMove = (event) => {
      latestPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      const target = event.target;
      const pointerElement = target.closest(
        "a, button, input, textarea, select, [role='button']",
      );

      setIsPointer(Boolean(pointerElement));

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateCursor);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={isPointer ? "custom-cursor is-pointer" : "custom-cursor"}
      aria-hidden="true"
    >
      <span />
    </div>
  );
}

export default CustomCursor;
