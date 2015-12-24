/* ---------------------------------
   New Perspectives on HTML and CSS
   Tutorial 5:  Case Problem 1 textbook assignment

   Sudoku Puzzle Table JavaScript
   Author: Ryan Sutcliffe (w0143446)
   Date: Dec 12, 2015  
	
   Filename: stable.js (LOCAL VERSION)
   Supporting Files: jquery code references library here:
	https://code.jquery.com/jquery-1.10.2.js
	
	Notes: see comments in each function for an overview
	of what it does.
* -----------------------------------
*/
sudokuXMLfileNo = 1
blankproblem = {
		a1:'',
		a2:'',
		a3:'',
		a4:'',
		a5:'',
		a6:'',
		a7:'',
		a8:'',
		a9:'',
		b1:'',
		b2:'',
		b3:'',
		b4:'',
		b5:'',
		b6:'',
		b7:'',
		b8:'',
		b9:'',
		c1:'',
		c2:'',
		c3:'',
		c4:'',
		c5:'',
		c6:'',
		c7:'',
		c8:'',
		c9:'',
		d1:'',
		d2:'',
		d3:'',
		d4:'',
		d5:'',
		d6:'',
		d7:'',
		d8:'',
		d9:'',
		e1:'',
		e2:'',
		e3:'',
		e4:'',
		e5:'',
		e6:'',
		e7:'',
		e8:'',
		e9:'',
		f1:'',
		f2:'',
		f3:'',
		f4:'',
		f5:'',
		f6:'',
		f7:'',
		f8:'',
		f9:'',
		g1:'',
		g2:'',
		g3:'',
		g4:'',
		g5:'',
		g6:'',
		g7:'',
		g8:'',
		g9:'',
		h1:'',
		h2:'',
		h3:'',
		h4:'',
		h5:'',
		h6:'',
		h7:'',
		h8:'',
		h9:'',
		i1:'',
		i2:'',
		i3:'',
		i4:'',
		i5:'',
		i6:'',
		i7:'',
		i8:'',
		i9:''
	};

blanksolution = {
	a1:'',
	a2:'',
	a3:'',
	a4:'',
	a5:'',
	a6:'',
	a7:'',
	a8:'',
	a9:'',
	b1:'',
	b2:'',
	b3:'',
	b4:'',
	b5:'',
	b6:'',
	b7:'',
	b8:'',
	b9:'',
	c1:'',
	c2:'',
	c3:'',
	c4:'',
	c5:'',
	c6:'',
	c7:'',
	c8:'',
	c9:'',
	d1:'',
	d2:'',
	d3:'',
	d4:'',
	d5:'',
	d6:'',
	d7:'',
	d8:'',
	d9:'',
	e1:'',
	e2:'',
	e3:'',
	e4:'',
	e5:'',
	e6:'',
	e7:'',
	e8:'',
	e9:'',
	f1:'',
	f2:'',
	f3:'',
	f4:'',
	f5:'',
	f6:'',
	f7:'',
	f8:'',
	f9:'',
	g1:'',
	g2:'',
	g3:'',
	g4:'',
	g5:'',
	g6:'',
	g7:'',
	g8:'',
	g9:'',
	h1:'',
	h2:'',
	h3:'',
	h4:'',
	h5:'',
	h6:'',
	h7:'',
	h8:'',
	h9:'',
	i1:'',
	i2:'',
	i3:'',
	i4:'',
	i5:'',
	i6:'',
	i7:'',
	i8:'',
	i9:''
};
problem1 = {
	a1:'',
	a2:'',
	a3:'4',
	a4:'5',
	a5:'',
	a6:'3',
	a7:'',
	a8:'7',
	a9:'',
	b1:'',
	b2:'',
	b3:'',
	b4:'',
	b5:'',
	b6:'',
	b7:'3',
	b8:'1',
	b9:'',
	c1:'3',
	c2:'5',
	c3:'',
	c4:'',
	c5:'',
	c6:'',
	c7:'2',
	c8:'',
	c9:'',
	c1:'',
	d1:'',
	d2:'',
	d3:'',
	d4:'',
	d5:'2',
	d6:'',
	d7:'9',
	d8:'3',
	d9:'7',
	e1:'6',
	e2:'',
	e3:'9',
	e4:'',
	e5:'',
	e6:'',
	e7:'4',
	e8:'',
	e9:'8',
	f1:'4',
	f2:'7',
	f3:'2',
	f4:'',
	f5:'9',
	f6:'',
	f7:'',
	f8:'',
	f9:'',
	g1:'',
	g2:'',
	g3:'1',
	g4:'',
	g5:'',
	g6:'',
	g7:'',
	g8:'5',
	g9:'2',
	h1:'',
	h2:'4',
	h3:'5',
	h4:'',
	h5:'',
	h6:'',
	h7:'',
	h8:'',
	h9:'',
	i1:'',
	i2:'6',
	i3:'',
	i4:'8',
	i5:'',
	i6:'1',
	i7:'7',
	i8:'',
	i9:''
};	

