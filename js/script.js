$(function() {
  $(".button").click(function() {

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
  var name = $("img.product-image");
  console.log(name);
  $("img.product-image").click(function() {
    if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    } 
  });
});
