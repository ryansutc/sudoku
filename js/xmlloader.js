function loadDoc(){
	var xhttp = new XMLHttpRequest();
	//set a function to run when the ready state of the server changes
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			//you can get the response text as a string or as xml
			document.getElementById([myelement]).innerHTML = xhttp.responseText;
			}
		};
		
	//a get request to server. true means ansyncronous
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}
var i;
var xmlDoc = xml.responseXML;
myxmlcells = xmldoc.getElementsByTagName("cell");

for (var i in mysudoku){
	for (x = 0; x < myxmlcells.length; x++){
		if (i.id === x.id){
			i.innerHTML = x.nodeValue;
			break;
		}
	}
}