solution1 = {
	a1:'1',
	a2:'2',
	a3:'4',
	a4:'5',
	a5:'6',
	a6:'3',
	a7:'8',
	a8:'7',
	a9:'9',
	b1:'8',
	b2:'9',
	b3:'6',
	b4:'2',
	b5:'4',
	b6:'7',
	b7:'3',
	b8:'1',
	b9:'5',
	c1:'3',
	c2:'5',
	c3:'7',
	c4:'1',
	c5:'8',
	c6:'9',
	c7:'2',
	c8:'4',
	c9:'6',
	d1:'5',
	d2:'1',
	d3:'8',
	d4:'4',
	d5:'2',
	d6:'6',
	d7:'9',
	d8:'3',
	d9:'7',
	e1:'6',
	e2:'3',
	e3:'9',
	e4:'7',
	e5:'1',
	e6:'5',
	e7:'4',
	e8:'2',
	e9:'8',
	f1:'4',
	f2:'7',
	f3:'2',
	f4:'3',
	f5:'9',
	f6:'8',
	f7:'5',
	f8:'6',
	f9:'1',
	g1:'7',
	g2:'8',
	g3:'1',
	g4:'9',
	g5:'3',
	g6:'4',
	g7:'6',
	g8:'5',
	g9:'2',
	h1:'9',
	h2:'4',
	h3:'5',
	h4:'6',
	h5:'7',
	h6:'2',
	h7:'1',
	h8:'8',
	h9:'3',
	i1:'2',
	i2:'6',
	i3:'3',
	i4:'8',
	i5:'5',
	i6:'1',
	i7:'7',
	i8:'9',
	i9:'4'

};

problem2 = {
	a1:'',
	a2:'4',
	a3:'7',
	a4:'2',
	a5:'',
	a6:'',
	a7:'',
	a8:'',
	a9:'',
	b1:'',
	b2:'',
	b3:'',
	b4:'3',
	b5:'7',
	b6:'6',
	b7:'2',
	b8:'4',
	b9:'',
	c1:'',
	c2:'',
	c3:'6',
	c4:'',
	c5:'',
	c6:'',
	c7:'5',
	c8:'',
	c9:'',
	d1:'',
	d2:'',
	d3:'3',
	d4:'',
	d5:'',
	d6:'',
	d7:'',
	d8:'1',
	d9:'',
	e1:'',
	e2:'',
	e3:'2',
	e4:'',
	e5:'',
	e6:'',
	e7:'',
	e8:'7',
	e9:'',
	f1:'',
	f2:'5',
	f3:'8',
	f4:'1',
	f5:'',
	f6:'2',
	f7:'4',
	f8:'',
	f9:'6',
	g1:'1',
	g2:'6',
	g3:'',
	g4:'7',
	g5:'',
	g6:'3',
	g7:'',
	g8:'',
	g9:'8',
	h1:'8',
	h2:'',
	h3:'',
	h4:'4',
	h5:'',
	h6:'',
	h7:'7',
	h8:'5',
	h9:'',
	i1:'',
	i2:'7',
	i3:'5',
	i4:'',
	i5:'',
	i6:'',
	i7:'',
	i8:'',
	i9:''
};

