# Kick Talking User :)
This discord bot kicks a specified talking user.
- Install FFMPEG from https://ffmpeg.org/download.html or use the command `sudo apt-get ffmpeg` for Linux based machines.
- Run `npm install`
- Set settings in `config.json` Set only 1 of the user identifiers. UserId is the most specific and can't be bypassed.
- run `npm start`
 
*This bot only works on `discord.js@11.0.0`! Do not update this package!*

Common Errors:
- `npm/node is not a command`: install here https://nodejs.org/en/download/
- `FFMPEG is not found`: be sure to install it using the link or command above
- `Opus something is not found`: run `npm install opus-stream @discordjs/opus`
- `Voice connection not established after 15 seconds`: downgrade `discord.js` to v11.0.0 by running `npm install discord.js@11.0.0`
  
© Sarthak Mohanty 2020, MIT
