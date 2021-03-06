import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likepost', auth, likePost);

// router.get("/", getPosts);
// router.post("/", createPost);
// router.get("/:id", getPost);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
