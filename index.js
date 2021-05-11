const Discord =require('discord.js');
const client=new Discord.Client();
const fs = require('fs');



require('dotenv').config()
client.once('ready',()=>{
    console.log('hello I\'m Up' );
});

client.on('message',async message =>  {
	if (message.content === 'Merhaba') {
		
		message.channel.send('Hi');
	} else if (message.content === `!server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const audio = connection.receiver.createStream(message.member, { mode: 'pcm' ,end:"manual"});
        audio.pipe(fs.createWriteStream(message.author.username));
    }
});




















client.login(process.env.TOKEN);
