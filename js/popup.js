/************************
TSMessages by Alvaro Marquina
(TS is for The Sunno :D)
http://www.webandlogics.com
***************************/
var red = "#D61313";
var green = "#108A0A";
var TSMsgBox = "<div id='tsMsgBox' style='position: fixed; width:100%; top: 0; left: 0; z-index: 100; text-align: center;'></div>";

(function( $ ) {
	$.TSMessage = function(message, options) {

		function TSMessageBoxExists(){
			return window.top.$("#tsMsgBox").length > 0;
		}
		function TScreateMessageBox(){
			window.top.$("body").append(TSMsgBox);
			window.top.$("#tsMsgBox").hide()
		}



		//Creating default settings
		var settings = $.extend( {
			'type'         : 'confirm', //valid options: error|confirm
			'bgcolor' : 'none',
			'fontsize': '2em',
			'fontcolor': '#fff',
			'padding': '0.5em',
			'delay': 3000,
		}, options);
		if (!TSMessageBoxExists()){
			TScreateMessageBox();
		}
		box = window.parent.$("#tsMsgBox");
		if(box.css('display')!='none'){
			return this; //return if another message is showing (not sure if this is what it's supposed to do)
		}
		if(settings.bgcolor == 'none'){
			if(settings.type=='confirm'){
				bgcolor = green;
			}
			else if(settings.type=='error'){
				bgcolor=red;
			}
		}

		
		box.text(message);
		box.css({
			"background": bgcolor,
			'font-size': settings.fontsize,
			'padding': settings.padding,
			'color': settings.fontcolor
		});
		box.slideDown().delay(settings.delay).slideUp();

		return this;
	};
})(jQuery);







function TSshowMessage(message, color){
	if (!TSMessageBoxExists()){
		TScreateMessageBox();
	}
	box = window.parent.$("#tsMsgBox");
	box.text(message);
	box.css("background", color);
	box.slideDown().delay(3000).slideUp();

}