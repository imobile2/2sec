//= require jquery
$(window).load(function() {
	ANISPEED=500;
	
	// $("div.footnotesHeader .footnotesHeaderContent").on("click", {textNode :"#footerFootnoteContainer .footnoteContent"}, toggleSlidingVertical);
	$("div.footnotesHeader .footnotesHeaderContent").on("click", {textNode :"#footerFootnoteContainer .footnoteContent"}, toggleSlidingVertical);
	$("div.qb-offer-details a").on("click", popUpOfferDialog);
	$("#qb-popupDialog .closeBtn").on("click", closeOfferPopupDialog);


function toggleSlidingVertical (event){
	// console.log('click');
	var textObj = $(event.data.textNode);
	if (textObj.css("display") === "none") {
		textObj.slideDown(ANISPEED);
		textObj.fadeIn(ANISPEED);
	} else {
		textObj.slideUp(ANISPEED);
		textObj.fadeOut(ANISPEED);
	}
}
function popUpOfferDialog(){
	// console.log('click');
	var maskHeight = $(document).height();
    var maskWidth = $(window).width();
 
    //Set height and width to mask to fill up the whole screen
    $('#mask').css({'width':maskWidth,
					'height':maskHeight, 
					'display': 'block'});

    var winH = $(window).height();
    var winW = $(window).width();
           
    //Set the popup window to center
	var popup = $("#qb-popupDialog");
    popup.css({'top': winH/2 + $(window).scrollTop() - popup.height()/2,
			   'left': winW/2- popup.width()/2,
			   "display":"block"});	
}
function closeOfferPopupDialog() {
	$("#qb-popupDialog").css({"display":"none"});
	$("#mask").css({"display":"none"});
}

});