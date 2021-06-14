Java.perform(function(){
     var Activity = Java.use('com.android.BBUSIRBBUSIR.SplashActivity');
    Activity.doesSUexist.implementation = function(){
        console.log('Patch1 done!!!');
        return false
    };
    Activity.doesSuperuserApkExist.implementation = function(a){
        console.log('Patch2 done!!!');
        return false
    };



    var content_Provider =Java.use("com.android.BBUSIRBBUSIR.TrackUserContentProvider");

    var Uri = Java.use("android.net.Uri");
    var DbUtils = Java.use("android.database.DatabaseUtils");

    var uri = Uri.parse(content_Provider.URL.value);
    var cxt = getContext();
    if(cxt) {
    var resolver = cxt.getContentResolver();
    var query = resolver.query.overload('android.net.Uri','[Ljava.lang.String;','java.lang.String','[Ljava.lang.String;','java.lang.String');
    var cursor = query.call(resolver, uri, null,null,null,null);


    console.log(DbUtils.dumpCursorToString(cursor));
    }


});
function getContext() {
    return
    Java.use('android.app.Activity.Thread').currentApplication().getApplicationContext();
    }