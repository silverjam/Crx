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

	document.getElementById(theId).play();

	console.log("1-up!");

	}); // bckgrnd_get_oneup_use_classic

	}); // bckgrnd_get_oneup_use_sounds
}

function main()
{
	console.log("oneup starts...");

	$("body").append(g_oneup_sounds);
	$(".esw").live('click', sounds_cb);
}


main()

// vim: ts=4:sw=4:
