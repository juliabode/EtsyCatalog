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
