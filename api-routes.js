// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'The API works!',
        message: 'Welcome to the API!',
    });
});


// Import quote controller
let quoteController = require('./quoteController');

// Quote routes
router.route('/quotes')
    .get(quoteController.index)
    .post(quoteController.new);

router.route('/quotes/:quote_id')
    .get(quoteController.view)
    .patch(quoteController.update)
    .put(quoteController.update)
    .delete(quoteController.delete);


// Export API routes
module.exports = router;