var serviceURL = ""
 

var MyCar = {

		 myCarDetails : ""  
		    
	};


$(document).on('pagebeforeshow', '#my-car-page', function(){       
    alert("page before show" + MyCar.myCarDetails);
    
});