import { useMemo, useState } from "react";

import PageShell from "../../components/layout/PageShell.jsx";
import { blogCategories, blogPosts } from "../../content/blog.content.js";

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState({});
  const [openCommentPost, setOpenCommentPost] = useState(null);
  const [shareMessage, setShareMessage] = useState("");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleShare = async (post) => {
    const postUrl = `${window.location.origin}/blog#${post.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: postUrl,
        });
      } else {
        await navigator.clipboard.writeText(postUrl);
        setShareMessage("Blog link copied.");
        setTimeout(() => setShareMessage(""), 1800);
      }
    } catch {
      setShareMessage("Share cancelled.");
      setTimeout(() => setShareMessage(""), 1800);
    }
  };

  return (
    <PageShell>
      <main className="blog-page">
        <section className="blog-top container">
          <div>
            <span className="page-kicker">Build Notes</span>
            <h1>
              Writing about finance workflows, product builds, and development
              decisions.
            </h1>
            <p>
              Notes from real accounting projects, SaaS building, document
              workflows, Excel systems, and full-stack development.
            </p>
          </div>

          <aside className="blog-topic-card">
            <span>Topics</span>
            <strong>Finance × Development</strong>
            <p>
              Practical notes around MIS, automation, SaaS products, documents,
              dashboards, and learning in public.
            </p>
          </aside>
        </section>

        <section className="blog-controls container" aria-label="Blog filters">
          <div className="filter-chip-group">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "filter-chip is-active"
                    : "filter-chip"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {shareMessage ? (
          <div className="blog-share-toast container">{shareMessage}</div>
        ) : null}

        <section className="blog-list container" aria-label="Build notes list">
          {filteredPosts.map((post) => (
            <article className="blog-card" id={post.slug} key={post.id}>
              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2>{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>

                <div className="blog-card__tags">
                  {post.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="blog-card__body">
                  {post.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="blog-card__metrics">
                  {post.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>

                <div className="blog-card__social">
                  <button
                    type="button"
                    className={likedPosts[post.id] ? "is-liked" : ""}
                    onClick={() => handleLike(post.id)}
                  >
                    {likedPosts[post.id] ? "Liked" : "Like"}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenCommentPost((prev) =>
                        prev === post.id ? null : post.id,
                      )
                    }
                  >
                    Comment
                  </button>

                  <button type="button" onClick={() => handleShare(post)}>
                    Share
                  </button>
                </div>

                {openCommentPost === post.id ? (
                  <div className="blog-comment-box">
                    <textarea
                      placeholder="Write what you want to ask or say..."
                      rows="4"
                    />
                    <button type="button">Submit comment</button>
                    <small>
                      Comments are frontend-only for now. We’ll connect this to
                      Supabase later.
                    </small>
                  </div>
                ) : null}
              </div>

              <div className="blog-card__media">
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt={post.title} />
                ) : (
                  <div className="blog-card__placeholder">
                    <span>{post.category}</span>
                    <strong>Image / screenshot soon</strong>
                    <p>Paste Cloudinary URL later in blog.content.js.</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}

export default BlogPage;
