import PageShell from "../../components/layout/PageShell.jsx";

function BlogPage() {
  return (
    <PageShell>
      <main className="container" style={{ padding: "80px 0" }}>
        <h1>Build Notes</h1>
        <p style={{ color: "var(--text-muted)" }}>
          Notes from accounting, development, automation, and product building.
        </p>
      </main>
    </PageShell>
  );
}

export default BlogPage;
