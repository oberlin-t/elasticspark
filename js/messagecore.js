fs = require('fs');

function storeMessage(username, from, message)
{
    if (fs.existsSync('js/pending/' + username + '.txt')){
        fs.appendFile('js/pending/' + username + '.txt', "\n" + from + " | " + message, function(err){
            if (err) throw err;
        });
    }
    else {
        fs.writeFile('js/pending/' + username + ".txt", from + " | " + message, function(err){
            if (err) throw err;
        });
    }
}

module.exports = { storeMessage };
