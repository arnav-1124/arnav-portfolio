function AdminDashboardPage() {
  return (
    <section className="admin-page">
      <div className="admin-page__heading">
        <span>Dashboard</span>
        <h1>Portfolio control center</h1>
        <p>Manage public content, contact messages, and proof sections.</p>
      </div>

      <div className="admin-card-grid">
        <article className="admin-card">
          <span>Messages</span>
          <h2>Contact inbox</h2>
          <p>Review messages submitted from the contact page.</p>
        </article>

        <article className="admin-card">
          <span>Content</span>
          <h2>Blog posts</h2>
          <p>Blog manager will be connected in the next step.</p>
        </article>

        <article className="admin-card">
          <span>Proof</span>
          <h2>Projects & journey</h2>
          <p>Manage project and milestone content later.</p>
        </article>
      </div>
    </section>
  );
}

export default AdminDashboardPage;
