function validate() {
	var zip = $("#zip").val();
	if ((zip.length != 5 || isNaN(zip)) && zip.length != 0){
		alert("Zip is not valid.");
		return false;
	}
}