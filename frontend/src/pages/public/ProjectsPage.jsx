import { useMemo, useState } from "react";

import PageShell from "../../components/layout/PageShell.jsx";
import { projectCategories, projects } from "../../content/projects.content.js";

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("finance");

  const selectedCategory = useMemo(() => {
    return projectCategories.find(
      (category) => category.value === activeCategory,
    );
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageShell>
      <main className="projects-page">
        <section className="projects-top container">
          <div>
            <span className="page-kicker">Projects</span>
            <h1>
              Proof of work across finance systems and development builds.
            </h1>
            <p>
              A curated showcase of real accounting workflow improvements,
              reporting systems, SaaS experiments, and full-stack development
              projects.
            </p>
          </div>

          <div className="project-category-panel">
            <label htmlFor="project-category">Showing</label>

            <select
              id="project-category"
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
            >
              {projectCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <p>{selectedCategory?.description}</p>
          </div>
        </section>

        <section
          className="projects-filter-row container"
          aria-label="Project categories"
        >
          <div className="segmented-control">
            <span
              className="segmented-control__indicator"
              style={{
                transform:
                  activeCategory === "development"
                    ? "translateX(calc(100% + 4px))"
                    : "translateX(0)",
              }}
            />

            {projectCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={
                  activeCategory === category.value
                    ? "segmented-control__button is-active"
                    : "segmented-control__button"
                }
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        <section className="projects-grid container" aria-label="Project list">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__top">
                <div>
                  <span>{project.type}</span>
                  <h2>{project.title}</h2>
                </div>

                <strong>{project.status}</strong>
              </div>

              <p className="project-card__summary">{project.summary}</p>

              <div className="project-card__impact">
                {project.impact.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>

              <div className="project-card__tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="project-card__actions">
                {project.links.view ? (
                  <a href={project.links.view} target="_blank">
                    View case study
                  </a>
                ) : (
                  <button type="button" disabled>
                    Case study soon
                  </button>
                )}

                {project.links.try ? (
                  <a href={project.links.try} target="_blank">
                    Try it
                  </a>
                ) : (
                  <button type="button" disabled>
                    Live link soon
                  </button>
                )}

                {project.media.drive ? (
                  <a href={project.media.drive}>Open proof file</a>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}

export default ProjectsPage;
