import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300"
      style={{ opacity: pos.x === -100 ? 0 : 1 }}
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, oklch(0.78 0.08 260 / 25%) 0%, oklch(0.78 0.08 260 / 10%) 35%, oklch(0.78 0.08 260 / 3%) 60%, transparent 75%)",
        }}
      />
    </div>
  );
}
