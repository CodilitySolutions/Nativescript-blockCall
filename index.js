var appModule = require("application");

exports.rejectCall = function (args) {
    return new Promise(function (resolve, reject) {
        
            resolve({data: "call is rejected", response: "fetch"});
       
    });
};