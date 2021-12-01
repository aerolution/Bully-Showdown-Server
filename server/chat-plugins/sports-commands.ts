import {FS, Utils} from '../../lib';

const PARTNERS_FILE = 'config/chat-plugins/partners.json';

export const commands: ChatCommands = {
	sportsavatar(target, room, user, connection) {
		return connection.popup(`**Custom Avatars**:
If you want to request a custom avatar, check out the __**#avatar-submissions**__ channel on our Discord server. There you can find instructions to make and upload your image.
Requests through DMs here or on Discord will be ignored.`);
	},
	
	sportspartners(target, room, user) {
		return this.parse(`/join view-partners`);
	},
	
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

**National Dex Doubles Unrestricted**:
+ National Dex Unrestricted rules
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



**National Dex Leaks Formats**:
+ same rules as the corresponding National Dex format
+ moveset additions from the Pokemon Home and Isle of Armor leaks are allowed

__NOTE: all leaked moves will show up as Illegal in the Teambuilder, this is just a visual issue and they will validate as intended. If you're not sure a move is legal always refer to the Validate button.__
__You can find a full list of leaked moves by clicking the Leaked Moves List button in our Lobby chat.__`);
	},
};

export const pages: PageTable = {
	partners(args, user) {
		this.title = `Sports Partners`;
		let buf = `<div style="background: url(&quot;http://54.202.92.100:8000/avatars/resources/bg_tile.png&quot;) center; background-size: 40px 40px; width: 100%; padding-top: 10px;">`;
		buf += `<center style="color: #ffba00;"><h2>Sports Partners</h2><br>`;
		const partnerJSON = JSON.parse(FS(PARTNERS_FILE).readIfExistsSync() || "{}")
		const keys = Object.keys(partnerJSON);
		const sortedKeys = keys.sort((a, b) => a.localeCompare(b));
		for (const key of sortedKeys) {
			const row = partnerJSON[key];
			buf += `<div style="width: 80%; display: table; margin-bottom: 15px">`;
			buf += row;
			buf += `</div></br>`;
		}
		buf += `<br><br></div></center>`;
		return buf;
	},
};