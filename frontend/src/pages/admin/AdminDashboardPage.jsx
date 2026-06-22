import {
  BookOpenText,
  FileCheck2,
  FolderKanban,
  Inbox,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const dashboardCards = [
  {
    label: "Messages",
    title: "Contact inbox",
    value: "Live",
    description: "Review messages submitted from the contact page.",
    href: "/admin/contact-messages",
    icon: Inbox,
    tone: "orange",
  },
  {
    label: "Content",
    title: "Blog posts",
    value: "Soon",
    description: "Create and manage build notes from the admin panel.",
    href: "/admin/blog",
    icon: BookOpenText,
    tone: "green",
  },
  {
    label: "Proof",
    title: "Projects",
    value: "Soon",
    description: "Manage finance and development project case studies.",
    href: "/admin/projects",
    icon: FolderKanban,
    tone: "orange",
  },
  {
    label: "Journey",
    title: "Timeline",
    value: "Soon",
    description: "Update academic, CA, articleship, and dev milestones.",
    href: "/admin/journey",
    icon: FileCheck2,
    tone: "green",
  },
];

function AdminDashboardPage() {
  return (
    <section className="admin-dashboard">
      <section className="admin-dashboard-hero">
        <div>
          <span className="admin-kicker">Connected portfolio workspace</span>
          <h1>One place to manage portfolio proof, messages, and content.</h1>
          <p>
            This admin center keeps contact messages, blog notes, project proof,
            and journey content ready for future backend-powered editing.
          </p>
        </div>

        <div className="admin-hero-status">
          <Sparkles size={22} />
          <span>Status</span>
          <strong>Admin foundation live</strong>
          <p>Contact messages are connected. Content managers come next.</p>
        </div>
      </section>

      <section className="admin-kpi-grid">
        <article className="admin-kpi-card admin-kpi-card--wide">
          <div>
            <span>Portfolio status</span>
            <strong>Public site active</strong>
            <p>Home, Journey, Projects, Blog, Resume, and Contact are live.</p>
          </div>
          <MessageSquareText size={24} />
        </article>

        <article className="admin-kpi-card">
          <span>Messages</span>
          <strong>Supabase</strong>
          <p>Contact form connected</p>
        </article>

        <article className="admin-kpi-card admin-kpi-card--green">
          <span>Blog social</span>
          <strong>Live</strong>
          <p>Likes and comments</p>
        </article>

        <article className="admin-kpi-card">
          <span>Content</span>
          <strong>File-based</strong>
          <p>Admin CRUD next</p>
        </article>
      </section>

      <section className="admin-section-card">
        <div className="admin-section-card__top">
          <div>
            <span className="admin-kicker">Quick actions</span>
            <h2>Jump into the next useful workflow</h2>
          </div>
        </div>

        <div className="admin-action-grid">
          {dashboardCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                to={card.href}
                className={`admin-action-card admin-action-card--${card.tone}`}
              >
                <div>
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>

                <div className="admin-action-card__meta">
                  <strong>{card.value}</strong>
                  <Icon size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default AdminDashboardPage;
