'use strict';

function characters(num) {
	var oldTxt;
	oldTxt = document.getElementById('wish').value;
	var newTxt;
	newTxt = oldTxt + document.getElementsByTagName("BUTTON")[num].textContent;
	document.getElementById('wish').value = newTxt;
	shift = false;
	keyboard();
}

function del() {
	var oldTxt;
	oldTxt = document.getElementById('wish').value;
	var newTxt;
	newTxt = oldTxt.substr(0, oldTxt.length - 1);
	document.getElementById('wish').value = newTxt;
}

function tab() {
	var oldTxt;
	oldTxt = document.getElementById('wish').value;
	var newTxt;
	newTxt = oldTxt + "       ";
	document.getElementById('wish').value = newTxt;
}

function space() {
	var oldTxt;
	oldTxt = document.getElementById('wish').value;
	var newTxt;
	newTxt = oldTxt + " ";
	document.getElementById('wish').value = newTxt;
}

function clears() {
	document.getElementById('wish').value = "";
}

function enter() {
	var oldTxt;
	oldTxt = document.getElementById('wish').value;
	var newTxt;
	newTxt = oldTxt + "\n";
	document.getElementById('wish').value = newTxt;
}

var capslock = false;

var shift = false;

function capslocks() {
	if (window.capslock) {
		window.capslock = false;
		document.getElementsByTagName("BUTTON")[28].textContent = "Caps Lock ☐";
	} else {
		window.capslock = true;
		document.getElementsByTagName("BUTTON")[28].textContent = "Caps Lock ☑";
	}
	keyboard();
}

function shifts() {
	if (window.shift) {
		window.shift = false;
	} else {
		window.shift = true;
	}
	keyboard();
}

