const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "$";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {

    client.user.setActivity("$help | Beta V.0.0.1",{type: 'Streaming'})

});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {

    var prefix = "$";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "SkyBot.";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('سيرفر', message.guild.name)
   .addField('المرسل', message.author.username)
   .addField('الرسالة', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", message => {
    var prefix = "$";// البرفكس
if(message.content.startsWith(prefix + "setwlc")) {
    let args = message.mentions.channels.first();
        if(!args) message.channel.send("** منشن روم . :x:**").then(m => {    
m.delete(1500);
})
            if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                    message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                client.on("guildMemberAdd", (member) => {
                        if(member.user.bot) return;
                     var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('New Member')
.setDescription(`Welcome To Server : [ ${message.guild.name} ]`)
.addField("**اسم العضو** :", `${message.author.username}#${message.author.discriminator}`, true)
.addField('**ايدي العضو** :',"" +  member.user.id, true)
.addField('**تاج العضو** :', member.user.discriminator, true)
.addField('**صنع الحساب منذ** :',member.user.createdAt, true)
.addField('**انت العضو رقم**',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('GREEN')
.setFooter(member.guild.name, member.guild.iconURL, true)
                     
args.send({embed : embed});
                });
}
});

client.on("message", message => {
    var prefix = "$";//البرفكس
if(message.content.startsWith(prefix + "setout")) {
    let args = message.mentions.channels.first();
        if(!args) message.channel.send("** منشن روم . :x:**");
            if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                    message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                client.on("guildMemberRemove", (member) => {
                        if(member.user.bot) return;
                     var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('Out Member')
.setDescription(`GoodBye From Server : [ ${message.guild.name} ]`)
.addField("**اسم العضو** :", `${message.author.username}#${message.author.discriminator}`, true)
.addField('**ايدي العضو** :',"" +  member.user.id, true)
.addField('**تاج العضو** :', member.user.discriminator, true)
.addField('**صنع الحساب منذ** :',member.user.createdAt, true)
.addField('**انت العضو رقم**',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('RED')
.setFooter(member.guild.name, member.guild.iconURL, true)
                     
args.send({embed : embed});
                });
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith ('$server')) {
      if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

  client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '$'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on("message", msg => {
  if(msg.content === '$' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});


client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "$";
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
          .setFooter(`في سيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });

  client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


 


client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`لقد تم إعطاء ميوت بسبب النشر إذا كان عن طريق الخطا فتكلم مع الإدارة`**');

              
              
              
              }
})


 client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$";
               if(message.content.startsWith(prefix + 'allbots')) {

   
   if (message.author.bot) return;
   let i = 1;
       const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('message', message => {
    var prefix = "$";
          if(message.content === prefix + "hchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
     }
    });
    
    
    client.on('message', message => {
    var prefix = "$";
          if(message.content === prefix + "schannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('Done  ')
     }
    });
    
    client.on("message", message => {
        const prefix = "$"
                  
              if(!message.channel.guild) return;
       if(message.author.bot) return;
          if(message.content === prefix + "savatar"){ 
              const embed = new Discord.RichEmbed()
      
          .setTitle(`${message.guild.name}.png`)
      .setAuthor(message.author.username, message.guild.iconrURL)
        .setColor(0x164fe3)
        .setImage(message.guild.iconURL)
        .setURL(message.guild.iconrURL)
                        .setTimestamp()
    
       message.channel.send({embed});
          }
      });
    
      client.on('message',function(message) {
        if (message.author.bot) return;
      var prefix = "$";
                        if(!message.channel.guild) return;
      
                          if (message.content === prefix + "fm") {
       const embed = new Discord.RichEmbed()
      
          .setDescription(`**Members info :sparkles:
      :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
      :heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
      :yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
      :diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
      :bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
               message.channel.send({embed});
      
          }
            });  

     client.on('message', message => {
                    var prefix = "$";
                           if(message.content === prefix + "mutechannel") {
                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: false
                    
                                  }).then(() => {
                                      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                                  });
                                    }
                    //FIRE BOT
                        if(message.content === prefix + "unmutechannel") {
                                            if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: true
                    
                                  }).then(() => {
                                      message.reply("**__تم فتح الشات__:white_check_mark:**")
                                  });
                        }
                           
                    });   

                    client.on('message', omar => {
                        var prefix = "$";
                        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
                        omar.guild.channels.forEach(m => {
                        m.delete();
                        });
                        }
                        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        omar.guild.roles.forEach(m => {
                        m.delete();
                        });
                        omar.reply("`تم حذف جميع الرتب بنجاح`")
                        }
                        });
                        
                        client.on('message', message => {
                            var prefix = "$";
                           if(!message.channel.guild) return;
                        if(message.content.startsWith(prefix + 'clear')) {
                        if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
                        if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
                        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                        let request = `Requested By ${message.author.username}`;
                        message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
                        msg.react('✅')
                        .then(() => msg.react('❌'))
                        .then(() =>msg.react('✅'))
                        
                        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                        
                        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
                        reaction1.on("collect", r => {
                        message.channel.send(`Chat will delete`).then(m => m.delete(5000));
                        var msg;
                                msg = parseInt();
                        
                              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
                              message.channel.sendMessage("", {embed: {
                                title: "`` Chat Deleted ``",
                                color: 0x06DF00,
                                footer: {
                        
                                }
                              }}).then(msg => {msg.delete(3000)});
                        
                        })
                        reaction2.on("collect", r => {
                        message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
                        msg.delete();
                        })
                        })
                        }
                        });
                        
                        client.on("message", (message) => {
                        if (message.content.startsWith("$ct")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                        message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
                        
                        }
                        });
                        
                        
                        client.on("message", (message) => {
                        if (message.content.startsWith("$cv")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('تـم إنـشاء روم صـوتي')
                            
                        }
                        });
                        
                        
                        client.on("message", (message) => {
                            if (message.content.startsWith('$delete')) {
                                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                        
                                let args = message.content.split(' ').slice(1);
                                let channel = message.client.channels.find('name', args.join(' '));
                                if (!channel) return message.reply('**تم مسح الروم**').catch(console.error);
                                channel.delete()
                            }
                        });  

                         