solution2 = {
	
	a1:'9',
	a2:'4',
	a3:'7',
	a4:'2',
	a5:'8',
	a6:'5',
	a7:'6',
	a8:'3',
	a9:'1',
	b1:'5',
	b2:'8',
	b3:'1',
	b4:'3',
	b5:'7',
	b6:'6',
	b7:'2',
	b8:'4',
	b9:'9',
	c1:'2',
	c2:'3',
	c3:'6',
	c4:'9',
	c5:'1',
	c6:'4',
	c7:'5',
	c8:'8',
	c9:'7',
	d1:'6',
	d2:'9',
	d3:'3',
	d4:'5',
	d5:'4',
	d6:'7',
	d7:'8',
	d8:'1',
	d9:'2',
	e1:'4',
	e2:'1',
	e3:'2',
	e4:'6',
	e5:'9',
	e6:'8',
	e7:'3',
	e8:'7',
	e9:'5',
	f1:'7',
	f2:'5',
	f3:'8',
	f4:'1',
	f5:'3',
	f6:'2',
	f7:'4',
	f8:'9',
	f9:'6',
	g1:'1',
	g2:'6',
	g3:'4',
	g4:'7',
	g5:'5',
	g6:'3',
	g7:'9',
	g8:'2',
	g9:'8',
	h1:'8',
	h2:'2',
	h3:'9',
	h4:'4',
	h5:'6',
	h6:'1',
	h7:'7',
	h8:'5',
	h9:'3',
	i1:'3',
	i2:'7',
	i3:'5',
	i4:'8',
	i5:'2',
	i6:'9',
	i7:'1',
	i8:'6',
	i9:'4'
};

problem3 = {
	a1:'6',
	a2:'',
	a3:'',
	a4:'1',
	a5:'',
	a6:'',
	a7:'',
	a8:'',
	a9:'5',
	b1:'4',
	b2:'',
	b3:'5',
	b4:'9',
	b5:'',
	b6:'3',
	b7:'',
	b8:'',
	b9:'',
	c1:'',
	c2:'7',
	c3:'3',
	c4:'',
	c5:'',
	c6:'',
	c7:'',
	c8:'1',
	c9:'',
	d1:'1',
	d2:'3',
	d3:'9',
	d4:'4',
	d5:'8',
	d6:'',
	d7:'5',
	d8:'',
	d9:'',
	e1:'',
	e2:'',
	e3:'',
	e4:'',
	e5:'',
	e6:'',
	e7:'',
	e8:'',
	e9:'',
	f1:'',
	f2:'',
	f3:'4',
	f4:'',
	f5:'1',
	f6:'7',
	f7:'6',
	f8:'9',
	f9:'3',
	g1:'',
	g2:'8',
	g3:'',
	g4:'',
	g5:'',
	g6:'',
	g7:'4',
	g8:'3',
	g9:'',
	h1:'',
	h2:'',
	h3:'',
	h4:'8',
	h5:'',
	h6:'4',
	h7:'7',
	h8:'',
	h9:'1',
	i1:'9',
	i2:'',
	i3:'',
	i4:'',
	i5:'',
	i6:'1',
	i7:'',
	i8:'',
	i9:'2'
};

solution3 = {
	a1:'6',
	a2:'9',
	a3:'8',
	a4:'1',
	a5:'4',
	a6:'2',
	a7:'3',
	a8:'7',
	a9:'5',
	b1:'4',
	b2:'1',
	b3:'5',
	b4:'9',
	b5:'7',
	b6:'3',
	b7:'2',
	b8:'8',
	b9:'6',
	c1:'2',
	c2:'7',
	c3:'3',
	c4:'6',
	c5:'5',
	c6:'8',
	c7:'9',
	c8:'1',
	c9:'4',
	d1:'1',
	d2:'3',
	d3:'9',
	d4:'4',
	d5:'8',
	d6:'6',
	d7:'5',
	d8:'2',
	d9:'7',
	e1:'5',
	e2:'6',
	e3:'7',
	e4:'3',
	e5:'2',
	e6:'9',
	e7:'1',
	e8:'4',
	e9:'8',
	f1:'8',
	f2:'2',
	f3:'4',
	f4:'5',
	f5:'1',
	f6:'7',
	f7:'6',
	f8:'9',
	f9:'3',
	g1:'7',
	g2:'8',
	g3:'1',
	g4:'2',
	g5:'6',
	g6:'5',
	g7:'4',
	g8:'3',
	g9:'9',
	h1:'3',
	h2:'5',
	h3:'2',
	h4:'8',
	h5:'9',
	h6:'4',
	h7:'7',
	h8:'6',
	h9:'1',
	i1:'9',
	i2:'4',
	i3:'6',
	i4:'7',
	i5:'3',
	i6:'1',
	i7:'8',
	i8:'5',
	i9:'2'
};

