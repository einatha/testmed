
$(document).on('pagebeforeshow', '#my-car-page', function(){       
	
	$.getJSON("http://toyota-mob.staging.realcommerce.co.il/api/helper/getAllAgents", displayAgency);
    
});


function displayAgency(data) {
	var agency = data.item;
	console.log(employee);
	$('#agency_name').html(agency.name);
	$('#agency_address').text(agency.address);
	setTimeout(function(){
        $.mobile.loading('hide');
    },50);
	
}

