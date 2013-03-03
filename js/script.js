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

  $(".product-image-list img.product-image").click(function() {
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

  $(".button.submit-get_pdf").click(function() {

	  var name = $("#success").html();

		var dataString = 'html='+ name;
		
		$.ajax({
      type: "POST",
      url: "bin/process_pdf.php",
      data: dataString,
      success: function(data) {
        window.location.href = data;
        var output = '<div class="result-list"><header><h1>Your pdf was created.</h1><header></div>'
        $("#success").html( output );
      }
     });
    return false;
  });

});
