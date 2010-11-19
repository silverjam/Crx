function simclk(id) 
{
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  var cb = document.getElementById(id); 
  var canceled = !cb.dispatchEvent(evt);
  if(canceled) {
    console.log("preventDefault for click event on #" + id);
  } 
}

function $x(aNode, aExpr)
{
  var xpe = new XPathEvaluator();
  var nsResolver = xpe.createNSResolver(aNode.ownerDocument == null ?
    aNode.documentElement : aNode.ownerDocument.documentElement);
  var result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
  var found = [];
  var res;
  while (res = result.iterateNext())
    found.push(res);
  return found;
}

var g_extract_top_fans_html = $(
" <span style='font-size:12px'>" +
	" [<a id='extract_top_fans' href='#'>Extract</a>]" +
"</span>");

var g_extract_new_listeners_html = $(
" <span style='font-size:12px'>" +
	" [<a id='extract_new_listeners' href='#'>Extract</a>]" +
"</span>");

var g_dialog_html = $(
	"<div "+
		"style='width: 100px' "+
		"id='results_dialog' " +
		"title='Results' " + 
	">" +
		"<p style='font-size: small'>(Press Ctrl+C to copy)</p>" +
		"<form>" +
			"<textarea " +
				"id='results' " +
				"style='width: 100%; height: 100%' " +
			"/>" +
		"</form>" + 
	"</div>"
);

function extract_and_display(propers)
{
	var users = "";

	$(propers).each(function() {

		var title = $(this).attr("title");

		var visit = "Visit ";
		var stationIdx = title.indexOf("'s station");

		if ( stationIdx < 0 )
			return;

		users += "@" + title.substring(visit.length, stationIdx) + " ";
	});

	users = users.substring(0, users.length - 1);

	var results = g_dialog_html.find("#results");
	results.val(users);

	var cols = results.attr("cols");
	var rows = users.length / cols;

	results.attr("rows", rows + 1);

	g_dialog_html.dialog({resizable: false});
	g_dialog_html.find("#results").focus().select();
}

function extract_top_fans()
{
	var propers = $x(get_email_doc(), 

		"//tr/td[        contains(text(), 'props')" +
				   " and not(contains(text(), 'You got'))]" +
			"/..//a");

	extract_and_display(propers);
}

function extract_new_listeners()
{
	var listeners = $x(get_email_doc(), 

		"//tr/td/a[        contains(text(), 'recently blipped')" +
				     " and not(contains(text(), 'You got'))] " +
			"/..//a");

	extract_and_display(listeners);
}

function get_email_doc() 
{
	return document.getElementById("canvas_frame").contentDocument;
}

function $e() 
{
	var node = $("#canvas_frame");
	if ( node == null ) return [];

	var contents = node.contents();
	if ( contents == null ) return [];

	return contents.find.apply(contents, arguments);
}

function rescan_descriptor(check, success, failure, max)
{
	return { 
		check_fn: check,
		success_fn: success,
		failure_fn: failure,
		context: null,
		total_time: 0,
		max_time: max,
	};
}

function schedule_rescan(desc)
{
	if ( desc.total_time > desc.max_time )
		return;

	var timeout = (Math.random() * 1000 + 500) % 1500;
	desc.total_time += timeout;

	window.setTimeout(
		function() { scan(desc); },
		timeout
	);
}

function scan(desc)
{
	if ( desc.check_fn(desc) ) {
		desc.success_fn(desc);
	} else {
		desc.failure_fn(desc);
	}

	schedule_rescan(desc);
}

var g_top_fans_test = "h2:contains('Top Fans')";

function is_blip_email_loaded(desc)
{
	if ( desc.context != null )
	{
		var found = desc.context.email_node.find(g_top_fans_test);
		return found.length != 0;
	}

	var found = $e(g_top_fans_test);

	if ( found.length != 0 )
	{
		desc.context = {
			email_node: $(get_email_doc()),
			attached: false
		};

		return true;	
	}

	return false;
}

function on_blip_email_unloaded(desc)
{
	if ( desc.context == null )
		return;

	chrome.extension.sendRequest({m:'disable'}, function(x) {});
	desc.context = null;
}

function on_blip_email_loaded(desc)
{
	if ( desc.context.attached )
		return;

	chrome.extension.sendRequest({m:'enable'}, function(x) {});

	desc
		.context
		.email_node
		.find(g_top_fans_test)
		.append(g_extract_top_fans_html)
		.find("#extract_top_fans")
		.click(extract_top_fans);

	desc
		.context
		.email_node
		.find("h2:contains('New Listeners')")
		.append(g_extract_new_listeners_html)
		.find("#extract_new_listeners")
		.click(extract_new_listeners);

	desc.attached = true;
}

function check_reblip_and_handle()
{
	chrome.extension.sendRequest(
		{m:'is_reblip'}, 
		function(is_reblip) { 
			console.log('is_reblip: ' + is_reblip);
			if (is_reblip) { 
				console.log($("#blips > .actionsmenu > .clickable").click());
			}
		}
	);
}

function insert_reblip_link(node)
{
	$(node).find(".date").each(function(){

		console.log(node);

		var rbid = $($x(this, "../../.."));
		console.log(rbid);

		rbid = rbid.attr('id').split("tweem")[1];

		var a_node = $(this).find("a[href*='blip.fm']:first");
		var reblip = a_node.clone();

		reblip.text(' [+RB] ');
		reblip.attr('href', "http://blip.fm/home?reblipId=" + rbid);
		reblip.attr('target', "_blank");

/*
		reblip.click(function(){
		
			console.log('sending open_reblip');

			chrome.extension.sendRequest(
				{m:'open_reblip', d:href}, 
				function(x) {});

			return false;
		});
*/

		a_node.after(reblip);
	});
}

if ( get_reblip_in_new_window() )
{
	$(document).bind('DOMNodeInserted', function(evt){
		insert_reblip_link(evt.target);
	});
}

function main()
{
	var descriptor = 
		rescan_descriptor(
			is_blip_email_loaded,
			on_blip_email_loaded,
			on_blip_email_unloaded,
			NaN);

	scan(descriptor);
	insert_reblip_link(document);

	check_reblip_and_handle();
}

main()

// vim: ts=4:sw=4:
