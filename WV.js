 Java.perform(function () {
    console.log("[ * ] Starting implementation override...");
    //obtain reference of the activity currently running
    var MainActivity = Java.use("android.content.IntentFilter");
    //replace the original implementation of the function with ours.
    MainActivity.onCreate.implementation = function(){
        console.log("[ + ] root Detection ($PATH check) successfully bypassed!");
        return false;
    }
    rootDetection.setContentView.implementation = function(v){
        console.log("[ + ] ContentView load #1 (check) successfully bypassed!",v);
        return false;
    }
    rootDetection.Textview.implementation = function(a){
        console.log("[ + ] Textview  #3 (File check) successfully bypassed!",a);
        return false;
    }
 });