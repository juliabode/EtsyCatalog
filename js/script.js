$(function() {
  $(".button.submit-shopname").click(function() {

	  var name = $("input#shopname").val();

		var dataString = 'name='+ name;
		
		$.ajax({
      type: "POST",
      url: "bin/display_listing.php",
      data: dataString,
      success: function(data) {
        $("#success").html( data );
      }
     });
    return false;
	});
});

$(document).ajaxComplete(function() {

  $("img.product-image").click(function() {
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  $(".button.submit-listing_ids").click(function() {

    var dataString = 'product_ids=';

    $("img.product-image.active").each(function () {
      dataString = dataString + $(this).attr('data-id') + ',';
    });
    
    $.ajax({
      type: "POST",
      url: "bin/display_details.php",
      data: dataString,
      success: function(data) {
        $("#success > div").replaceWith( data );
      }
     });
    return false;
  });

});
