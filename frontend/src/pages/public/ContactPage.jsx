import { useState } from "react";
import { ExternalLink, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import PageShell from "../../components/layout/PageShell.jsx";
import { contactInfo, socials } from "../../content/socials.content.js";

import { sendContactMessage } from "../../lib/api.js";

const iconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  email: Mail,
};

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      await sendContactMessage(formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setFormStatus({
        type: "success",
        message: "Message sent successfully. Thanks for reaching out.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: error.message || "Could not send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <main className="contact-page">
        <section className="contact-top container">
          <div>
            <span className="page-kicker">Contact</span>

            <h1>{contactInfo.title}</h1>

            <p>{contactInfo.description}</p>
          </div>

          <aside className="contact-status-card">
            <span>Availability</span>
            <strong>{contactInfo.availability}</strong>
            <p>{contactInfo.responseNote}</p>
          </aside>
        </section>

        <section className="contact-layout container">
          <div className="contact-links-grid">
            {socials.map((item) => {
              const Icon = iconMap[item.id] || Mail;
              const isDisabled =
                !item.href || item.href === "mailto:" || item.href === "#";

              return (
                <article className="contact-link-card" key={item.id}>
                  <div
                    className={`contact-link-card__icon contact-link-card__icon--${item.id}`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <h2>{item.label}</h2>
                    <p>{item.value}</p>
                  </div>

                  <div className="contact-link-card__action">
                    {isDisabled ? (
                      <button type="button" disabled>
                        <span>Link soon</span>
                        <ExternalLink size={14} />
                      </button>
                    ) : (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <span>Open</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__top">
              <span>Message</span>
              <strong>Send a note</strong>
              <p>
                This form is UI-ready. We’ll connect it to Supabase/backend in
                the next pass.
              </p>
            </div>

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" disabled={isSubmitting}>
              <Send size={16} />
              <span>{isSubmitting ? "Sending..." : "Send message"}</span>
            </button>

            {formStatus.message ? (
              <p
                className={`contact-form__status contact-form__status--${formStatus.type}`}
              >
                {formStatus.message}
              </p>
            ) : null}
          </form>
        </section>
      </main>
    </PageShell>
  );
}

export default ContactPage;
