'use strict';

exports.commands = {
	
	sportstiers(target, room, user, connection) {
		return connection.popup(`
			**Galar Dex**:\n
			+ Galar Dex Pokemon only are allowed\n
			+ unreleased Pokemon and abilities found in Sword/Shield are allowed\n
			+ Dynamax and Gigantamax are allowed\n
			- cut moves are not allowed\n
			- Megas are not allowed\n
			- Z-Moves are not allowed\n
			\n
			**National Dex**:\n
			+ all Pokemon are allowed\n
			+ unreleased Pokemon and abilities are allowed\n
			+ Megas are allowed\n
			+ Dynamax and Gigantamax are allowed (Note: Megas can't Dynamax)\n
			- cut moves are not allowed\n
			- Z-Moves are not allowed\n
			\n
			**Legacy National Dex**:\n
			+ all Pokemon are allowed\n
			+ unreleased Pokemon and abilities are allowed\n
			+ cut moves are allowed\n
			+ Megas are allowed\n
			+ Z-Moves are allowed\n
			- Dynamax and Gigantamax are not allowed\n
			\n
			**LC National Dex**:\n
			+ Legacy National Dex rules\n
			+ LC format\n
			+ Double Item Clause\n
			\n
			**Unrestricted National Dex**:\n
			+ everything is allowed, including illegal Pokemon and CAP\n
			\n
			Note: all Draft formats use a DS style timer (90s per turn, auto pick on timeout)
		`);
	},
	
	sportsmod(target, room, user, connection) {
		return connection.popup(`
			**Mod Permissions**:\n
			If you're a league owner/admin, you can request the Big Fan role to gain timer and modjoin permissions.\n
			Please contact an Admin, Leader or Moderator here or on Discord.
		`);
	},
	
	sportsavatar(target, room, user, connection) {
		return connection.popup(`
			**Custom Avatars**:\n
			You can request a custom avatar by simply providing us an 80x80 image.\n
			Please contact an Admin, Leader or Moderator here or on Discord.
		`);
	},
	
};