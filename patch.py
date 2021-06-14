import frida, sys



jscode = """
Java.perform(function () {
    var Activity = Java.use('com.android.BBUSIRBBUSIR.SplashActivity');
    Activity.doesSUexist.implementation = function(){
        console.log('Patch1 done!!!');
        return False
    };
 
    Activity.doesSuperuserApkExist.implementation = function(a){
        console.log('Patch2 done!!!');
        return False
    };
 
 
});
"""




device = frida.get_usb_device(timeout=1)
pid = device.spawn(["com.android.BBUSIRBBUSIR"])
session = device.attach(pid)
script = session.create_script(jscode)
script.load()
device.resume(pid)
sys.stdin.read()
