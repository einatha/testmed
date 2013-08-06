 

$(document).on('pagebeforeshow', '#registration-page', function(){       
	setTimeout(function(){
	        $.mobile.loading('show');
	 },1);  
	RegistrationPage.initialize();
 
});



 

var RegistrationPage = {

		
	    initialize: function() {
	      
	    	 $('#registration-page label[for="firstname"]').text(strings.translations.REGISTRATION_PAGE.FIRST_NAME)
	    	 $('#registration-page label[for="lastname"]').text(strings.translations.REGISTRATION_PAGE.LAST_NAME)
	    	 $('#registration-page label[for="email"]').text(strings.translations.REGISTRATION_PAGE.EMAIL)
	    	 $('#registration-page label[for="phone"]').text(strings.translations.REGISTRATION_PAGE.PHONE)
	    	 $('#registration-page label[for="licensePlate"]').text(strings.translations.REGISTRATION_PAGE.LICENSE_PLATE)
	    	 $('#registration-page label[for="carYear"]').text(strings.translations.REGISTRATION_PAGE.CAR_YAER)
	    	 $('#registration-page label[for="carModel"]').text(strings.translations.REGISTRATION_PAGE.CAR_MODEL)
	    	 $('#registration-page label[for="subAgency"]').text(strings.translations.REGISTRATION_PAGE.SUB_AGENCY)
	    	 $('#registration-page label[for="username"]').text(strings.translations.REGISTRATION_PAGE.USERNAME)
	    	 $('#registration-page label[for="password"]').text(strings.translations.REGISTRATION_PAGE.PASSWORD);
	    	 
	         $('#registration-page select[name="carYear"] option:first-child').text(strings.translations.REGISTRATION_PAGE.SELECT);
	    	 $('#registration-page select[name="carModel"] option:first-child').text(strings.translations.REGISTRATION_PAGE.SELECT);
	    	 $('#registration-page select[name="subAgency"] option:first-child').text(strings.translations.REGISTRATION_PAGE.SELECT);
	 
	    	 
	    	 
	    	 this.$fnameInput = $("#registration-page #firstname");
	    	 this.$lnameInput = $("#registration-page #lastname");
	    	 this.$usernameInput = $("#registration-page #username");
	    	 this.$passwordInput = $("#registration-page #password");
	    	 this.$license_number = $("#registration-page #licensePlate");
	    	 this.$emailInput = $("#registration-page #email");
	    	 this.$phoneInput = $("#registration-page #phone");
	    	 this.$registration_btn = $("#registration-page #registrationBtn");
	    	 this.$registration_btn.text(strings.translations.REGISTRATION_PAGE.REGISTER_BTN).button('refresh');
	    	 
	    	 this.$cmbYear = $('#registration-page select[name="carYear"]');
	    	 this.$cmbModel = $('#registration-page select[name="carModel"]');
	    	 this.$cmbSubAgency = $('#registration-page select[name="subAgency"]');
	    	 this.$registration_btn.on('tap', $.proxy(this.validateRegistrationForm, this) );
	    	 this.$cmbYear.on('change', $.proxy(this.getModelByYear, this) );
	    	 this.$cmbModel.on('change', $.proxy(this.showSubAgencies, this) );
	    	 $.getJSON(c_TOYOTA_API_URL+"helper/getYears", this.dispalyCarYears);
	    	 $.getJSON(c_TOYOTA_API_URL+"/helper/getAllAgents", this.dispalySubAgencies);
	    	 
	    	
	    	 
	    	 
	    }, 
	    dispalyCarYears : function(data) {
	    	for (var i=0;i<data.length;i++){
	 		   $('<option/>').val(data[i]).html(data[i]).appendTo(RegistrationPage.$cmbYear);
	    	}
	    	hideMobileLoading();
	    },
	    
	    fillCarsModel: function(data) {
	    	$('#registration-page select[name="carModel"] > option:gt(0)').remove();
	     	for (var i=0;i<data.length;i++){
	    		   $('<option/>').val(data[i].modelID).html(data[i].modelName).appendTo('#registration-page select[name="carModel"]');
	    	}
	    },
	    
	    getModelByYear: function () {
	    	var selectedCarYearValue = this.$cmbYear.val();
	    	this.$cmbYear.selectmenu('close');
	    	if(selectedCarYearValue != "") {
    			$.getJSON(c_TOYOTA_API_URL+ "helper/getModelsByYear?year="+selectedCarYearValue, this.fillCarsModel);
    			 
    		} else {
    			$('#registration-page select[name="carModel"] > option:gt(0)').remove();
    		  	this.$cmbModel.selectmenu('refresh');
    		  	$("#registration-page select[name='subAgency'] > option:gt(0)").hide();
    		  	this.$cmbSubAgency.val('');
	    		this.$cmbSubAgency.selectmenu('refresh');
    		}
	    	
	    },
	    dispalySubAgencies: function (data) {
	    	
	     	for (var i=0;i<data.length;i++){
	    		   $('<option/>').val(data[i].agentID).html(data[i].name).appendTo(RegistrationPage.$cmbSubAgency);
	    	}
	     	$("#registration-page select[name='subAgency'] > option:gt(0)").hide();
	     	
	    },
	    showSubAgencies : function () {
	    	if(this.$cmbModel.val() != "") {
	    		$("#registration-page select[name='subAgency']> option ").show();
	    	} else {
	    		$("#registration-page select[name='subAgency'] > option:gt(0)").hide();
	    		this.$cmbSubAgency.val('');
	    		this.$cmbSubAgency.selectmenu('refresh');
	    	}
	    },
	    validateRegistrationForm: function () {
	    	var flag = true;
	    	
	    	$($("#registration-page .required").get().reverse()).each(function(){
	    	    if ($(this).val()==='') {
	    	    	console.log("RegistrationForm validation error ");
	    	    	showAlert(JSON.stringify(strings.translations.REGISTRATION_PAGE.ERROR_REQUIRED[$(this).attr("id")]))
	    	    	flag = false;
	    	    	return false;
	    	    }
	    	       
	    	});
	    	if (flag && this.$cmbYear.val() == "" ) {
	    		showAlert(JSON.stringify(strings.translations.REGISTRATION_PAGE.ERROR_REQUIRED[this.$cmbYear.attr("id")]))
    	    	flag = false;
    	    	return;
	    	}
	    	if (flag &&  this.$cmbModel.val() == "") {
	    		showAlert(JSON.stringify(strings.translations.REGISTRATION_PAGE.ERROR_REQUIRED[this.$cmbModel.attr("id")]))
	    	    flag = false;
    	    	return;
	    	}
	    	if (flag &&  this.$cmbSubAgency.val() == "") {
	    		showAlert(JSON.stringify(strings.translations.REGISTRATION_PAGE.ERROR_REQUIRED[this.$cmbSubAgency.attr("id")]))
	    	    flag = false;
    	    	return;
	    	}
	    	
	    	var email =  this.$emailInput.val();
	    	if (flag && !this.checkEmail(email)) {
	    		 showAlert(strings.translations.REGISTRATION_PAGE.INVALID_EMAIL);
	    		 flag = false;
	    		 return;
			}
	    	var phone =  this.$phoneInput.val();
	    	if (flag && !this.checkPhone(phone)) {
	    		 showAlert(strings.translations.REGISTRATION_PAGE.INVALID_PHONE_NUMBER);
	    		 flag = false;
	    		 return;
			}
	    	if (flag && !this.validateLicenseNumber()) {
	    		flag = false;
	    		 showAlert(strings.translations.REGISTRATION_PAGE.ERROR_LICENSE_NUMBER_REQUIRED);
	    		 return;
			}
	    	var registerUser = {
	    			"FirstName":  this.$fnameInput.val(), 
	    	    	"LastName": this.$lnameInput.val(),
	    	    	"Email": this.$emailInput.val(),
	    	    	"PhoneNumber":this.$phoneInput.val(),
	    	    	"LicensePlate":this.$license_number.val(),
	    	    	"ModelID":this.$cmbModel.val(),
	    	    	"AgentID": this.$cmbSubAgency.val(),
	    	    	"UserName":this.$usernameInput.val(),
	    	    	"Password":this.$passwordInput.val()
	    	 };
	    	
	    	 this.submitUser(registerUser);
	    },
	    submitUser : function(data) {
	    	 if(isDeviceConnected()) {
	    		 try {
	    			 $.ajax({
	 			 		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
	 			 		complete: function() { $.mobile.hidePageLoadingMsg() }, //Hid
	 		           
	 		            type: "POST",
	 		            url: c_TOYOTA_API_URL+"account/register",
	 		            data: data,
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
	                        //$.mobile.changePage( "#main-page", { transition: "slide", reverse:true} );
	 				        showAlert("succerss")
	 		            },
	 		            error: function (xhr, msg) {
	 		                   console.log("Register user failed callback : " + msg);
	 		                   showAlert("error1" +msg);
	 		             }
	    			 });
	    		 } catch (e) {
	    	           console.log("LoginPage sendUserData EXCEPTION : " + e);
	    	           showAlert("error2");
	    	       
	    		 }
	    	 }
	    	
	    },
	    validateLicenseNumber : function() {
		 
			if (/\d+/.test(this.$license_number.val())) {
				return true;
			}
			else {
				return false;
			}
		},
		checkEmail: function(email) {
	            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	            return re.test(email);
	    },
	    checkPhone: function(val) {
            return /^\d+$/.test(val);
        }

}
 
 