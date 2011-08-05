var L = localStorage;

IconType = {
	GREEN : 42, FIRST : 42,
	RGY: 43,
	RGY_1: 44,
	RED: 45, LAST : 45
}

if ( L.oneup_use_sounds == undefined )
	L.oneup_use_sounds = true;

if ( L.oneup_use_classic == undefined )
	L.oneup_use_classic = false;

if ( L.oneup_address_bar_icon == undefined )
	L.oneup_address_bar_icon = true;

if ( L.oneup_icon_type == undefined )
	L.oneup_icon_type = IconType.GREEN;

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

function get_oneup_icon_type()
	{ return JSON.parse(L.oneup_icon_type); }

function bckgrnd_get_oneup_icon_type(cb)
	{ chrome.extension.sendRequest({m:'get_oneup_icon_type'}, cb); }

function register_for_change_icon_type(cb) {
	chrome.extension.sendRequest(
		{m:'register_for_change_icon_type'}, cb
	);
}

function change_icon_type(icon_type) {

	if ( icon_type < IconType.FIRST || icon_type > IconType.LAST ) {
		console.log("error: invalid icon type");
		return;
	}

	set_icon_type(icon_type);

	chrome.extension.sendRequest(
		{m:'do_change_icon_type', d:icon_type}, 
		function(){}
	);
}

function set_icon_type(icon_type) {
	L.oneup_icon_type = icon_type;
}


function toggle_oneup_use_sounds()
	{ L.oneup_use_sounds = ! get_oneup_use_sounds(); }

function toggle_oneup_use_classic()
	{ L.oneup_use_classic = ! get_oneup_use_classic(); }

function toggle_oneup_address_bar_icon()
	{ L.oneup_address_bar_icon = ! get_oneup_address_bar_icon(); }


console.log("Option oneup_use_sounds:", get_oneup_use_sounds());
console.log("Option oneup_use_classic:", get_oneup_use_classic());
console.log("Option oneup_address_bar_icon:", get_oneup_address_bar_icon());
console.log("Option oneup_icon_type:", get_oneup_icon_type());
