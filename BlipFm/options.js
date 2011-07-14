// File: options.js

var L = localStorage;


if ( L.reblip_in_new_window == undefined )
	L.reblip_in_new_window = true;

if ( L.reblip_in_new_window_background == undefined )
	L.reblip_in_new_window_background = true;

if ( L.reblip_default == undefined )
	L.reblip_default = true;


function get_reblip_in_new_window()
	{ return JSON.parse(L.reblip_in_new_window); }

function get_reblip_in_new_window_background()
	{ return JSON.parse(L.reblip_in_new_window_background); }

function get_reblip_default()
	{ return JSON.parse(L.reblip_default); }


function toggle_reblip_in_new_window()
	{ L.reblip_in_new_window = ! get_reblip_in_new_window(); }

function toggle_reblip_in_new_window_background()
	{ L.reblip_in_new_window_background = ! get_reblip_in_new_window_background(); }

function toggle_reblip_default()
	{ L.reblip_default = ! get_reblip_default(); }


console.log("Option reblip_in_new_window:", get_reblip_in_new_window());
console.log("Option reblip_in_new_window_background:", get_reblip_in_new_window_background());
console.log("Option reblip_default:", get_reblip_default());
