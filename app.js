const {port, mySession } = require('./application/configurations/Main');
const flashMessages = require('./system/middlewares/Flash_Session');
const express = require('express');
const app = express();
const routes = require('./system/utilities/Routes');
const session = require('express-session');
const bodyParser = require('body-parser');
const profiler = require('./system/middlewares/Profiler');

/* system required module to run form/post methods */
app.use(session(mySession));
app.use(bodyParser.urlencoded({ extended: true }));

/* set your views dir on application/views folder */
app.set('views', __dirname + '/application/views');
app.set('view engine', 'ejs');

/* for static files */
app.use('/assets' ,express.static(__dirname + '/public'));

/* middlewares for flash sessions */
app.use(flashMessages);

/* You can manually enabled your profiler here 'true/false' */
app.use(profiler(false));

/* set the router configurations as default route in running this framework */
app.use('/',routes);

/* default port where server listens */
app.listen(port, () => {
    console.log('Server started on port ',port);
});
