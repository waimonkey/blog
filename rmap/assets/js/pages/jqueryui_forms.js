/* ------------------------------------------------------------------------------
*
*  # jQuery UI forms
*
*  Specific JS code additions for jqueryui_forms.html page
*
*  Version: 1.0
*  Latest update: Nov 12, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    $(".datepicker").datepicker();
});

$("#range-from").datepicker({
    defaultDate: "+1w",
    numberOfMonths: 3,
    onClose: function( selectedDate ) {
        $( "#range-to" ).datepicker( "option", "minDate", selectedDate );
    }
});

// To
$("#range-to").datepicker({
    defaultDate: "+1w",
    numberOfMonths: 3,
    onClose: function( selectedDate ) {
        $( "#range-from" ).datepicker( "option", "maxDate", selectedDate );
    }
});