var LoginPage = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
 
     
    renderLoginView: function() {
     
    	
    	
    		this.$inputUsername.attr("placeholder",  window.strings.translations.LOGIN_PAGE.INPUT_USER_NAME);
    		this.$inputPassword.attr("placeholder", window.strings.translations.LOGIN_PAGE.INPUT_PASSWORD);
            $('#loginBtn').on('tap',  $.proxy(this.toyotaLogin, this));
            $('#wazeLink').on('tap', $.proxy(this.openWaze, this) );
            $('#sendEmail').on('tap', $.proxy(this.sendEmail, this) );
            
    }, 
    toyotaLogin: function(event) {
      event.preventDefault();
      var _username = $("input[name='username']",$("#login-page")).val();
        if(!_username || _username == "") {
        	showAlert("invalid username = ",+_username);
            return;
        }
     
        var _password = $("input[name='password']",$("#login-page")).val();
        if(!_password || _password == "") {
        	showAlert("password");
            return;
        } 
        
      this.sendUserData(_username, _password);
   },
   
   //-----------------------------------------------
   sendUserData: function(username, password) {
	   var jsonData ="{'username':'"+username+"','password':'"+password+"'}";
	   $.mobile.loading('show');
	  
	   //$("#main-page").addClass($.mobile.activePageClass);
	  // $("#main-page").page();
	
		
	  // $.mobile.changePage( "#main-page", { transition: "slide", reverse:true} );
//return;
	   
	 
      if(isDeviceConnected()) {
	   try {
		   MyCar.myCarDetails =jsonData;
		   
		 $.ajax({
			 		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
			 		complete: function() { $.mobile.hidePageLoadingMsg() }, //Hid
		           
		            type: "POST",
		            url: c_TOYOTA_API_URL+"account/login",
		            data: jsonData,
		            dataType: "json",
		            contentType: "application/json; charset=utf-8",
		            
		            success: function (msg) {
		            	//MyCar.myCarDetails =msg.userDetails;
				         console.log("In Success?????????????") ;
		            	//var email= msg.userDetails.email;
		            	//var firstName = msg.userDetails.firstName;
		            	//var isRecallExistForUser = msg.userDetails.isRecallExistsForUser;
		            	//var lastName = msg.userDetails.lastName;
		            	//var licensePlate = msg.userDetails.licensePlate;
		            	
		            	
		            	//window.localStorage.setItem("Toyota_Customer_Email", email);
                       // window.localStorage.setItem("Toyota_Customer_Name", firstName);
                        //window.localStorage.setItem("Toyota_Recall_Exist", isRecallExistForUser);
                        $.mobile.changePage( "#main-page", { transition: "slide", reverse:true} );
		            },
		            error: function (xhr, msg) {
		                   console.log("LoginPage sendUserData error callback : " + msg);
		                   showAlert("error1" +msg);
		             }
		    });
		   
		  
 
		   
       }
       catch (e) {
           console.log("LoginPage sendUserData EXCEPTION : " + e);
           showAlert("error2");
       }
       }
       else {
       	console.log("LoginPage sendUserData No Connection");
     	showAlert("connection");
      }
   },
   	
   
   
    initialize: function() {
        var self = this;
        this.$inputUsername =  $("input[name='username']");
        this.$inputPassword = $("input[name='password']",$("#login-page"));
        
        self.renderLoginView();
    },
    
    openWaze : function(event) {
    	
   	 event.preventDefault();
       
         var success = function(message) { };
        var error = function(message) { alert("Oopsie! " + message); };
       ToyotaPlugin.openWazeScreen("31.960138","34.791768",success, error);
       
      
    },
    sendEmail : function(event) {
    	
      	 event.preventDefault();
      	 var toRecipients = "einatha@realcommerce.co.il";
      	 var ccRecipients = "";
      	 var bccRecipients ="";
      	 var bIsHTML =0;
      	 var attachments ="";
         ToyotaPlugin.showEmailComposer("subject","this is thebody",toRecipients,ccRecipients,bccRecipients,bIsHTML,attachments);
          
         
    }
    

};


