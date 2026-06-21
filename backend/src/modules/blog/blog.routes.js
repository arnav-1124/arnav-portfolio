import { Router } from "express";

import {
  addBlogCommentController,
  addBlogLikeController,
  getBlogSocialController,
  removeBlogLikeController,
} from "./blog.controller.js";

const router = Router();

router.get("/:slug/social", getBlogSocialController);
router.post("/:slug/like", addBlogLikeController);
router.delete("/:slug/like", removeBlogLikeController);
router.post("/:slug/comments", addBlogCommentController);

export default router;
