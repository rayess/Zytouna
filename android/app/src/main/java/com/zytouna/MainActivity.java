package com.zytouna;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.content.Intent;
import android.content.res.Configuration;


public class MainActivity extends ReactActivity {


    @Override
    protected String getMainComponentName() {
        return "Zytouna";
    }

   @Override
   protected ReactActivityDelegate createReactActivityDelegate() {
     return new ReactActivityDelegate(this, getMainComponentName()) {
     
     @Override
      protected ReactRootView createRootView() {
         return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
   };
  }
    @Override
  public void onConfigurationChanged(Configuration newConfig) {
               super.onConfigurationChanged(newConfig);
               Intent intent = new Intent("onConfigurationChanged");
               intent.putExtra("newConfig", newConfig);
              this.sendBroadcast(intent);
          }



}
