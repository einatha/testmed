package com.realcommerce.toyota;
import org.apache.cordova.*;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
  

public class ToyotaActivity extends DroidGap  {

	@Override
	 
	 public void onCreate(Bundle savedInstanceState)
	    {
	        super.onCreate(savedInstanceState);
	        super.setIntegerProperty("splashscreen", R.drawable.splash);
	    
	        super.loadUrl(Config.getStartUrl(),5000);
	        //super.loadUrl("file:///android_asset/www/index.html")
	    }
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
	    getMenuInflater().inflate(R.menu.example, menu);
	    return true;
	}
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
	    // Handle item selection
	    switch (item.getItemId()) {
	    case R.id.settings:
	        this.startActivity(new Intent(android.provider.Settings.ACTION_SETTINGS));
	        return true;
	    case R.id.help:
	        this.appView.sendJavascript("navigator.notification.alert('No help')");
	        return true;
	    default:
	        return super.onOptionsItemSelected(item);
	    }
	}
}
