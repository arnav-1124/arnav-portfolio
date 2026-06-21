import { useMemo, useState } from "react";

import PageShell from "../../components/layout/PageShell.jsx";
import { journeyFilters, journeyItems } from "../../content/journey.content.js";

function JourneyPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredJourney = useMemo(() => {
    if (activeFilter === "All") return journeyItems;

    return journeyItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <PageShell>
      <main className="journey-page">
        <section className="journey-top container">
          <div>
            <span className="page-kicker">Journey</span>
            <h1>Academic progress, CA milestones, and practical exposure.</h1>
            <p>
              A chronological proof trail of my education, Chartered Accountancy
              progress, and articleship journey.
            </p>
          </div>

          <aside className="journey-status-card">
            <span>Current status</span>
            <strong>CA Articleship ongoing</strong>
            <p>
              Building practical exposure while continuing development and
              product-building work.
            </p>
          </aside>
        </section>

        <section
          className="journey-controls container"
          aria-label="Journey filters"
        >
          <div className="filter-chip-group">
            {journeyFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "filter-chip is-active"
                    : "filter-chip"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section
          className="journey-timeline container"
          aria-label="Journey timeline"
        >
          <div className="journey-timeline__track">
            {filteredJourney.map((item) => (
              <article className="journey-item" key={item.id}>
                <div className="journey-item__marker" />

                <div className="journey-item__date">
                  <span>{item.year}</span>
                  <strong>{item.period}</strong>
                </div>

                <div className="journey-item__card">
                  <div className="journey-item__meta">
                    <span>{item.category}</span>
                    <span>{item.tag}</span>
                  </div>

                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                  <div className="journey-item__actions">
                    {item.proofUrl ? (
                      <a href={item.proofUrl}>View proof</a>
                    ) : (
                      <button type="button" disabled>
                        Proof will be added
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}

export default JourneyPage;
