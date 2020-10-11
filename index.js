const { TkkGoogleTranslatorAlgo } = require("./global");
const url = require('url');
var request = require('request');
var express = require('express');

var app = express();

app.get('/translator', function (req, res) {
    const { translate, word } = req && req.query;
    const TkkGoogleTranslatorAlgoValue = word && TkkGoogleTranslatorAlgo(word) || '';

    res.set('Content-Type', 'text/json; charset=utf-8')

    var options = {
        'method': 'GET',
        'url': 'https://translate.google.com/translate_a/single?client=webapp&sl=en&tl='+translate+'&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=sos&dt=ss&dt=t&otf=1&ssel=4&tsel=4&kc=1&tk='+TkkGoogleTranslatorAlgoValue+'&q='+word,
    };

    translate && word && TkkGoogleTranslatorAlgoValue && request(options, function (error, response) {
        if (error) 
            throw new Error(error);
        res.end(response.body);
    });   
});

app.listen(8000, () => {
  console.log('App started on port 8000');
});