//
	//GLOBAL Variable. whenever a conflicting value is entered 
	//in the sudoku, the error object populates the cell attribute
	//with the other cell that it conflicts with
var mysudoku = {};
	errors = {
		a1:[],
		a2:[],
		a3:[],
		a4:[],
		a5:[],
		a6:[],
		a7:[],
		a8:[],
		a9:[],
		b1:[],
		b2:[],
		b3:[],
		b4:[],
		b5:[],
		b6:[],
		b7:[],
		b8:[],
		b9:[],
		c1:[],
		c2:[],
		c3:[],
		c4:[],
		c5:[],
		c6:[],
		c7:[],
		c8:[],
		c9:[],
		d1:[],
		d2:[],
		d3:[],
		d4:[],
		d5:[],
		d6:[],
		d7:[],
		d8:[],
		d9:[],
		e1:[],
		e2:[],
		e3:[],
		e4:[],
		e5:[],
		e6:[],
		e7:[],
		e8:[],
		e9:[],
		f1:[],
		f2:[],
		f3:[],
		f4:[],
		f5:[],
		f6:[],
		f7:[],
		f8:[],
		f9:[],
		g1:[],
		g2:[],
		g3:[],
		g4:[],
		g5:[],
		g6:[],
		g7:[],
		g8:[],
		g9:[],
		h1:[],
		h2:[],
		h3:[],
		h4:[],
		h5:[],
		h6:[],
		h7:[],
		h8:[],
		h9:[],
		i1:[],
		i2:[],
		i3:[],
		i4:[],
		i5:[],
		i6:[],
		i7:[],
		i8:[],
		i9:[]
	};
//
function onLoad(loadtype) {
	/*--------------------------------
		Below code runs on the loading/reloading of the webpage.
		as called by the buttons.
			[loadtype] is a string of different options:
				'create' is a new blank sudoku
				'next' is the next problem
				'current' is the same problem (default)
				'solution' is the current solution
	* ---------------------------------
	*/
	
	//problem is the id/value pair for the sudoku problem
	//solution is the partner solution
	//(See Excel sheet for easy creation/manipulation.)
	

	//*NOTE* mysudoku.problem is a GLOBAL VARIABLE. value key pairs are required in IE
	//mysudoku = {problem:problem1, solution:solution1};
	
	//some special jquery stuff called to handle input text
	$(document).ready(function(){
		//remove anything from validation if reset
		document.getElementById("validation").innerHTML = "";
		document.getElementById("problemnotes").innerHTML = "";
		
		//DEFAULT initial page load
		if (loadtype === undefined){
			loadNewList();
			loadProblem();
			setTextArea();
		}	
		//NEW PROBLEM
		else if (loadtype === 'next') {
			//loadXMLFile(loadtype);			
			sudokuXMLfileNo = sudokuXMLfileNo + 1
			if (sudokuXMLfileNo > 3){
				sudokuXMLfileNo = 1;
			}
			loadNewList();
			loadProblem();
			setTextArea();
		}
		//RESET PROBLEM
		else if (loadtype === 'current') {
			loadNewList();
			loadProblem();
			setTextArea();
		}
		//CREATE PROBLEM
		else if (loadtype === 'create'){
			sudokuXMLfileNo = 0;
			loadNewList();
			loadProblem();
			setTextArea();
		}
		//LOAD SOLUTION 
		else if (loadtype === 'solution') {
			//SOLUTION to existing problem
			if (sudokuXMLfileNo != 0){
				loadSolution();
			}
			//SOLUTION to created problem
			else {
				findSolution();
			}
		}
		
		//load keystroke listener.
		evalCellVal();
		
		// set button behaviour and visibility
		if (sudokuXMLfileNo > 0) {
			$("#evaluate").hide();
			$("#create").show();
		}
		else {
			$("#create").hide();
			$("#evaluate").show();
		}
		 
	});
	
	

 }
