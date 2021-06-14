import android.context.Context;
import android.content.ContentResolver;
import android.provider.settings;

protected void onCreate(...) {
    context=(Context)this;
    String android=Setting.Secure.getString((ContentResolver)context.getContentResolver(), (String)"android_id");

}