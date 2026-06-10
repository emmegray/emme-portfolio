import React, { useRef, useState } from "react";

export default function ExperienceTimelineReact({ experiences }) {
  const years = Object.keys(experiences).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const rowRef = useRef(null);
  const touchStartX = useRef(0);

  // Funzione per scrollare
  const scrollRow = (dir) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth * 0.7;
      rowRef.current.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
    }
  };

  // Funzione per gestire il touch/swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      scrollRow(diff > 0 ? 1 : -1);
    }
  };

  // Funzione per navigare ai pallini
  const goToCard = (index) => {
    if (rowRef.current) {
      const cardWidth = rowRef.current.offsetWidth;
      rowRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
      setCurrentCardIndex(index);
    }
  };

  const showPagination = experiences[selectedYear].length > 1;
  const cardsCount = experiences[selectedYear].length;

  return (
    <div className="timeline-container">
      <div className="years">
        <ul>
          {years.map((year) => (
            <li
              key={year}
              className={year === selectedYear ? "active" : ""}
              onClick={() => {
                setSelectedYear(year);
                setCurrentCardIndex(0);
              }}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
      <div className="content" style={{ position: "relative" }}>
        <div
          className="experience-row"
          ref={rowRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
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
        {showPagination && (
          <div className="exp-pagination">
            {Array.from({ length: cardsCount }).map((_, index) => (
              <button
                key={index}
                className={`exp-dot ${index === currentCardIndex ? "active" : ""}`}
                onClick={() => goToCard(index)}
                aria-label={`Vai alla card ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}