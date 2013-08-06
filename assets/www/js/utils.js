Utils = {
 

	actionSheet : function(action) {
		var $sheet = $("<div class='utils-actionSheet'></div>");
	 
		//$sheet.bind("tap", function(e){e.preventDefault();});
	 
		var $ul = $("<ul></ul>");
		//$("<li>Camera</li>").bind("tap", action).appendTo($ul);
		//$("<li>Album</li>").bind("tap", action).appendTo($ul);	
		$sheet.append($ul);
		
		return $sheet;
	},

    isConnection: function () {
        var networkState = navigator.network.connection.type;
        return !/(none|unknown)/i.test(networkState)
    } 

    
}
 