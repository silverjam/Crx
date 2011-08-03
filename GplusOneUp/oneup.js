// oneup.js

function sounds_cb()
{
	var oneuped = ! $(this).is(".eswa");

	bckgrnd_get_oneup_use_sounds(
	function(oneup_use_sounds) {

	if ( ! oneup_use_sounds )
		return;	

	if ( oneuped )
		return;

	var theId = null;

	bckgrnd_get_oneup_use_classic(
	function(oneup_use_classic) {

	if ( oneup_use_classic )
		theId = "oneup_sound_dig";
	else
		theId = "oneup_sound_anlg";

	var snd = document.getElementById(theId);

	snd.play();
	snd.volume = .6;

	console.log("1-up!");

	}); // bckgrnd_get_oneup_use_classic

	}); // bckgrnd_get_oneup_use_sounds
}

function main()
{
	console.log("oneup starts...");

	$("body").append(g_oneup_sounds);
	$(".esw").live('click', sounds_cb);

	$(".eswa").addClass("oneup_rgy_inv");

	$(".eswd").addClass("oneup_rgy");

	$(".eswd").hover(
		function() { $(this).addClass("oneup_rgy"); },
		function() { $(this).addClass("oneup_rgy"); }
	);
}


main()

// vim: ts=4:sw=4:
