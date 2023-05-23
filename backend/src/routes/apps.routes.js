const router = require('express').Router();
const { getDashBoardData } = require('../controllers/apps.controller');
const {
  isAuthenticatedUser,
  isBlocked,
  isAdmin,
} = require('../middleware/app.authentication');
router
  .route('/dashboard')
  .get(isAuthenticatedUser, isBlocked, isAdmin, getDashBoardData);
module.exports = router;
