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

**Galar Dex Wifi**:
+ Galar Dex Draft rules
+ Pokemon are set to level 50
+ VGC timer

**Galar Dex Pre-Home**:
+ Galar Dex Draft rules
+ only Pokemon, moves, abilities and items native to the pre-Home games are allowed



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
- cut moves are not allowed
- Z-Moves are not allowed

**National Dex Legacy**:
+ all Pokemon are allowed
+ unreleased Pokemon and abilities are allowed
+ cut moves are allowed
+ Megas are allowed
+ Z-Moves are allowed
- Dynamax and Gigantamax are not allowed

**National Dex Unrestricted**:
+ everything is allowed, including illegal Pokemon and CAP

**National Dex Wifi**:
+ National Dex Dynamax rules
+ Pokemon are set to level 50
+ VGC timer

**National Dex Doubles**:
+ National Dex Dynamax rules
+ Doubles format

**LC National Dex**:
+ National Dex Legacy rules
+ LC format
+ Double Item Clause



**National Dex DLC Draft**:
+ National Dex Draft rules
+ moveset additions from the Pokemon Home leaks are allowed

**National Dex DLC Dynamax**:
+ National Dex Dynamax rules
+ moveset additions from the Pokemon Home leaks are allowed

**National Dex DLC Legacy**:
+ National Dex Legacy rules
+ moveset additions from the Pokemon Home leaks are allowed

**LC National Dex DLC**:
+ LC National Dex rules
+ moveset additions from the Pokemon Home leaks are allowed

__NOTE: all DLC moves will show up as Illegal in the Teambuilder, as the client won't recognize custom moveset additions. This is just a visual issue, all moves will validate as intended.__



All Draft formats use a DS style timer (**100s per turn, auto pick on timeout**).`);
	},
	
	sportsavatar(target, room, user, connection) {
		return connection.popup(`**Custom Avatars**:
You can request a custom avatar by simply providing us with an 80x80 image.
Please contact us through the #avatar-requests channel on our Discord server.`);
	},
	
	sportsstaff(target, room, user, connection) {
		return connection.popup(`**Administrators** (~):
Free Baton Pass (GoodMorningCrono#1726)
Jackinev (Jackinev#9756)

**Leaders** (&):
Beezle (Beezle#2412)
Miocchi (Mio#1041)
Princess Furfrou (Princess#6721)

**Moderators** (@):
angryairair (woodlandapple#5780)
Kaltchre (Kalt#7849)
KmjNext (KmjNext#8246)
Venuaur (Venuaur#2153)



__NOTE: If you're a league owner/admin, you can request the Big Fan role to gain timer and modjoin permissions. Please contact us over on Discord.__`);
	},
	
};