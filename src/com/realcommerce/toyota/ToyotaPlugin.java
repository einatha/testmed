package com.realcommerce.toyota;

import java.io.File;
import java.util.ArrayList;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.LOG;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.text.Html;
import android.util.Log;

 
 

 
public class ToyotaPlugin  extends CordovaPlugin {
	private  void openWaze (String latitude, String longtitude) {
	     Context m_Context = cordova.getActivity();
		 
		try
		{
			
		   String url = "waze://?ll="+latitude+","+longtitude;
		    Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( url ) );
		    m_Context.startActivity( intent );
		}
		catch ( ActivityNotFoundException ex  )
		{
			 
		  Intent intent = new Intent( Intent.ACTION_VIEW, Uri.parse( "market://details?id=com.waze" ) );
		  m_Context.startActivity(intent);
		}
	}
	private  void sendMail (JSONObject parameters) {
	     //Context m_Context = cordova.getActivity();
	     final Intent emailIntent = new Intent(android.content.Intent.ACTION_SEND_MULTIPLE);
	     boolean isHTML = false;
		try
		{
			isHTML = parameters.getBoolean("bIsHTML");
		    
		}
		catch ( Exception e )
		{
			 
			LOG.e("EmailComposer", "Error handling isHTML param: " + e.toString());
		}
		
		if (isHTML) {
			emailIntent.setType("text/html");
		} else {
			emailIntent.setType("text/plain");
		}
		// setting subject
		try {
			String subject = parameters.getString("subject");
			String body = parameters.getString("body");
			JSONArray toRecipients = parameters.getJSONArray("toRecipients");
			if (subject != null && subject.length() > 0) {
				emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT, subject);
			}
			if (body != null && body.length() > 0) {
				if (isHTML) {
					emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, Html.fromHtml(body));
				} else {
					emailIntent.putExtra(android.content.Intent.EXTRA_TEXT, body);
				}
			}
			if (toRecipients != null && toRecipients.length() > 0) {
				String[] to = new String[toRecipients.length()];
				for (int i=0; i<toRecipients.length(); i++) {
					to[i] = toRecipients.getString(i);
				}
				emailIntent.putExtra(android.content.Intent.EXTRA_EMAIL, to);
			}
			//atachment
			JSONArray attachments = parameters.getJSONArray("attachments");
			if (attachments != null && attachments.length() > 0) {
				ArrayList<Uri> uris = new ArrayList<Uri>();
				//convert from paths to Android friendly Parcelable Uri's
				for (int i=0; i<attachments.length(); i++) {
					try {
						File file = new File(attachments.getString(i));
						if (file.exists()) {
							Uri uri = Uri.fromFile(file);
							uris.add(uri);
						}
					} catch (Exception e) {
						LOG.e("EmailComposer", "Error adding an attachment: " + e.toString());
					}
				}
				if (uris.size() > 0) {
					emailIntent.putParcelableArrayListExtra(Intent.EXTRA_STREAM, uris);
				}
			}
			
		} catch (Exception e) {
			LOG.e("EmailComposer", "Error handling subject param: " + e.toString());
		}
		this.cordova.startActivityForResult(this, emailIntent, 0);
		
		
	}
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		Log.d("HelloPlugin", "Hello, this is a native function called from PhoneGap/Cordova!");
		if ("beep".equals(action)) {
			 
			 String name = args.getString(0);
	         String message = "Hello, " + name;
	         callbackContext.success(message);
	        
	        return true;
	    }
		
		if ("openWaze".equals(action)) {
			JSONObject arg_object = args.getJSONObject(0);
			 String latitude =arg_object.getString("latitude");
			 String longtitude =arg_object.getString("longtitude");
			 this.openWaze(latitude, longtitude);
	         callbackContext.success();
	       
	        return true;
	    }
		
		if ("showEmailComposer".equals(action)) {
			try {
				JSONObject arg_object = args.getJSONObject(0);
				if (arg_object != null) {
					this.sendMail(arg_object);
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
			
		   callbackContext.success();
	       
	        return true;
	    }
	    return false;  
	}


	@Override
	public void onResume(boolean multitasking)
	{
		super.onResume(multitasking);

		IntentFilter intentFilter =
				new IntentFilter(cordova.getActivity().getPackageName() + ".action.PUSH_MESSAGE_RECEIVE");

		 
	}

	@Override
	public void onPause(boolean multitasking)
	{
		super.onPause(multitasking);

		try
		{
			 
		}
		catch (Exception e)
		{
			// pass. for some reason Phonegap call this method before onResume. Not Android lifecycle style...
		}
	}
 
	@Override
	public void onActivityResult(int requestCode, int resultCode, Intent intent) {
		// TODO handle callback
		super.onActivityResult(requestCode, resultCode, intent);
		LOG.e("EmailComposer", "ResultCode: " + resultCode);
		// IT DOESN'T SEEM TO HANDLE RESULT CODES
	} 

}
