var appModule = require("application");
const Intent = android.content.Intent;
const TelephonyManager = android.telephony.TelephonyManager;
// }
const Context= android.content.Context;
const uri =     java.net.URI;
const blocknumber =     android.provider.BlockedNumberContract;
const contentvalues =   android.content.ContentValues;

exports.rejectCall = function (args) {
    return new Promise(function (resolve, reject) {

        var  telecom = context.getSystemService(Context.TELECOM_SERVICE);
        var getDefault =  telecom.getDefaultDialerPackage();
        values = new contentvalues();
        values.put(blocknumber.BlockedNumbers.COLUMN_ORIGINAL_NUMBER, "03367578177");
       var  ur =new uri(getDefault);
       ur =  context.getContentResolver().insert(blocknumber.BlockedNumbers.CONTENT_URI, values);
        
            resolve({data: "call is rejected", response: "fetch"});
       
    });
};