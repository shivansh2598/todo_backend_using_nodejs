var swig  = require('swig');
var tmpl = swig.compileFile(__dirname + '/views/template.html'),
         output = tmpl({
            pagename: 'awesome people',
            authors: ['Paul', 'Jim', 'Jane']
        });

res.end(output);