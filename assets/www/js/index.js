 
var c_TOYOTA_API_URL = "http://toyota-mob.staging.realcommerce.co.il/api/";

var stringsText =  window.strings;
var accidentReport = {
	    pictures: []
	};
function doInit() {
	 
	//var cusotmer_email = window.localStorage.getItem("Toyota_Customer_Email");
	//var customer_name = window.localStorage.getItem("Toyota_Customer_Name");
	//var recall_exist = window.localStorage.getItem("Toyota_Recall_Exist");
	
	//alert("cusotmer_email ="+cusotmer_email + ", customer_name =" +customer_name)
	//console.log("Toyota_Customer_Email = "+ window.localStorage.getItem("Toyota_Customer_Email"));
	//if(window.localStorage.getItem("Toyota_Customer_Email")) {
	 
	 // } else {
		 
		  // $.mobile.changePage( "#login-page", {  changeHash:false} );
		  
		   //LoginPage.initialize();
		//  $.mobile.changePage( "#picture-gallery-page");
		 // PictureGallery.initialize();
		 // new PictureGallery().initialize();
		  
	//}  
	 
		 
	
 }

function showAlert (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
}


function isDeviceConnected() {
	 
    var _res = !(navigator.connection.type === Connection.UNKNOWN ||
                 navigator.connection.type === Connection.NONE);
    
    return (_res);
}

 
 /// my agency block code

$(document).on('pagebeforeshow', '#my-agency-page', function(){       
	 setTimeout(function(){
	        $.mobile.loading('show');
	 },1);  
	$.getJSON(c_TOYOTA_API_URL+ "helper/getAllAgents", displayAgency);
});
 

 
function displayAgency(data) {
	var agency = data[0];
	$('#agency_name').html(agency.name);
	$('#agency_address').text(agency.address);
	 $.mobile.loading('hide');
}

$(document).on('pagebeforeshow', '#markaz-shirot-page', function(){       
	 setTimeout(function(){
	        $.mobile.loading('show');
	 },1);  
	// Determine support for Geolocation and get location or give error
	 if (navigator.geolocation) {
	     navigator.geolocation.getCurrentPosition(displayPosition, errorFunction);
	 } else {
	     alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
	 }
});
function displayPosition(pos) {
	hideMobileLoading();
    var mylat = pos.coords.latitude;
    var mylong = pos.coords.longitude;
    
    console.log("myLar = " + mylat );
}
function errorFunction(pos) {
	hideMobileLoading();
    alert('It seems like your browser or phone has blocked our access to viewing your location. Please enable this before trying again.');
}

function hideMobileLoading () {
	setTimeout(function(){
        $.mobile.loading('hide');
    },300);
	
}


