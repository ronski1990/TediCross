"use strict";

/**************************
 * Import important stuff *
 **************************/

const R = require("ramda");

/*************************
 * The getWebhook method *
 *************************/

async function getWebhook(channel) {
	// Get the webhooks on the channel
	const webhooks = await channel.fetchWebhooks();

	// Find TediCross' webhook
	let webhook = webhooks.find("name", "TediCross");
	if (R.isNil(webhook)) {
		// Create the webhook
		webhook = await channel.createWebhook("TediCross", null, "Sending nice looking messages from Telegram to Discord");
	}

	return webhook;
}

/*************
 * Export it *
 *************/

module.exports = getWebhook;
