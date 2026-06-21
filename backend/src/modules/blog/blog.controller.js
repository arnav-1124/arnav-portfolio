import asyncHandler from "../../utils/asyncHandler.js";
import sendResponse from "../../utils/sendResponse.js";
import {
  addBlogComment,
  addBlogLike,
  getBlogSocial,
  removeBlogLike,
} from "./blog.service.js";

const getVisitorId = (req) => {
  return req.headers["x-visitor-id"];
};

export const getBlogSocialController = asyncHandler(async (req, res) => {
  const visitorId = getVisitorId(req);

  if (!visitorId) {
    return res.status(400).json({
      success: false,
      message: "Visitor ID is required",
    });
  }

  const data = await getBlogSocial({
    slug: req.params.slug,
    visitorId,
  });

  return sendResponse(res, 200, "Blog social data fetched", data);
});

export const addBlogLikeController = asyncHandler(async (req, res) => {
  const visitorId = getVisitorId(req);

  if (!visitorId) {
    return res.status(400).json({
      success: false,
      message: "Visitor ID is required",
    });
  }

  const data = await addBlogLike({
    slug: req.params.slug,
    visitorId,
  });

  return sendResponse(res, 200, "Blog liked", data);
});

export const removeBlogLikeController = asyncHandler(async (req, res) => {
  const visitorId = getVisitorId(req);

  if (!visitorId) {
    return res.status(400).json({
      success: false,
      message: "Visitor ID is required",
    });
  }

  const data = await removeBlogLike({
    slug: req.params.slug,
    visitorId,
  });

  return sendResponse(res, 200, "Blog like removed", data);
});

export const addBlogCommentController = asyncHandler(async (req, res) => {
  const visitorId = getVisitorId(req);

  if (!visitorId) {
    return res.status(400).json({
      success: false,
      message: "Visitor ID is required",
    });
  }

  const data = await addBlogComment({
    slug: req.params.slug,
    visitorId,
    displayName: req.body.displayName,
    commentText: req.body.commentText,
  });

  return sendResponse(res, 201, "Comment added", data);
});
