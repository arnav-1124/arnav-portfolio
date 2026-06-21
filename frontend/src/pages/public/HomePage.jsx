import PageShell from "../../components/layout/PageShell.jsx";
import IntroTerminal from "../../components/sections/IntroTerminal.jsx";

function HomePage() {
  return (
    <PageShell>
      <main className="home-page">
        <section className="profile-hero container">
          <div className="profile-hero__meta">
            <span>CA × Developer Portfolio</span>
            <span>Accounting • Development • Product Work</span>
          </div>

          <div className="profile-hero__avatar" aria-hidden="true">
            AG
          </div>

          <h1>
            Documenting my academic journey, accounting experience, and
            development work.
          </h1>

          <p>
            A focused portfolio for my CA progress, articleship exposure,
            certificates, full-stack projects, SaaS builds, and technical notes.
          </p>

          <div className="profile-hero__actions">
            <a href="/projects" className="primary-action">
              View Work
            </a>
            <a href="/journey" className="secondary-action">
              Explore Journey
            </a>
          </div>
        </section>

        <section
          className="proof-overview container"
          aria-label="Portfolio proof sections"
        >
          <article className="proof-tile">
            <span>01</span>
            <h2>Academic proof</h2>
            <p>CA milestones, certificates, education, and resume.</p>

            <div className="proof-tile__actions">
              <a href="/journey">View journey</a>
              <a href="/resume">View resume</a>
            </div>
          </article>

          <article className="proof-tile">
            <span>02</span>
            <h2>Product work</h2>
            <p>Finance tools, SaaS experiments, and MERN projects.</p>

            <div className="proof-tile__actions">
              <a href="/projects">View projects</a>
            </div>
          </article>

          <article className="proof-tile">
            <span>03</span>
            <h2>Field experience</h2>
            <p>
              Accounting workflows, documents, Excel, and automation exposure.
            </p>

            <div className="proof-tile__actions">
              <a href="/journey">View experience</a>
            </div>
          </article>
        </section>

        <section className="railway-timeline container">
          <div className="section-heading">
            <span>Timeline</span>
            <h2>Journey so far</h2>
            <p>
              A vertical flow of academic milestones, accounting exposure, and
              development progress.
            </p>
          </div>

          <div className="railway-timeline__track">
            <article className="timeline-node">
              <div className="timeline-node__marker" />
              <div className="timeline-node__content">
                <span>Academic foundation</span>
                <h3>Started building accounting fundamentals</h3>
                <p>
                  Built the base across accounting, business laws, taxation,
                  finance, and professional studies.
                </p>
              </div>
            </article>

            <article className="timeline-node">
              <div className="timeline-node__marker" />
              <div className="timeline-node__content">
                <span>CA Intermediate</span>
                <h3>Cleared an important CA milestone</h3>
                <p>
                  Moved deeper into practical accounting, compliance, and
                  professional finance exposure.
                </p>
              </div>
            </article>

            <article className="timeline-node timeline-node--split">
              <div className="timeline-node__marker" />
              <div className="timeline-node__content">
                <span>Feb 2026 • Development shift</span>
                <h3>Started serious full-stack development</h3>
                <p>
                  Began building with JavaScript, React, Node.js, Express,
                  databases, APIs, deployment workflows, and SaaS-style product
                  thinking.
                </p>
              </div>

              <div className="timeline-node__side">
                <IntroTerminal />
              </div>
            </article>

            <article className="timeline-node">
              <div className="timeline-node__marker" />
              <div className="timeline-node__content">
                <span>Now building</span>
                <h3>Finance-focused tools and portfolio proof system</h3>
                <p>
                  Connecting accounting domain knowledge with development by
                  building document utilities, automation tools, and live
                  project showcases.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

export default HomePage;
