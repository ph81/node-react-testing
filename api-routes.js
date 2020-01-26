// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'The API works!',
        message: 'Welcome to the API!',
    });
});

// Export API routes
module.exports = router;