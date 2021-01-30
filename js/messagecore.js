fs = require('fs');

function storeMessage(username, from, message)
{
    fs.writeFile('js/pending/' + username + ".txt", from + "/n" + message, function(err){
        if (err) throw err;
    });
}

module.exports = { storeMessage };
