var mbv = require("mailboxvalidator-nodejs");
const myArgs = process.argv.slice(2);
require('dotenv').config()
const API_TOKEN = process.env.Email_API_Token

mbv.MailboxValidator_init(API_TOKEN);

mbv.MailboxValidator_single_query(myArgs, mbv_read_single);

function mbv_read_single(err, res, data) {
	if (!err && res.statusCode == 200) {
		console.log("email_address: " + data.email_address);
		console.log("domain: " + data.domain);
		console.log("is_free: " + data.is_free);
		console.log("is_syntax: " + data.is_syntax);
		console.log("is_domain: " + data.is_domain);
		console.log("is_smtp: " + data.is_smtp);
		console.log("is_verified: " + data.is_verified);
		console.log("is_server_down: " + data.is_server_down);
		console.log("is_greylisted: " + data.is_greylisted);
		console.log("is_disposable: " + data.is_disposable);
		console.log("is_suppressed: " + data.is_suppressed);
		console.log("is_role: " + data.is_role);
		console.log("is_high_risk: " + data.is_high_risk);
		console.log("is_catchall: " + data.is_catchall);
		console.log("mailboxvalidator_score: " + data.mailboxvalidator_score);
		console.log("time_taken: " + data.time_taken);
		console.log("status: " + data.status);
		console.log("credits_available: " + data.credits_available);
		console.log("error_code: " + data.error_code);
		console.log("error_message: " + data.error_message);
	}
}