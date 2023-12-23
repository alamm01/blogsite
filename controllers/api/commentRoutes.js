const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Mark this route handler as async
router.post('/', withAuth, async (req, res) => {
  try {
    console.log("My req: " + req);
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
    window.location.reload();
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
