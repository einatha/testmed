var IMAGE_MAX_WIDTH = 320; 
var IMAGE_MAX_HEIGHT = 480;
var owner  = [];
var PictureGallery = {
		 openActionSheet : function(event) {
			 event.preventDefault();
			 var id = event.target.id;
			 console.log("************id " + id);
			 var $sheet = $("<div class='utils-actionSheet'></div>");
			
			 var $ul = $("<ul></ul>");
			 var $li = $("<li>camara</li>").off('tap').on('tap',function(e) {   PictureGallery.selectCamara(id) });
			 $li.appendTo($ul);
			 $li = $("<li>Album</li>").off('tap').on('tap',function(e) {   PictureGallery.selectAlbum(id)});
			 $li.appendTo($ul);
			 
			 $li = $("<li>Delete</li>").off('tap').on('tap',function(e) {  PictureGallery.closeActionSheet(e) });
			 $li.appendTo($ul);
			 $sheet.append($ul);
			 $('#picture-gallery-page div[data-role="content"]').append($sheet);
		 },
		 selectAlbum : function(id) {
			 
	    	  navigator.camera.getPicture( PictureGallery.cameraSuccess(id) ,function(e) { PictureGallery.cameraError(id)} ,{ quality: 100,  targetWidth: 320,
	    	      targetHeight: 480, destinationType: Camera.DestinationType.FILE_URI  ,  sourceType: Camera.PictureSourceType.PHOTOLIBRARY } );
	    	  $(".utils-actionSheet").remove();
		    	 
		   },
		  selectCamara: function(id) {
	    	 
	    	console.log("someone clicked on me");
	    	  navigator.camera.getPicture( PictureGallery.cameraSuccess(id) ,function(e) { PictureGallery.cameraError(id)} ,{ quality: 100,  targetWidth: 320,
	    	      targetHeight: 480, destinationType: Camera.DestinationType.FILE_URI  ,  sourceType: Camera.PictureSourceType.CAMERA } );
	    	  $(".utils-actionSheet").remove();
			    
	    	 
	    	 
	   },
	    closeActionSheet: function(event) {
	    	event.preventDefault();
	    	console.log("closeActionSheet from" +  event.target.id);
	    	$(".utils-actionSheet").remove();
	    	 
	   },
	   
	   cameraSuccess : function(id) {
		   return function(imageURI) {
			   $("#"+id).css({"background-image": "url("+imageURI+")"});
			 
		   }
		    
		},	
	   cameraError : function() {
		   console.log(JSON.stringify(imageURI));
			  alert("camara failure");
		   	 
		      
	    }, 
	   initialize: function() {
	       
	   } 
		
}


$(document).on('pagebeforeshow', '#picture-gallery-page', function(){       

	   $(document).off('tap', '.image-cell').on('tap','.image-cell',function(e) {
			PictureGallery.openActionSheet(event);
	   }); 
	   $(document).on('click', '#camaraBtn', function() {
		   getPhoto()
	   });
});

function getPhoto() {
    
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
      destinationType: Camera.DestinationType.FILE_URI,
      targetWidth: 320,
      targetHeight: 480,
      sourceType:  Camera.PictureSourceType.PHOTOLIBRARY });
  }
function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

 