var temp = {
 
}
 
client.on("message",(message) => {
    if (message.channel.type !== "text") return;
    if (!message.content.startsWith(prefix)) return;
        if(message.content.startsWith(prefix + "temp on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
            temp[message.guild.id] = {
                work : true,
                channel : "Not Yet"
            };
            message.guild.createChannel("اضغط لصنع روم مؤقت", 'voice').then(c => {
                c.setPosition(1);
                temp[message.guild.id].channel = c.id
                message.channel.send("** Done.**");
            });
        if(message.content.startsWith(prefix + "temp off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
        message.guild.channels.get(temp[message.guild.id]).delete();
            temp[message.guild.id] = {
                work : false,
                channel : "Not Yet"
            };
        message.channel.send("** Done.**");
    };
}})
client.on("voiceStateUpdate", (o,n) => {
    if (!temp[n.guild.id]) return;
    if (temp[n.guild.id].work == false) return;
    if (n.voiceChannelID == temp[n.guild.id].channel) {
        n.guild.createChannel(n.user.username, 'voice').then(c => {
            n.setVoiceChannel(c);
            c.overwritePermissions(n.user.id, {
                CONNECT:true,
                SPEAK:true,
                MANAGE_CHANNEL:true,
                MUTE_MEMBERS:true,
                DEAFEN_MEMBERS:true,
                MOVE_MEMBERS:true,
                VIEW_CHANNEL:true  
            });
        })
    };
    if (!o.voiceChannel) return;
    if (o.voiceChannel.name == o.user.username) {
        o.voiceChannel.delete();
    };
});


client.on('message', msg => {
    if(msg.content.startsWith('$invitebot')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});


client.on('message',function(message) {
    let prefix = "$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});


client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("$ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبه اسمه Support Team`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`$confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    
                    .then((collected) => {
                        message.channel.delete();
                    })   
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});

 
client.on('message', message => { //By |.iiMostafaYT#1001
    if (message.content.startsWith("$bot")) { //By |.iiMostafaYT#1001
    message.channel.send({ //By |.iiMostafaYT#1001
        embed: new Discord.RichEmbed() //By |.iiMostafaYT#1001
            .setAuthor(client.user.username,client.user.avatarURL) //By |.iiMostafaYT#1001
            .setThumbnail(client.user.avatarURL) //By |.iiMostafaYT#1001
            .setColor('RANDOM') //By |.iiMostafaYT#1001
            .setTitle('Info SkyBot.') //By |.iiMostafaYT#1001
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |.iiMostafaYT#1001
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |.iiMostafaYT#1001
            .addField('**Servers**', [client.guilds.size], true) //By |.iiMostafaYT#1001
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |.iiMostafaYT#1001
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |.iiMostafaYT#1001
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |.iiMostafaYT#1001
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |.iiMostafaYT#1001
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |.iiMostafaYT#1001
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |.iiMostafaYT#1001
                  .addField('**My Language**' , `[ Java Script ]` , true) //By |.iiMostafaYT#1001
                  .setFooter('By | .iiMosTaFaYT#1001') //By |.iiMostafaYT#1001
    }) //By |.iiMostafaYT#1001
} //By |.iiMostafaYT#1001
}); //By |.iiMostafaYT#1001


 
 

client.on("message", message => {
    let roleembed1 = new Discord.RichEmbed()
    .setDescription(`
    أمثله على الأوامر :
    $role @mention rolename : لسحب رتبة لعضو معين
    $role all rolename : لسحب رتبة للجميع
    $role humans rolename : لسحب رتبة للاشخاص فقط
    $role bots rolename : لسحب رتبة لجميع البوتات`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      var args = message.content.split(' ').slice(1);
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
      if( msg.toLowerCase().startsWith( prefix + 'role' ) ){
          if( !args[0] ) return message.channel.sendEmbed(roleembed1)
          if( !args[1] ) return message.channel.sendEmbed(roleembed1)
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().removeRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.removeRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
          }  
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          }
      }
  });
   
  client.on("message", message => {
        let roleembed = new Discord.RichEmbed()
    .setDescription(`
    أمثله على الأوامر :
    $role @mention rolename : لأعطاء رتبة لعضو معين
    $role all rolename : لأعطاء رتبة للجميع
    $role humans rolename : لأعطاء رتبة للاشخاص فقط
    $role bots rolename : لأعطاء رتبة لجميع البوتات`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      var args = message.content.split(' ').slice(1);
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
      if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
          if( !args[0] ) return message.channel.sendEmbed(roleembed)
          if( !args[1] ) return message.channel.sendEmbed(roleembed)
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
          }  
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          }
      }
  });


  const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
	  var prefix = "-";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("$عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Speed BOT' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});

client.on('message', ra3d => {
var prefix = "$";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
var prefix = "$";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('$مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});


client.on("message", function(message) {
	var prefix = "$";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});


client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='$count')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle(':tulip:| Members info')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});


client.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "$";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});



