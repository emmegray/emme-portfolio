import React, { useRef, useState } from "react";

export default function ExperienceTimelineReact({ experiences }) {
  const years = Object.keys(experiences).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const rowRef = useRef(null);

  // Funzione per scrollare
  const scrollRow = (dir) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth * 0.7;
      rowRef.current.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
    }
  };

  const showArrows = experiences[selectedYear].length > 1;

  return (
    <div className="timeline-container">
      <div className="years">
        <ul>
          {years.map((year) => (
            <li
              key={year}
              className={year === selectedYear ? "active" : ""}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
<div className="content" style={{ position: "relative" }}>
  <div className="exp-arrows-row">
    {showArrows && (
      <button
        className="exp-arrow exp-arrow--left"
        aria-label="Scorri a sinistra"
        onClick={() => scrollRow(-1)}
        style={{ left: 0, position: "absolute" }}
      >
        {"<"}
      </button>
    )}
    <div className="experience-row" ref={rowRef}>
      {experiences[selectedYear].map((exp, idx) => (
        <div className="card-info" key={exp.title + idx}>
          <h2>{exp.title}</h2>
          <h3>{exp.subtitle}</h3>
          {exp.description && <p>{exp.description}</p>}
          {Array.isArray(exp.skills) && (
            <ul className="color-with-svg">
              {exp.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          )}
          {typeof exp.skills === "string" && <p>{exp.skills}</p>}
        </div>
      ))}
    </div>
    {showArrows && (
      <button
        className="exp-arrow exp-arrow--right"
        aria-label="Scorri a destra"
        onClick={() => scrollRow(1)}
        style={{ right: 0, position: "absolute" }}
      >
        {">"}
      </button>
    )}
  </div>
</div>
    </div>
  );
}