"use client";

import { useState, useEffect } from "react";

export default function PolicyTOC({ sections }) {
  const [activeSection, setActiveSection] = useState(
    sections[0]?.id || ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="policy-toc" aria-label="Table of contents">
      <div className="policy-toc-inner">
        <p className="policy-toc-label">On this page</p>
        <ul className="policy-toc-list">
          {sections.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`policy-toc-link${
                  activeSection === id ? " policy-toc-active" : ""
                }`}
              >
                <span className="policy-toc-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