// 

function loadNewList(){
	// get the sudokuXMLfileNo to figure which problem to load.
	//mysudoku = {problem: $.extend( {},problem1),solution:$.extend( {},solution1)};
	
	if (sudokuXMLfileNo === 1){
		mysudoku.problem = $.extend( {}, problem1);
		mysudoku.solution = $.extend( {}, solution1);
	}
	else if (sudokuXMLfileNo === 2){
		mysudoku.problem = $.extend( {}, problem2);
		mysudoku.solution = $.extend( {}, solution2);
	}
	else if (sudokuXMLfileNo === 3){
		mysudoku.problem = $.extend( {}, problem3);
		mysudoku.solution = $.extend( {}, solution3);
	}
	else if (sudokuXMLfileNo === 0){
		mysudoku.problem = $.extend( {}, blankproblem);
		mysudoku.solution = $.extend( {}, blanksolution);
	}
	
	document.getElementById("problemID").innerHTML = "Problem #" + sudokuXMLfileNo; 
} 
function loadXMLFile(xmlfile){
	/*---------------------
		loadXMLFile is supposed to access external
		xml files to load different problem/solution 
		combinations. Based on IE security against 
		cross browser scripting, it is really difficult 
		to run this stuff locally in a file system. For that
		reason in this version of the javascript file this 
		does not run. 
		
		function called to load 
		an external xml file containing a sudoku
		problem and solution. the function is called
		by the onload function when a user requests
		a new file. It calls processXMLFile function.
	*--------------------------
	*/
	//need to test if browser is ie and use XDomainRequest instead for ie < 10.
	//see http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
	
	//this should work in ie 10+ (online) and works in firefox:
	var xhttp = new XMLHttpRequest(xmlfile);
	//set to run when the ready state of the server changes
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			//you can get the response text as a string or as xml
			processXMLFile(xhttp);
		}
	};
	// get request to server. true means ansyncronous but doesn't work. Left to syncronous for now even though not recommended.
	sudokuXMLfileNo = sudokuXMLfileNo + 1
	xhttp.open("GET", "xmlfiles/sudoku" + sudokuXMLfileNo + ".xml", false);
	xhttp.send();
	//if you've gone to last xml file, restart with preloaded javascript problem.
	if (xhttp.status === 404){
		sudokuXMLfileNo = 0;
		return;
	}
}
 
function loadProblem(){
	/*---------------------
		loadProblem is a function called to load 
		the problem object / associative
		array to the table containing a 
		sudoku problem on page load.
	*--------------------------
	
		Source notes: http://www.quirksmode.org/js/associative.html
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
	*/
	 

	var alltd = document.getElementsByTagName("td");
		
	for (var x in mysudoku.problem){
		//alert("mysudoku.problem." + x + " = " + mysudoku.problem[x]);
		for (var i=0; i < alltd.length; i++){
			var mycell = alltd[i];
			if (x != ''){
				if (mycell.parentElement.parentElement.parentElement.className === "subTable") {
					if (mycell.id === x){
						mycell.innerHTML = mysudoku.problem[x];
						//alert("placing innerHTML" + mysudoku.problem[x]);
						break;
					}
				}
			}
		}
	}
	return;
}
//
function updateProblem(mycellid, mygrpid){
	/*---------------------
		updateProblem is a function called to update 
		the problem object / associative
		array on a change to one of the sudoku table
		cells.
	*--------------------------
	
		Source notes: http://www.quirksmode.org/js/associative.html
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
	*/
	mytextarea = document.getElementById(mycellid).childNodes[0];
	mysudoku.problem[mycellid] = mytextarea.value;
	
	validateProblem(mycellid, mygrpid, mytextarea);
	
	return;
}
//
function loadSolution(){
	/*---------------------
		loadSolution is a function called to show 
		the completed sudoku problem with the solution
		object / associative array on the solution button
		click event.
	*--------------------------
	*/

	
	var alltd = document.getElementsByTagName("td");
	for (var x in mysudoku.solution){
		//alert("mysudoku.solution." + x + " = " + mysudoku.solution[x]);
		for (var i=0; i < alltd.length; i++){
			var mycell = alltd[i];
			
			if (mycell.id === x){
				mycell.innerHTML = mysudoku.solution[x];
				//alert("placing innerHTML" + mysudoku.solution[x]);
				break;
			}
		}
	}
	return;
}
	
