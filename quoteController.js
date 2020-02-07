//Import Quote model
const Quote = require('./quoteModel');

// Handle index actions
exports.index = function (req, res) {
    Quote.get(function (err, quotes) {
        if (err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'Success',
            message: 'Quotes retrieved succesfully',
            data: quotes
        });
    });
};

// New quote
exports.new = function (req, res) {
    var quote = new Quote();
    quote.text = req.body.text ? req.body.text : quote.text;
    quote.character = req.body.character;
    quote.episode = req.body.episode;
    quote.season = req.body.season;

    // save the quote and check errors
    quote.save(function (err) {
        res.json({
            message: 'New quote created!',
            data: quote 
        });
    });
    
};

// View quote details

exports.view = function (req, res) {
    Quote.findById(req.params.quote_id, function (err, quote) {
        if (err) 
            res.send(err);
        res.json({
            message: 'Quote details loading...',
            data: quote
        });
    });
};

// Update quote 
exports.update = function (req, res) {
    Quote.findById(req.params.quote_id, function (err, quote) {
        if (err) 
            res.send(err);
        
        quote.text = req.body.text ? req.body.text : quote.text;
        quote.character = req.body.character;
        quote.episode = req.body.episode;
        quote.season = req.body.season;

        // save the quote and check errors
        quote.save(function (err) {
            if (err) 
                res.send(err);
            res.json({
                message: 'Quote updated',
                data: quote 
            });
        });

    });
};

// Delete quote
exports.delete = function (req, res) {
    Quote.deleteOne({
        _id: req.params.quote_id
    }, function (err, quote) {
        if (err)
            res.send(err);

        res.json({
            status: 'Success',
            message: 'Quote deleted'
        });
    });
};