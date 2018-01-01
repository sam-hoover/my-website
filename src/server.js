/* server setup */
let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');

/* set the base directory for the app to the directory containing server.js */
app.use(express.static(path.resolve(__dirname, '..', 'build')));

/* routing */
app.use('/', require('./routes/routeIndex.js'));

/* set the server to be running ('listening') on port 3000 */
let server = http.listen(3000, function() {
    console.log('listening on port %s', server.address().port);
});
