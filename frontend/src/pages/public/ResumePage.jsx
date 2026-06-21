import PageShell from "../../components/layout/PageShell.jsx";
import { certificateGroups } from "../../content/certificates.content.js";
import { profile } from "../../content/profile.content.js";

function ResumePage() {
  return (
    <PageShell>
      <main className="resume-page">
        <section className="resume-top container">
          <div>
            <span className="page-kicker">Resume</span>

            <h1>Professional profile, proof links, and career snapshot.</h1>

            <p>
              A central place for my resume, academic proof, CA milestones,
              certificates, LinkedIn, GitHub, and work/project credibility.
            </p>

            <div className="resume-actions">
              <a
                href={profile.resumeUrl}
                className="primary-action"
                target="_blank"
              >
                View Resume
              </a>
              <a href={profile.resumeUrl} className="secondary-action" download>
                Download CV
              </a>
            </div>
          </div>

          <aside className="resume-status-card">
            <span>Profile snapshot</span>
            <strong>{profile.name}</strong>
            <p>{profile.role}</p>

            <div className="resume-status-card__meta">
              <small>Status</small>
              <b>{profile.currentStatus}</b>
            </div>

            <div className="resume-status-card__meta">
              <small>Location</small>
              <b>{profile.location}</b>
            </div>
          </aside>
        </section>

        <section className="resume-layout container">
          <article className="resume-preview-card">
            <div className="resume-preview-card__top">
              <div>
                <span>Resume preview</span>
                <h2>Arnav Gupta — Resume</h2>
              </div>

              <a href={profile.resumeUrl} target="_blank">
                Open PDF
              </a>
            </div>

            <div className="resume-preview-frame">
              <div className="resume-preview-frame__placeholder">
                <span>PDF</span>
                <strong>Resume preview area</strong>
                <p>
                  Add your resume at{" "}
                  <code>/public/resume/arnav-gupta-resume.pdf</code> to enable
                  the actual preview and download.
                </p>
              </div>
            </div>
          </article>

          <aside className="resume-focus-card">
            <span>Focus areas</span>

            <div className="resume-focus-list">
              {profile.focusAreas.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </aside>
        </section>

        <section className="proof-links-section container">
          <div className="section-heading">
            <span>Proof hub</span>
            <h2>Documents and credibility links</h2>
            <p>
              These cards will later connect to certificates, academic
              documents, CA proof, LinkedIn, GitHub, and selected public proof
              files.
            </p>
          </div>

          <div className="proof-links-grid">
            {certificateGroups.map((group) => (
              <article className="proof-link-card" key={group.id}>
                <span>{group.status}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="proof-link-card__actions">
                  {group.link ? (
                    <a href={group.link}>View proof</a>
                  ) : (
                    <button type="button" disabled>
                      Link soon
                    </button>
                  )}
                </div>
              </article>
            ))}

            <article className="proof-link-card">
              <span>External</span>
              <h3>LinkedIn</h3>
              <p>
                Professional profile, updates, experience, and public presence.
              </p>

              <div className="proof-link-card__actions">
                {profile.linkedin ? (
                  <a href={profile.linkedin}>Open LinkedIn</a>
                ) : (
                  <button type="button" disabled>
                    Link soon
                  </button>
                )}
              </div>
            </article>

            <article className="proof-link-card">
              <span>External</span>
              <h3>GitHub</h3>
              <p>
                Code repositories, development work, and product-building
                history.
              </p>

              <div className="proof-link-card__actions">
                {profile.github ? (
                  <a href={profile.github}>Open GitHub</a>
                ) : (
                  <button type="button" disabled>
                    Link soon
                  </button>
                )}
              </div>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

export default ResumePage;
