(function($) {

	$(document).ready(function($) {
		// bind functions
		$(window).bind('load', init_enable_subsite_content_types);
		$('.cp-main input[name="enable_subsite_content_types"]').bind('change', init_enable_subsite_content_types);
		
		//Add a default date for the datepicker settings
		var ds = $.datepicker.formatDate(cp_datepicker_format, new Date(), {});
		$('#datepicker').attr('value', ds );
		
	});
	
	// initiate the value of the post_type rewrite field
	function init_enable_subsite_content_types() {
		if ( $('.cp-main input[name="enable_subsite_content_types"]:checked').val() === '1' ) {
			$('.cp-main input[name="keep_network_content_types"]').attr( 'disabled', false );
		} else {
			$('.cp-main input[name="keep_network_content_types"]').attr( 'disabled', true );
		}
	}

})(jQuery);

