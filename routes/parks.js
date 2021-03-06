var express = require('express');
var router = express.Router();
const parksCtrl = require('../controllers/parks');

router.get('/parks', isLoggedIn, parksCtrl.index);
router.get('/parks/new', parksCtrl.new);
router.get('/parks/:id', parksCtrl.show)
router.get('/parks/:id/edit', parksCtrl.edit);
router.post('/parks', parksCtrl.create);
router.put('/parks/:id', parksCtrl.update);
router.delete('/parks/:id', parksCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}



module.exports = router;
