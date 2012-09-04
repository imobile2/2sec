$('#moreFromIntuitLink').click(function() {
	$('#moreFromIntuit').slideToggle(250);
});

/* Phone Info - Call Center Open/Closed */

// delay loading / lazy load
$(window).load(function () {

	var d = new Date();

	/* Determine if DST is in effect */

	// A free script from: www.mresoftware.com
	function DST(d){
		var today = d;
		var yr = today.getFullYear();
		var dst_start = new Date("March 14, "+yr+" 02:00:00"); // 2nd Sunday in March can't occur after the 14th 
		var dst_end = new Date("November 07, "+yr+" 02:00:00"); // 1st Sunday in November can't occur after the 7th
		var day = dst_start.getDay(); // day of week of 14th
		dst_start.setDate(14-day); // Calculate 2nd Sunday in March of this year
		day = dst_end.getDay(); // day of the week of 7th
		dst_end.setDate(7-day); // Calculate first Sunday in November of this year
		if (today >= dst_start && today < dst_end) { //does today fall inside of DST period?
			return true; //if so then return true
		} else {
			return false; //if not then return false
		}
	}

	/* /Determine if DST is in effect */

	// if DST is true and UTC time is between 12-24 |OR| DST is false and UTC time is between 13-24 or 0-1, add the 'open' class to the time module/s
	if ( ( DST(d) && d.getUTCHours() >= 12 ) || ( !DST(d) && ( d.getUTCHours() >= 13 ) || ( d.getUTCHours() < 2 ) ) ) $('#quickNav .call-center-status, #phoneInfoModule .call-center-status').addClass('open');

});