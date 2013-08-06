package com.realcommerce.toyota;

 
import android.app.ProgressDialog;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
 
import android.net.Uri;
import android.util.Log;
 

public class JsBridge 
{
	
	private static final String Tag = "Toyota";
	private ProgressDialog m_Prg = null;
	private Context m_Context = null;
	
	
	public JsBridge(Context i_Context)
	{
		m_Context = i_Context;
	}

	public void log(String msg) 
	{
		Log.i(Tag, msg);
	}
	
	public void showLoader(String title, String msg)
	{
		if(m_Prg == null)
		{
			m_Prg = new ProgressDialog(m_Context);
		}
		
		m_Prg.setMessage(msg);
		m_Prg.setTitle(title);
		m_Prg.setCancelable(false);
		m_Prg.show();
	}
	
	public void closeLoader()
	{
		if(m_Prg != null)
		{
			m_Prg.dismiss();
		}
	}
	
	public void makePhonecall(String numberToCall)
	{	
		Intent callIntent = new Intent(Intent.ACTION_CALL);		
		callIntent.setData(Uri.parse("tel:" + numberToCall));
		m_Context.startActivity(callIntent);	
	}
	
	 
	public void openWaze (String latitude, String longtitude) {
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
	 
	
	 
}
