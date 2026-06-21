import { supabase } from "../../config/db.js";

export const getBlogSocial = async ({ slug, visitorId }) => {
  const { count: likeCount, error: likeCountError } = await supabase
    .from("blog_reactions")
    .select("*", { count: "exact", head: true })
    .eq("blog_slug", slug)
    .eq("reaction_type", "like");

  if (likeCountError) throw likeCountError;

  const { data: viewerLike, error: viewerLikeError } = await supabase
    .from("blog_reactions")
    .select("id")
    .eq("blog_slug", slug)
    .eq("visitor_id", visitorId)
    .eq("reaction_type", "like")
    .maybeSingle();

  if (viewerLikeError) throw viewerLikeError;

  const { data: comments, error: commentsError } = await supabase
    .from("blog_comments")
    .select("id, display_name, comment_text, created_at")
    .eq("blog_slug", slug)
    .eq("is_approved", true)
    .order("created_at", { ascending: false });

  if (commentsError) throw commentsError;

  return {
    likeCount: likeCount || 0,
    likedByViewer: Boolean(viewerLike),
    comments: comments || [],
  };
};

export const addBlogLike = async ({ slug, visitorId }) => {
  const { error } = await supabase.from("blog_reactions").upsert(
    {
      blog_slug: slug,
      visitor_id: visitorId,
      reaction_type: "like",
    },
    {
      onConflict: "blog_slug,visitor_id,reaction_type",
      ignoreDuplicates: true,
    },
  );

  if (error) throw error;

  return getBlogSocial({ slug, visitorId });
};

export const removeBlogLike = async ({ slug, visitorId }) => {
  const { error } = await supabase
    .from("blog_reactions")
    .delete()
    .eq("blog_slug", slug)
    .eq("visitor_id", visitorId)
    .eq("reaction_type", "like");

  if (error) throw error;

  return getBlogSocial({ slug, visitorId });
};

export const addBlogComment = async ({
  slug,
  visitorId,
  displayName,
  commentText,
}) => {
  const cleanComment = commentText?.trim();

  if (!cleanComment) {
    const error = new Error("Comment cannot be empty");
    error.statusCode = 400;
    throw error;
  }

  if (cleanComment.length > 1000) {
    const error = new Error("Comment cannot exceed 1000 characters");
    error.statusCode = 400;
    throw error;
  }

  const { error } = await supabase.from("blog_comments").insert({
    blog_slug: slug,
    visitor_id: visitorId,
    display_name: displayName?.trim() || "Visitor",
    comment_text: cleanComment,
  });

  if (error) throw error;

  return getBlogSocial({ slug, visitorId });
};
