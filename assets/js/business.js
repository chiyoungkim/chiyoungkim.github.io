$(document).ready(function () {


	var password;
	var pass1="puzzling";

	password=prompt('wow',' ');

	if (password == null) {
		window.location="http://chiyoung.kim/puzz/stegosaurus.html";
	}
	else if (password != pass1)
	   {
	    window.location="http://chiyoung.kim/puzz/business.html";
	}


});
