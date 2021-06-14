Java.perform(function () {


    var BasicNameValuePair = Java.use('org.apache.http.message.BasicNameValuePair');
    BasicNameValuePair.$init.overload('java.lang.String', 'java.lang.String').implementation = function(v1, v2) {
        console.log('BasicNameValuePair.$init("' + v1 + '", "' + v2 + '")');


    if(v1=="from_acc") {
       v2  = "to_acc" ;



         console.log('db("' + v1 + '", "' + v2 + '")')};


       return this.$init( v1 ,  v2 );
    }});