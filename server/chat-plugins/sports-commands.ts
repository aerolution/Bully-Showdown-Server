'use strict';

export const commands: ChatCommands = {
	
	sportstiers(target, room, user, connection) {
		return connection.popup(`**Galar Dex Draft**:
+ only Pokemon that are currently obtainable in Sword/Shield are allowed
+ unreleased Pokemon and abilities found in Sword/Shield are allowed
- Dynamax and Gigantamax are not allowed
- cut moves are not allowed
- Megas are not allowed
- Z-Moves are not allowed

**Galar Dex Dynamax**:
+ Galar Dex Draft rules
+ Dynamax and Gigantamax are allowed

**Galar Dex Wifi**:
+ Galar Dex Draft rules
+ Pokemon are set to level 50

**Galar Dex Doubles**:
+ Galar Dex Dynamax rules
+ Doubles format

**Galar Dex VGC**:
+ Galar Dex Dynamax rules
+ Doubles format
+ Pokemon are set to level 50
+ Bring 4 out of 6 Pokemon

**LC Galar Dex Draft**:
+ Galar Dex Draft rules
+ LC format
+ Double Item Clause



**National Dex Draft**:
+ all Pokemon are allowed
+ unreleased Pokemon and abilities are allowed
+ Megas are allowed
- Dynamax and Gigantamax are not allowed
- cut moves are not allowed
- Z-Moves are not allowed

**National Dex Dynamax**:
+ National Dex Draft rules
+ Dynamax and Gigantamax are allowed

**National Dex Legacy**:
+ National Dex Draft rules
+ cut moves are allowed
+ Z-Moves are allowed

**National Dex Unrestricted**:
+ everything is allowed, including illegal Pokemon and CAP

**National Dex Wifi**:
+ National Dex Dynamax rules
+ Pokemon are set to level 50

**National Dex Doubles**:
+ National Dex Dynamax rules
+ Doubles format

**National Dex VGC**:
+ National Dex Dynamax rules
+ Doubles format
+ Pokemon are set to level 50
+ Bring 4 out of 6 Pokemon

**LC National Dex Draft**:
+ National Dex Draft rules
+ LC format
+ Double Item Clause

**LC National Dex Legacy**:
+ National Dex Legacy rules
+ LC format
+ Double Item Clause

**National Dex CAP**:
+ National Dex Draft rules
+ CAP Pokemon and moves are allowed



**National Dex DLC Formats**:
+ same rules as the corresponding National Dex format
+ moveset additions from the Pokemon Home and Isle of Armor leaks are allowed

__NOTE: all leaked moves will show up as Illegal in the Teambuilder, this is just a visual issue and they will validate as intended. If you're not sure a move is legal always refer to the Validate button.__
__You can find a full list of leaked moves by clicking the Leaked Moves List button in our Lobby chat.__`);
	},
	
	sportsavatar(target, room, user, connection) {
		return connection.popup(`**Custom Avatars**:
If you want to request a custom avatar, check out the __**#avatar-submissions**__ channel on our Discord server. There you can find instructions to make and upload your image.
Requests through DMs here or on Discord will be ignored.`);
	},
	
	sportsstaff(target, room, user, connection) {
		return connection.popup(`**Administrators** (~):
Free Baton Pass (GoodMorningCrono#1726)
Jackinev (Jackinev#9756)

**Leaders** (&):
angryairair (woodlandapple#5780)
Beezle (Beezle#2412)
Kaltchre (Kalt#7849)
Miocchi (Mia#5683)
Princess Furfrou (thanks sj#6721)
Venuaur (Venuaur#2153)

**Moderators** (@):
BoomBoomBoo (consequences#0352)
Hikertoad (Hikertoad#0648)
NarthVader (Narth#1623)
PerfecteBlu (Blu#9129)
st. ihiihuio ♫ (Saint#0007)`);
	},
	
	sportspartners(target, room, user, connection) {
		let reply = 
			`<b><u>Sports Partners:</u></b><br><br>` +
			`<table style="text-align: center; line-height: 1.5; width: 100%; border-collapse: collapse">` +
				`<tr style="border: 1px solid black; background: rgba(0 , 0 , 0 , 0.2)">` + 
					`<td style="width: 50%; padding: 10px;"><img src="https://i.imgur.com/pUDYSMe.png" width="120" height="120" /></td>` + 
					`<td>` + 
						`<span style="font-size: 16px;"><b>DGBA</b></span><br>` + 
						`Owner(s): <button style="color: blue; text-decoration: underline; border: none; background: none; padding: 0; height: -20em; font-family: verdana, sans-serif; font-size: 12px; cursor: pointer" name="parseCommand" value="/user CRU Jack">Jack</button>, <button style="color: blue; text-decoration: underline; border: none; background: none; padding: 0; height: -20em; font-family: verdana, sans-serif; font-size: 12px; cursor: pointer" name="parseCommand" value="/user Bontz">Haz</button><br><br>` + 
						`| <a href="DGBA">Chatroom</a> | <a href="https://discord.gg/7N9nhtacpS">Discord</a> |` + 
					`</td>` + 
				`</tr>` + 
				`<tr style="border: 1px solid black; background: rgba(0 , 0 , 0 , 0.1)">` + 
					`<td style="width: 50%; padding: 10px;"><img src="https://i.imgur.com/z6GPTw6.png" width="138" height="120" /></td>` + 
					`<td>` + 
						`<span style="font-size: 16px;"><b>DPL</b></span><br>` + 
						`Owner(s): <button style="color: blue; text-decoration: underline; border: none; background: none; padding: 0; height: -20em; font-family: verdana, sans-serif; font-size: 12px; cursor: pointer" name="parseCommand" value="/user King L5">King L5</button>, <button style="color: blue; text-decoration: underline; border: none; background: none; padding: 0; height: -20em; font-family: verdana, sans-serif; font-size: 12px; cursor: pointer" name="parseCommand" value="/user PerfecteBlu">Blu</button><br><br>` + 
						`| <a href="DPL">Chatroom</a> | <a href="https://discord.gg/zVQZgaMksw">Discord</a> |` + 
					`</td>` + 
				`</tr>` + 
				`<tr style="border: 1px solid black; background: rgba(0 , 0 , 0 , 0.2)">` + 
					`<td style="width: 50%; padding: 10px;"><img src="https://i.imgur.com/D6N6RnX.png" width="120" height="120" /></td>` + 
					`<td>` + 
						`<span style="font-size: 16px;"><b>OLT</b></span><br>` + 
						`Owner(s): <button style="color: blue; text-decoration: underline; border: none; background: none; padding: 0; height: -20em; font-family: verdana, sans-serif; font-size: 12px; cursor: pointer" name="parseCommand" value="/user st. ihiihuio">Saint</button><br><br>` + 
						`| <a href="OLT">Chatroom</a> |` + 
					`</td>` + 
				`</tr>` + 
			`</table>`;
		return this.sendReply(`|raw|<div class="infobox infobox-limited">${reply}</div>`);
	},
	
};