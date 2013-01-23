chrome.extension.onMessage.addListener(

	function(request, sender, sendResponse)
	{
		response = {};
		msg = request.m;

		console.log('[Birthday86er] Got message:', request);
		console.log(sender);

		if ( msg == 'enable_page_action' ) {

				chrome.pageAction.show(sender.tab.id)
		}

		else {

			console.log("[Birthday86er] Unknown message: ", msg);
			response = undefined;
		}

		console.log('[Birthday86er] Sending response:', response);
		sendResponse(response);
	}

);

// vim: ts=2:sw=2:ai:
