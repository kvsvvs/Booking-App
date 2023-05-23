const router = require('express').Router();
const {
  getUser,
  updateUser,
  deleteUser,
  avatarUpdate,
  getUserLists,
  blockedUser,
  unblockedUser,
  getUserById,
  deleteUserById,
} = require('../controllers/user.controllers');
const {
  isAuthenticatedUser,
  isAdmin,
  isBlocked,
} = require('../middleware/app.authentication');
const avatarUpload = require('../middleware/user.avatar.upload');
router.route('/get-user').get(isAuthenticatedUser, isBlocked, getUser);
router
  .route('/get-user/:id')
  .get(isAuthenticatedUser, isBlocked, isAdmin, getUserById);
router.route('/update-user').put(isAuthenticatedUser, isBlocked, updateUser);
router
  .route('/avatar-update')
  .put(
    isAuthenticatedUser,
    isBlocked,
    avatarUpdate.single('avatar'),
    avatarUpdate
  );
router.route('/delete-user').delete(isAuthenticatedUser, isBlocked, deleteUser);
router
  .route('/delete-user/:id')
  .delete(isAuthenticatedUser, isBlocked, isAdmin, deleteUserById);
router
  .route('all-users-list')
  .get(isAuthenticatedUser, isBlocked, isAdmin, getUserLists);
router
  .route('/blocked-user/:id')
  .put(isAuthenticatedUser, isBlocked, isAdmin, blockedUser);
router
  .route('/unblocked-user/:id')
  .put(isAuthenticatedUser, isBlocked, isAdmin, unblockedUser);
module.exports = router;
