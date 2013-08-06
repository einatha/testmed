 

 
var ToyotaPlugin = {
	    createEvent: function( successCallback, errorCallback) {
	        cordova.exec(
	            successCallback, // success callback function
	            errorCallback, // error callback function
	            'ToyotaPlugin', // mapped to our native Java class called "CalendarPlugin"
	            'beep', // with this action name
	            [{                  // and this array of custom arguments to create our entry
	                "name": "einat"
	                
	            }]
	        ); 
	     },
	     
	     openWazeScreen: function(latitude, longtitude, successCallback, errorCallback) {
		        cordova.exec(
		            successCallback, // success callback function
		            errorCallback, // error callback function
		            'ToyotaPlugin', // mapped to our native Java class called "CalendarPlugin"
		            'openWaze', // with this action name
		            [{                  // and this array of custom arguments to create our entry
		                "latitude": latitude,
		                "longtitude": longtitude
		                
		            }]
		        ); 
		  },
		  
		  showEmailComposer: function(subject,body,toRecipients,ccRecipients,bccRecipients,bIsHTML,attachments) {
			  console.log("****************************AVVIATO");
			  var args = {};
				if(toRecipients)
					args.toRecipients = toRecipients;
				if(ccRecipients)
					args.ccRecipients = ccRecipients;
				if(bccRecipients)
					args.bccRecipients = bccRecipients;
				if(subject)
					args.subject = subject;
				if(body)
					args.body = body;
				if(bIsHTML)
					args.bIsHTML = bIsHTML;
			    if(attachments)
			        args.attachments = attachments;

				cordova.exec(null, null, "ToyotaPlugin", "showEmailComposer", [args]);
		  }
	}