var Park = require('../models/park');

module.exports = {
    create
};

function create(req, res) {
    Park.findById(req.params.id, function(err, park) {
        park.reviews.push(req.body);
        park.save(function(err) {
            res.redirect(`/parks/${park._id}`);
        });
    });
}

