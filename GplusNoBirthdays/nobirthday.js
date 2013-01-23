// oneup.js

var g_count = 100;
var g_element_id = "ntf";

function nobirthday()
{
	var el = document.getElementById(g_element_id);
	if ( el != null )
	{
		el.hidden = true;

		console.log("[Birthday86er] Removed birthday notification");
		chrome.extension.sendMessage({m:'enable_page_action'}, function(r){});

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
