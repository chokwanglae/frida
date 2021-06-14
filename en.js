/*Java.perform(function() {

    var ContextWrapper = Java.use("android.content.ContextWrapper");

    ContextWrapper.getSharedPrefrences.overload('java.lang.String', 'java.lang.String').implementation = function(key, value) {
        console.log("SharedPrefrence putString()");
        console.log(key + ":" + value);
        var ret = this.putString(key, value);
        return ret;


    ContextWrapper.getSharedPrefrences.overload('java.lang.String', 'long').implementation = function(key, value) {
        console.log("SharedPrefrence putLong()");
        console.log(key + ":" + value);
        var ret = this.putLong(key, value);
        return ret;
    }

    ContextWrapper.getSharedPrefrences.overload('java.lang.String', 'boolean').implementation = function(key, value) {
        console.log("SharedPrefrence putBoolean()");
        console.log(key + ":" + value);
        var ret = this.putBoolean(key, value);
        return ret;
    }

    ContextWrapper.getSharedPrefrences.overload('java.lang.String', 'float').implementation = function(key, value) {
        console.log("SharedPrefrence putFloat()");
        console.log(key + ":" + value);
        var ret = this.putFloat(key, value);
        return ret;
    }

    ContextWrapper.getSharedPrefrences.overload('java.lang.String', 'int').implementation = function(key, value) {
        console.log("SharedPrefrence putInt()");
        console.log(key + ":" + value);
        var ret = this.putInt(key, value);
        return ret;
    }

    ContextWrapper.getSharedPrefrences.overload('java.lang.String', 'java.util.Set').implementation = function(key, value) {
        console.log("SharedPrefrence putStringSet()");
        console.log(key + ":" + value);
        var ret = this.putStringSet(key, value);
        return ret;
    }

});
*/

Java.perform(function()) {
    var spFile="";

    var ContextWrapper = Java.use("android.content.ContentWrapper");
    ContextWrapper.getSharedPreferences.overload("java.lang.'String","int").implementation = function (spName, spNode) {
        console.log("SharedPreferences putString activity monitor script");
        spFile=spName;
        return this.getSharedPreferences(spName,spMode);
    };
    var sharedPreferencesEditor = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
    sharedPreferencesEditor.putString.overload('java.lang.String','java.lang.String').implementation = function(spKey, spValue) {
        console.log("[+] SharedPreference file \")
    }

}
