'use strict';

exports.commands = {
	
	sportstiers(target, room, user, connection) {
		return connection.popup(`**Galar Dex Draft**:
+ Galar Dex Pokemon only are allowed
+ unreleased Pokemon and abilities found in Sword/Shield are allowed
+ Dynamax and Gigantamax are allowed
- cut moves are not allowed
- Megas are not allowed
- Z-Moves are not allowed

**National Dex Draft**:
+ all Pokemon are allowed
+ unreleased Pokemon and abilities are allowed
+ Megas are allowed
- Dynamax and Gigantamax are not allowed
- cut moves are not allowed
- Z-Moves are not allowed

**National Dex Dynamax**:
+ all Pokemon are allowed
+ unreleased Pokemon and abilities are allowed
+ Megas are allowed
+ Dynamax and Gigantamax are allowed
(Note: Megas can't Dynamax)
- cut moves are not allowed
- Z-Moves are not allowed

**National Dex Legacy**:
+ all Pokemon are allowed
+ unreleased Pokemon and abilities are allowed
+ cut moves are allowed
+ Megas are allowed
+ Z-Moves are allowed
- Dynamax and Gigantamax are not allowed

**National Dex LC**:
+ Legacy National Dex rules
+ LC format
+ Double Item Clause

**National Dex Unrestricted**:
+ everything is allowed, including illegal Pokemon and CAP

Note: all Draft formats use a DS style timer (100s per turn, auto pick on timeout)`);
	},
	
	sportsmod(target, room, user, connection) {
		return connection.popup(`**Mod Permissions**:
If you're a league owner/admin, you can request the Big Fan role to gain timer and modjoin permissions.
Please contact an Admin, Leader or Moderator here or on Discord.`);
	},
	
	sportsavatar(target, room, user, connection) {
		return connection.popup(`**Custom Avatars**:
You can request a custom avatar by simply providing us with an 80x80 image.
Please contact an Admin, Leader or Moderator here or on Discord.`);
	},
	
};