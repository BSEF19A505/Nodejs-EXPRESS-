const moment = require('moment');
const logger = (req, res, next) => { //link of request on browser
    console.log(`${req.protocol}://${req.get('host')}://${req.originalUrl}:${moment().format()}`);
    next();
}
module.exports = logger;