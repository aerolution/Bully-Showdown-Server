'use strict';

exports.commands = {
	
	sportstiers(target, room, user, connection) {
		return connection.popup(`__All Draft formats use a DS-style timer by default. If you want to change timer settings, use:__
__- **/timer ds**: fixed 100s per turn, auto pick on timeout__
__- **/timer smogon**: 300s timer, get an extra 10s every turn, forfeit on timeout__
__- **/timer default**: resets the timer to the format's default settings__



**Galar Dex Draft**:
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

**National Dex Doubles**:
+ National Dex Dynamax rules
+ Doubles format

**LC National Dex Draft**:
+ National Dex Draft rules
+ LC format
+ Double Item Clause

**LC National Dex Legacy**:
+ National Dex Legacy rules
+ LC format
+ Double Item Clause



**National Dex DLC Formats**:
+ Same rules as the corresponding National Dex format
+ moveset additions from the Pokemon Home leaks are allowed

__NOTE: all DLC moves will show up as Illegal in the Teambuilder, this is just a visual issue and they will validate as intended. If you're not sure a move is legal always refer to the Validate button.__`);
	},
	
	sportsavatar(target, room, user, connection) {
		return connection.popup(`**Custom Avatars**:
If you want to request a custom avatar, check out the __**#avatar-submissions**__ channel on our Discord server. There you can find instructions to make and upload your image.
Requests through DMs here on Showdown will be ignored.`);
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
KmjNext (Spacegirl | KmjNext#8246)
Venuaur (Venuaur#2153)



__NOTE: If you're a league owner/admin, you can request the Big Fan role to gain timer and modjoin permissions. Please contact us on Discord.__`);
	},
	
};