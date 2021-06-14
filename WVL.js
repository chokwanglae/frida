Java.perform(function() {

    var Activity = Java.use('com.android.BBUSIRBBUSIR.SplashActivity');
    Activity.doesSUexist.implementation = function(){
        console.log('Patch1 done!!!');
        return False
    };

    Activity.doesSuperuserApkExist.implementation = function(a){
        console.log('Patch2 done!!!');
        return False
    };

    Java.choose("android.webkit.webview",
    {
        /* when instance founded, 'onMatch` function will called */
        onMatch: function(instance)
            main=instance;
            main.createuser();
        {
            console.log("[+] Instance Found! Hook Start");
        },

        /* when their action is finished, 'onComplete' function will called */
        onComplete: function()
        {
            console.log("[*] Instance Finished");
        }
    });
});