import { ExternalLink, Heart, MessageCircle, Send, Share2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import PageShell from "../../components/layout/PageShell.jsx";
import { blogCategories, blogPosts } from "../../content/blog.content.js";
import {
  addBlogComment,
  getBlogSocial,
  likeBlogPost,
  unlikeBlogPost,
} from "../../lib/api.js";

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [socialBySlug, setSocialBySlug] = useState({});
  const [openCommentPost, setOpenCommentPost] = useState(null);
  const [commentDrafts, setCommentDrafts] = useState({});
  const [shareMessage, setShareMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState({});

  const [expandedPosts, setExpandedPosts] = useState({});

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    let isMounted = true;

    const loadSocialData = async () => {
      const results = await Promise.allSettled(
        blogPosts.map(async (post) => {
          const data = await getBlogSocial(post.slug);
          return [post.slug, data];
        }),
      );

      if (!isMounted) return;

      const nextSocial = {};

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          const [slug, data] = result.value;
          nextSocial[slug] = data;
        }
      });

      setSocialBySlug(nextSocial);
    };

    loadSocialData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLike = async (post) => {
    const currentSocial = socialBySlug[post.slug];
    const isLiked = currentSocial?.likedByViewer;

    setIsSubmitting((prev) => ({ ...prev, [post.slug]: true }));

    try {
      const data = isLiked
        ? await unlikeBlogPost(post.slug)
        : await likeBlogPost(post.slug);

      setSocialBySlug((prev) => ({
        ...prev,
        [post.slug]: data,
      }));
    } finally {
      setIsSubmitting((prev) => ({ ...prev, [post.slug]: false }));
    }
  };

  const handleCommentSubmit = async (post) => {
    const draft = commentDrafts[post.slug]?.trim();

    if (!draft) return;

    setIsSubmitting((prev) => ({ ...prev, [`comment-${post.slug}`]: true }));

    try {
      const data = await addBlogComment({
        slug: post.slug,
        displayName: "Visitor",
        commentText: draft,
      });

      setSocialBySlug((prev) => ({
        ...prev,
        [post.slug]: data,
      }));

      setCommentDrafts((prev) => ({
        ...prev,
        [post.slug]: "",
      }));
    } finally {
      setIsSubmitting((prev) => ({ ...prev, [`comment-${post.slug}`]: false }));
    }
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

  const toggleExpandedPost = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
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

        <section className="blog-feed container" aria-label="Build notes feed">
          {filteredPosts.map((post) => {
            const social = socialBySlug[post.slug] || {
              likeCount: 0,
              likedByViewer: false,
              comments: [],
            };

            return (
              <article className="feed-post" id={post.slug} key={post.id}>
                {post.liveUrl ? (
                  <a
                    href={post.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="feed-post__live-link"
                    aria-label={`Open live link for ${post.title}`}
                  >
                    <ExternalLink size={15} />
                    <span>Live</span>
                  </a>
                ) : null}
                
                <header className="feed-post__author">
                  <div className="feed-post__avatar">AR</div>

                  <div>
                    <strong>Arnav Raj</strong>
                    <p>CA Articleship Trainee × Full Stack Developer</p>
                    <span>
                      {post.date} • {post.category} • {post.readTime}
                    </span>
                  </div>
                </header>

                <div className="feed-post__content">
                  <h2>{post.title}</h2>

                  <p className="feed-post__excerpt">{post.excerpt}</p>

                  <div className="feed-post__tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="feed-post__body">
                    {(expandedPosts[post.id]
                      ? post.content
                      : post.content.slice(0, 1)
                    ).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {post.content.length > 1 ? (
                      <button
                        type="button"
                        className="feed-post__read-more"
                        onClick={() => toggleExpandedPost(post.id)}
                      >
                        {expandedPosts[post.id] ? "Show less" : "Show more..."}
                      </button>
                    ) : null}
                  </div>

                  {expandedPosts[post.id] ? (
                    <div className="feed-post__metrics">
                      {post.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="feed-post__media">
                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title} />
                  ) : (
                    <div className="feed-post__placeholder">
                      <span>{post.category}</span>
                      <strong>Image / screenshot soon</strong>
                      <p>Paste Cloudinary URL later in blog.content.js.</p>
                    </div>
                  )}
                </div>

                <div className="feed-post__stats">
                  <span>{social.likeCount} likes</span>
                  <span>{social.comments.length} comments</span>
                </div>

                <div className="feed-post__actions">
                  <button
                    type="button"
                    className={social.likedByViewer ? "is-liked" : ""}
                    disabled={isSubmitting[post.slug]}
                    onClick={() => handleLike(post)}
                  >
                    <Heart size={18} />
                    <span>{social.likedByViewer ? "Liked" : "Like"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenCommentPost((prev) =>
                        prev === post.id ? null : post.id,
                      )
                    }
                  >
                    <MessageCircle size={18} />
                    <span>Comment</span>
                  </button>

                  <button type="button" onClick={() => handleShare(post)}>
                    <Share2 size={18} />
                    <span>Share</span>
                  </button>
                </div>

                {openCommentPost === post.id ? (
                  <div className="feed-post__comments">
                    <div className="feed-post__comment-input">
                      <textarea
                        placeholder="Write a comment..."
                        rows="3"
                        value={commentDrafts[post.slug] || ""}
                        onChange={(event) =>
                          setCommentDrafts((prev) => ({
                            ...prev,
                            [post.slug]: event.target.value,
                          }))
                        }
                      />

                      <button
                        type="button"
                        disabled={isSubmitting[`comment-${post.slug}`]}
                        onClick={() => handleCommentSubmit(post)}
                      >
                        <Send size={16} />
                        <span>Post</span>
                      </button>
                    </div>

                    {social.comments.length ? (
                      <div className="feed-post__comment-list">
                        {social.comments.map((comment) => (
                          <div className="feed-post__comment" key={comment.id}>
                            <strong>{comment.display_name || "Visitor"}</strong>
                            <p>{comment.comment_text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="feed-post__empty-comments">
                        No comments yet. Start the conversation.
                      </p>
                    )}
                  </div>
                ) : null}
              </article>
            );
          })}
        </section>
      </main>
    </PageShell>
  );
}

export default BlogPage;
