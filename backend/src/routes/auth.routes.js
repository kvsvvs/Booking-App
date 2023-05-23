const router = require('express').Router();
const avatarUpload = require('../middleware/user.avatar.upload');
const logLimiter = require('../middleware/log.limiter');
const {
  isAuthenticatedUser,
  isBlocked,
  isRefreshTokenValid,
} = require('../middleware/app.authentication');
const {
  register,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  changePassword,
  sendEmailVerificationLink,
  emailVerification,
  refreshToken,
} = require('../controllers/auth.controllers');
router
  .route('/auth/registration')
  .post(avatarUpload.single('avatar'), register);
router.route('/auth/login').post(logLimiter, avatarUpload.none(), loginUser);
router.route('/auth/logout').post(isAuthenticatedUser, isBlocked, logoutUser);
router.route('/auth/forgot-password').post(forgotPassword);
router.route('/auth/reset-password/:token').post(resetPassword);
router
  .route('/auth/change-password')
  .post(isAuthenticatedUser, isBlocked, changePassword);
router
  .route('/auth/send-email-verification-link')
  .post(isAuthenticatedUser, isBlocked, sendEmailVerificationLink);
router
  .route('/auth/verify-email/:token')
  .post(isAuthenticatedUser, isBlocked, emailVerification);
router.route('/auth/refresh-token').get(isRefreshTokenValid, refreshToken);
module.exports = router;
