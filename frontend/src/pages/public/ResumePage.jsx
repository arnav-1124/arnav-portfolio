import PageShell from "../../components/layout/PageShell.jsx";

function ResumePage() {
  return (
    <PageShell>
      <main className="container" style={{ padding: "80px 0" }}>
        <h1>Resume</h1>
        <p style={{ color: "var(--text-muted)" }}>
          Resume preview and downloadable professional profile.
        </p>
      </main>
    </PageShell>
  );
}

export default ResumePage;
