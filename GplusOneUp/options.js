// File: options.js

var L = localStorage;

if ( L.oneup_use_sounds == undefined )
	L.oneup_use_sounds = true;

if ( L.oneup_use_classic == undefined )
	L.oneup_use_classic = false;



function get_oneup_use_sounds()
	{ return JSON.parse(L.oneup_use_sounds); }

function get_oneup_use_classic()
	{ return JSON.parse(L.oneup_use_classic); }



function toggle_oneup_use_sounds()
	{ L.oneup_use_sounds = ! get_oneup_use_sounds(); }

function toggle_oneup_use_classic()
	{ L.oneup_use_classic = ! get_oneup_use_classic(); }



console.log("Option oneup_use_sounds:", get_oneup_use_sounds());
console.log("Option oneup_use_classic:", get_oneup_use_classic());
