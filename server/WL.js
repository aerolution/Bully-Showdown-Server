'use strict';

const FS = require("../lib/fs.js");
let https = require('https');
const Autolinker = require('autolinker');

let regdateCache = {};

exports.WL = {
	nameColor: function (name, bold, userGroup) {
		let userGroupSymbol = Users.usergroups[toId(name)] ? '<b><font color=#948A88>' + Users.usergroups[toId(name)].substr(0, 1) + '</font></b>' : "";
		return (userGroup ? userGroupSymbol : "") + (bold ? "<b>" : "") + "<font color=" + WL.hashColor(name) + ">" + (Users(name) && Users(name).connected && Users.getExact(name) ? Chat.escapeHTML(Users.getExact(name).name) : Chat.escapeHTML(name)) + "</font>" + (bold ? "</b>" : "");
	},
	// usage: WL.nameColor(user.name, true) for bold OR WL.nameColor(user.name, false) for non-bolded.

	regdate: function (target, callback) {
		target = toId(target);
		if (regdateCache[target]) return callback(regdateCache[target]);
		let req = https.get('https://pokemonshowdown.com/users/' + target + '.json', res => {
			let data = '';
			res.on('data', chunk => {
				data += chunk;
			}).on('end', () => {
				try {
					data = JSON.parse(data);
				} catch (e) {
					return callback(false);
				}
				let date = data['registertime'];
				if (date !== 0 && date.toString().length < 13) {
					while (date.toString().length < 13) {
						date = Number(date.toString() + '0');
					}
				}
				if (date !== 0) {
					regdateCache[target] = date;
					saveRegdateCache();
				}
				callback((date === 0 ? false : date));
			});
		});
		req.end();
	},

	/* eslint-disable no-useless-escape */
	parseMessage: function (message) {
		if (message.substr(0, 5) === "/html") {
			message = message.substr(5);
			message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>'); // italics
			message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>'); // bold
			message = message.replace(/\~\~([^< ](?:[^<]*?[^< ])?)\~\~/g, '<strike>$1</strike>'); // strikethrough
			message = message.replace(/&lt;&lt;([a-z0-9-]+)&gt;&gt;/g, '&laquo;<a href="/$1" target="_blank">$1</a>&raquo;'); // <<roomid>>
			message = Autolinker.link(message.replace(/&#x2f;/g, '/'), {stripPrefix: false, phone: false, twitter: false});
			return message;
		}
		message = Chat.escapeHTML(message).replace(/&#x2f;/g, '/');
		message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>'); // italics
		message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>'); // bold
		message = message.replace(/\~\~([^< ](?:[^<]*?[^< ])?)\~\~/g, '<strike>$1</strike>'); // strikethrough
		message = message.replace(/&lt;&lt;([a-z0-9-]+)&gt;&gt;/g, '&laquo;<a href="/$1" target="_blank">$1</a>&raquo;'); // <<roomid>>
		message = Autolinker.link(message, {stripPrefix: false, phone: false, twitter: false});
		return message;
	},
	/* eslint-enable no-useless-escape */

	randomString: function (length) {
		return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
	},
};

// last two functions needed to make sure WL.regdate() fully works
function loadRegdateCache() {
	try {
		regdateCache = JSON.parse(FS('config/regdate.json').readIfExistsSync());
	} catch (e) {}
}
loadRegdateCache();

function saveRegdateCache() {
	FS('config/regdate.json').writeSync(JSON.stringify(regdateCache));
}

function showDailyRewardAni(streak) {
	let output = '';
	for (let i = 1; i <= streak; i++) {
		output += "<img src='http://i.imgur.com/ZItWCLB.png' width='16' height='16'> ";
	}
	return output;
}
