// src/components/Reveal.jsx
import { useEffect, useRef } from "react";

export default function Reveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          } else {
            entry.target.classList.remove("reveal--visible");
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}