import PageShell from "../../components/layout/PageShell.jsx";

function ContactPage() {
  return (
    <PageShell>
      <main className="container" style={{ padding: "80px 0" }}>
        <h1>Contact</h1>
        <p style={{ color: "var(--text-muted)" }}>
          LinkedIn, GitHub, email, and collaboration links.
        </p>
      </main>
    </PageShell>
  );
}

export default ContactPage;
