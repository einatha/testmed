(function() {
    //-----------------------------------------------
    LoginPage = function() {
      
        this.id = "login-page";
        this.$page = $("#" + this.id);
       // this.$inputUsername = 
       // this.$inputPassword = $("input.password", this.$loginPanel);
      //  this.$submitBtn = $("input.SubmitBtn", this.$loginPanel);
    };
    //-----------------------------------------------

    //-----------------------------------------------
    LoginPage.prototype = {

        //-----------------------------------------------
		 
 
      
        toyotaLogin: function() {
        	 var _username = this.$inputUsername.val();
             if(!_username || _username == "") {
                 Alert("invalid username");
                 return;
             }
             
             var _password = this.$inputPassword.val();
             if(!_password || _password == "") {
                 Alert("password");
                 return;
             } 
             
             this.sendUserData(_name, _email, this.sendUserDataCallback);
        },
        //-----------------------------------------------

         
        //-----------------------------------------------
        sendUserDataCallback: function(success) {
            if(success === true) {
                if(window.facebookAppResume) {
                    document.removeEventListener("resume", window.facebookAppResume, false);
                }            
                mainApp.mainPage.showPage();
            }
            else {
                hideModalView();
            }
        },
        //-----------------------------------------------

        //-----------------------------------------------
        sendUserData: function(name, email, callback) {
            if(isDeviceConnected()) {
                try {
                    $.ajax({
                        type: "POST",
                        url: c_TOYOTA_LOGIN_URL,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        headers: {
                            "citycode": window.AppSettings.CityCode,
                            "UDID": device.uuid,
                            "customerid": 12345,
                            "usermail": email
                        },
                        
                        success: function (msg) {
                            if(msg && msg.serverResponseStatus && msg.serverResponseStatus.wasSuccessful === true) {
                        		window.localStorage.setItem(c_Customer_Id_Storage_Key, msg.CustomerId);
                                window.localStorage.setItem(c_Issta_User_Email_Key, email);
                        		console.log("LoginPage sendUserData success callback : Success Data was accepted by the server: " + JSON.stringify(msg));
                                if(callback) {
                                    callback(true);
                                }
                        	}
                        	else {
                        		console.log("LoginPage sendUserData success callback : Error On Server");
                                Alert(CityData.translations.LOGIN_PAGE.SERVER_ERROR_OR_BAD_INPUT, callback);
                        	}
                        },
                        
                        error: function (xhr, msg) {
                            console.log("LoginPage sendUserData error callback : " + xhr.statusText + " " + xhr.status + " " + xhr.responseXML);
                            Alert(CityData.translations.LOGIN_PAGE.NO_CONNECTION_ERROR, callback);
                        }
                    });
                }
                catch (e) {
                    console.log("LoginPage sendUserData EXCEPTION : " + e);
                    Alert(CityData.translations.LOGIN_PAGE.NO_CONNECTION_ERROR, callback);
                }
            }
            else {
            	console.log("LoginPage sendUserData No Connection");
                Alert(CityData.translations.LOGIN_PAGE.NO_CONNECTION_ERROR, callback);
            }
        },
        //-----------------------------------------------

        //-----------------------------------------------
        checkEmail: function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        //-----------------------------------------------
        
        //-----------------------------------------------
        inputFocus: function() {
            if(this.setSelectionRange) {
               var _this = this;
               setTimeout(function(){
                    _this.setSelectionRange(9999, 9999);
               }, 0);
            }
            else {
                this.focus();
            }
        },
        //-----------------------------------------------

        //-----------------------------------------------
        init : function() {
           
            this.$page.addClass("active");
         //  this.$inputName[0].addEventListener("focus", this.inputFocus, false);
           // this.$inputEmail[0].addEventListener("focus", this.inputFocus, false);
        }
        //-----------------------------------------------
    };
    //-----------------------------------------------

    window.LoginPage = LoginPage;
})();
