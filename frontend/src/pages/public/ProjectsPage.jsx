import PageShell from "../../components/layout/PageShell.jsx";

function ProjectsPage() {
  return (
    <PageShell>
      <main className="container" style={{ padding: "80px 0" }}>
        <h1>Projects</h1>
        <p style={{ color: "var(--text-muted)" }}>
          Live products, SaaS experiments, and development work.
        </p>
      </main>
    </PageShell>
  );
}

export default ProjectsPage;
