// IMPORT REQUIRED MODULES
const express = require('express');
const validateBook = require('../middleware/validation/book-validation');
const authenticate = require('../middleware/authenticate');

// IMPORT CONTROLLER
const bookController = require('../controllers/book');


// SETUP EXPRESS ROUTER
const router = express.Router();

// Route to get all books
router.get('/', bookController.getAllbooks);

// Route to get book by id
router.get('/:id', bookController.getAbook)

// Route to add new book
router.post('/',
    authenticate.checkLogin,  // check if user is logged in
    authenticate.isAuthenticatedAdmin,  // check if user is an admin at least
    validateBook.addNewBookRules(),
    validateBook.checkNewBook,
    bookController.addNewbook
);

// Route to update a book
router.put('/:id',
    authenticate.checkLogin,  // check if user is logged in
    authenticate.isAuthenticatedAdmin,  // check if user is an admin at least
    validateBook.updateBookRules(),
    validateBook.checkUpdateBook,
    bookController.updateAbook
);

// Route to delete a book
router.delete('/:id',
<<<<<<< HEAD
    authenticate.checkLogin,
    authenticate.isAuthenticatedAdmin,
=======
    authenticate.checkLogin,  // check if user is logged in
    authenticate.isAuthenticatedFullControl,  // check if user is at least an admin
>>>>>>> 178a0c22ea34e06123bd9c36ee75c41d51e7e5fc
    bookController.deleteAbook
);


// EXPORT
module.exports = router;