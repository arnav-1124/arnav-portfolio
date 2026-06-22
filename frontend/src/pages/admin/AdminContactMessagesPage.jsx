import { useEffect, useMemo, useState } from "react";

import {
  getAdminContactMessages,
  updateAdminContactMessageStatus,
} from "../../lib/api.js";

function AdminContactMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [activeStatus, setActiveStatus] = useState("all");
  const [statusMessage, setStatusMessage] = useState("");

  const filteredMessages = useMemo(() => {
    if (activeStatus === "all") return messages;

    return messages.filter((message) => message.status === activeStatus);
  }, [activeStatus, messages]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await getAdminContactMessages();
        setMessages(data);
      } catch (error) {
        setStatusMessage(error.message || "Could not load messages");
      }
    };

    loadMessages();
  }, []);

  const handleStatusChange = async ({ id, status }) => {
    try {
      const updatedMessage = await updateAdminContactMessageStatus({
        id,
        status,
      });

      setMessages((prev) =>
        prev.map((message) => (message.id === id ? updatedMessage : message)),
      );
    } catch (error) {
      setStatusMessage(error.message || "Could not update status");
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-page__heading">
        <span>Contact</span>
        <h1>Contact messages</h1>
        <p>Review messages submitted from the public contact form.</p>
      </div>

      <div className="filter-chip-group admin-filter-group">
        {["all", "new", "read", "archived"].map((status) => (
          <button
            key={status}
            type="button"
            className={
              activeStatus === status ? "filter-chip is-active" : "filter-chip"
            }
            onClick={() => setActiveStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {statusMessage ? (
        <p className="admin-form-error">{statusMessage}</p>
      ) : null}

      <div className="admin-message-list">
        {filteredMessages.map((message) => (
          <article className="admin-message-card" key={message.id}>
            <div>
              <span>{message.status}</span>
              <h2>{message.name}</h2>
              <a href={`mailto:${message.email}`}>{message.email}</a>
              <p>{message.message}</p>
              <small>
                {new Date(message.created_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </small>
            </div>

            <div className="admin-message-card__actions">
              <button
                type="button"
                onClick={() =>
                  handleStatusChange({ id: message.id, status: "read" })
                }
              >
                Mark read
              </button>

              <button
                type="button"
                onClick={() =>
                  handleStatusChange({ id: message.id, status: "archived" })
                }
              >
                Archive
              </button>
            </div>
          </article>
        ))}

        {!filteredMessages.length ? (
          <div className="admin-empty-state">No messages found.</div>
        ) : null}
      </div>
    </section>
  );
}

export default AdminContactMessagesPage;
