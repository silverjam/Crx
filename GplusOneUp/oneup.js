// oneup.js

function sounds_cb()
{
	var oneuped = ! $(this).is(".eswa, .Dxqpoe");

	bckgrnd_get_oneup_use_sounds(
	function(oneup_use_sounds) {

	if ( ! oneup_use_sounds )
		return;	

	if ( oneuped )
		return;

	var theId = null;

	bckgrnd_get_oneup_use_classic(
	function(oneup_use_classic) {

	var snd = null;

	if ( oneup_use_classic )
		theId = "oneup_sound_dig";
	else
		theId = "oneup_sound_anlg";

	$.each(
		["", "2", "3"],

		function(idx, val) {

			var curId = theId + val;
			snd = document.getElementById(curId);

			if ( ! snd._oneup_isplaying )
				return false;
		}
	);

	//console.log("[ONEUP] Playing: " + snd.id);

	snd._oneup_isplaying = true;
	snd.play();

	snd.volume = .6;

	//console.log("[ONEUP] 1-up!");

	}); // bckgrnd_get_oneup_use_classic

	}); // bckgrnd_get_oneup_use_sounds
}

function add_style(style_id, style_text) {

	$("#" + style_id).remove();

	$("head").append(
		"<style id='"+style_id+"'>"
			+ style_text +
		"</style>"
	);
}

function do_change_icon_type_fn(icon_type) {

	if ( icon_type == IconType.GREEN ) 
		add_style("rgy_style", '')

	else if ( icon_type == IconType.RGY ) 
		add_style("rgy_style", g_icon_15rgy)

	else if ( icon_type == IconType.RGY_1 ) 
		add_style("rgy_style", g_icon_15rgy1)

	else if ( icon_type == IconType.RED ) 
		add_style("rgy_style", g_icon_15red)

	register_for_change_icon_type(do_change_icon_type_fn);
}


function main()
{
	console.log("1-Up for Google+ extension loading...");

	$("body").append(g_oneup_sounds);

	$(document).on('click', '.esw', sounds_cb);

	// Funny things will happen if a mouse down happens over the button, but
	// the mouse up elsewhere.  Something in the DOM stops the 'click' even for
	// this button (probably something in the image view).  Would need to bind
	// to a DOM element before the event bubbling is stopped to catch the
	// 'click' event.
	$(document).on('mousedown', '.upBjpf', sounds_cb);

	var notisplaying = function() { 
		//console.log("notisplaying: " + this.id);
		this._oneup_isplaying = false; }

	$.each(

		["#oneup_sound_anlg", "#oneup_sound_anlg2", "#oneup_sound_anlg3",
			"#oneup_sound_dig", "#oneup_sound_dig2", "#oneup_sound_dig3"],

		function(idx, val) {
			$(val).bind('ended', notisplaying)
			$(val)[0]._oneup_isplaying = false;
		}

	);

	bckgrnd_get_oneup_icon_type(do_change_icon_type_fn);
}


main()

// vim: ts=4:sw=4:
