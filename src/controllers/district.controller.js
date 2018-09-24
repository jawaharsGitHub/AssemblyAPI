var fs = require("fs"), json;
const customer = require('../models/district.model');

//Simple version, without validation or sanitation
exports.getAllDistricts = function (req, res) {
    //console.log('../Data/customer.json');
    var response = readJsonFileSync('Data/01district.json');
    // var response = readJsonFileSync('Data/01district.json').filter(
    //     function(obj) {
    //         //alert(obj.CustomerId );
    //         return obj.CustomerId === 90;
    //     }
    // );

    res.send(response);
};

function readJsonFileSync(filepath, encoding){
    
        if (typeof (encoding) == 'undefined'){
            encoding = 'utf8';
        }
        var file = fs.readFileSync(filepath, encoding);
        return JSON.parse(file);
    }