function keyboard() {
	var char;
	if (window.shift == true && window.capslock == false) {
		char = true;
	} else if (window.shift == true && window.capslock == true) {
		char = false;
	} else if (window.shift == false && window.capslock == true) {
		char = true;
	} else if (window.shift == false && window.capslock == false) {
		char = false;
	}

	if (char == true) {
		document.getElementsByTagName("BUTTON")[0].textContent = '~';
		document.getElementsByTagName("BUTTON")[1].textContent = '!';
		document.getElementsByTagName("BUTTON")[2].textContent = '@';
		document.getElementsByTagName("BUTTON")[3].textContent = '#';
		document.getElementsByTagName("BUTTON")[4].textContent = '$';
		document.getElementsByTagName("BUTTON")[5].textContent = '%';
		document.getElementsByTagName("BUTTON")[6].textContent = '^';
		document.getElementsByTagName("BUTTON")[7].textContent = '&';
		document.getElementsByTagName("BUTTON")[8].textContent = '*';
		document.getElementsByTagName("BUTTON")[9].textContent = '(';
		document.getElementsByTagName("BUTTON")[10].textContent = ')';
		document.getElementsByTagName("BUTTON")[11].textContent = '_';
		document.getElementsByTagName("BUTTON")[12].textContent = '+';
		document.getElementsByTagName("BUTTON")[15].textContent = 'Q';
		document.getElementsByTagName("BUTTON")[16].textContent = 'W';
		document.getElementsByTagName("BUTTON")[17].textContent = 'E';
		document.getElementsByTagName("BUTTON")[18].textContent = 'R';
		document.getElementsByTagName("BUTTON")[19].textContent = 'T';
		document.getElementsByTagName("BUTTON")[20].textContent = 'Y';
		document.getElementsByTagName("BUTTON")[21].textContent = 'U';
		document.getElementsByTagName("BUTTON")[22].textContent = 'I';
		document.getElementsByTagName("BUTTON")[23].textContent = 'O';
		document.getElementsByTagName("BUTTON")[24].textContent = 'P';
		document.getElementsByTagName("BUTTON")[25].textContent = '{';
		document.getElementsByTagName("BUTTON")[26].textContent = '}';
		document.getElementsByTagName("BUTTON")[27].textContent = '|';
		document.getElementsByTagName("BUTTON")[29].textContent = 'A';
		document.getElementsByTagName("BUTTON")[30].textContent = 'S';
		document.getElementsByTagName("BUTTON")[31].textContent = 'D';
		document.getElementsByTagName("BUTTON")[32].textContent = 'F';
		document.getElementsByTagName("BUTTON")[33].textContent = 'G';
		document.getElementsByTagName("BUTTON")[34].textContent = 'H';
		document.getElementsByTagName("BUTTON")[35].textContent = 'J';
		document.getElementsByTagName("BUTTON")[36].textContent = 'K';
		document.getElementsByTagName("BUTTON")[37].textContent = 'L';
		document.getElementsByTagName("BUTTON")[38].textContent = ':';
		document.getElementsByTagName("BUTTON")[39].textContent = '"';
		document.getElementsByTagName("BUTTON")[42].textContent = 'Z';
		document.getElementsByTagName("BUTTON")[43].textContent = 'X';
		document.getElementsByTagName("BUTTON")[44].textContent = 'C';
		document.getElementsByTagName("BUTTON")[45].textContent = 'V';
		document.getElementsByTagName("BUTTON")[46].textContent = 'B';
		document.getElementsByTagName("BUTTON")[47].textContent = 'N';
		document.getElementsByTagName("BUTTON")[48].textContent = 'M';
		document.getElementsByTagName("BUTTON")[49].textContent = '<';
		document.getElementsByTagName("BUTTON")[50].textContent = '>';
		document.getElementsByTagName("BUTTON")[51].textContent = '?';
	} else if (char == false) {
		document.getElementsByTagName("BUTTON")[0].textContent = '`';
		document.getElementsByTagName("BUTTON")[1].textContent = '1';
		document.getElementsByTagName("BUTTON")[2].textContent = '2';
		document.getElementsByTagName("BUTTON")[3].textContent = '3';
		document.getElementsByTagName("BUTTON")[4].textContent = '4';
		document.getElementsByTagName("BUTTON")[5].textContent = '5';
		document.getElementsByTagName("BUTTON")[6].textContent = '6';
		document.getElementsByTagName("BUTTON")[7].textContent = '7';
		document.getElementsByTagName("BUTTON")[8].textContent = '8';
		document.getElementsByTagName("BUTTON")[9].textContent = '9';
		document.getElementsByTagName("BUTTON")[10].textContent = '0';
		document.getElementsByTagName("BUTTON")[11].textContent = '-';
		document.getElementsByTagName("BUTTON")[12].textContent = '=';
		document.getElementsByTagName("BUTTON")[15].textContent = 'q';
		document.getElementsByTagName("BUTTON")[16].textContent = 'w';
		document.getElementsByTagName("BUTTON")[17].textContent = 'e';
		document.getElementsByTagName("BUTTON")[18].textContent = 'r';
		document.getElementsByTagName("BUTTON")[19].textContent = 't';
		document.getElementsByTagName("BUTTON")[20].textContent = 'y';
		document.getElementsByTagName("BUTTON")[21].textContent = 'u';
		document.getElementsByTagName("BUTTON")[22].textContent = 'i';
		document.getElementsByTagName("BUTTON")[23].textContent = 'o';
		document.getElementsByTagName("BUTTON")[24].textContent = 'p';
		document.getElementsByTagName("BUTTON")[25].textContent = '[';
		document.getElementsByTagName("BUTTON")[26].textContent = ']';
		document.getElementsByTagName("BUTTON")[27].textContent = '\\';
		document.getElementsByTagName("BUTTON")[29].textContent = 'a';
		document.getElementsByTagName("BUTTON")[30].textContent = 's';
		document.getElementsByTagName("BUTTON")[31].textContent = 'd';
		document.getElementsByTagName("BUTTON")[32].textContent = 'f';
		document.getElementsByTagName("BUTTON")[33].textContent = 'g';
		document.getElementsByTagName("BUTTON")[34].textContent = 'h';
		document.getElementsByTagName("BUTTON")[35].textContent = 'j';
		document.getElementsByTagName("BUTTON")[36].textContent = 'k';
		document.getElementsByTagName("BUTTON")[37].textContent = 'l';
		document.getElementsByTagName("BUTTON")[38].textContent = ';';
		document.getElementsByTagName("BUTTON")[39].textContent = '\'';
		document.getElementsByTagName("BUTTON")[42].textContent = 'z';
		document.getElementsByTagName("BUTTON")[43].textContent = 'x';
		document.getElementsByTagName("BUTTON")[44].textContent = 'c';
		document.getElementsByTagName("BUTTON")[45].textContent = 'v';
		document.getElementsByTagName("BUTTON")[46].textContent = 'b';
		document.getElementsByTagName("BUTTON")[47].textContent = 'n';
		document.getElementsByTagName("BUTTON")[48].textContent = 'm';
		document.getElementsByTagName("BUTTON")[49].textContent = ',';
		document.getElementsByTagName("BUTTON")[50].textContent = '.';
		document.getElementsByTagName("BUTTON")[51].textContent = '/';
	}
}