function setTextArea(){
  /*---------------------
		setTextArea is a function called to load 
		the textarea html element into each of the
		table cells that need to be populated
		by the user. Called on page load.
	*--------------------------
	*/
	var alltd = document.getElementsByTagName("td");
	
	for (var i=0; i < alltd.length; i++){
		var mcell = alltd[i];
		//remove highlighted cells if this was part of a page reload.
		mcell.removeAttribute("style");
		if (mcell.parentElement.parentElement.parentElement.className === "subTable") {
			if (mcell.innerHTML === ''){
				var node = document.createElement("textarea"); 
				node.setAttribute("maxlength","1");
				
				var subtableid = mcell.parentElement.parentElement.parentElement.id;
				
				mcell.appendChild(node);
				
				//a function added to the element
				var updateProblemArgs = "updateProblem('" + mcell.id +  "'," + subtableid + ")";
				node.setAttribute("onchange", updateProblemArgs);				
			}
		}
	}	
	return;
}

//
function evalCellVal(){
	/*---------------------
		evalCellVal is a function called to check 
		keystrokes entered in the sudoko cells.
		non-numeric and non-command (backspace, tab, etc) 
		keystrokes are prevented.
		NOTE: this function relies on jquery library and uses
		at present, a deprecated property .charCode. 
		It is used for simplicity of code (there's no good replacement yet).
		see here for details: 
		https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/charCode#Notes
		jquery gets around the non-standardized ways browsers check keystrokes
	*--------------------------
	*/
	$("textarea").keypress(function(event) {
	
		//prevent enter key from doing anything. Ignore it. (Otherwise it messes up table layout.)
		if (event.key === "Enter") {
			event.preventDefault();
		}
		//if key matches 1-9, accept value.
		else if (event.key.match(/[1-9]/)){
			return;
		}
		//if key is a command key, accept command.
		else if (event.charCode === 0){
			$("textarea").value = '';
			return;
		}
		//otherwise, ignore all keystrokes.
		else {
			event.preventDefault();
			}
		return;
	});
	return;
}

