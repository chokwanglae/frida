Java.perform(function() {

  var spFile = "";
    var Activity = Java.use('com.android.BBUSIRBBUSIR.SplashActivity');
    Activity.doesSUexist.implementation = function(){
        console.log('Patch1 done!!!');
        return False
    };

    Activity.doesSuperuserApkExist.implementation = function(a){
        console.log('Patch2 done!!!');
        return False
    };
  var ContextWrapper = Java.use("android.content.ContextWrapper");
  ContextWrapper.getSharedPreferences.overload("java.lang.String", "int").implementation = function (spName, spMode) {
    console.log("SharedPreferences putString activity monitor script");
    spFile = spName;
    return this.getSharedPreferences(spName, spMode);
  };

  var sharedPreferencesEditor = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
  sharedPreferencesEditor.putString.overload('java.lang.String', 'java.lang.String').implementation = function(spKey, spValue) {
    console.log("[+] SharedPreferences file \"" + spFile + "\" is written with key: \"" + spKey + "\" and value \"" + spValue + "\"");
    var editor = this.putString(spKey, spValue);
    return editor;
  };
});