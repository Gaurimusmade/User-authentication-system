const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const authToken = require('../middleware/authToken');

// *POST /api/users/register*: Allows a new user to create an account.
router.post('/register', userController.register);

// *POST /api/users/login*: Authenticates an existing user.
router.post('/login', userController.login);

// *GET /api/users/details*: Retrieves the details of the logged-in user.
router.get('/details', authToken, userController.getUserDetails);

// *GET /api/users/details/:id*: Retrieves the details of the logged-in user.
router.get('/details/:id', authToken, userController.getUserDetailsById);

// *PUT  /api/users/update/:id*:  Allows a user to update their profile details.
router.put('/update/:id', authToken, userController.updateUser);

// // *DELETE /api/users/delete/:id*:  Allows a user to permanently delete their account.
router.delete('/delete/:id', authToken, userController.deleteUser);

module.exports = router;