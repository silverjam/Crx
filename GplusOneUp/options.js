// File: options.js

var L = localStorage;

if ( L.oneup_use_sounds == undefined )
	L.oneup_use_sounds = true;

if ( L.oneup_use_classic == undefined )
	L.oneup_use_classic = false;

if ( L.oneup_address_bar_icon == undefined )
	L.oneup_address_bar_icon = true;


function get_oneup_use_sounds()
	{ return JSON.parse(L.oneup_use_sounds); }

function bckgrnd_get_oneup_use_sounds(cb)
	{ chrome.extension.sendRequest({m:'get_oneup_use_sounds'}, cb); }

function get_oneup_use_classic()
	{ return JSON.parse(L.oneup_use_classic); }

function bckgrnd_get_oneup_use_classic(cb)
	{ chrome.extension.sendRequest({m:'get_oneup_use_classic'}, cb); }

function get_oneup_address_bar_icon()
	{ return JSON.parse(L.oneup_address_bar_icon); }


function toggle_oneup_use_sounds()
	{ L.oneup_use_sounds = ! get_oneup_use_sounds(); }

function toggle_oneup_use_classic()
	{ L.oneup_use_classic = ! get_oneup_use_classic(); }

function toggle_oneup_address_bar_icon()
	{ L.oneup_address_bar_icon = ! get_oneup_address_bar_icon(); }


console.log("Option oneup_use_sounds:", get_oneup_use_sounds());
console.log("Option oneup_use_classic:", get_oneup_use_classic());
console.log("Option oneup_address_bar_icon:", get_oneup_address_bar_icon());
