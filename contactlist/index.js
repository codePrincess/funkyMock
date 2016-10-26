module.exports = function (context, req) {

    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('D:\\home\\site\\wwwroot\\contactlist\\contactlist.json', 'utf8'));

    context.log('Output Content : \n' + JSON.stringify(json));

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(json)
    };

    context.done();
};