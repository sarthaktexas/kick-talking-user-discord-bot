const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
require('@discordjs/opus');
var opus = require('opusscript');

client.on('ready', () => {
    console.log('Logged in as ' + client.user.username + '#' + client.user.discriminator);
    client.user.setStatus("dnd");
    client.user.setGame('with people\'s emotions', 'Playing');
    // Voice Channel ID
    const channel = client.channels.get(config.firstVoiceChannel);
    joinChannel(channel);
});

/**
 * Handles the Vocal Message
 * @param {Object} userOrMember - User Object from Vocal Message
 * @param {Boolean} speaking - Is the User Speaking
 */

function handleVocalMessage(userOrMember, speaking) {
    if ((userOrMember.user.username === config.username || userOrMember.user.id === config.userId || userOrMember.displayName === config.userDisplayName) && speaking) {
        console.log(`${config.userId || config.username || config.userDisplayName} ISSSSS talking`);
        setTimeout(() => {
            userOrMember.setVoiceChannel(config.secondVoiceChannel).then(() => {
                console.log('disconnected ' + userOrMember.user.username + ' hahahhaha');
            });
        }, config.timeout);
    }
}

/**
 * Joins a specified voice channel
 * @param {String} channel - Channel ID to join
 */

function joinChannel(channel) {
    channel.join().then(d => {
        console.log(`INFO! joined ${d.channel.name}`);
        d.on('speaking', handleVocalMessage);
    });
}

client.on('guildMemberSpeaking', handleVocalMessage);

client.login(config.token);
