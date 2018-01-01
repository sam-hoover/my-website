let router = require('express').Router()
let path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = router;