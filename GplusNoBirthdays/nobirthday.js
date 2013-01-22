// oneup.js

var g_count = 100;

function nobirthday()
{
	var el = document.getElementById("ntf");
	if ( el != null )
	{
		el.hidden = true;
		//alert("[Birthday86er] Removed birthday notification");
		console.log("[Birthday86er] Removed birthday notification");

		return;
	}

	if ( g_count <= 0 )
	{
		console.log("[Birthday86er] Nothing found after a period of time, exiting");
		return;
	}

	g_count--;
	window.setTimeout(nobirthday, 50);
}

console.log("[Birthday86er] Birthday 86er for Google+ loading...");

nobirthday()

// vim: ts=4:sw=4:
