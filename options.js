var L = localStorage;

if ( L.reblip_in_new_window == undefined )
	L.reblip_in_new_window = true;

function get_reblip_in_new_window()
	{ return JSON.parse(L.reblip_in_new_window); }

function toggle_reblip_in_new_window()
	{ L.reblip_in_new_window = ! get_reblip_in_new_window(); }

console.log("Option reblip_in_new_window:", get_reblip_in_new_window());
