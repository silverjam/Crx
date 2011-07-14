// oneup.js

function sounds_cb()
{
	if ( ! get_oneup_use_sounds() )
		return;	

	var theId = null;

	if ( get_oneup_use_classic() )
		theId = "oneup_sound_anlg";
	else
		theId = "oneup_sound_dig";

	document.getElementById(theId).play();

	console.log("1-up!");
}

function main()
{
	console.log("oneup starts...");

	$("body").append(g_oneup_sounds);
	$(".esw").click(sounds_cb);
}


main()

// vim: ts=4:sw=4:
