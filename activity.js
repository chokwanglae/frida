
    Java . perform ( function  ( )  {
        var  rootChecks  =  Java . use ( 'com.android.BBUSIRBBUSIR.PostLogin' ) ;
  // Whenever button is clicked
  var onClick = DoLogin.onClick;
  var String =Java.use("android.content.IntentFilter")
  onClick.implementation = function (v) {
    // Show a message to know that the function got called
    send('onClick');
    return false;
    };
  onclick.implementation =function(cnt) {
    console.log('Click * viewstatement');

    // Call the original onClick handler
    onClick.call(this, v);

    // Set our values after running the original onClick handler
    this.m.value = 0;
    this.n.value = 1;
    this.cnt.value = 999;

    // Log to the console that it's done, and we should have the flag!
    console.log('Done:' + JSON.stringify(this.cnt));
  };
});
