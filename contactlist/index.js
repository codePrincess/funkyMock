module.exports = function(context, req) {

    if (req.query.name || (req.body && req.body.name)) {
        var fs = require('fs');
        var json = JSON.parse(fs.readFileSync('D:\\home\\site\\wwwroot\\contactlist\\contactlist.json', 'utf8'));
        
        context.log('Output Content : \n'+ JSON.stringify(json));

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: JSON.stringify(json)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};