import PageShell from "../../components/layout/PageShell.jsx";

function HomePage() {
  return (
    <PageShell>
      <main className="home-page">
        <section className="home-intro container">
          <div className="home-intro__content">
            <p className="eyebrow">CA × Developer</p>

            <h1>
              Documenting my accounting journey, development work, and the
              products I build.
            </h1>

            <p className="home-intro__text">
              A proof-focused portfolio covering academics, CA progress,
              articleship exposure, certificates, full-stack projects, SaaS
              experiments, and build notes.
            </p>

            <div className="home-intro__actions">
              <a href="/projects" className="primary-action">
                View Projects
              </a>
              <a href="/resume" className="secondary-action">
                View Resume
              </a>
            </div>
          </div>

          <aside className="identity-card">
            <div>
              <span className="identity-card__label">Current focus</span>
              <strong>CA Articleship + Full Stack Development</strong>
            </div>

            <div>
              <span className="identity-card__label">Building</span>
              <strong>Finance tools, SaaS utilities, document workflows</strong>
            </div>

            <div>
              <span className="identity-card__label">Core blend</span>
              <strong>Accounting domain knowledge + JavaScript stack</strong>
            </div>
          </aside>
        </section>

        <section className="quick-proof container">
          <article className="proof-card">
            <span>01</span>
            <h2>Academic Journey</h2>
            <p>CA progress, education, milestones, and certificates.</p>
          </article>

          <article className="proof-card">
            <span>02</span>
            <h2>Real Projects</h2>
            <p>Live SaaS tools, development projects, and case studies.</p>
          </article>

          <article className="proof-card">
            <span>03</span>
            <h2>Work Exposure</h2>
            <p>
              Accounting, Excel, documents, automation, and client workflows.
            </p>
          </article>
        </section>
      </main>
    </PageShell>
  );
}

export default HomePage;