client.on('message', message => {
	var prefix = "$";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});


let points = {};
const type = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["السعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["القسطنطينية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["النهاية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["امازون"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["جافاسكربت"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["سهله مو صعبه"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["طبق رطب مرق بقر"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["متجر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["شجرة الأوغيري"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["عش العصفور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["قم بكتابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["كانيكي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["ليوبليانا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["هواوي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ياخرا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["يوم الخميس"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["الأرض"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["البوابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["الجمل ابو راسين"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["الحوت الأزرقء"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["القارب المكسور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["المدرسة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["اليابان"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["بلايستايشن"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["جزر القمر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["حشيش"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["سوبراشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["قوتشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["ايفون"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["تيستا لاغوسا"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["بسكوت ابو ولد"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["تكأكأتم"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["الجملة المفيدة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["الأوسكار"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["كنت امشي وأمشي"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["لااااق بوتء"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ابو ناصر سرى ليله"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["عدد اللي برمجوني 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["بابا سنفور متعاطي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ميرندا حمضيات يلد"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["هل الدمع من عينه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["طارت الطياره طارت"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["أنا فوق راسي ريشه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["فريق النجمة"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["خالد عبدالرحمن"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["حبيت مره من قلبي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["كرستيانو يزق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["أنت قمر يا قمر"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["انا اجمل مخلوق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["دونت تاتش"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["توم وجيري"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["دباب اربع كفرات"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["القرش الأسودد"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ددسن موديل 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["الحارثيء"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["عزازي مسرع"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["جاكي شاان"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["دارك نت"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["فانتاستيك"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["زباله متنقلة"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["اكس بوكس يلد"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["بكسل يالوصخخ"]

    }
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="$";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`⏳ |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
  .setDescription('**✅ |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`🔚 |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});


client.on('message', message => {
    if (message.content == "$quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

client.on('message', message => { 
let prefix = '$'
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });


  var fkk =[
    {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
    {f:"فكك باص",k:"ب ا ص"},
    {f:"فكك عربة ",k:"ع ر ب ة"},
    {f:"فكك سيارة",k:"س ي ا ر ة"},
    {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
    {f:"فكك العنود ",k:"ا ل ع ن و د"},
    {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
    {f:"فكك دحوم",k:"د ح و م"},
    {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
    {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
    {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
    {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
    {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
    {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
    {f:"فكك زنديق  ",k:"ز ن د ي ق"},
    {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
    {f:"فكك سوريا ",k:"س و ر ي ا"},
    {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
    {f:"فكك طماطم ",k:"ط م ا ط م"},
    {f:"فكك سارة ",k:"س ا ر ة"},
    {f:"فكك دراجون ",k:"د ر ا ج و ن"},
    {f:"فكك سيرفر ",k:"س ي ر ف ر"},
    {n:"فكك الجبل",m:"ا ل ج ب ل"},
    {n:"فكك هضبة",m:"ه ض ب ة"},
    {n:"فكك خواطر",m:"خ و ا ط ر"},
    {n:"فكك ارحبو",m:"ا ر ح ب و"},
    {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
    {n:"فكك احبك",m:"ا ح ب ك"},
    {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
    {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
    {n:"فكك الو محد",m:"ا ل و م ح م د"},


];


client.on("message", async message => {
   var prefix = "$";
if(message.content == prefix+"فكك"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = fkk[Math.floor(Math.random() * fkk.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('لعبة فكك')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.f);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "فكك") return
       if(result.content == ask.k){

         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                           var embedx = new Discord.RichEmbed()
         .setTitle(':x:خطاء')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة خاطئة`);

            message.channel.sendEmbed(embedx);
       }
 });
}
});





client.on("message", async message => {
var prefix = "$";
var aoasm =[
{q:"ما عاصمة **المغرب**",a:"الرباط"},
{q:"ما عاصمة **افغانستان**",a:"كبل"},
{q:"ما عاصمة ** البانيا**",a:"تيران"},
{q:"ما عاصمة **الجزائر **",a:"الجزائر"},
{q:"ما عاصمة ** **",a:"الجزائر"},
{q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
{q:"ما عاصمة **انجولا**",a:"لواندا"},
{q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
{q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
{q:"ما عاصمة **ارمينيا**",a:"يريفان"},
{q:"ما عاصمة ** مصر**",a:"القاهرة"},
{q:"ما عاصمة ** استراليا**",a:"كانبرا"},
{q:"ما عاصمة **النمسا**",a:"فيينا"},
{q:"ما عاصمة ** اذربيجان**",a:"باكو"},
{q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
{q:"ما عاصمة **البحرين**",a:"المنامة"},
{q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
{q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
{q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
{q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
{q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
{q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
{q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
{q:"ما عاصمة **بوليفيا **",a:"لاباز"},
{q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
{q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
{q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
{q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
{q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
{q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
{q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
{q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
{q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
{q:"ما عاصمة ** كندا**",a:"اوتاوا"},
{q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
{q:"ما عاصمة **تشاد **",a:"نجامينا"},
{q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
{q:"ما عاصمة **الصين **",a:"بكين"},
{q:"ما عاصمة ** **",a:"مورونى"},
{q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
{q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
{q:"ما عاصمة **كرواتيا **",a:"زغرب"},
{q:"ما عاصمة ** كوبا**",a:"هافانا"},
{q:"ما عاصمة ** قبرص**",a:" "},
{q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
{q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
{q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
{q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
{q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
{q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
{q:"ما عاصمة **قطر  **",a:"الدوحة"},
{q:"ما عاصمة **السعودية  **",a:"الرياض"},
{q:"ما عاصمة **سوريا  **",a:"دمشق"},
{q:"ما عاصمة **تركيا  **",a:"انقرة"},
{q:"ما عاصمة **العراق  **",a:"بغداد"},
{q:"ما عاصمة **البنان  **",a:"بيروت"},
{q:"ما عاصمة **فلسطين  **",a:"القدس"},
{q:"ما عاصمة **امريكا  **",a:"واشنطن"},
{q:"ما عاصمة **الاردن  **",a:"عمان"},    
{q:"ما عاصمة **السودان  **",a:"خرطوم"},
{q:"ما عاصمة **الما��يا  **",a:"برلين"},
{q:"ما عاصمة **كندا  **",a:"اوتاوا"},
{q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
];
if(message.content == prefix+"عواصم"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('سؤال عواصم')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.q);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "عاصمة") return
       if(result.content == ask.a){
         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                              var embedx = new Discord.RichEmbed()
            .setTitle(':x:خطاء')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(`**${result.author.username}** الإجابة خاطئة`);
            message.channel.sendEmbed(embedx);
       }
 });
}
});


const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ ... ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
	   var prefix = "$";
   if (message.content.startsWith(prefix + "كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('SkyBot.' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});	

var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="$";//البريفكس
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('📘').then( r => {
        msg.react('📙')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });


                                 client.on('message' , message => {
                                    var prefix = "$"
                                    
                                    if (message.author.bot) return;
                                    if (message.content.startsWith(prefix + "contact")) {
                                    if (!message.channel.guild) return;
                                    
                                    
                                    
                                    let args = message.content.split(" ").slice(1).join(" ");
                                    
                                    
                                    
                                    client.users.get("467777208732352512","467777208732352512").send(
                                        "\n" + "**" + "● السيرفر :" + "**" +
                                        "\n" + "**" + "» " + message.guild.name + "**" +
                                        "\n" + "**" + " ● المرسل : " + "**" +
                                        "\n" + "**" + "» " + message.author.tag + "**" +
                                        "\n" + "**" + " ● الرسالة : " + "**" +
                                        "\n" + "**" + args + "**")
                                    
                                    let embed = new Discord.RichEmbed()
                                         .setAuthor(message.author.username, message.author.avatarURL)
                                         .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
                                         .setThumbnail(message.author.avatarURL)
                                         .setFooter("By : .iiMosTaFaYT#1001")
                                                                                    
                                    
                                    message.channel.send(embed);
                                    
                                    
                                    }
                                        
                                    });    
                                    
                                    
                                    client.on('message', message => { 
                                        var prefix ="$";
                                               if (message.content.startsWith(prefix + "user")) {
                                         var args = message.content.split(" ").slice(1);
                                         let user = message.mentions.users.first();
                                         var men = message.mentions.users.first();
                                            var heg;
                                            if(men) {
                                                heg = men
                                            } else {
                                                heg = message.author
                                            }
                                          var mentionned = message.mentions.members.first();
                                             var h;
                                            if(mentionned) {
                                                h = mentionned
                                            } else {
                                                h = message.member
                                            }
                                                   moment.locale('ar-TN');
                                          var id = new  Discord.RichEmbed()
                                          .setAuthor(message.author.username, message.author.avatarURL) 
                                        .setColor("#707070")
                                        .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
                                        .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
                                        .setFooter(`SkyBot.`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
                                        .setThumbnail(heg.avatarURL);
                                        message.channel.send(id)
                                    }       });
                                    
                                    
                                    client.on('message', message => {
                                        if (message.content.startsWith("$bans")) {
                                            message.guild.fetchBans()
                                            .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
                                      .catch(console.error);
                                    }
                                    });
                                    
                                    
                                    client.on('message', message => {
                                            if (message.content === "$inv") {
                                                if(!message.channel.guild) return;
                                            let embed = new Discord.RichEmbed()
                                            .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
                                            .setTitle(`:small_orange_diamond: اضغط هنا `)
                                            .setURL(`https://discordapp.com/oauth2/authorize?client_id=400489866573512705&permissions=8&scope=bot`)
                                            .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
                                         message.channel.sendEmbed(embed);
                                           }
                                       });                                    

                                       client.on('message', message => {
                                        if (message.content === "$support") {
                                        let embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username)
                                     .setColor("#9B59B6")
                                     .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/htNpU3J**")
                                        
                                        
                                     message.channel.sendEmbed(embed);
                                       }
                                   });


                                   client.on('message', message => {
                                    var prefix = "$";
                            if (message.author.bot) return;
                            if (!message.content.startsWith(prefix)) return;
                        
                            let command = message.content.split(" ")[0];
                            command = command.slice(prefix.length);
                        
                            let args = message.content.split(" ").slice(1);
                        
                            if (command == "embed") {
                                if (!message.channel.guild) return message.reply('** This command only for servers **');
                                let say = new Discord.RichEmbed()
                                    .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
                                    .setDescription(args.join("  "))
                                    .setColor(0x23b2d6)
                                message.channel.sendEmbed(say);
                                message.delete();
                            }
                        });


                        client.on("message", message => {
                            var prefix = "$"
                            if (!message.content.startsWith(prefix)) return;
                              let command = message.content.split(" ")[0];
                              command = command.slice(prefix.length);
                                if(command === "mcskin") {
                                        const args = message.content.split(" ").slice(1).join(" ")
                                if (!args) return message.channel.send("** Type your skin name **");
                                const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
                            message.channel.send(image)
                                }
                            });       


                            client.on('message', message => {
                                if (message.content.startsWith(prefix + 'PHelp')) { 
                                    let pages = [`
                                ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                :earth_africa: The Public Commands :earth_africa: 
                                1༺༻  $id  | Shows User ID༺༻
                                2༺༻  $info | Shows User Info༺༻
                                3༺༻  $server | Shows Server Info༺༻
                                4༺༻  $ping | Shows Bot Ping༺༻
                                5༺༻  $uptime | Shows Bot Time༺༻
                                6༺༻ $invite | Shows Bot Invite Link༺༻
                                7༺༻  $patato | Shows Bot Info༺༻
                                8༺༻  $avatar | Shows User Avatar༺༻
                                9༺༻ $savatar | Shows Server Avatar༺༻
                                10༺༻  $mcskin  | Shows Minecraft Players Skin༺༻
                                11༺༻  $say  | Repeat What Your Saying༺༻
                                12༺༻  $makerole  | Make Server Roles༺༻
                                13༺༻  $makeroom  | Make Server Roles༺༻
                                14༺༻  $gif  | Gives You Gif ༺༻
                                15༺༻  $moveall  | Move All Members To Your Channel༺༻
                                16༺༻  $nick  | Nick Members༺༻
                                17༺༻  $hack  | Hack Game༺༻
                                18༺༻  $type  | Shows Bot is Typeing༺༻
                                19༺༻  $stype  | Stops The Bot From Typeing༺༻
                                20༺༻  $tag  | Give You Custom Words༺༻
                                21༺༻  $redo  | Redoing Whats You Saying༺༻
                                22༺༻  $2mv  | Makeing Channel For 2m༺༻
                                23༺༻  $em  | Makeing Your Words In Embed༺༻
                                24༺༻  $credits  | Shows Your Credits༺༻
                                25༺༻  $daily  | You Can Get 250 Credits Everyday༺༻
                                26༺༻  $rep  | Gives to the user REP༺༻
                                27༺༻  $profile  | Shows User Profile༺༻
                                28༺༻  $title  | Shows User title༺༻
                                ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                Click On ▶ To Go Administor Side
                                   `
                                ,`
                                ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                :closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
                                1༺༻  $clear | Clear The Chat༺༻
                                2༺༻  $bc | Msg Everyone In The Server༺༻
                                3༺༻  $kick | Kick With Reson༺༻
                                4༺༻  $ban | Ban With Reason༺༻
                                5༺༻ Make Room Called log For Logs༺༻
                                5༺༻ Make Room Called report For reports༺༻
                                ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                Click On ▶ To Go To Bot Info
                                   `,`
                                ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                1༺༻  There is Commands Just For NotGucci | Bot By:NotGucci༺༻
                                ༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
                                   `]
                                    let page = 1;
                                
                                    let embed = new Discord.RichEmbed()
                                    .setColor('RANDOM')
                                    .setFooter(`Page ${page} of ${pages.length}`)
                                    .setDescription(pages[page-1])
                                
                                    message.author.sendEmbed(embed).then(msg => {
                                
                                        msg.react('◀').then( r => {
                                            msg.react('▶')
                                
                                
                                        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
                                        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
                                
                                
                                        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
                                        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
                                
                                
                                
                                        backwards.on('collect', r => {
                                            if (page === 1) return;
                                            page--;
                                            embed.setDescription(pages[page-1]);
                                            embed.setFooter(`Page ${page} of ${pages.length}`);
                                            msg.edit(embed)
                                        })
                                        forwards.on('collect', r => {
                                            if (page === pages.length) return;
                                            page++;
                                            embed.setDescription(pages[page-1]);
                                            embed.setFooter(`Page ${page} of ${pages.length}`);
                                            msg.edit(embed)
                                        })
                                        })
                                    })
                                    }
                                }); 
                                
                                
                                client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      وصف عن البوت
                                      :gem: البوت فيه كثير ميزات حلوة و جميلة
                                      
                                       :rocket: البوت يعمل 24 ساعه
                                      
                                       :up: خدمة سبورت 24/7
                                      
                                       :free: البوت مجاني %100
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send(' ');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**Administrative Commands**__
                                    **  『$move @user / لسحب الشخص الى روومك』
                                      『$bc / رسالة جماعية الى كل اعضاء السيرفر』
                                      『$hchannel / اخفاء الشات』
                                      『$schannel / اضهار الشات المخفية』
                                      『$clear / مسح الشات』
                                      『$mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
                                      『$unmute @user / لفك الميوت عن الشخص 』
                                      『$kick @user <reason> / طرد الشخص من السيرفر』
                                      『$ban @user <reason> / حضر الشخص من السيرفر』
                                      『$mutechannel / تقفيل الشات』
                                      『$unmutechannel / فتح الشات』
                                      『$ct <name> / انشاء شات』
                                      『$cv <name> / انشاء رووم فويس』**
                                      
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   
                                   client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send('');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**General Commands**__
                                      **『$server / يعرض لك معلومات عن السيرفر』
                                      『$bot / يعرض لك كل معلومات البوت』
                                      『$fm / عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
                                      『$id /  معلومات عنك』
                                      『$allbots /  لعرض جميع البوتات الي بالسيرفر』
                                      『$savatar / صورة السيرفر』
                                      『$avatar / صورتك او صورة الي تمنشنة』
                                      『$inv / لدعوة البوت الى سيرفرك』
                                      『$support / سيرفر الدعم』
                                      『$contact / ارسال اقتراح او لمراسلة صاحب البوت』**
                                      
                                      
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send('');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**Music Commands**__
                                    **  『$play / لتشغيل اغنية』
                                      『$skip / تخطي الأغنية』
                                      『$join / دخول رومك الصوتي』
                                      『$stop / الخروج من رومك الصوتي』
                                      『$pause / ايقاف الاغنية مؤقتا』
                                      『$np / اظهار الاغنية اللي انت مشغلها حاليا』
                                      『$resume / تكملة الاغنية』
                                      『$queue  / اظهار قائمة التشغيل』**
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 


                                   client.on('message', async msg => { 
                                    if (msg.author.bot) return undefined;
                                    if (!msg.content.startsWith(prefix)) return undefined;
                                    
                                    const args = msg.content.split(' ');
                                    const searchString = args.slice(1).join(' ');
                                    
                                    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
                                    const serverQueue = queue.get(msg.guild.id);
                                
                                    let command = msg.content.toLowerCase().split(" ")[0];
                                    command = command.slice(prefix.length)
                                
                                    if (command === `play`) {
                                        const voiceChannel = msg.member.voiceChannel;
                                        
                                        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
                                        
                                        const permissions = voiceChannel.permissionsFor(msg.client.user);
                                        
                                        if (!permissions.has('CONNECT')) {
                                
                                            return msg.channel.send("I don't have enough permissions to join your voice channel!");
                                        }
                                        
                                        if (!permissions.has('SPEAK')) {
                                
                                            return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
                                        }
                                
                                        if (!permissions.has('EMBED_LINKS')) {
                                
                                            return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
                                        }
                                
                                        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                                
                                            const playlist = await youtube.getPlaylist(url);
                                            const videos = await playlist.getVideos();
                                            
                                
                                            for (const video of Object.values(videos)) {
                                                
                                                const video2 = await youtube.getVideoByID(video.id); 
                                                await handleVideo(video2, msg, voiceChannel, true); 
                                            }
                                            return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
                                        } else {
                                
                                            try {
                                
                                                var video = await youtube.getVideo(url);
                                                
                                            } catch (error) {
                                                try {
                                
                                                    var videos = await youtube.searchVideos(searchString, 5);
                                                    let index = 0;
                                                    const embed1 = new Discord.RichEmbed()
                                                    .setTitle(":mag_right:  YouTube Search Results :")
                                                    .setDescription(`
                                                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                                                    
                                                    .setColor("#f7abab")
                                                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                                                    
                                /////////////////					
                                                    try {
                                
                                                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                                            maxMatches: 1,
                                                            time: 15000,
                                                            errors: ['time']
                                                        });
                                                    } catch (err) {
                                                        console.error(err);
                                                        return msg.channel.send('No one respone a number!!');
                                                    }
                                                    
                                                    const videoIndex = parseInt(response.first().content);
                                                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                                                    
                                                } catch (err) {
                                
                                                    console.error(err);
                                                    return msg.channel.send("I didn't find any results!");
                                                }
                                            }
                                
                                            return handleVideo(video, msg, voiceChannel);
                                            
                                        }
                                        
                                    } else if (command === `skip`) {
                                
                                        if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
                                        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");
                                
                                        serverQueue.connection.dispatcher.end('Ok, skipped!');
                                        return undefined;
                                        
                                    } else if (command === `stop`) {
                                
                                        if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
                                        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
                                        
                                        serverQueue.songs = [];
                                        serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
                                        return undefined;
                                        
                                    } else if (command === `vol`) {
                                
                                        if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
                                        if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
                                        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
                                        
                                        serverQueue.volume = args[1];
                                        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
                                        
                                        return msg.channel.send(`Volume Now is **${args[1]}**`);
                                
                                    } else if (command === `np`) {
                                
                                        if (!serverQueue) return msg.channel.send('There is no Queue!');
                                        const embedNP = new Discord.RichEmbed()
                                        .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
                                        return msg.channel.sendEmbed(embedNP);
                                        
                                    } else if (command === `queue`) {
                                        
                                        if (!serverQueue) return msg.channel.send('There is no Queue!!');
                                        let index = 0;
                                //	//	//
                                        const embedqu = new Discord.RichEmbed()
                                        .setTitle("The Queue Songs :")
                                        .setDescription(`
                                        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
                                **Now playing :** **${serverQueue.songs[0].title}**`)
                                        .setColor("#f7abab")
                                        return msg.channel.sendEmbed(embedqu);
                                    } else if (command === `pause`) {
                                        if (serverQueue && serverQueue.playing) {
                                            serverQueue.playing = false;
                                            serverQueue.connection.dispatcher.pause();
                                            return msg.channel.send('Ok, paused');
                                        }
                                        return msg.channel.send('There is no Queue to Pause!');
                                    } else if (command === "resume") {
                                
                                        if (serverQueue && !serverQueue.playing) {
                                            serverQueue.playing = true;
                                            serverQueue.connection.dispatcher.resume();
                                            return msg.channel.send('Ok, resumed!');
                                            
                                        }
                                        return msg.channel.send('Queue is empty!');
                                    }
                                
                                    return undefined;
                                });
                                
                                async function handleVideo(video, msg, voiceChannel, playlist = false) {
                                    const serverQueue = queue.get(msg.guild.id);
                                    console.log(video);
                                    
                                
                                    const song = {
                                        id: video.id,
                                        title: Util.escapeMarkdown(video.title),
                                        url: `https://www.youtube.com/watch?v=${video.id}`
                                    };
                                    if (!serverQueue) {
                                        const queueConstruct = {
                                            textChannel: msg.channel,
                                            voiceChannel: voiceChannel,
                                            connection: null,
                                            songs: [],
                                            volume: 5,
                                            playing: true
                                        };
                                        queue.set(msg.guild.id, queueConstruct);
                                
                                        queueConstruct.songs.push(song);
                                
                                        try {
                                            var connection = await voiceChannel.join();
                                            queueConstruct.connection = connection;
                                            play(msg.guild, queueConstruct.songs[0]);
                                        } catch (error) {
                                            console.error(`I could not join the voice channel: ${error}!`);
                                            queue.delete(msg.guild.id);
                                            return msg.channel.send(`Can't join this channel: ${error}!`);
                                        }
                                    } else {
                                        serverQueue.songs.push(song);
                                        console.log(serverQueue.songs);
                                        if (playlist) return undefined;
                                        else return msg.channel.send(`**${song.title}**, just added to the queue! `);
                                    } 
                                    return undefined;
                                }
                                
                                function play(guild, song) {
                                    const serverQueue = queue.get(guild.id);
                                
                                    if (!song) {
                                        serverQueue.voiceChannel.leave();
                                        queue.delete(guild.id);
                                        return;
                                    }
                                    console.log(serverQueue.songs);
                                
                                    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                                        .on('end', reason => {
                                            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
                                            else console.log(reason);
                                            serverQueue.songs.shift();
                                            play(guild, serverQueue.songs[0]);
                                        })
                                        .on('error', error => console.error(error));
                                    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
                                
                                    serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
                                }
                                
                                

client.login(process.env.BOT_TOKEN);