//
function validateProblem(mycellid, mygrpid, mytextarea){
	/*---------------------
		validateProblem is a function called to check 
		numbers entered in the sudoko cells.
		This is where most of the logic is.
		it checks if the number is a duplicate (row/column/box)
		and if so, calls a function to highlight the cell.
	*--------------------------
	*/
	var myletter = mycellid.substring(0,1);
	var mynum = mycellid.substring(1,2);
	
	
	//remove conflicts to changed cell
	errors[mycellid] = [];
	//remove existing conflicts from the neighbor cells on the old value
	for (var z in errors){
		
		var otherletter = z.substring(0,1);
		var othernum = z.substring(1,2);
		var othergrpid = document.getElementById(z).parentElement.parentElement.parentElement.id;
		
		//alert(errors[z].toString());
		if (otherletter === myletter || othernum === mynum || othergrpid === mygrpid || [z].length > 0 || mytextarea.value.toString() === ''){
			if (errors[z].indexOf(mycellid) != -1){
				errors[z].splice(errors[z].indexOf(mycellid), 1);
				//alert("removing value " + mycellid + " from cell: " + z);
			}
		}
	}
	
	// if the new value is not blank, check for new conflicts
	if (mytextarea.value != ''){
		//alert("the value is null. removing highlight if exists.");
		
		for (var x in mysudoku.problem){
			//loop through all cells and check if they are a match.
			
			var otherletter = x.substring(0,1);
			var othernum = x.substring(1,2);
			var othergrpid = document.getElementById(x).parentElement.parentElement.parentElement.id;
			if (x === mycellid){
				//avoid comparing the cell to itself.
				continue; 	
			}
			

			if (mysudoku.problem[x] === mytextarea.value){
				if (otherletter === myletter || othernum === mynum || othergrpid === mygrpid.toString()){
					//if another cell has same value, add the partner conflict to your cell and other cell
					errors[x].push(mycellid);
					errors[mycellid].push(x);
					//alert("adding a value to errors " + x + " is getting " + mycellid + " added");
				}
				
			}
		}
	}
	//finally loop through ALL cells and add/remove highlighting as necessary
	highlightCells();
	
	return;
}
//	
function highlightCells(){
	/*---------------------
		highlightCells is a little function called to  
		highlight or unhighlight cells as needed.
		It just loops through all cells and highlights
		ones with an error in them.
	*--------------------------
	*/
	for (z in errors){
		
		if (errors[z].length > 0){
			//alert("the length of " + z + " is " + errors[z].length);
			document.getElementById(z).style.backgroundColor = "#ff6666";
		}
		else {
			if (document.getElementById(z).hasAttribute("style")){
				document.getElementById(z).removeAttribute("style");
			}
		}
	}
	return;
}
//
function toggleButtons(){
	/*---------------------
		toggleButtons is a little function called to  
		show and hide different buttons based on creating
		or solving a sudoku. 
	*--------------------------
	*/
	//document.getElementById("create").setAttribute("disabled","true");
	
}


function evaluateProblem(){
 /*---------------------
		evaluateProblem is called by  
		the evaluate button to check if the problem that 
		the user created is valid. If it is, it will save
		the entered cells into the blankproblem object, causing a reset to 
		revert it to this status. 
	*--------------------------
	*/
	//alert("evaluateProblem called");
	var count = 0;
	var mystring = "";
	for (i in mysudoku.problem){
		if (mysudoku.problem[i] != ""){
			count = count + 1
			mystring = mystring + mysudoku.problem[i]
		}
		else {
			mystring = mystring + ".";
		}
	}
	if (count < 15){
		alert("You need at least 15 cells filled to solve the problem");
		return;
	}
	
	//alert(mystring);
	var time_beg = new Date().getTime();
	
	var solver = sudoku_solver();
	var x = solver(mystring);
	//document.getElementById("problemnotes").innerHTML = x[0]; //this should be the solution
	//alert(typeof(x));
	//alert(x[0].join('') + "\n");
	
	var time_end = new Date().getTime();
	var time = (time_end - time_beg)/1000.0;
	document.getElementById("problemnotes").innerHTML += "<br />" + time;
	if (x.length === 0) {
		document.getElementById("problemnotes").innerHTML += "<br />This problem has no Solution";
		document.getElementById("validation").innerHTML = "<img src='images/x.png' style='width:24px' alt='error'/>"
		return "error";
	}
	else {
		if (x.length === 1){
			document.getElementById("problemnotes").innerHTML += "<br />Unique Solution";
			document.getElementById("validation").innerHTML = "<img src='images/check.png' style='width:24px' alt='check'/>"
			
			var i = 0;
			for (c in mysudoku.solution){
				mysudoku.solution[c] = x[0][i];
				i++
			}
			//new
			blankproblem = $.extend( {}, mysudoku.problem);
			return "check";
				
		}
		else {
			document.getElementById("problemnotes").innerHTML += "<br />Multiple Solutions";
			document.getElementById("validation").innerHTML = "<img src='images/warning.jpg' style='width:24px' alt='warning'/>"
			return "warning";
		}
	}
	
	
	//solve(mystring);
	
}
 
		
		
function findSolution(){
	myevaluateResponse = evaluateProblem();
	if (myevaluateResponse === ""){
		return;
	}
	else if (myevaluateResponse === "warning"){
		alert("Cannot solve. There are multiple solutions");
		return;
	}
	else {
		loadSolution();
	}
}