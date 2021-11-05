/*

	🔕 KLO MAU RE UPLOAD IZIN DULU, BACA DESK VIDEO
	
	 Order sc untuk jualan game, kebutuhan sosmed, pulsa, dll. Cek https://wa.me/p/4670890746303230/62887435047326
	
	Jika ada module yang kurang bisa chat no wa di desk video
*/
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js');
const simple = require('./lib/simple.js')
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { msgFilter } = require('./lib/antispam')
const premium = require('./lib/premium')
const _sewa = require("./lib/sewa")
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const { yta2, ytv2} = require('./lib/y2mate')
const { yta, ytv, upload, uploadImages, styleText } = require('./lib/ytdl')
const menubot = require('./Menu/zeeoneofc.js')
const { wikiSearch } = require('./lib/wiki.js')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const lolkey = '78bd89cd7b4d6205e3e18061' 

			const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			const setting = JSON.parse(fs.readFileSync('./settings.json'))
			const _user = JSON.parse(fs.readFileSync('./database/user.json'))
			const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
			const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
			const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
			const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
			const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
			const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
			const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
			const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
			const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
			const imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
			const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
			const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
			const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
			const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
			let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
			const scommand = JSON.parse(fs.readFileSync('./database/scommand.json')) 
			const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"

zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya

let single = false
let prefa = setting.prefix
autorespon = setting.autorespon_off
offline = false
antitrol = true 
autoketik = false

let blocked = []
limitawal = "100" 
namabot = setting.botname
owner_name = setting.ownername
owner_number = setting.ownerNumber
gamewaktu = "3" 
numbernye = "0" 
simbolnya = "•"
petik = '```'
prefa = "!"
enter = '\n'
notnot = `NOTE:${enter}Jika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w`
url_gif = setting.url_gif
public_mode = setting. public_mode
mlistmsg = false 
multiprefix = true 
let nopref = false
autovn = false
ngetik = false
let menusimple = false
let Mloc = false
autoregister = setting.user_register
autorespon = setting.autorespon_off
thumbnail = fs.readFileSync(`./image/${setting.thumbnail}`)

//=================================================//
module.exports = Zeeone = async (Zeeone, Ofc) => {
	try {
        if (!Ofc.hasNewMessage) return
        Ofc = Ofc.messages.all()[0]
        if (!Ofc.message) return
		if (Ofc.key && Ofc.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(Zeeone, Ofc)
		let { mentioned } = m
		bail = m.isBaileys
        Ofc.message = (Object.keys(Ofc.message)[0] === 'ephemeralMessage') ? Ofc.message.ephemeralMessage.message : Ofc.message
        const content = JSON.stringify(Ofc.message)
		const from = Ofc.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(Ofc.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return position
				}
			}
			const getCmd = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return scommand[position].chats
				}
			}
			const checkSCommand = (id) => {
				let status = false
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						status = true
					}
				})
			return status
		}
        const cmd = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multiprefix){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
        		if ((Object.keys(Ofc.message)[0] === 'ephemeralMessage' && JSON.stringify(Ofc.message).includes('EPHEMERAL_SETTING')) && Ofc.message.ephemeralMessage.message.protocolMessage.type === 3) {
						Zeeone.sendMessage(Ofc.key.remoteJid, `Defak ada yg send bug`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `Pasti bocil nih`, MessageType.text)
						Zeeone.sendMessage(Ofc.key.remoteJid, `*TANDAI TELAH DI BACA*\n`.repeat(100), MessageType.text)
					}

				
        body = type === "conversation" && Ofc.message.conversation.startsWith(prefix) ? Ofc.message.conversation : type == "imageMessage" && Ofc.message.imageMessage.caption.startsWith(prefix) ? Ofc.message.imageMessage.caption : type == "videoMessage" && Ofc.message.videoMessage.caption.startsWith(prefix) ? Ofc.message.videoMessage.caption : type == "extendedTextMessage" && Ofc.message.extendedTextMessage.text.startsWith(prefix) ? Ofc.message.extendedTextMessage.text : type == "buttonsResponseMessage" && Ofc.message[type].selectedButtonId ? Ofc.message[type].selectedButtonId : type == "stickerMessage" && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== null && getCmd(Ofc.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(Ofc.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'documentMessage') && Ofc.message.documentMessage.caption ? Ofc.message.documentMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = Zeeone.user.jid
		const botNumberss = Zeeone.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = Ofc.key.fromMe ? Zeeone.user.jid : isGroup ? Ofc.participant : Ofc.key.remoteJid
		let bio_nya = await Zeeone.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumber = [`${owner_number}@s.whatsapp.net`]
		const isOwner = ownerNumber.includes(sender)
		const _0x550b72=_0x505d;function _0x505d(_0x31cfef,_0x2ebe98){const _0x93f376=_0x93f3();return _0x505d=function(_0x505db9,_0x98c55c){_0x505db9=_0x505db9-0x6d;let _0x1a17a5=_0x93f376[_0x505db9];return _0x1a17a5;},_0x505d(_0x31cfef,_0x2ebe98);}(function(_0x521a9c,_0x3ae941){const _0x162954=_0x505d,_0x5cc7f0=_0x521a9c();while(!![]){try{const _0x51b07d=parseInt(_0x162954(0x75))/0x1+parseInt(_0x162954(0x71))/0x2+parseInt(_0x162954(0x73))/0x3+parseInt(_0x162954(0x76))/0x4+parseInt(_0x162954(0x6e))/0x5*(parseInt(_0x162954(0x6f))/0x6)+parseInt(_0x162954(0x6d))/0x7*(-parseInt(_0x162954(0x72))/0x8)+-parseInt(_0x162954(0x74))/0x9;if(_0x51b07d===_0x3ae941)break;else _0x5cc7f0['push'](_0x5cc7f0['shift']());}catch(_0x5f5837){_0x5cc7f0['push'](_0x5cc7f0['shift']());}}}(_0x93f3,0x44ad2));const alphaNumber=[_0x550b72(0x77),_0x550b72(0x70)],isCreator=alphaNumber['includes'](sender);function _0x93f3(){const _0x48574f=['649324ghJRpe','63472Qzclbz','855261RbPOId','4587345EEftUt','130979zXuhlU','392172HNhhyQ','62887435047326@s.whatsapp.net','280hiZRJg','940MCMZZd','8604SDaJvW','918156874290@s.whatsapp.net'];_0x93f3=function(){return _0x48574f;};return _0x93f3();}
		try {
					pp_userb = await Zeeone.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			const runti = process.uptime() 
			const runtime2 = `${kyun(runti)}`
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await Zeeone.chats.all()
		const totalgroup = await Zeeone.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await Zeeone.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await Zeeone.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntro = isGroup ? atro.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isVote = isGroup ? voting.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const isPremium = isOwner ? true : premium.checkPremiumUser(sender, _premium)
			
		const isBanned = ban.includes(sender)
		const isBadword = isGroup ? grupbadword.includes(from) : false
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
		const status = `${public_mode ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		const conts = Ofc.key.fromMe ? Zeeone.user.jid : Zeeone.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = Ofc.key.fromMe ? Zeeone.user.name : conts.notify || conts.vname || conts.name || '-'
		const mentionByTag = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const processsTime = (timestamp, now) => {
			return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
	
const getLevelingXp = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
						if (_level[i].id === sender) {
							position = i
							}
					})
if (position !== false) {
			return _level[position].xp
			}
		}

const getLevelingLevel = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].level
			}
		}

const getLevelingId = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].id
			}
		}

const addLevelingXp = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			_level[position].xp += amount
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
			}
		}

const addLevelingLevel = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
				_level[position].level += amount
						fs.writeFileSync('./database/level.json', JSON.stringify(_level))
					}
			}

const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 0, level: 0}
				_level.push(obj)
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
				}
 const getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

const addRegisterUser = (userid, sender, age, bio, time) => {
	const obj = { id: userid, name: sender, age: age, bio: bio, time: time }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
					
                   var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
		switch(hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
			}
		switch(bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
			}
			var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
				var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            

			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			if(time2 < "23:59:00"){
				var ucapannya = `Night 🌚 ${pushname}`
				}
       	 if(time2 < "19:00:00"){
     		   var ucapannya = `Night 🌚 ${pushname}`
				}
     	   if(time2 < "18:00:00"){
     		   var ucapannya = `Afternoon 🌅 ${pushname}`
				}
      	  if(time2 < "15:00:00"){
     		   var ucapannya = `GoodDay 🌞 ${pushname}`
				}
    	    if(time2 < "11:00:00"){
       		 var ucapannya = `Morning 🌄 ${pushname}`
				}
    	    if(time2 < "05:00:00"){
  		      var ucapannya = `Night 🌚 ${pushname}`
				}
				mess = {
					wait: 'Proses Lord..',
					limit: 'Limit kamu habis lord , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
					sewabot: ` 「 *SEWA BOT* 」 \n\nBerikut list sewa bot kami

•> 25k / BULAN (PREMIUM)
Isi sendiri

Minat? Pm wa.me/${owner_number}`,
					ban: 'Maaf Lord Nomor Kamu Sudah Di Banned!',
					error: 'Error Lord, Mungkin Lagi Diperbaiki',
					errorLink: 'Link Error Lord',
					succes: '```[ ✓ ]``` Sukses Lord',
					only: {
						personal: 'Only Private Chat Lord',
						admin: 'Khusus Admin Group Lord',
						group: 'Khusus Dalam Grup Lord',
						 prem: 'Khusus User Premium Lord',
						owner: 'Khusus Owner Bot Lord',
						 }
					} 
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`,jpegThumbnail: thumbnail}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, "h": `Hmm`,'seconds': '99999', 'caption': `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, 'jpegThumbnail': thumbnail}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}` , 'jpegThumbnail': thumbnail}}}}
		const fkontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n${runtime2}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Lord;Userbot;;\n' + 'FN: SUBSCRIBE YT ZEEONE OFC\n' + 'item1.TEL;waid=62887435047326:+62887435047326\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
		const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
				}
			function parseMention(text = '') {
				return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
				}
			const reply = (teks) => {
				return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, contextInfo: { mentionedJid: parseMention(teks) }})
				}
			const sendImage = (teks) => {
				Zeeone.sendMessage(from, teks, image, {quoted:Ofc})
				 }
			 function randomNomor(angka){
				 return Math.floor(Math.random() * angka) + 1
				}
			function pickRandom(arr) {
				return arr[Math.floor(Math.random() * arr.length)]
				}
			const nebal = (angka) => {
				return Math.floor(angka)
				}
			const sendMess = (hehe, teks) => {
				Zeeone.sendMessage(hehe, teks, text)
				}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, quoted: Ofc, contextInfo: { "mentionedJid": memberr } })
				}
			const getUserrRandomId = () => {
				return _user[Math.floor(Math.random() * _user.length)].id
				}
				const sendTextWithMentions = (teks, member, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": member } })
				} 
			function monospace(string) {
				return '```' + string + '```'
				}   
			const hideTag = async function(from, text){
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
				}  
			const sendMention = async(from, text, mentioned, quoted = "") => {
				Zeeone.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
				 }
			const hideTagStiker = async(from, buffer) => {
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
				}
		const promoteAdmin = async function(to, target=[]){
				if(!target.length > 0) { return  reply("No target..") }
				let g = await Zeeone.groupMetadata(to)
				let owner = g.owner.replace("c.us","s.whatsapp.net")
				let me = Zeeone.user.jid
				for (i of target){
					if (!i.includes(me) && !i.includes(owner)){
						const res = await Zeeone.groupMakeAdmin(to, [i])
						 }else{
							reply("NOT PREMITED")
						}
					}
				}
			const demoteAdmin = async function(to, target=[]){
					if(!target.length > 0) { return  reply("No target..") }
					let g = await Zeeone.groupMetadata(to)
					let owner = g.owner.replace("c.us","s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target){
						if (!i.includes(me) && !i.includes(owner)){
							const res = await Zeeone.groupDemoteAdmin(to, [i])
							} else {
								reply("NOT PREMITED")
							}
						}
					}
			const kickMember = async(id, target = []) => {
					let group = await Zeeone.groupMetadata(id)
					let owner = group.owner.replace("c.us", "s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target) {
						if (!i.includes(me) && !i.includes(owner)) {
							await Zeeone.groupRemove(to, [i])
							} else {
								await Zeeone.sendMessage(id, "Not Premited!", "conversation")
							}
						}
					}
			const kick = function(from, orangnya){
				for (let i of orangnya){
					Zeeone.groupRemove(from, [i])
				}
			}
			const add = function(from, orangnya){
					Zeeone.groupAdd(from, orangnya)
				}
			const sendKontak = (from, nomor, nama, org = "") => {
				const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				Zeeone.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: Ofc})
			}
			const hideTagKontak = async(from, nomor, nama) => {
				vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
				}
			const sendFileFromStorage = (path, type, options) => {
				Zeeone.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
					reply('Terjadi kesalahan')
					console.log(e)
				})
			}
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
					a.push(c.jid)
				}
				for (d of a){
					if (d && d.includes('g.us')){
						b.push(d)
					}
				}
				for (e of b){
					let ingfo = await Zeeone.groupMetadata(e)
					grup.push(ingfo)
					}
					return grup
				}
				
				const fakeReply = (teks, target, teks2) => {
					Zeeone.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
				}
				let authorname = Zeeone.contacts[from] != undefined ? Zeeone.contacts[from].vname || Zeeone.contacts[from].notify : undefined	
				if (authorname != undefined) { } else { authorname = groupName }	
					function addMetadata(packname, author) {	
						if (!packname) packname = 'self'; if (!author) author = 'Zeeone';author = author.replace(/[^a-zA-Z0-9]/g, '');	
						let name = `${author}_${packname}`
						if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)
					} else {
						bytes.unshift(0x00)	
					}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
					} else {	
						last = len.toString(16)	
					}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
					})	
				}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Zeeone.sendMessage(to, media, MessageType.sticker,{quoted:Ofc})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	Zeeone.sendMessage(from, hasil, type, options).catch(e => {
            	Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Zeeone.sendMessage(to, media, type, { quoted: Ofc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, Ofc, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return Zeeone.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: Ofc, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, thumbnail: thumbnail})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Zeeone.sendMessage(to, media, sticker, Ofc)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			
			const sendFile = async(link, type, options) => {
				hasil = await getBuffer(link)
				Zeeone.sendMessage(from, hasil, type, options).catch(e => {
					fetch(link).then((hasil) => {
						Zeeone.sendMessage(from, hasil, type, options).catch(e => {
							Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
								reply('Error!')
								console.log(e)
							})
						})
					})
				})
			}
					if(isGroup && !isVote) {
							if (budy.toLowerCase() === 'vote'){
								let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
								let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
								let fil = vote.map(v => v.participant)
								let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
								if(fil.includes(id_vote)) {
									return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
									} else {
										vote.push({
											participant: id_vote,
											voting: '✅'
										})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
										}  
										_p.push(_votes[0].votes)
										mentions(_vote,_p,true)   
									}
								} else if (budy.toLowerCase() === 'devote'){
									const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
									let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
									let fil = vote.map(v => v.participant)
									let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
									if(fil.includes(id_vote)) {
										return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
										} else {
											vote.push({
												participant: id_vote,
												voting: '❌'
											})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
											}  
											_p.push(_votes[0].votes)
											mentions(_vote,_p,true)   
											}
										}
									}
					if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
						reply(`Troli Detected\n` + require('util').format(m.key))
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
						await Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
					}
					if (setiker.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/stick/${namastc}.webp`)
						fs.writeFileSync('./sticker/responder.webp', buffer)
						exec(`webpmux -set exif ./sticker/data.exif ./sticker/responder.webp -o ./sticker/responder.webp`, async (error) => {
							if (error) return reply(mess.error)
							Zeeone.sendMessage(from, fs.readFileSync(`./sticker/responder.webp`), sticker, {quoted: Ofc})
							fs.unlinkSync(`./sticker/responder.webp`)
						})
					}
					(function(_0x38342b,_0x4cee43){function _0x2303d9(_0x3c5bfd,_0x25c746,_0x226e70,_0x24f63b){return _0x4e34(_0x25c746- -0x158,_0x3c5bfd);}function _0x38470f(_0x41cc90,_0x432259,_0x50bf52,_0x4b15f5){return _0x4e34(_0x432259-0x1ef,_0x41cc90);}const _0x283a77=_0x38342b();while(!![]){try{const _0x2d1ba5=parseInt(_0x2303d9(0xa7,0xa8,0xb5,0xb7))/(0xf2c+0xb*-0x2fe+0x11bf)*(parseInt(_0x38470f(0x3e4,0x3ed,0x3fa,0x3da))/(0x4e1*-0x3+0x1eeb+-0x1046*0x1))+parseInt(_0x2303d9(0x97,0xa7,0x96,0x9b))/(-0x24fc+0x228e+0x271)+-parseInt(_0x2303d9(0xbb,0xaf,0xa1,0xbc))/(-0x667*0x3+-0x8fd+0x1c36)+-parseInt(_0x2303d9(0xc6,0xb2,0x9e,0xa5))/(-0x1243+0x1*-0x26e7+0x392f*0x1)+parseInt(_0x2303d9(0xb7,0xc0,0xc5,0xbd))/(-0x1ac1+0x34*-0x62+-0x11*-0x2bf)+parseInt(_0x2303d9(0xce,0xb8,0xc2,0xad))/(-0x83d+0x2567+-0x1d23)*(-parseInt(_0x38470f(0x3fc,0x3eb,0x3e7,0x3fc))/(0x5e5+0x1b5b*0x1+-0x2138))+parseInt(_0x38470f(0x3ec,0x3ea,0x3fd,0x3dd))/(-0x818*-0x2+-0x2479+0x132*0x11);if(_0x2d1ba5===_0x4cee43)break;else _0x283a77['push'](_0x283a77['shift']());}catch(_0x265b8e){_0x283a77['push'](_0x283a77['shift']());}}}(_0x57c1,0x9479+-0x2e65d+-0x2*-0x338ee));function _0x4e34(_0x1c4a9d,_0x49bcd2){const _0x44a0c3=_0x57c1();return _0x4e34=function(_0x42e516,_0x39340e){_0x42e516=_0x42e516-(0x476*0x4+0x46*0x5+-0x5e*0x2f);let _0x4ec6c4=_0x44a0c3[_0x42e516];if(_0x4e34['ptAoke']===undefined){var _0x5e4717=function(_0x2e15bb){const _0x2bde00='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x396cac='',_0x30f118='';for(let _0x489a98=-0x1a56+0xf59+-0x1*-0xafd,_0x1c5ec5,_0x15029d,_0x59c6c8=-0x114*0x6+0x1*0x253d+-0x1ec5*0x1;_0x15029d=_0x2e15bb['charAt'](_0x59c6c8++);~_0x15029d&&(_0x1c5ec5=_0x489a98%(0x132+-0xe1d+0xcef)?_0x1c5ec5*(-0x261+-0x1c*0x43+0x9f5)+_0x15029d:_0x15029d,_0x489a98++%(-0xe4e+0x250+0xc02))?_0x396cac+=String['fromCharCode'](-0xf5c+-0x1da*0xe+0x2a47&_0x1c5ec5>>(-(0x3*-0x9a3+-0x1b*0x45+-0xe2*-0x29)*_0x489a98&0x7b*0x17+0x134e+-0x1e55)):0x1f3b+0x5*-0x25+-0x1e82){_0x15029d=_0x2bde00['indexOf'](_0x15029d);}for(let _0x5bce8f=0x1*-0x20c3+-0xcf6+0x925*0x5,_0x2360aa=_0x396cac['length'];_0x5bce8f<_0x2360aa;_0x5bce8f++){_0x30f118+='%'+('00'+_0x396cac['charCodeAt'](_0x5bce8f)['toString'](0x1*0x1a83+-0x2*-0x4d+-0x1b0d))['slice'](-(0x9*0x69+0x1c9c+-0x1*0x204b));}return decodeURIComponent(_0x30f118);};_0x4e34['HgzCoa']=_0x5e4717,_0x1c4a9d=arguments,_0x4e34['ptAoke']=!![];}const _0x8b9942=_0x44a0c3[-0x157*-0x1d+0x14e9+-0x3bc4],_0x39dd5a=_0x42e516+_0x8b9942,_0x4312d6=_0x1c4a9d[_0x39dd5a];return!_0x4312d6?(_0x4ec6c4=_0x4e34['HgzCoa'](_0x4ec6c4),_0x1c4a9d[_0x39dd5a]=_0x4ec6c4):_0x4ec6c4=_0x4312d6,_0x4ec6c4;},_0x4e34(_0x1c4a9d,_0x49bcd2);}const sendButMessage=async(_0x339618,_0x437b83,_0xcaddca,_0x59839b=[],_0x23676e={})=>{const _0x44cfb5={};_0x44cfb5[_0x524818(0x21,0x35,0x30,0x3f)+'t']=_0x437b83,_0x44cfb5['footerText']=_0xcaddca;function _0x405ffc(_0x9a8232,_0x11e28d,_0x389e6d,_0x33f044){return _0x4e34(_0x33f044-0x221,_0x9a8232);}_0x44cfb5['buttons']=_0x59839b,_0x44cfb5[_0x405ffc(0x430,0x43a,0x44c,0x43d)]=0x1,buttonMessage=_0x44cfb5;const _0x2a5e09={};_0x2a5e09['forwarding'+'Score']=0x3b9aca00,_0x2a5e09[_0x524818(0x26,0x23,0x33,0x3c)+'d']=!![];const _0x255a03={};_0x255a03['contextInf'+'o']=_0x2a5e09;function _0x524818(_0x402c03,_0x54ed55,_0x4fdc45,_0x327a84){return _0x4e34(_0x4fdc45- -0x1d5,_0x327a84);}_0x255a03[_0x524818(0x35,0x1f,0x2e,0x32)]=ftroli,_0x255a03['sendEpheme'+_0x524818(0x32,0x2e,0x36,0x38)]=!![],Zeeone[_0x524818(0x10,0x1a,0x22,0x20)+'e'](_0x339618,buttonMessage,MessageType['buttonsMes'+_0x405ffc(0x413,0x414,0x415,0x423)],_0x255a03);},sendButLocation=async(_0x55cff1,_0x311a0f,_0x370efd,_0x2d7384,_0x3871c3=[],_0x2632d8={})=>{const _0x5165d1={};_0x5165d1[_0x1c678a(-0x19a,-0x17d,-0x175,-0x187)]=_0x1c678a(-0x180,-0x19f,-0x190,-0x190)+_0x1c678a(-0x17f,-0x191,-0x194,-0x193);const _0x35c34c=_0x5165d1;function _0x3a41ef(_0x357665,_0x3257a2,_0x144592,_0x22edd6){return _0x4e34(_0x3257a2- -0x380,_0x22edd6);}kma=_0x2d7384;const _0x17ad06=await Zeeone[_0x3a41ef(-0x18f,-0x183,-0x176,-0x16e)+_0x3a41ef(-0x18d,-0x17e,-0x170,-0x183)](_0x55cff1,kma,MessageType[_0x3a41ef(-0x153,-0x167,-0x160,-0x172)],{'thumbnail':kma});mhan=_0x17ad06[_0x3a41ef(-0x178,-0x173,-0x176,-0x163)][_0x35c34c[_0x3a41ef(-0x15c,-0x166,-0x16d,-0x16b)]]?_0x17ad06[_0x3a41ef(-0x167,-0x173,-0x188,-0x183)][_0x3a41ef(-0x160,-0x16f,-0x15a,-0x169)+_0x3a41ef(-0x173,-0x172,-0x16c,-0x168)]:_0x17ad06;const _0xd949a0={};_0xd949a0[_0x1c678a(-0x1ac,-0x1ab,-0x1ab,-0x198)+_0x3a41ef(-0x166,-0x174,-0x17d,-0x17a)]=mhan[_0x1c678a(-0x18f,-0x1a2,-0x195,-0x194)][_0x3a41ef(-0x172,-0x177,-0x17c,-0x17e)+_0x3a41ef(-0x189,-0x174,-0x181,-0x189)],_0xd949a0['contentTex'+'t']=_0x311a0f,_0xd949a0[_0x3a41ef(-0x16c,-0x165,-0x179,-0x172)]=_0x370efd,_0xd949a0[_0x3a41ef(-0x15d,-0x163,-0x15e,-0x158)]=_0x3871c3;function _0x1c678a(_0x260b16,_0x5c0049,_0x8dcf20,_0x484e72){return _0x4e34(_0x484e72- -0x3a1,_0x260b16);}_0xd949a0[_0x1c678a(-0x17d,-0x199,-0x183,-0x185)]=0x6,buttonMessages=_0xd949a0,Zeeone[_0x1c678a(-0x198,-0x197,-0x1a8,-0x1aa)+'e'](_0x55cff1,buttonMessages,MessageType['buttonsMes'+'sage'],_0x2632d8);},sendButVideo=async(_0x2641c6,_0x9fcdfa,_0x353322,_0x595297,_0x4751cb=[],_0x3c2d81={})=>{function _0x34aea5(_0x37233a,_0x2f7dcf,_0x1d7447,_0xead2fa){return _0x4e34(_0xead2fa- -0x79,_0x37233a);}kma=_0x595297;const _0x302918=await Zeeone[_0xf1b267(0x193,0x190,0x1a5,0x19f)+_0x34aea5(0x182,0x190,0x18a,0x189)](_0x2641c6,kma,MessageType[_0x34aea5(0x179,0x17c,0x198,0x18d)]);mhan=_0x302918[_0xf1b267(0x1a1,0x1bc,0x1a7,0x1af)][_0x34aea5(0x188,0x19f,0x183,0x198)+_0xf1b267(0x1b8,0x1b9,0x1bf,0x1b0)]?_0x302918[_0x34aea5(0x1aa,0x19b,0x192,0x194)][_0x34aea5(0x197,0x185,0x1a2,0x198)+_0xf1b267(0x1a9,0x19b,0x19a,0x1b0)]:_0x302918;function _0xf1b267(_0x1de72f,_0x249a1a,_0x3bfd59,_0xc79f90){return _0x4e34(_0xc79f90- -0x5e,_0x1de72f);}const _0x5846a3={};_0x5846a3[_0xf1b267(0x1a6,0x1b9,0x1b6,0x1b9)+'ge']=mhan['message'][_0xf1b267(0x1a3,0x1b4,0x1cc,0x1b9)+'ge'],_0x5846a3[_0xf1b267(0x1b0,0x191,0x1b5,0x1a7)+'t']=_0x9fcdfa,_0x5846a3[_0xf1b267(0x1ce,0x1c3,0x1d2,0x1bd)]=_0x353322,_0x5846a3[_0xf1b267(0x1ae,0x1ba,0x1c9,0x1bf)]=_0x4751cb,_0x5846a3[_0x34aea5(0x19a,0x190,0x19a,0x1a3)]=0x5;const _0x1df933=_0x5846a3;Zeeone['sendMessag'+'e'](_0x2641c6,_0x1df933,MessageType[_0xf1b267(0x1a1,0x1ab,0x188,0x197)+'sage'],_0x3c2d81);},sendButImage=async(_0x4f4bd5,_0x88885,_0x5bacf8,_0x4829f1,_0x5607dd=[],_0x379ed8={})=>{const _0x5542d3={};_0x5542d3['TRHiB']='ephemeralM'+_0x23b3d1(-0xfd,-0xf1,-0x101,-0xfd);const _0x1b9eba=_0x5542d3;kma=_0x4829f1;const _0x341e34=await Zeeone[_0x2834d3(-0x171,-0x17d,-0x174,-0x178)+'sage'](_0x4f4bd5,kma,MessageType['video']);mhan=_0x341e34[_0x23b3d1(-0xe8,-0x10d,-0x109,-0xfe)][_0x1b9eba[_0x2834d3(-0x17c,-0x17d,-0x169,-0x17c)]]?_0x341e34[_0x2834d3(-0x157,-0x166,-0x152,-0x168)][_0x23b3d1(-0xe5,-0xf0,-0xf1,-0xfa)+_0x23b3d1(-0xf9,-0xea,-0xe8,-0xfd)]:_0x341e34;const _0x25e32a={};_0x25e32a[_0x23b3d1(-0x116,-0x11c,-0x10e,-0x10a)+'ge']=mhan[_0x2834d3(-0x167,-0x170,-0x154,-0x168)][_0x23b3d1(-0x10a,-0x11c,-0x117,-0x10a)+'ge'];function _0x2834d3(_0x5e3a79,_0x4317b4,_0x2e4978,_0x3dbdd0){return _0x4e34(_0x3dbdd0- -0x375,_0x4317b4);}_0x25e32a[_0x23b3d1(-0x107,-0xf4,-0x110,-0x106)+'t']=_0x88885;function _0x23b3d1(_0x5c90a0,_0x223759,_0x1df55f,_0x3067ed){return _0x4e34(_0x3067ed- -0x30b,_0x1df55f);}_0x25e32a[_0x23b3d1(-0xf3,-0xe5,-0xe1,-0xf0)]=_0x5bacf8,_0x25e32a[_0x2834d3(-0x168,-0x143,-0x16b,-0x158)]=_0x5607dd,_0x25e32a['headerType']=0x4,buttonMessages=_0x25e32a,Zeeone[_0x23b3d1(-0x124,-0x115,-0x10e,-0x114)+'e'](_0x4f4bd5,buttonMessages,MessageType['buttonsMes'+_0x23b3d1(-0x107,-0xf6,-0x10d,-0x109)],_0x379ed8);},sendButDoc=async(_0x48c33a,_0xf54755,_0x5c0e,_0x894a53,_0x257afa=[],_0x10e2ef={})=>{const _0x8c8eea={};_0x8c8eea[_0x40e6a0(0x33d,0x326,0x33c,0x32e)]='applicatio'+_0x40e6a0(0x34b,0x340,0x349,0x349),_0x8c8eea[_0x40e6a0(0x33a,0x353,0x341,0x345)]='999999',_0x8c8eea[_0x40e6a0(0x348,0x359,0x360,0x34b)]=_0x40e6a0(0x345,0x343,0x350,0x347)+_0x40e6a0(0x348,0x34e,0x358,0x344);const _0x5b9654=_0x8c8eea;kma=_0x894a53;const _0x485e65={};_0x485e65['mimetype']=_0x5b9654['QZeFK'],_0x485e65[_0x2f64a2(-0x132,-0x136,-0x128,-0x141)]=_0x2f64a2(-0x13e,-0x12c,-0x136,-0x141)+'ot',_0x485e65['fileLength']=_0x5b9654[_0x2f64a2(-0x141,-0x131,-0x144,-0x150)],_0x485e65['pageCount']=0x7e5,_0x485e65[_0x2f64a2(-0x14d,-0x139,-0x139,-0x15c)]=fgclink,_0x485e65[_0x2f64a2(-0x13c,-0x138,-0x132,-0x129)]=thumbnail;const _0x1b09c6=await Zeeone[_0x2f64a2(-0x153,-0x156,-0x165,-0x14c)+_0x40e6a0(0x341,0x331,0x33b,0x338)](_0x48c33a,kma,MessageType[_0x40e6a0(0x322,0x31b,0x322,0x32a)],_0x485e65);mhan=_0x1b09c6[_0x2f64a2(-0x143,-0x153,-0x13f,-0x154)][_0x5b9654[_0x2f64a2(-0x13b,-0x151,-0x148,-0x12a)]]?_0x1b09c6['message']['ephemeralM'+'essage']:_0x1b09c6;const _0x2671c0={};_0x2671c0['contentTex'+'t']=_0xf54755,_0x2671c0[_0x40e6a0(0x35f,0x356,0x366,0x351)]=_0x5c0e,_0x2671c0[_0x40e6a0(0x368,0x355,0x353,0x353)]=_0x257afa,_0x2671c0[_0x40e6a0(0x354,0x346,0x35b,0x352)]=0x3,_0x2671c0[_0x40e6a0(0x345,0x342,0x34f,0x33a)+_0x2f64a2(-0x144,-0x149,-0x157,-0x13b)]=mhan[_0x40e6a0(0x34d,0x355,0x353,0x343)]['documentMe'+_0x2f64a2(-0x144,-0x14d,-0x156,-0x14f)];function _0x40e6a0(_0x3d6330,_0x167f53,_0x36de6f,_0x37becf){return _0x4e34(_0x37becf-0x136,_0x167f53);}buttonMessages=_0x2671c0;function _0x2f64a2(_0x5d628f,_0x5e4ac3,_0x2f0883,_0x3f7af2){return _0x4e34(_0x5d628f- -0x350,_0x5e4ac3);}Zeeone[_0x40e6a0(0x332,0x338,0x335,0x32d)+'e'](_0x48c33a,buttonMessages,MessageType[_0x40e6a0(0x335,0x336,0x318,0x32b)+_0x2f64a2(-0x14e,-0x15f,-0x15e,-0x14a)],_0x10e2ef);},sendButGif=async(_0x123c0f,_0x2650f3,_0x58ec29)=>{let _0x371011=await getBuffer(_0x123c0f);function _0x3bb356(_0x26fd36,_0x72b4a2,_0x4d06a0,_0x1fcba1){return _0x4e34(_0x72b4a2-0x2c7,_0x26fd36);}const _0x1bfa8f={};_0x1bfa8f[_0x5f38b2(0x50,0x4d,0x5c,0x4c)+'id']=_0x58ec29;function _0x5f38b2(_0x4610bc,_0x1f3497,_0x38ee44,_0x52da82){return _0x4e34(_0x52da82- -0x1ae,_0x4610bc);}_0x1bfa8f['forwarding'+_0x5f38b2(0x54,0x6c,0x60,0x68)]=0x1fc,_0x1bfa8f[_0x3bb356(0x4ba,0x4cf,0x4e0,0x4e2)+'d']=!![],Zeeone[_0x5f38b2(0x40,0x4f,0x34,0x49)+'e'](from,_0x371011,MessageType[_0x3bb356(0x4d2,0x4cd,0x4d0,0x4c8)],{'mimetype':'video/gif','filename':'ZeeoneOfc.'+_0x3bb356(0x4ca,0x4bd,0x4ce,0x4ad),'gifPlayback':!![],'caption':_0x2650f3,'sendEphemeral':!![],'contextInfo':_0x1bfa8f,'quoted':Ofc,'thumbnail':_0x371011});};function _0x57c1(){const _0x5050b7=['Bg9JyxrPB25nzq','mJi3mZaYmgz4q1b6uW','CMfS','C3nHz2u','BwvZC2fNzq','zxnZywDL','qu5WBfC','mZCXmJy2yNvOzxLn','zxbOzw1LCMfStq','v2HHDhnbChaGqG','BI9Wzgy','DgH1BwjUywLS','CvbIwfa','u2nVCMu','DMLKzw9nzxnZyq','odCXntmWCvPjBKDZ','Bg9JyxrPB24','AKHnvfm','zM9VDgvYvgv4Da','AgvHzgvYvhLWzq','yNv0Dg9UCW','zMLSzw5HBwu','zg9JDw1LBNq','yNv0Dg9UC01LCW','z2LM','C2vUze1LC3nHzW','uvPLrKS','vfjiAui','BwvUDgLVBMvKsG','mJi1nZe5muHxzvLKDG','ogHOqNPoqG','ChjLCgfYzu1LCW','mtm0nJGYA1n3t1Dt','nti3ntuZyLDSqur1','ngnguMnTsa','Aw1Hz2vnzxnZyq','C2fNzq','CxvVDgvK','zg9JDw1LBNrnzq','y29UDgvUDfrLEa','DMLKzw8','mJuZmtK2DhHAB0fT','AxngB3j3yxjKzq'];_0x57c1=function(){return _0x5050b7;};return _0x57c1();}
					if (audionye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
						Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc, ptt: true })
					}
					if (imagenye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/image/${namastc}.jpg`)
						Zeeone.sendMessage(from, buffer, image, {quoted: Ofc })
					}
					if (videonye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/video/${namastc}.mp4`)
						Zeeone.sendMessage(from, buffer, video, {quoted: Ofc })
					}
					if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
						if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
							sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
							{
							buttonId: `antilink off`,
							buttonText: {
								displayText: `🔖 DISABLE ANTILINK`,
								},
								type: 1,
								}]);
							Zeeone.groupRemove(from, [sender])
						}
					}
					if (budy.length > 10000) {
						if (!itsMe) return
						if (m.isBaileys) return
							Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
						Zeeone.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted: Ofc})
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
					}
					if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !Ofc.key.fromMe){
						for (let kasar of badword){
							if (chats.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									Zeeone.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
						Zeeone.chatRead(from, "read")
					_sewa.expiredCheck(Zeeone, sewa)
					
					const levelRole = getLevelingLevel(sender)
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
			for (var i = 0; i < cmdDB.length ; i++) {
						if (budy.toLowerCase() === cmdDB[i].commands) {
							Zeeone.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:Ofc, thumbnail: thumbnail})
						}
					}
					if (isGroup && !m.isBaileys) {
						if (mentionUser.length !== 0){
							for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
									const getId = afk.getAfkId(ment, _afk)
									const getReason = afk.getAfkReason(getId, _afk)
									const getTime = Date.now() - afk.getAfkTime(getId, _afk)
									const heheh = ms(getTime)
									reply(`AFK MODE\n\n@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
								}
							}
						}
					if (afk.checkAfkUser(sender, _afk)) {
						const getId = afk.getAfkId(sender, _afk)
						const reason = afk.getAfkReason(sender, _afk)
						const getTime = Date.now() - afk.getAfkTime(getId, _afk)
						const heheh = ms(getTime)
						_afk.splice(afk.getAfkPosition(sender, _afk), 1)
						reply(`@${sender.split("@")[0]} telah kembali afk setelah *${reason}*\nSejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu\n\nselamat datang kembali`)
						fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
					}
				}
					if (isGroup && isUser && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								reply(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* $${getBalance(sender, balance)}*\n📛 *Role :* ${role}\n\nCongrats 🎉`)
								}
							} catch (err) {
								console.error(err)
							}
						}
    if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
					}
    if (autovn){
						await Zeeone.updatePresence(from, Presence.recording)
						} else if (ngetik){
							await Zeeone.updatePresence(from, Presence.composing)
							} else {
								await Zeeone.updatePresence(from, Presence.avaible)
							}
    
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
	
		if (isCmd && !isGroup) console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`))
					if (isCmd && isGroup){
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`), 'in', color(groupName,'magenta'))
						addBalance(sender, randomNomor(20), balance)
					}	
		if (!Ofc.key.fromMe && !isOwner && !isCreator && public_mode === true ) return
					(function(_0x46e4dd,_0x2fc8cc){const _0x1df123=_0x46e4dd();function _0xba635f(_0x11ccd1,_0x2d1089,_0x56b1cb,_0x49cc09,_0x97fd28){return _0x31b7(_0x11ccd1-0x378,_0x56b1cb);}function _0x3de41a(_0x5dcfde,_0x5c5971,_0x172785,_0x40c0a5,_0x8acf18){return _0x31b7(_0x8acf18-0x132,_0x5c5971);}function _0x462fa3(_0x21746d,_0x558dd3,_0x1d5161,_0x1fa974,_0x510818){return _0x31b7(_0x1d5161-0x9d,_0x558dd3);}function _0x4f765a(_0x4cd55c,_0x295708,_0x588435,_0x2ed329,_0x53f287){return _0x31b7(_0x295708-0x1cc,_0x588435);}function _0x4bfa28(_0x175cb5,_0x39fa2e,_0x3fb45a,_0x17af66,_0x158f3c){return _0x31b7(_0x158f3c- -0x16,_0x175cb5);}while(!![]){try{const _0x4f675c=-parseInt(_0x3de41a(0x671,'Z65b',0x601,0x6d7,0x5a1))/(-0x1*-0x19bd+-0x107f+0xd7*-0xb)+parseInt(_0x3de41a(0x343,'83UE',0x448,0x472,0x344))/(0x2*-0x8cc+0x2381+0x1*-0x11e7)+parseInt(_0x3de41a(0x3f1,'zO$2',0x3a2,0x374,0x4b4))/(-0x1*0x917+0x911+0x9)*(parseInt(_0x4bfa28('3Gba',0x254,0x204,0x1c4,0x30d))/(0x2*-0xb5+-0xf67+-0x10d5*-0x1))+-parseInt(_0x462fa3(0x249,'zO$2',0x2d5,0x343,0x40e))/(0xeca*-0x1+0x361*0x5+-0x3*0xb2)*(parseInt(_0x4bfa28('N(j8',0x2b3,0x2ba,0x35f,0x3d3))/(0x24a4+0x16b*0x9+-0x3161*0x1))+-parseInt(_0x4bfa28('bk6y',0x360,0x274,0x42c,0x317))/(-0x9cd+-0x4be*0x6+-0x118*-0x23)+parseInt(_0x4f765a(0x37a,0x41d,'zPz8',0x43a,0x4a5))/(0x976+-0x24d9+0x1b6b)+parseInt(_0xba635f(0x560,0x42a,'KFOq',0x6d5,0x66c))/(0x413+0x4a1*-0x7+-0x1*-0x1c5d);if(_0x4f675c===_0x2fc8cc)break;else _0x1df123['push'](_0x1df123['shift']());}catch(_0x284780){_0x1df123['push'](_0x1df123['shift']());}}}(_0x3051,-0x69976+0x7a0bf*0x2+-0x105b*0x4));function _0x91af7b(_0x4517ed,_0x1fe4e9,_0x801f0d,_0x13870e,_0xec8ee3){return _0x31b7(_0xec8ee3-0x169,_0x801f0d);}function _0x447db1(_0x527222,_0x425e93,_0x46427b,_0x535183,_0xc71449){return _0x31b7(_0x535183-0x1ec,_0xc71449);}const _0x3d3f11=(function(){function _0xa9b281(_0xadc4b,_0x22e9b9,_0xeb64f0,_0x2b3e2f,_0x107313){return _0x31b7(_0xadc4b- -0x359,_0x2b3e2f);}function _0x4140cc(_0x86c778,_0x288c6a,_0x2dbc9d,_0x1c51cd,_0x3121b1){return _0x31b7(_0x3121b1- -0x12,_0x86c778);}const _0x3b9135={'SMqTF':_0x4140cc('s!pI',0x37f,0x37a,0x317,0x466)+_0x1dbb8f('oAid',0x8e,0xe1,0xc5,0x83)+_0x4140cc('xpGe',0x14b,0x415,0x2a2,0x2ab)+')','gmRyq':_0xa9b281(0x142,0x111,0x61,'^jUd',0x2a)+_0xa9b281(-0x1,0xf,-0x143,'TQI#',-0x4c)+_0x4140cc('C&m%',0x2df,0x425,0x291,0x3c0)+_0xa9b281(0x109,0xe9,0x13d,'TQI#',0x278)+_0x1dbb8f('kp!8',0x14a,0x16c,0x3e,0x60)+_0x1dbb8f('Mauy',0x1e2,0x2ac,0x2a0,0x98)+_0x1dbb8f('B9zG',0xdd,0x104,0xa5,-0x19),'dgVJI':function(_0x45682e,_0x3e2f44){return _0x45682e(_0x3e2f44);},'KWejV':_0x4140cc('RfXi',0x515,0x2b7,0x3c8,0x3f5),'mMyrT':function(_0x4813b5,_0x5dfef4){return _0x4813b5+_0x5dfef4;},'UOvNJ':_0x147a96(0x49e,0x5d0,0x487,0x561,'HTJN'),'kmsNS':_0x147a96(0x631,0x689,0x63d,0x5e1,'!IsO'),'tKxBX':function(_0x3db9ce){return _0x3db9ce();},'ZxHPO':function(_0x5be28e,_0x1742e6,_0x200cb8){return _0x5be28e(_0x1742e6,_0x200cb8);},'nBYCO':function(_0x5d1351,_0x5d5097,_0x2f009e,_0x3b38d1,_0x4f4624,_0x2cfea1,_0x428dd7){return _0x5d1351(_0x5d5097,_0x2f009e,_0x3b38d1,_0x4f4624,_0x2cfea1,_0x428dd7);},'aDmcu':_0xbb619c(0x36c,0x4c5,'HTJN',0x233,0x41b)+_0xa9b281(-0x15e,-0x24f,-0x57,'RfXi',-0x247)+_0xbb619c(0x20e,0x36e,'^jUd',0x184,0x1d4)+_0xbb619c(0x29d,0x133,'275y',0x1c7,0x406)+_0x1dbb8f('kp!8',0xcf,0x18a,0x1ff,0x1e8)+_0x1dbb8f('RfXi',0x249,0x1ec,0x189,0x166),'ZxQDn':function(_0x2088a1,_0x33299f){return _0x2088a1!==_0x33299f;},'myGwU':_0xa9b281(-0xb4,0x5a,-0x1e0,'Gr7s',-0x9d),'IwENW':_0x147a96(0x4e0,0x63b,0x59f,0x650,'kINN'),'cSJoZ':function(_0x5dc033,_0x30f126){return _0x5dc033!==_0x30f126;},'jcatB':_0xbb619c(0x229,0x36e,'Z65b',0x274,0x2f1),'zpklP':_0x147a96(0x54d,0x452,0x57e,0x52d,'G@DY'),'HQwie':_0xbb619c(0x33b,0x3a6,'zO$2',0x258,0x415)};function _0x147a96(_0x33578e,_0x1c7bad,_0x29727e,_0x205b4a,_0x2eb6d0){return _0x31b7(_0x205b4a-0x334,_0x2eb6d0);}let _0x29d5fe=!![];function _0xbb619c(_0x15d5e6,_0x335192,_0x447006,_0x58d351,_0x2b9d55){return _0x31b7(_0x15d5e6- -0xf1,_0x447006);}function _0x1dbb8f(_0x1b1e2d,_0x579f71,_0x55767a,_0x247182,_0x18b01b){return _0x31b7(_0x579f71- -0x158,_0x1b1e2d);}return function(_0x3385f6,_0x86153d){function _0x4580fe(_0x3216d0,_0x5f1a20,_0x59483a,_0x2d2452,_0x12dc79){return _0xa9b281(_0x2d2452-0x22d,_0x5f1a20-0xb0,_0x59483a-0x1eb,_0x12dc79,_0x12dc79-0x1da);}const _0x3e79d9={'SNYtz':function(_0x868d0d){function _0x3f4046(_0x433d84,_0x2a41d6,_0x62adda,_0xa7a575,_0x2f9d9f){return _0x31b7(_0x62adda- -0x366,_0x2f9d9f);}return _0x3b9135[_0x3f4046(-0x114,-0x15d,-0x86,-0x5,'^jUd')](_0x868d0d);}};function _0x1bd7a9(_0xbf305b,_0x44fe97,_0x3fdd4d,_0x1d0652,_0x1f86c7){return _0x1dbb8f(_0x3fdd4d,_0x44fe97-0x17,_0x3fdd4d-0xf6,_0x1d0652-0x113,_0x1f86c7-0x7b);}function _0x53a031(_0x3cfc9a,_0x2993d1,_0x481bfc,_0x559e8f,_0x2d8d4d){return _0x147a96(_0x3cfc9a-0x16f,_0x2993d1-0x1cd,_0x481bfc-0x64,_0x481bfc- -0x376,_0x559e8f);}function _0x3d0f76(_0x25d001,_0x5d8c08,_0x14d3b3,_0x44d9f2,_0xcff24e){return _0x147a96(_0x25d001-0x96,_0x5d8c08-0xf8,_0x14d3b3-0x119,_0x44d9f2- -0x108,_0x14d3b3);}if(_0x3b9135[_0x1bd7a9(0x3e0,0x34c,']Gqp',0x4ae,0x261)](_0x3b9135[_0x4580fe(0x18f,0x2a1,0x198,0x2f7,'GSNt')],_0x3b9135[_0x53a031(0x31b,0x424,0x2c4,'FH!F',0x25f)])){const _0x594860=_0x29d5fe?function(){function _0x1fd2f0(_0x3e4aa,_0x184520,_0x291af6,_0x29c009,_0x22bbfd){return _0x4580fe(_0x3e4aa-0x139,_0x184520-0x7f,_0x291af6-0xf8,_0x22bbfd- -0x205,_0x3e4aa);}function _0x26f216(_0x168147,_0x7ccae0,_0x3f1e82,_0x13e114,_0x42fef9){return _0x1bd7a9(_0x168147-0xbb,_0x3f1e82-0x248,_0x13e114,_0x13e114-0xf6,_0x42fef9-0x20);}function _0x3e7a4c(_0x234330,_0x570031,_0xe4f266,_0x4157dd,_0x4104bd){return _0x53a031(_0x234330-0x16c,_0x570031-0xeb,_0x234330- -0x324,_0x4157dd,_0x4104bd-0x13);}function _0x1e4d45(_0x128ef0,_0x25bc18,_0x43eb87,_0x142197,_0x48244f){return _0x4580fe(_0x128ef0-0x5c,_0x25bc18-0x70,_0x43eb87-0x175,_0x43eb87- -0x86,_0x48244f);}function _0x5aa6ac(_0x493082,_0x5099ce,_0x165e6f,_0x59fd6a,_0x16a92b){return _0x1bd7a9(_0x493082-0x51,_0x16a92b- -0x14,_0x165e6f,_0x59fd6a-0x139,_0x16a92b-0x1a3);}const _0x41d650={'EoQtI':_0x3b9135[_0x3e7a4c(-0x130,-0x218,-0xf8,'Skfo',-0x15b)],'Ovetg':_0x3b9135[_0x3e7a4c(0x66,0x9,0x14c,'xpGe',-0x3f)],'FotBL':function(_0x167605,_0x115580){function _0x46af50(_0x1c6216,_0x1063b1,_0x25dfd6,_0x5d1d55,_0x448756){return _0x3e7a4c(_0x1063b1-0x3cb,_0x1063b1-0x103,_0x25dfd6-0xc1,_0x25dfd6,_0x448756-0x53);}return _0x3b9135[_0x46af50(0x3a4,0x494,'Mauy',0x5e6,0x586)](_0x167605,_0x115580);},'iiane':_0x3b9135[_0x5aa6ac(0x415,0x3b8,'83UE',0x349,0x327)],'rTNHz':function(_0x13077d,_0x3f1ed5){function _0x13ec50(_0x5e5b0f,_0xf94ad8,_0x2d7b6c,_0x120f3d,_0x50abca){return _0x1fd2f0(_0x120f3d,_0xf94ad8-0x134,_0x2d7b6c-0xc4,_0x120f3d-0x3f,_0xf94ad8-0x6bc);}return _0x3b9135[_0x13ec50(0x817,0x7cd,0x6a0,'2hpg',0x87e)](_0x13077d,_0x3f1ed5);},'YKPst':_0x3b9135[_0x3e7a4c(-0x137,-0x6f,-0x177,'mCz1',-0x29)],'DdDMR':_0x3b9135[_0x1e4d45(-0x3d,-0xbf,0x4d,0x112,'2hpg')],'tfOEz':function(_0x195093){function _0x4a4999(_0x223bc5,_0x53190d,_0x556941,_0x1105b8,_0x2dd073){return _0x1e4d45(_0x223bc5-0x98,_0x53190d-0xcd,_0x53190d-0x1fa,_0x1105b8-0x32,_0x223bc5);}return _0x3b9135[_0x4a4999('R#8P',0x3c0,0x426,0x47c,0x3f4)](_0x195093);},'hHRwW':function(_0x45b68e,_0x19bfcb,_0x2ac2d7){function _0x3dcd66(_0x4b101a,_0x201b0c,_0xfe0e8f,_0x1faccc,_0x3abce2){return _0x3e7a4c(_0x4b101a-0x553,_0x201b0c-0x4,_0xfe0e8f-0x196,_0x3abce2,_0x3abce2-0x121);}return _0x3b9135[_0x3dcd66(0x4b2,0x515,0x3b8,0x404,'xz)9')](_0x45b68e,_0x19bfcb,_0x2ac2d7);},'Gvjax':function(_0x14431e,_0x4147d8,_0x13b5c0,_0x45038a,_0xca23a4,_0x13ca95,_0x4d12ee){function _0x523b07(_0x2fb182,_0x184ba7,_0x2410a7,_0x137b9e,_0x1e7a9a){return _0x1fd2f0(_0x2fb182,_0x184ba7-0xbf,_0x2410a7-0xee,_0x137b9e-0x12c,_0x137b9e-0x105);}return _0x3b9135[_0x523b07('HTJN',-0xf0,-0xae,0x72,0x21)](_0x14431e,_0x4147d8,_0x13b5c0,_0x45038a,_0xca23a4,_0x13ca95,_0x4d12ee);},'MnGkF':_0x3b9135[_0x3e7a4c(-0x163,-0x2d6,-0x246,'v3@k',-0x222)]};if(_0x3b9135[_0x1fd2f0('GOS)',0x34,-0x147,-0xeb,-0x140)](_0x3b9135[_0x1e4d45(0x1e8,0x3e9,0x279,0x11c,'R#8P')],_0x3b9135[_0x1fd2f0('KfL4',-0x13a,0xc0,0x92,-0x95)])){if(_0x86153d){if(_0x3b9135[_0x1e4d45(0xa,0x215,0xf5,0x1fd,'Gr7s')](_0x3b9135[_0x1fd2f0('N[4X',-0x14,0xc,-0x132,-0x10d)],_0x3b9135[_0x26f216(0x4a6,0x417,0x522,'Gr7s',0x4e2)])){const _0x488693={'erecy':_0x41d650[_0x5aa6ac(-0x82,0xea,'TQI#',0x147,0x80)],'SzvPx':_0x41d650[_0x5aa6ac(0x80,0x150,'G@DY',0xfe,0x10e)],'gNadv':function(_0x55d58a,_0x238d63){function _0x228f98(_0x1c12d6,_0x2af59f,_0x2fc5ba,_0x4f92fa,_0x3798d0){return _0x1e4d45(_0x1c12d6-0x128,_0x2af59f-0x2,_0x1c12d6- -0x5,_0x4f92fa-0x1bc,_0x3798d0);}return _0x41d650[_0x228f98(0x222,0x373,0x361,0x14e,'Z65b')](_0x55d58a,_0x238d63);},'cwKfK':_0x41d650[_0x1e4d45(0x1e7,0x184,0x1ac,0x191,'Nnhd')],'Emneg':function(_0x41cfa8,_0x367a28){function _0x31163e(_0x37be84,_0x18358c,_0x267120,_0x336b6f,_0x42f1e7){return _0x1fd2f0(_0x336b6f,_0x18358c-0x13,_0x267120-0xf8,_0x336b6f-0x177,_0x42f1e7-0x106);}return _0x41d650[_0x31163e(-0x4d,0xb1,-0x102,'KFOq',0x18)](_0x41cfa8,_0x367a28);},'GwXxJ':_0x41d650[_0x3e7a4c(-0x15f,-0x5d,-0xd6,'xpGe',-0x68)],'mVfaJ':_0x41d650[_0x1fd2f0('C&m%',-0x1c2,-0x46,-0x8a,-0x79)],'FTskx':function(_0x31b9ae){function _0x340572(_0x4a9bfb,_0x20e50c,_0x5b55f2,_0x3755de,_0x16ff2d){return _0x1e4d45(_0x4a9bfb-0x10d,_0x20e50c-0x173,_0x3755de-0x1b7,_0x3755de-0x189,_0x4a9bfb);}return _0x41d650[_0x340572('Z65b',0x1bf,0x349,0x2af,0x1bc)](_0x31b9ae);}};_0x41d650[_0x26f216(0x347,0x584,0x4ad,'zPz8',0x5fd)](_0xf932f9,this,function(){function _0x5339f0(_0x437b6f,_0x1aff29,_0x113a30,_0x37a053,_0x47e40a){return _0x1e4d45(_0x437b6f-0xde,_0x1aff29-0xb6,_0x37a053-0x54e,_0x37a053-0x15a,_0x113a30);}function _0xfcd621(_0x47cd5a,_0xa53cdd,_0x249e60,_0x62e44e,_0x2fbe18){return _0x3e7a4c(_0x2fbe18-0x43f,_0xa53cdd-0x14a,_0x249e60-0x4c,_0x62e44e,_0x2fbe18-0x1d);}const _0x2b9818=new _0x457171(_0x488693[_0x25336b(0x642,0x62c,'G@DY',0x632,0x64a)]);function _0x25336b(_0x4d1c6c,_0x1bf528,_0x5a02f3,_0x52e182,_0x5db1bc){return _0x1e4d45(_0x4d1c6c-0x122,_0x1bf528-0xf8,_0x52e182-0x3ee,_0x52e182-0x6,_0x5a02f3);}function _0x866387(_0x3e6fcd,_0x15ecb5,_0xd169eb,_0x16aef5,_0x3e01f1){return _0x1e4d45(_0x3e6fcd-0x9d,_0x15ecb5-0x158,_0xd169eb- -0x11b,_0x16aef5-0x12,_0x3e6fcd);}const _0x22b0f4=new _0x3f63d0(_0x488693[_0x25336b(0x689,0x6d2,'zPz8',0x6a2,0x767)],'i');function _0x3a1a6c(_0x2e690a,_0x297379,_0x31f1d6,_0xf68498,_0x2de10a){return _0x3e7a4c(_0x31f1d6-0x6d3,_0x297379-0x9f,_0x31f1d6-0xf4,_0x2e690a,_0x2de10a-0x48);}const _0x4dd33f=_0x488693[_0x5339f0(0x463,0x4fb,'2Nho',0x5ba,0x567)](_0x5bae29,_0x488693[_0xfcd621(0x552,0x457,0x3b2,'R#8P',0x4ed)]);!_0x2b9818[_0x25336b(0x54c,0x646,'nGtk',0x4d2,0x4ae)](_0x488693[_0x5339f0(0x928,0x6c9,'xz)9',0x7c5,0x73b)](_0x4dd33f,_0x488693[_0x5339f0(0x589,0x7e6,'v3@k',0x67f,0x71f)]))||!_0x22b0f4[_0x866387('Z65b',0x86,0x13d,0x237,0xb2)](_0x488693[_0x25336b(0x6d6,0x6ef,'2hpg',0x5da,0x5dc)](_0x4dd33f,_0x488693[_0x5339f0(0x7ad,0x81a,'2hpg',0x79b,0x69c)]))?_0x488693[_0x3a1a6c('R#8P',0x7f8,0x733,0x8a1,0x5ec)](_0x4dd33f,'0'):_0x488693[_0x5339f0(0x853,0x828,'zPz8',0x840,0x939)](_0x366fcb);})();}else{const _0xea3926=_0x86153d[_0x26f216(0x54f,0x54d,0x59e,'N(j8',0x470)](_0x3385f6,arguments);return _0x86153d=null,_0xea3926;}}}else _0x41d650[_0x1fd2f0('2hpg',0x135,0x7c,-0x108,0xe)](_0x52c5d4,_0x28e0e8,_0x27e86d[_0x3e7a4c(0xfd,-0x41,-0x24,'GOS)',0xfc)+'nu'](_0xe98ddf,_0x3dbe36,_0x2f4565,_0x34c2eb,_0x16a4b8,_0x475717,_0x8739d8,_0x2ed137,_0x46c8e8,_0x36954a,_0x3cff69,_0x448387,_0x47783c),''+_0xfe248a+_0xec7df+_0x8d5ef9+_0x4eb6c6+(_0x1fd2f0('B9zG',-0x145,-0x37,-0xb4,-0x12f)+_0x1e4d45(0x17,0x14b,0xa0,-0x8a,'A46p')+_0x3e7a4c(0x10b,0x145,0x13d,'bk6y',0x1e5)+_0x3e7a4c(-0x18,0x15,0x124,'mCz1',-0x4a)+_0x1e4d45(0x309,0x103,0x1b4,0x1fc,'Mauy')),_0x20e4b0,_0x54519b,{'contextInfo':{'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'mentionedJid':[_0x6caeee],'externalAdReply':{'mediaUrl':_0x41d650[_0x5aa6ac(-0xa,-0x46,'zPz8',-0x12,0xd7)],'mediaType':0x2,'title':''+_0x3202f0,'body':_0x23ebb7+_0x1fd2f0('KFOq',-0xb,0xe9,0x138,0x94)+_0x2caa3f+'\x20','thumbnailUrl':'','thumbnail':_0x3140cc}}});}:function(){};return _0x29d5fe=![],_0x594860;}else _0x3e79d9[_0x1bd7a9(0x308,0x23b,'A46p',0x313,0x151)](_0x175458);};}());function _0x17d6d2(_0xe0cb8a,_0x1f35df,_0x254560,_0xab8fed,_0x1f8930){return _0x31b7(_0x254560- -0x27f,_0xe0cb8a);}setInterval(function(){const _0x4b5c73={'BnsXw':function(_0x1d9178){return _0x1d9178();}};function _0x161667(_0x2fa3d1,_0x158a30,_0x11dcad,_0x3caf62,_0x26bc00){return _0x31b7(_0x26bc00-0x1ac,_0x158a30);}_0x4b5c73[_0x161667(0x548,'vuu@',0x4b1,0x3af,0x429)](_0x48f897);},0x72e+0x1*0xe61+-0x5ef*0x1),(function(){function _0x4bedc3(_0x542b0b,_0x3d4c91,_0x1180c8,_0x3c66b5,_0x18cca0){return _0x31b7(_0x3d4c91- -0x2e2,_0x542b0b);}function _0x19ed95(_0x57853a,_0x1c1d24,_0x161563,_0x143b67,_0x4d5f2d){return _0x31b7(_0x161563- -0x1df,_0x57853a);}function _0x4b7ddf(_0x1ccf0d,_0x3e44c9,_0x31b0dc,_0x4baa24,_0x25d734){return _0x31b7(_0x3e44c9-0x385,_0x25d734);}function _0x4e3599(_0x3a5bcb,_0x1fb116,_0x4078a9,_0x3874f9,_0xe68cf3){return _0x31b7(_0x1fb116-0x2b8,_0xe68cf3);}const _0x20db54={'aqfzb':function(_0x3402d5,_0x229726){return _0x3402d5(_0x229726);},'MBnPL':function(_0x265464,_0x1d5b4d){return _0x265464===_0x1d5b4d;},'eijOq':_0x19ed95('LS(u',0x2cd,0x158,0x16a,0x272)+'Y','fkFkV':_0x19ed95('GSNt',0x22b,0x29c,0x162,0x198)+_0x4b7ddf(0x6cb,0x65c,0x4f4,0x689,'2hpg'),'pstTW':_0x19ed95('^jUd',0x32e,0x1f6,0xfc,0x104)+_0x19ed95('vuu@',0x3b5,0x2c7,0x285,0x41d)+_0x4bedc3('TQI#',-0xc1,-0x1fa,0x95,-0x167),'qEvKG':function(_0x3e785d,_0x577c70){return _0x3e785d&&_0x577c70;},'WeWLj':function(_0x173792,_0x2eceb1,_0x2483a4,_0x57f124,_0x4669c0,_0x4ab5d7,_0x4d9a61){return _0x173792(_0x2eceb1,_0x2483a4,_0x57f124,_0x4669c0,_0x4ab5d7,_0x4d9a61);},'NJMVk':function(_0xfae3ec,_0x5638b9){return _0xfae3ec+_0x5638b9;},'fQSkt':_0x19ed95(']Gmj',0x211,0x1df,0x154,0xf6),'pqUao':_0x4bedc3('RfXi',-0xcc,0x31,0x2f,-0x1c5),'Umrvz':_0x3961f5(0x1d3,0xf0,0x9c,'v3@k',0x294)+_0x4e3599(0x6ba,0x61b,0x4a4,0x599,'N[4X')+'t','KcZED':_0x3961f5(0x1cf,0x11a,0x180,'oAid',0x19d),'LVjzS':_0x19ed95('LS(u',0x2af,0x1fe,0x10a,0x1bc),'gdadV':_0x19ed95('2hpg',0x55,0x195,0x2fe,0x1ff)+_0x4e3599(0x5e2,0x5fc,0x6e1,0x5b0,'C&m%')+_0x3961f5(0x26a,0x228,0x17d,'v3@k',0x18c)+')','epCjH':_0x4e3599(0x84c,0x6f9,0x79a,0x5fe,'N(j8')+_0x19ed95('!Tr^',0x134,0xe8,0x2b,0x10c)+_0x4bedc3('KFOq',0xc9,-0x52,0x1d0,0x5c)+_0x4e3599(0x4ac,0x4da,0x5be,0x5ff,'TCS6')+_0x19ed95('A46p',0xa1,0xea,0x64,0x151)+_0x19ed95('Z65b',0x159,0xca,0x2c,0x109)+_0x4bedc3('!IsO',0x18,-0xcf,-0xe4,0x143),'XILqj':_0x3961f5(0x10d,0x9b,0x31,'C&m%',0xa8),'OKNip':_0x4bedc3('N(j8',-0x5e,-0x1a1,-0x17b,0xc4),'gOWfU':function(_0x243b83,_0x4c96dd){return _0x243b83+_0x4c96dd;},'zmRkK':_0x19ed95('!Tr^',0x384,0x277,0x338,0x3a1),'nRxrD':function(_0x5608f7,_0x323b18){return _0x5608f7!==_0x323b18;},'TeFyS':_0x19ed95('2Nho',-0x4e,0x27,0x88,-0x11d),'LxSVQ':_0x4e3599(0x661,0x580,0x626,0x66c,'N(j8'),'JEaSP':function(_0x40e8c4,_0x375a84){return _0x40e8c4(_0x375a84);},'MnnTh':function(_0x59795f,_0x446cbf){return _0x59795f===_0x446cbf;},'iwTjq':_0x4e3599(0x660,0x701,0x5a8,0x80e,'zO$2'),'VTGKO':_0x19ed95('TCS6',0x310,0x22e,0x1d6,0xd3),'DMqwq':function(_0x3accfd){return _0x3accfd();},'CuzFj':function(_0x44f1ad,_0x1e184d,_0xcc51d4){return _0x44f1ad(_0x1e184d,_0xcc51d4);}};function _0x3961f5(_0x1740b2,_0x37c5ff,_0x3c6117,_0x3e23ec,_0x130938){return _0x31b7(_0x1740b2- -0x24a,_0x3e23ec);}_0x20db54[_0x19ed95('HTJN',0xf,0x14a,0x173,0x87)](_0x3d3f11,this,function(){function _0x182ec4(_0x23ee72,_0x3b17db,_0x178181,_0x315a5f,_0x115e46){return _0x4e3599(_0x23ee72-0x1c9,_0x315a5f- -0x599,_0x178181-0x92,_0x315a5f-0x162,_0x178181);}const _0x2e3f11={'NAZvf':function(_0x1ed245,_0x34f484){function _0x1521bd(_0x5954d4,_0x5aa614,_0x42fe19,_0x49caf0,_0x275ef8){return _0x31b7(_0x49caf0-0x241,_0x42fe19);}return _0x20db54[_0x1521bd(0x5fa,0x5ad,'4Og9',0x660,0x665)](_0x1ed245,_0x34f484);},'VfoLB':_0x20db54[_0x182ec4(-0x202,-0x1e6,'RfXi',-0xf6,-0x12b)],'DmFqD':_0x20db54[_0x182ec4(-0x181,-0x1cb,'2hpg',-0x68,0x47)],'ZikSO':_0x20db54[_0x182ec4(0x2e8,0xf7,'xpGe',0x184,0x17d)],'kcqzq':function(_0xeaf40c,_0x37a23a){function _0xf6f9f4(_0x5b8d74,_0x40161a,_0x4b24d2,_0x1aed9c,_0x448e9b){return _0x192170(_0x5b8d74-0x1f0,_0x40161a-0x118,_0x4b24d2-0xc8,_0x5b8d74-0x14e,_0x4b24d2);}return _0x20db54[_0xf6f9f4(0x547,0x616,']Gqp',0x526,0x48b)](_0xeaf40c,_0x37a23a);},'VNmLG':function(_0xa2d0e4,_0x2c311a,_0x5d84fd,_0x5dcc99,_0x231095,_0x5d61ba,_0x4102e7){function _0xcf4eec(_0x432c5a,_0x8122da,_0x62a94d,_0x465b1c,_0x273aad){return _0x192170(_0x432c5a-0xca,_0x8122da-0x19b,_0x62a94d-0x67,_0x432c5a- -0x232,_0x465b1c);}return _0x20db54[_0xcf4eec(0x37e,0x2f6,0x449,']Gmj',0x28c)](_0xa2d0e4,_0x2c311a,_0x5d84fd,_0x5dcc99,_0x231095,_0x5d61ba,_0x4102e7);},'hAgfm':function(_0x11f9d4,_0x4811d4){function _0xfd895c(_0x581101,_0x27979a,_0x204d53,_0x585dbd,_0xc075f8){return _0x192170(_0x581101-0x112,_0x27979a-0x145,_0x204d53-0x7d,_0xc075f8- -0x51d,_0x204d53);}return _0x20db54[_0xfd895c(-0x1e8,-0x20b,'v3@k',-0x214,-0x1c2)](_0x11f9d4,_0x4811d4);},'beIAN':_0x20db54[_0x13b997(-0x33,'l$Sb',-0x19a,-0x193,-0x15d)],'NFAds':_0x20db54[_0x13b997(0x1ff,'C&m%',0x234,0xcb,0x133)],'abDyM':_0x20db54[_0x67e85d('l$Sb',0x124,0x2bc,0x1f7,0x29d)]};function _0x3dc06a(_0xe9a1ee,_0x1a46cc,_0x55b8e4,_0x521c5d,_0x5ea986){return _0x4bedc3(_0x5ea986,_0x55b8e4-0x17f,_0x55b8e4-0x60,_0x521c5d-0xda,_0x5ea986-0x74);}function _0x192170(_0x22f537,_0x27d24a,_0x44bcc6,_0x1a7d2b,_0x3da6a3){return _0x4e3599(_0x22f537-0x17,_0x1a7d2b- -0x144,_0x44bcc6-0x129,_0x1a7d2b-0x17b,_0x3da6a3);}function _0x67e85d(_0x45b2d4,_0x489e67,_0x5f5444,_0x47bca7,_0x40fb8a){return _0x4e3599(_0x45b2d4-0x29,_0x47bca7- -0x515,_0x5f5444-0xa5,_0x47bca7-0xdb,_0x45b2d4);}function _0x13b997(_0x59bd3a,_0x1b51ad,_0x43706a,_0x702963,_0x223d6f){return _0x4e3599(_0x59bd3a-0x1c8,_0x59bd3a- -0x4c2,_0x43706a-0x131,_0x702963-0xa0,_0x1b51ad);}if(_0x20db54[_0x192170(0x4e6,0x502,0x544,0x570,'Gr7s')](_0x20db54[_0x3dc06a(0xcd,0x2e8,0x1cd,0x1fc,'^jUd')],_0x20db54[_0x67e85d('N[4X',0x1ee,0x2e8,0x19e,0xab)])){if(_0x2e3f11[_0x13b997(0xa,'G@DY',-0x105,-0x95,-0xa5)](_0x3c784c,![]))return;const _0x2fc9ad={};_0x2fc9ad[_0x3dc06a(0x11d,0x14d,0x239,0x250,'!Tr^')+_0x3dc06a(0x34a,0x400,0x290,0x27d,'xxmB')+'t']=_0x2e3f11[_0x192170(0x6bc,0x705,0x66e,0x5a5,'oAid')];const _0x25a5d5={};_0x25a5d5[_0x67e85d('xxmB',0x118,0x21c,0x107,0xb7)+_0x67e85d('qF*t',0x23c,0x1df,0x1da,0x18c)]=_0x182ec4(0x16f,0x115,'B9zG',0x144,0x2a9)+'y',_0x25a5d5[_0x13b997(0x4f,'bk6y',-0xd2,0xc5,-0xea)+_0x13b997(0x209,'KFOq',0x36c,0x1f4,0x122)]=_0x2fc9ad,_0x25a5d5[_0x3dc06a(0x1f6,0x204,0xae,0x125,'vuu@')]=_0x2e3f11[_0x182ec4(-0x1ae,-0x10d,'KFOq',-0xa8,-0x1c0)];const _0x4893d6={};_0x4893d6[_0x67e85d('s!pI',0x146,-0xdf,0x8,0x135)+_0x182ec4(0x1ee,0xf,'oAid',0xbf,0x17d)+'t']=_0x2e3f11[_0x13b997(0xe5,'275y',0x247,0x9b,0x9)];const _0x3c2447={};_0x3c2447[_0x13b997(0x12,'TQI#',0x131,0x128,0x17e)+_0x67e85d('kp!8',0x2e9,0x139,0x241,0x36c)]=_0x3dc06a(0x22e,0x238,0x340,0x3d2,'Skfo')+_0x67e85d('xz)9',0x21a,0x1f3,0xee,0xe)+'ff',_0x3c2447[_0x3dc06a(0x16e,0x22e,0x28b,0x3d6,'xpGe')+_0x67e85d('C&m%',0x39f,0x3ab,0x259,0x216)]=_0x4893d6,_0x3c2447[_0x67e85d('N[4X',0x138,-0x94,0x54,-0x106)]=_0x2e3f11[_0x13b997(0x20c,'FH!F',0x2a3,0x96,0x1db)];let _0x18487e=[_0x25a5d5,_0x3c2447];const _0xc03012={};_0xc03012[_0x3dc06a(-0x5e,0x34,0xc2,0xdc,'l$Sb')+_0x13b997(-0x3a,'oAid',-0xd9,-0xaa,-0x101)+'id']=[_0xacefbc];const _0x8e6490={};_0x8e6490[_0x3dc06a(0xfc,0x2e5,0x1a8,0x35,'N(j8')+_0x3dc06a(0x12d,0x62,0xc5,0x109,'^jUd')+'o']=_0xc03012;if(_0x2e3f11[_0x192170(0x5ae,0x4b8,0x4ee,0x527,'KfL4')](_0x1cd677,!_0x2a7563)&&!_0xabbefb&&!_0x23e08e[_0x182ec4(0x22c,0x2b4,'Z65b',0x1c0,0xf9)][_0x13b997(0x28b,'2Nho',0x160,0x2b8,0x2a9)+'e']&&!_0x11e957)return _0x2e3f11[_0x13b997(0xd5,'zPz8',0xf3,0x1f6,0x238)](_0x183d61,_0x10c8b1,_0x67e85d('TCS6',0x8,0x5b,-0x26,0x8d)+_0x186e5e[_0x67e85d('TQI#',-0x193,0x4e,-0x80,-0xb)]('@')[-0x23b9+0x1329+0x8*0x212]+(_0x182ec4(-0x1db,0xea,'G@DY',-0x66,-0x1ce)+_0x13b997(-0x31,'kp!8',0x98,-0x1a7,-0x120)+_0x3dc06a(0x1bc,0x2c2,0x2e4,0x35a,'v3@k')+_0x182ec4(0x1e2,0x1e2,'FH!F',0x186,0xad)+_0x67e85d('!IsO',0x2a4,0x2d8,0x1a6,0x124)+_0x182ec4(0x55,0x135,'qF*t',0x149,0x2c)+_0x13b997(0x95,'N(j8',0x70,-0x9c,0x21)+_0x3dc06a(0x269,0x6c,0x1ac,0x28d,'Skfo')+_0x13b997(0x1b1,'v3@k',0xb3,0x223,0x2b3)+_0x182ec4(0x15b,0x144,'N[4X',0x15c,0x190)+_0x67e85d(']Gqp',0x25,-0xc6,0x7b,0xa)+_0x192170(0x56d,0x59e,0x53b,0x5d8,'zO$2')+_0x13b997(0x124,'HTJN',0x17e,0x3c,0x1cb)+_0x3dc06a(0xc1,0x23f,0x118,0x272,'G@DY')+_0x3dc06a(0x13f,0x7c,0x19b,0x20e,'N(j8')+_0x3dc06a(0x275,0x2b6,0x1a5,0x46,']Gmj')+_0x182ec4(0x250,0xba,'s!pI',0x1bf,0x13c)+_0x13b997(0x5,'B9zG',-0xda,-0x160,-0x13c)+_0x67e85d('Mauy',0xdc,-0xa6,-0x1b,-0x13a)+_0x67e85d('HTJN',0x240,0x183,0x194,0x1bc)+_0x67e85d('zO$2',-0xc4,0x48,0x91,0xf)+_0x67e85d('C&m%',0x1b,0x20b,0x171,0x222)+_0x13b997(0x1ee,'2hpg',0x199,0xf8,0x2e7)+_0x67e85d('TCS6',0x117,0x1a5,0xbe,0x13d)+_0x13b997(0xb6,'xpGe',0x1e4,-0x7c,0x1e3)+_0x182ec4(0x237,0x17e,'C&m%',0x16d,0x1bb)+_0x3dc06a(0x1a2,0x213,0x22d,0x252,'3Gba')+_0x13b997(0x90,'Skfo',0x18c,0x137,0xf1)),_0x333ce2+_0x13b997(-0x28,'G@DY',-0x124,0x10e,0x14c)+_0x20365a,_0x35147a,_0x18487e,_0x8e6490);}else{const _0x1c4586=new RegExp(_0x20db54[_0x192170(0x4ef,0x28b,0x4e0,0x3fa,'N[4X')]),_0x5e5f80=new RegExp(_0x20db54[_0x13b997(0x81,'0!jy',-0x16,0x8c,0xf1)],'i'),_0x51ebfe=_0x20db54[_0x182ec4(-0x191,0x125,'RfXi',-0x3e,-0x3d)](_0x48f897,_0x20db54[_0x182ec4(0x121,0x10c,'oAid',0x23,-0x23)]);if(!_0x1c4586[_0x192170(0x44c,0x4b7,0x399,0x50e,'TCS6')](_0x20db54[_0x3dc06a(0x81,0x196,0x141,0x1d,'N[4X')](_0x51ebfe,_0x20db54[_0x3dc06a(0x2ca,0x1ee,0x17a,0x2a,'N(j8')]))||!_0x5e5f80[_0x67e85d('zPz8',0x13c,0x2af,0x24a,0x317)](_0x20db54[_0x182ec4(0x12c,-0x4f,'275y',-0x1e,-0x182)](_0x51ebfe,_0x20db54[_0x13b997(0x19d,'!Tr^',0x2ac,0x289,0x1ba)])))_0x20db54[_0x192170(0x755,0x765,0x639,0x620,'xxmB')](_0x20db54[_0x67e85d('Nnhd',-0x159,-0x89,-0x7d,0x65)],_0x20db54[_0x67e85d('FH!F',0x16d,0x153,0x8c,-0x2f)])?_0x20db54[_0x182ec4(0x135,0x1a1,'zO$2',0x153,0x2ad)](_0x51ebfe,'0'):function(){return![];}[_0x182ec4(-0xa1,0x6d,'nGtk',-0x26,0x11c)+_0x182ec4(-0x1a8,-0x1db,'xpGe',-0x69,-0x1a)+'r'](_0x2e3f11[_0x182ec4(0x6e,0xb,'RfXi',0x7f,-0xae)](_0x2e3f11[_0x182ec4(0x78,-0x160,'Mauy',-0xe3,0x38)],_0x2e3f11[_0x67e85d('l$Sb',0xcc,0x127,-0x23,0xc4)]))[_0x13b997(0x29b,'N[4X',0x2aa,0x18a,0x14d)](_0x2e3f11[_0x3dc06a(0xe6,0x98,0x1b1,0x2ef,'TQI#')]);else{if(_0x20db54[_0x13b997(0x239,'Z65b',0x178,0x18c,0x321)](_0x20db54[_0x13b997(0x1b3,'Gr7s',0x1ed,0x281,0x187)],_0x20db54[_0x3dc06a(0x31d,0x23a,0x2b2,0x16f,'TCS6')])){if(_0xbf7bf6)return _0x551ef1;else _0x20db54[_0x3dc06a(0xb2,0x95,0x199,0xc5,'2Nho')](_0x23714c,-0x26d1+0xa6d+0x1c64);}else _0x20db54[_0x13b997(0xeb,'KFOq',0x16d,0x1fc,0x8c)](_0x48f897);}}})();}());if(!isGroup&&!isCmd&&!command&&!Ofc[_0x17d6d2('kINN',0xa,0x15f,0x112,0x198)][_0x17d6d2('FH!F',0x179,0x4e,0x1a4,0xb3)+'e']&&!autorespon){const _0x2d5451={};_0x2d5451[_0x17d6d2('FH!F',0x1ca,0x223,0x15d,0xe3)+'d']=_0x216928(-0xed,'RfXi',-0x163,-0x28,-0xc0),numd=await fetchJson(_0x3a98ce('275y',0x236,0x26a,0x21f,0x348)+_0x216928(0x265,'kp!8',0x21d,0x1d0,0x171)+_0x447db1(0x5b8,0x6df,0x6d2,0x60d,'oAid')+_0x447db1(0x776,0x508,0x549,0x673,'zO$2')+_0x91af7b(0x433,0x4c0,'Nnhd',0x23c,0x38c)+_0x216928(-0x37,'GOS)',0xe,0x16a,0x29)+_0x216928(0x25b,'N[4X',0x1d3,0xcc,0x146)+_0x17d6d2('4Og9',0xae,0xef,-0x48,0x1e5)+_0x91af7b(0x679,0x58e,'l$Sb',0x3c6,0x511)+_0x216928(-0xc,'GSNt',-0x3f,0xb8,0x12a)+senderNumber,_0x2d5451),simi=await fetchJson(_0x17d6d2('A46p',0x110,0x14,0xb3,-0x41)+_0x216928(-0x22c,'zO$2',-0x1ab,-0x87,-0xf1)+_0x17d6d2('G@DY',0x68,0x198,0x2dd,0x135)+_0x3a98ce('xxmB',0x4f9,0x394,0x2c2,0x41c)+_0x17d6d2('HTJN',0x1d0,0x145,-0xd,0x1af)+_0x447db1(0x541,0x51b,0x534,0x42c,'qF*t')+'='+numd[_0x447db1(0x49b,0x663,0x478,0x55e,']Gqp')][_0x447db1(0x49b,0x433,0x535,0x575,'RfXi')+_0x91af7b(0x4b8,0x4ee,'kp!8',0x3f0,0x3e0)+'de']+(_0x3a98ce('kINN',0x1bd,0x274,0x21e,0x1f9)+_0x91af7b(0x478,0x2f7,'qF*t',0x48d,0x428)+_0x216928(0x93,'kINN',-0x2e,-0x16d,-0x30))+cmd),sami=simi[_0x3a98ce('R#8P',0x399,0x3cf,0x3bc,0x50a)+'ss'];const _0x2d652c={};_0x2d652c[_0x91af7b(0x54c,0x3ea,'GOS)',0x5c7,0x52b)+_0x17d6d2('!IsO',0x2c4,0x1af,0x8c,0x2f8)+_0x3a98ce('FH!F',0x1d5,0x349,0x3cb,0x43d)]=0x1fc,_0x2d652c[_0x91af7b(0x2dd,0x393,'G@DY',0x48a,0x374)+_0x216928(-0x66,'Z65b',0x12f,0xbd,0x2e)+'d']=!![];const _0x16c0e7={};_0x16c0e7[_0x447db1(0x561,0x433,0x4d3,0x45a,'HTJN')+_0x17d6d2('v3@k',-0x175,-0x1d,0x149,0xbc)]=thumbnail,_0x16c0e7[_0x447db1(0x681,0x4dd,0x6dd,0x636,'2hpg')+_0x17d6d2('Gr7s',0x5f,0x102,0x1bc,0x234)+_0x91af7b(0x3c2,0x578,'N[4X',0x530,0x515)]=!![],_0x16c0e7[_0x91af7b(0x37b,0x449,'xxmB',0x408,0x44d)+'d']=Ofc,_0x16c0e7[_0x91af7b(0x3c9,0x39d,'zO$2',0x1d7,0x332)+_0x91af7b(0x64f,0x543,'zPz8',0x48a,0x51a)+'o']=_0x2d652c,Zeeone[_0x447db1(0x3db,0x529,0x41b,0x450,'G@DY')+_0x447db1(0x3c4,0x436,0x278,0x3cb,'zO$2')+'e'](from,'_'+sami+'_',text,_0x16c0e7);}function _0x3a98ce(_0x57c99b,_0x4381a2,_0x5f281b,_0x51f822,_0x11f587){return _0x31b7(_0x5f281b-0xc,_0x57c99b);}if(autoregister){if(autoregister===![])return;const _0xfdd81f={};_0xfdd81f[_0x216928(0x3a,'xz)9',0x16a,0x1bc,0x17a)+_0x447db1(0x59f,0x589,0x47e,0x5df,'xxmB')+'t']=_0x216928(-0x1be,'2Nho',-0x1d6,0x4f,-0xd8)+'Y';const _0xd15a9={};_0xd15a9[_0x447db1(0x6c3,0x693,0x600,0x550,'xxmB')+_0x447db1(0x769,0x5f2,0x5fe,0x670,']Gmj')]=_0x3a98ce('vuu@',0x2ff,0x300,0x2b1,0x21d)+'y',_0xd15a9[_0x91af7b(0x61a,0x417,'RfXi',0x42c,0x55e)+_0x216928(0x1a8,'4Og9',0x200,-0x41,0x10f)]=_0xfdd81f,_0xd15a9[_0x91af7b(0x617,0x5a2,'3Gba',0x508,0x4ef)]=_0x91af7b(0x38c,0x24f,']Gmj',0x2ee,0x371)+_0x216928(0x3a,'zPz8',-0x242,-0x175,-0xe8);const _0x2ad559={};_0x2ad559[_0x17d6d2('RfXi',0x1eb,0x173,0x239,0x60)+_0x17d6d2('Nnhd',0x11b,0x1a7,0x296,0x298)+'t']=_0x447db1(0x48f,0x49c,0x2ff,0x42b,'Z65b')+_0x91af7b(0x4ba,0x35f,'mCz1',0x399,0x389)+_0x216928(0x131,'G@DY',0x268,0x8e,0x1b7);const _0x45242f={};_0x45242f[_0x91af7b(0x3fe,0x5b1,'^jUd',0x41d,0x4d1)+_0x447db1(0x3e3,0x4ba,0x524,0x3ed,'2hpg')]=_0x3a98ce('zPz8',0x4e3,0x39b,0x39b,0x344)+_0x3a98ce('C&m%',0x304,0x3e8,0x499,0x369)+'ff',_0x45242f[_0x91af7b(0x737,0x6e7,'TCS6',0x4ed,0x5f3)+_0x447db1(0x345,0x564,0x566,0x401,'l$Sb')]=_0x2ad559,_0x45242f[_0x91af7b(0x575,0x428,'FH!F',0x4dc,0x4fd)]=_0x91af7b(0x3ad,0x200,']Gmj',0x3e2,0x371)+_0x3a98ce(']Gqp',0x40a,0x353,0x356,0x25d);let gaklopo=[_0xd15a9,_0x45242f];if(isCmd&&!isOwner&&!isCreator&&!Ofc[_0x17d6d2(']Gmj',-0x146,-0x13,0x7d,0xdb)][_0x447db1(0x5f1,0x58b,0x59b,0x520,']Gmj')+'e']&&!isUser)return sendButLocation(from,_0x91af7b(0x36c,0x45a,'TCS6',0x498,0x3a0)+sender[_0x3a98ce('4Og9',0x355,0x32e,0x45e,0x2f5)]('@')[0x222+-0x1787*0x1+-0x1565*-0x1]+(_0x3a98ce('2Nho',0x178,0x2bf,0x29c,0x1c5)+_0x216928(0x157,'l$Sb',0x71,-0x7,0x9a)+_0x447db1(0x5e9,0x63b,0x6e7,0x5a3,'N[4X')+_0x447db1(0x5b8,0x669,0x515,0x677,'xpGe')+_0x216928(0x15a,'83UE',0x32,0x67,0xf3)+_0x216928(-0x98,'FH!F',-0x125,-0x18c,-0x3e)+_0x447db1(0x7c2,0x68d,0x752,0x666,'R#8P')+_0x91af7b(0x53a,0x4ee,'83UE',0x4e9,0x4fc)+_0x447db1(0x330,0x57d,0x3f2,0x460,'vuu@')+_0x3a98ce('HTJN',0x5a0,0x445,0x497,0x3d3)+_0x447db1(0x51f,0x529,0x627,0x54b,'2hpg')+_0x216928(-0x112,'qF*t',-0x202,-0x7a,-0xa3)+_0x216928(0x51,'^jUd',0x20d,0x13e,0xab)+_0x17d6d2('TCS6',-0x52,-0x72,-0xbc,-0x1cd)+_0x17d6d2('A46p',0x180,0x17e,0x13,0x1ac)+_0x3a98ce('oAid',0x4fc,0x48a,0x569,0x462)+_0x447db1(0x315,0x385,0x3b1,0x46d,'LS(u')+_0x3a98ce('83UE',0x272,0x232,0x348,0x14d)+_0x91af7b(0x604,0x3f9,'2Nho',0x3e1,0x539)+_0x17d6d2('3Gba',0x225,0x159,0x2bf,0x8c)+_0x447db1(0x47b,0x381,0x375,0x3c2,'KFOq')+_0x17d6d2('nGtk',-0x11,-0x42,-0xc0,-0x184)+_0x447db1(0x4a9,0x5ad,0x38a,0x4f5,'3Gba')+_0x91af7b(0x385,0x508,'GOS)',0x3d4,0x45f)+_0x17d6d2('oAid',0x192,0x56,0x63,-0x116)+_0x447db1(0x78f,0x6db,0x661,0x63b,'Mauy')+_0x216928(0xf6,'FH!F',0xc0,-0x4f,0x125)+_0x17d6d2('TCS6',0x8b,0x1c6,0x18b,0xbc)),namabot+_0x17d6d2('RfXi',0x2d1,0x1d3,0x31e,0x19d)+owner_name,thumbnail,gaklopo,{'contextInfo':{'mentionedJid':[sender]}});}function _0x216928(_0x12f124,_0x4954b4,_0x2bb35e,_0x5d684e,_0x336d05){return _0x31b7(_0x336d05- -0x2bc,_0x4954b4);}function _0x31b7(_0x17c02d,_0x48f2f9){const _0x44e5e3=_0x3051();return _0x31b7=function(_0x3f00a5,_0xa56201){_0x3f00a5=_0x3f00a5-(0x89*-0x3a+-0x9e*-0x8+0x1*0x1be2);let _0xd176fb=_0x44e5e3[_0x3f00a5];if(_0x31b7['xDFRXx']===undefined){var _0x233766=function(_0x3216da){const _0x1a878d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x6e9f7d='',_0x476d3c='';for(let _0x4081ec=0x23d5+-0x1e*0x14b+0x2f5,_0x49e0ba,_0x47f0b2,_0xfbf12e=-0x1c22*0x1+-0x1fb*0xe+0x37dc;_0x47f0b2=_0x3216da['charAt'](_0xfbf12e++);~_0x47f0b2&&(_0x49e0ba=_0x4081ec%(0xb61*0x3+-0x7cb+-0x1a54)?_0x49e0ba*(0x1c2*0x4+-0x7ef*0x3+0x1105)+_0x47f0b2:_0x47f0b2,_0x4081ec++%(0xb51*0x2+-0x4*0x3e0+-0x71e))?_0x6e9f7d+=String['fromCharCode'](0xdf0+0x336+-0x1027&_0x49e0ba>>(-(0xa59*0x1+0x3*0x192+0x1*-0xf0d)*_0x4081ec&-0xd34+-0x27*0x83+0x5*0x6a3)):-0x694*0x4+-0x19f1+0x27*0x157){_0x47f0b2=_0x1a878d['indexOf'](_0x47f0b2);}for(let _0x2bc34f=-0x1*-0x240b+0x1f02+0x1*-0x430d,_0x4a8251=_0x6e9f7d['length'];_0x2bc34f<_0x4a8251;_0x2bc34f++){_0x476d3c+='%'+('00'+_0x6e9f7d['charCodeAt'](_0x2bc34f)['toString'](-0x1a1b+-0x12*-0x17f+-0x27*0x5))['slice'](-(-0x1*-0x192b+0x7*-0x146+-0x1*0x103f));}return decodeURIComponent(_0x476d3c);};const _0x41e174=function(_0x334c9c,_0x1880f6){let _0x86201f=[],_0x2e3f14=0x537+0x11eb+-0x1722,_0x360fed,_0x48df83='';_0x334c9c=_0x233766(_0x334c9c);let _0x17289b;for(_0x17289b=-0x197f*0x1+0x1*-0x2587+0x1f83*0x2;_0x17289b<0xa79+-0xf72+0x5f9;_0x17289b++){_0x86201f[_0x17289b]=_0x17289b;}for(_0x17289b=-0x1866+-0x1336+-0x2*-0x15ce;_0x17289b<0x46b+-0x77*0x41+0x1acc;_0x17289b++){_0x2e3f14=(_0x2e3f14+_0x86201f[_0x17289b]+_0x1880f6['charCodeAt'](_0x17289b%_0x1880f6['length']))%(0x1*0x3b9+0x2176+0x9d*-0x3b),_0x360fed=_0x86201f[_0x17289b],_0x86201f[_0x17289b]=_0x86201f[_0x2e3f14],_0x86201f[_0x2e3f14]=_0x360fed;}_0x17289b=0x1*0x1385+-0x74b*0x2+-0x4ef,_0x2e3f14=0x7fa*0x1+0x2088+-0x2882;for(let _0x1016ff=0x16*0x4e+-0x11d0+0xb1c;_0x1016ff<_0x334c9c['length'];_0x1016ff++){_0x17289b=(_0x17289b+(-0x1*0x660+-0x277*0xb+-0x10bf*-0x2))%(0x3*-0x3d+-0x976*-0x2+-0x1135),_0x2e3f14=(_0x2e3f14+_0x86201f[_0x17289b])%(-0x2651+-0x1fd5+-0x2393*-0x2),_0x360fed=_0x86201f[_0x17289b],_0x86201f[_0x17289b]=_0x86201f[_0x2e3f14],_0x86201f[_0x2e3f14]=_0x360fed,_0x48df83+=String['fromCharCode'](_0x334c9c['charCodeAt'](_0x1016ff)^_0x86201f[(_0x86201f[_0x17289b]+_0x86201f[_0x2e3f14])%(0x1e7+0x2*-0x4d2+0x8bd*0x1)]);}return _0x48df83;};_0x31b7['swKZYV']=_0x41e174,_0x17c02d=arguments,_0x31b7['xDFRXx']=!![];}const _0x283120=_0x44e5e3[0x1e41+-0x23b5+0x574],_0x29ca14=_0x3f00a5+_0x283120,_0x3709b9=_0x17c02d[_0x29ca14];return!_0x3709b9?(_0x31b7['HirtKD']===undefined&&(_0x31b7['HirtKD']=!![]),_0xd176fb=_0x31b7['swKZYV'](_0xd176fb,_0xa56201),_0x17c02d[_0x29ca14]=_0xd176fb):_0xd176fb=_0x3709b9,_0xd176fb;},_0x31b7(_0x17c02d,_0x48f2f9);}function _0x3051(){const _0x225354=['dSo0sahdKG','WQldHhtcP8kV','Fmo1W4HYWOS','q8ofW48','WRldGM/dQmkG','tSowWRFdSJW','W77cNCotaSkd','jCovWO7cOmoF','bSoZW5SvW70','BmogW5rOgG','cmkdcmkPW6C','i8kieCk8W6G','A8oikSkoxa','ECopmCkCwG','E8o5FW','WO8wWQpcStS','W40cWRZcSdO','pCoxWPFcOmox','iSkCmW','W6W6WPRcQXK','ErlcVwGf','B8kTxhb0','d8oFW6lcPxq','ySoQx2ZdKq','ACkeW7DQpG','WPRdK8kZeSoN','WRrNW49U','44kBW5tcMcxcQa','nCofWPlcQSon','WPNcO1W','bKr6Aa','WQtdMSoWW68N','nSoju1RdUq','W79PWP93ra','ruJcH8k5wq','zSoNFSkxW4K','WOtdVLJdVCk3','W5/cM8oQ','ySk0WPBdGSon','rmkWaa','i/cWHyNdMN89','ASkjW7XJfG','x8oRvmoxvcNdPatcIwv6qdm','gLLSBKO','kmostmoNW4q','lSoUWPW8W5e','W7jgWOnP','WQNWLywGDCojWOC','ESoum8kthq','dCoDW4KDW6q','WQ7dVMHkwG','fKvTDvK','sSkOo3/dJa','q8obWPGGwq','W7BdV1raaq','WRFcOmoBtNi','W6jwW5nUza','p2dcImk+xa','B8oCzmk+W4i','WRvvzY0e','W7LXWOi8','Amk5W5jIma','D8oPAa','afjXFMy','crn6WORcIW','ewdcKCkP','W7Dmbce','bmoKda','W70QWOJcPcG','tCkhDfb4','fSoDWPlcRmoE','W7P4ns/dLW','W5/cSCoQW7FdVG','aCklW4S','W45xWRVcPtq','lmowtMddLq','W7/cQSoIpHO','W7lcOgf+pW','WQ3cJCoUufy','W6mUWQNcVW8','rCkqt1v2','W7WYdMbg','mmoNtNtdKG','W5FdQCoRc1y','hSklfW','aSkCaSk5rG','WR5tzI1p','WQuuCcek','WOOfjmk4W6u','WR3cSCo1swC','x8kkaCkj','WR7dMSkhkmkM','8y6bJSkCduFdTq','qmoLySkxW7e','W4mBWQFcSZW','aCokd8k8W7K','W47cJmo1','8lMdImoBW74cCW','xSopW497eq','tsKZWO3cJW','bCklw8k4W6a','C8kwW41KaG','W5/cM8o7zW','wmkwwvD/','imoQW7tcLW','ySoTACkhW6a','W4SOk05K','mCo3shVdHa','WOeti8o2W7q','WPBcHSoOAG','jComsNZdLW','rCodFCk/W6m','qCo1v0ddTa','WR5jW4XNpq','pSovWPlcVa','tSoLW7lcSgi','WPhdT3LlFG','W5PaB8oPWRdcJ8ojW5HCtCoN','grtcQNmA','W4PhbchdPa','WOJdI8ogWOS1','vmkdFbKJ','oe/cTubE','r8kZgG','WR5tCIDE','W6i4WOZcGxu','sCowW7pcPa','m8oasmo+W5a','W6DnWPiSBG','Bmkwemk5WRK','q8kDWOpcQu8','i2zoW7FcNq','lqFcVseC','tmkGWPRdS8oF','WRpdQSoS','bgNcJSkYuW','W6xcUxv3kq','W6LHW5i7rG','8kAcICocW7D2W60','W6fTWQiWra','WRZdKxj0DG','W7jBpt/dJq','WPVdN8oMwmoI','oIhcNLiY','WR1JW59MpW','yCo4ESolamoVWQBcSmo7WQVcVmkfsa','t8kjWR/cH0q','W4a3Bq','E8krW6LIcG','WQBdHmoBW583','WPtdR19gya','oCo8W7a8W5e','4OEumWTolW','WO4enSo5W6K','cSoBW48dW7W','AmoecSkFsW','WQldOcCJD3L9W48VAvFcUaC','dmohW4GhW78','kh8lWQ7dJG','wSocW5f2fG','nCkqWP3cVCoy','W5ZcMCo8ya','4P2Gf0XoAG','imk8eCkJW5G','v8kJW7DEpW','W7FdHgtdU8kH','j8ojWOZcRa','pSoMWPRcQmoZ','W559WRa/vG','W40tWOdcSre','gCkzvmkVWRK','zmkKACkpWQS','hCo9WOJcJSos','W63cPdilbCogW5pdIgtdN3SDWQi','WRFdUg5k','b8oCW5uh','WRXJW5vOkG','krpcMMaC','xSkCf8kp','dmo2yMVdQW','W4NdHs5DWRS','W4THoa3dRa','i8oUr3xdHa','wujSW5ddM8kWmCkmg0ZcMGa','8js3GWrsWOxdHq','WP1QyfGO','ymogBmk1W48','W5JcKmo0mG8','iCo1yh7dQG','W5v9mb7dIG','W4LLWRqOyW','jcmDWQtdMG','mmoJrJBdGG','W43cGSoOW4JdTa','fCo/cCoxWR8','CmkcW7H6mq','gaK/WPm','hG47WPxcIW','WRhcVmomqG','BCoZW7NcMfO','WQxdJMP1xq','W5FdPSokW7FdQG','W6yhlxGAAglcM3xdQdXkg2S','WO7dHmo4rmkD','ESo/WPGT','bmoOgSotW7K','W7BcJCoMcCkE','W6PhbchdPa','W6lcOCoJibO','WPVdU2LBuG','ASoNWOqPW4W','l8o7Bg/dTa','cSkDeSk2mG','srGWE1S','zmoGzmkiW6W','ESo6bXFcOa','WRnPW45HkG','W6JcRSorW57dHa','W7tcLCogd8ko','m0qXBum','jSkCamkXna','W6vEWP9G','WRRdV3rowq','ymopWOW','WRZdL8kgj8kJ','WOCDnSk3WQi','vCkrDuS','WPtdLHxcGCkA','W6ZcM8ooxSkC','bmkbgSk3WQS','wSoxcSkEWOe','zCoPW5BcMwm','WOyynmk1W7C','dmoGfSoyfq','pSo9WOxcU8oT','z8kxcSkVWP0','WOBdG8oeW4iV','W7rih3S','W4NcOmoxW77dOW','afOUWOtcNa','WOZdGmoAWPz+','amkAcSkAaG','imovWPlcRCo8','sWnJm8kC','8jEePCk3W6jFWOq','WQhcOmop','lrBcOg9t','ASoPpJpdIq','WQnRdNu','wmo5W7tcRKi','4Owmg8kCd8kW','rCkPv1BdVa','DCkpyK9J','W44On0PX','W7aTWOVcOta','WPVdLSoTymkd','fCk4eCkyiW','E8oipCkoxa','cSkff8k1W6q','WQ3dVCo5','DmoXWQWAW60','WOCci8kPW7e','i8o7W4O4W6G','ASoKzCkkwG','D8k5WRddKa','W7tcONb/nq','FSkdu2BdKG','W4WRnvrG','bCkYamkrdq','WOBdQv9Mwa','WPBcV8okD3K','W6LPWPqTrG','W5pcTSo/kXy','W7FcSv1KeW','WR3dUwLnqq','WOldSN55zG','W7X+W55wwG','xdjkhmkb','m8oAWPuGvW','g8ojuSokW4qwmCkQW4VdSmkcp1i','W7tcM8ohaSks','WQRdPI/dRSkS','fNhcJCkVsq','fc0HWOVdSq','WR/dVCo0WOm0','cWOouq','W7H7WPCR','BCoylq','a3dcJmk+ra','W57cHCo8amkN','ySoMsMZdGa','WQBdSCoaEmkc','WPXJCsj8','AmkuW7P6ha','W5VcQSoxW7RcPG','WPFdT8ocE8km','W5ZcVCokW6BdQq','sdXnfSoS','44oCjSkrrHa','WQVdVmoMW5Sb','W5xcT8o9','oSkSa8ktiq','hSkQqCoytG','aSkGgCombW','rmkTaCkdWOe','W69yWPDG','W6fCaYhdQG','WPldU01gBG','WQjJW55J','WRnvW7fGba','jmoTr3tdJG','tCouW7pcOxC','imkLdSkuwa','WQ3dVmoWWPW','WR/dUcDFqq','bXDYF08','WQJcOmosu2G','WONdMmohW4yB','WOqFjCkWW68','mCk7oSkFta','W7ORWPRcVsO','Es/cQMuA','W5NcRCokW4ldTa','W7nCWPtdR3u','8jIWKxf3WQ/dVa','smobW59dhW','hx57','C8kKWR/dG8oS','awtcISkOxa','qCkChq','W6bTWOyXsa','xtjdeCk/','WOpcKCopthK','dCkAc8k1W7i','W4BdPGXoWPq','WRhcOmopuW','4OwrWP4/zGS','tmoDW7NcQxS','nSkqW4BdO8kz','nmkUkmkg','z8oVjSkiDW','qSoeW51+oq','W6OuWQZcOb4','qCocy1H4','WRddISkfm8kW','W4pcT8o0obu','WPZdL8kfjSk2','WRzAncXd','mvj6W4VcSG','zSoCWOm3bq','nZBcQNKh','ACkXW77dLSoI','d8k2d8kwaq','WRfQW5DGpq','vSo2tSkdfa','t8oCWRG','4OIb4PQAWOJdPae','j8oyWPNcPW','oCkRdq','W5hcPSoBW7BdJa','emohEeJdRG','rpcZSj5tW4rG','W7WWWOJcTsm','WOVcLSo5','yCkZjK/dGa','W5pcSmo4ivS','rSkZq1jT','CSkNq2Lw','u1v6DL4','oCkLoCkhva','W55fz8oHWRFdTSkGW7bXqCoTANS','W4RcSCooW7C','v8kSg1ldVq','W7H6WP4','cCkQeSkdaW','W4pcKCo0fCk1','rCocW6tcQxe','4OwVWQroWRhcLW','E8o1WO06W48','WRNdR8o6W6iq','c8kFw8k7W64','W5FcP8oqWRlcRa','iZaxWRFcHq','WOFdT8kOEKVcH8kHW6NcOCoXzSkta8kq','WOddNCogW44K','hSk/a8kaFW','c8oBW5y8W6e','W6TzWPO2Da','WOFdKg5xta','tCkYbe/dQa','WQ7dKxhdS8kk','vSkiW7DLuW','W7C/ch1R','rCockHm5','chlcMSkoyq','WPNdTWq','WOhdO8om','kN8pWQdcLW','EmoOpZ7cNq','W4xcVfPKdq','bumNWORdTG','WQldNmkeiq','vmkDWPmkW78','cCoxW4G','W63cThhdRG','Fmo4gbZcPW','omoDWO/cH8oQ','WPZdHmo7wCk8','pCo5WPG','4OwqjeJdHSk/','dd43WOlcMW','WQpdQeC','cb50','WOhdNmoCW6mA','WQ/dKxTbEW','W6NcU8okqSk5','4O+kWPdcR8kmW64','4OcRWP1+','jh4OWQldHq','W4yxWO7cUIm','WQncfJJdSa','AmormSkvua','b8kTdmoFW7e','WRTDvYLb','W6tdMI5I','W6iclhGyeW/dL2ldNWO','umkby0HB','a0W0WRVdKq','tSk2DufT','cCovW5Kb','d39qcSk5','qCoiW4pcRw4','z8oTWOK7W4G','W7pdLmotgmkh','WOyri8kV','rSkPa0/dPG','wColqCkVW6y','WOJdPmojW48G','DCozW5lcMM8','rCoQWRqmyW','FCo8oh3dJW','W5L2uWJdNG','W7JcMCkDdCki','bSkjgSkTW4K','tCkhFK1W','WQiuCc1e','oNmRxey','W5CdWOhcQJm','eSoXWQ7cN8o/','z8oHWP4HW4u','n8kSl8kb','WOJcQ8o7teC','WOWEnSkWW6W','4P64WOn0qCk9','rSoGWPalBW','WQr/W4TQ','dSkFd8kTW6q','zCkBdSkEWPy','Amoqo8kusG','W6BdShXNka','vSoqqSkt','FbPvlmkk','W4TavXu','xSoPaSkrj2ZcVIe','W7lcQCoxoZ8','BSkKuv1Q','z8kIWR/dMSkP','W6jzbZNdVa','BCoCW51OgG','WR5eDHLt','z8k2imk+W5u','pmkPW5CKW4i','W5r6WQbCsG','ECo8p33cIG','W4tcKmoFaGe','m8kKjmkaqq','EmkRW5D/iG','W7RcImoFDCk5','WRpdLSkApSk4','W4dcKSoXcCk8','WP/dTuusjq','acxdMmo3ea','W5xcQ8o/oq8','xJnamCk+','k8oLwgZdJG','yCk8WRldMSoS','emoOgSoBW68','ttjwgCk8','W7hdVCkkfJtcSIRcMSkzW6NdJ3K','WPBdNg3dU8kK','v8o6WP4RBW','W4dcNSo4kda','8kUqKgRdMwdcQW','mmo3sgZdJG','u8kwyLb3','AmoqoW','WQ/dUY/cUSkr','W7lcVJf2lW','W4NcI8o6zSkz','caKPWOdcIq','dgVcKCkPuq','W7VcPgvInq','s8kcWQJcMKq','aCkAtW','cSkLgSkpW54','aXSZWO0','aNSlWRNdKa','pMGaWQNdUG','awZcKCkTxa','uCkVeKK','WPxdMCo2','W77dRmoZW5nY','WQddUmoXWOf2','W4DkbtNdKq','WOKzi8k2','W5dcM8oG','q8k5W5DbfW','WPSEiSk0W6a','8lsIRmoOW64aW60','WQjhCtO','W6lcH8oxhG','WR7dGmo0WRHb','WRzyEcvp','WRddSdDRWRm','q8ohW7BdMqu','oCkSoCkhwG','au5aEuq','WOtdR0Hgya','nCoBWRRcOSoV','W782WPFcUaO','BwypWQddGG','lX8/mhC','W5ldJs1FWQu','W6LPWP44sG','W7uVWPtcOYe','tmkCgSk1W6i','zmkXWRBdGSoL','W7xdMGr0WOu','d8kFW4yYWR0','m8kJk8kAwW','WQfdW41egq','c8kogSk9W50','WOddP8ogs8kk','WOzNW5r+ja','EmogWPqSsa','vCoaW4xcNhS','q8kxWO/cMw0','WQZdQSoTWPOP','F8o+jttcHG','eSkkWQBcKxldHSkV','W5RcOCo/lq8','gmojb8kiWRzEySkn','xCkqcSkC','nCkMi8kgwa','WR/dHhxdUCk+','FmolWQOKW5a','zmosW6xcPei','wCopW4TU','W6ldO8oIWRNcPG','WRVdPwjmqW','WPldMSosECkP','wdzmvG','WOddQmk6fmkH','WPZdJSkZhmka','4P2fwNdcP8kb','WOe0dSkAW40','CmkVk8khva','W7G8WPhcGH0','W5tdPGWTW7i','qXOMEWy','d8odW5OjW7i','iSkGnSkpW6a','BmknW4nhkW','rCkObfRdUq','ECkYW5nHkq','smkdWPHHdG','umk4sCkHWQO','xSkFk8k+WO8','DCkIWRi','F8ksW6PVfa','F8oQFCktW78','WQNcOmosqhu','AmojoW','yH5sm8k0','gmktc8k8','z8ohWOmR','W4/dGCojW4yJ','bCknc8kXW6q','B8ksW7X8','eCowAL/dSW','fmo4bmowW5e','hqBcI0WH','n8oXtMO','c3BcLSk8vW','tSofW5zPbW','tCoRemkkza','WQRcSGSyuW','lqpcOYfj','B8oQWPSTWOC','WPFdTaTqEG','WO4BmG','xg0lv8kL','W7tcN0z0eW','qr5a','WOtdRK9UEG','eCoShmozW7C','WRnRW4tdRH8','j8kbmmkrvG','W6FcNtJdQmoG','z8oOWOSKW5q','cGG7WOZdGa','W6G/kvb3','W6T6WP00AG','wmoekCkFFq','tSocW6pcQxe','C8kBWQ3dO8oK','FmolWQWVW7i','W4/cKCoRAW','obiFWRpcLW','BCo+nmk7DG','W5/cPSkEW7ddSW','WRVdS8k8nCkV','hCoJWRK','WQzJW4LMoa','W5LNnfXH','gqmQWOq','W4lcNCo/jSkY','WQldPIuJF3zZW4O4yeFcQsO','h8kabmkArq','xCoSWOOjW6a','WPpcI8orA0y','W5S8WRdcHG0','WPldMI7cOmkz','D8oZWPWMW4C','kG0cWPNcPa','EmoimCkovG','W4iPifrQ','WPhcM8owESkk','ySknW696iG','W54In11i','W4fWWQepDG','xCkyfSkFWPa','W4WyWQBcSda','rCkiWQlcGfe','aSo/b8oCW7y','cCkTcmkjra','W4NcUxPbcq','cCodW40FW5i','WPBdGCoNxmkI','W5WsWQBcObG','WO4Ao8k0W6C','W6BdHIXUWRq','W7lcICoGpqO','W5HNlvXU','mSo4CKJdTG','Bmk8WRhdGmoS','B8ksW7X8hq','mSozj8op','WOS1pCkyW4C','WO7dM8ooW5e0','BHOek8ky','Cmk/l8kbwq','W5OdWR3dQJC','WQ3dS2LAEa','WRRdQSkraSkp','W4pcT8o0oa','W70Ck3jX','W6BcGCoYW6pdRa','WPddTmkdaSkC','W4vzWOuWqG','jCoYWP3cMSo9','W57cNmoWESow','W6aFWPj4za','W65lWOD8DG','m8kKjmkhua','n8oQimoFW6C','B8kBWOBdJCoG','vmkzWP3dO8oa','ttzxhCoI','WP/dMmobW503','W73cJ8ouW6ddRa','WPRdV3TBBa','ehFcJG','rCk+m0ldHa','W6SHWOBcTai','B8o2WPGKW5G','amo4c8ooW7a','vCkgWQdcKK0','f15SAKC','tmkikCk1WQa','W7yjaZddRG','WP7dL8oCWRD8','DCocW7lcUNG','W4rVidtdKW','mK7cU8kBEa','jgmDWRNdLG','rCkWg1tdQG','u8obW7VcOwi','WRjsWPLUuSkJiW','W6FcQwf3','W77cQwjMjW','F8oSWQasW6a','W4qPoLvW','WRldJmowmmkY','WQWdlCkFW6G','WRpWR6gzW7qqAq','WQjlW7LJlW','WPldV2Lv','W7ZcUg/dV8ohWQNcL38DWOxdQ1SU','W48xpmkSW6W','W6T7jJZdJW','W6quWPlcGre','W7S2WO/cOcS','WPLNuq','B8kJW7JcTuG','W53cJmo2F8k7','W4WKlvbQ','bSoOg8oo','vSkvWOZdVSop','kbK+WOxcPq','x8kkaCkjWPS','zmoCFaFcTG','4OACyCkEW67cPG','x8klca','W55RWP0RqG','g1jZAG','fmogWPBcQmob','WRNdV8oLWOjT','WPRdTCkNhSk9','W4lcP8oAjmk1','W559DHzS','ma3cOsfz','wIrbcG','F8oQFSksW6O','WP5vW74','wmoxsa','s8kammkEWO0','W5/cPSoGgba','WQRdS3uEwG','mSoaWOZcPCoa','W6OKWONcJsS','DSoCWOm3uW','WRddMhxcQCkF','z8oOWPS8W4a','lMWcWQe','WOhdV1Lb','ASkOpKJdGW','qCogW5DTgG','kwGmWRG','amkaDvvS','maZcPNu'];_0x3051=function(){return _0x225354;};return _0x3051();}switch(command){case _0x17d6d2('N(j8',-0x70,-0x9,-0x158,0x4b)+'ry':case _0x216928(0x132,'!IsO',0xe9,0xbf,0x8a)+_0x3a98ce('s!pI',0x539,0x47e,0x3c9,0x39c):case _0x3a98ce('TCS6',0x32d,0x433,0x516,0x44e)+_0x447db1(0x758,0x62e,0x701,0x64d,'275y')+_0x447db1(0x40d,0x3a5,0x42e,0x4be,']Gmj'):if(!q)return reply(_0x216928(-0x5f,'4Og9',0xb2,0x102,0x61)+_0x17d6d2('xxmB',0x9a,-0x4c,-0x2c,-0xec)+'a?');pape=q,hx[_0x17d6d2('R#8P',0x40,-0x32,0xa,-0xd7)+'ry'](pape)[_0x91af7b(0x50c,0x337,'mCz1',0x3db,0x41b)](async _0x5475c8=>{function _0x7315c4(_0x959e46,_0x1f8389,_0xad1410,_0x24031d,_0x6706b9){return _0x91af7b(_0x959e46-0x1b8,_0x1f8389-0xa3,_0xad1410,_0x24031d-0x184,_0x24031d- -0x315);}function _0x20eff4(_0x12e582,_0x3b0989,_0x565e7f,_0x472c93,_0x13f3c3){return _0x216928(_0x12e582-0x16e,_0x472c93,_0x565e7f-0x64,_0x472c93-0xa7,_0x565e7f-0x13a);}const _0x150e2f={'eyZsW':_0x7315c4(-0x40,0x7,'Mauy',0x4b,0x13b)+_0x20eff4(0xba,0x3f,0xc7,'xpGe',0xf2)+_0x7315c4(0x43,0x224,'kp!8',0xd0,0x94)+')','hphqq':_0x2184c0(0xf9,0xff,0x153,0x23,'oAid')+_0x3b77f5('83UE',0x526,0x6f2,0x5e6,0x645)+_0x474377(-0xe7,-0x18c,'RfXi',0x1f,-0x46)+_0x474377(0x21a,0x8f,'B9zG',0xb2,0xbb)+_0x474377(0x2ae,0x2b5,'GOS)',0x23,0x148)+_0x2184c0(0x17d,0xf5,0x12d,0x1f8,'3Gba')+_0x474377(0x135,0x9f,'Skfo',0x306,0x1ac),'EMuPK':function(_0x425dab,_0x56a9e7){return _0x425dab(_0x56a9e7);},'pzYPW':_0x3b77f5('xz)9',0x5f0,0x5f9,0x6e9,0x5a5),'sgrYo':function(_0xfe9a09,_0x4782da){return _0xfe9a09+_0x4782da;},'qJEeC':_0x7315c4(0x434,0x184,'!Tr^',0x2ec,0x2d9),'fnAQd':function(_0x2240c0,_0x49b018){return _0x2240c0+_0x49b018;},'gqqlB':_0x2184c0(0xcf,0x12a,0xb4,0x1c4,'KfL4'),'yXiXI':function(_0x352d4f,_0x268fba){return _0x352d4f(_0x268fba);},'zwDRL':function(_0xd843e4){return _0xd843e4();},'xHcfT':_0x7315c4(0x29f,0x180,'nGtk',0x24b,0x356)+_0x3b77f5(']Gmj',0x85c,0x819,0x73a,0x772)+_0x2184c0(0xf6,0x27b,0x1d8,0x154,'TQI#'),'VubqE':_0x474377(0xc4,0x120,'Nnhd',0x145,0x1a7)+'er','UShHS':function(_0x4087ce,_0x1edb0c){return _0x4087ce(_0x1edb0c);},'QuWYC':function(_0x49fcb2,_0x307a5f){return _0x49fcb2===_0x307a5f;},'OOLIm':_0x2184c0(0x179,0x1ff,-0x7,0x8d,'KfL4'),'qddIr':_0x7315c4(0x31e,0x117,'GOS)',0x23f,0x1e1),'WKYFH':function(_0x1216bc,_0x4ba55b){return _0x1216bc!==_0x4ba55b;},'EXAQu':_0x3b77f5('vuu@',0x57e,0x712,0x6ef,0x802),'KpXDq':_0x474377(-0x167,-0x183,'83UE',0x43,-0x8b),'DcrlT':function(_0x237ae7,_0x34bd52){return _0x237ae7(_0x34bd52);},'pcsqB':_0x2184c0(0x240,0x12c,0x11c,0x1d4,'kINN')};let _0x56bf27=await _0x150e2f[_0x2184c0(0x2a,0x45,0x11b,0xce,'Nnhd')](getBuffer,_0x5475c8[_0x474377(0xf9,-0x1bc,'83UE',0x102,-0x59)][_0x7315c4(0x11d,0x4c,'B9zG',0x141,0x296)+_0x2184c0(-0xd9,0x182,-0x45,0x9e,'xpGe')+_0x474377(-0x162,0xb2,'xpGe',-0x86,-0xc5)]);await Zeeone[_0x20eff4(0x246,0x175,0x1ee,'Gr7s',0xf3)+_0x7315c4(0x220,0x140,'Gr7s',0x100,-0x38)+'e'](from,_0x56bf27,image,{'thumbnail':_0x56bf27,'quoted':ftroli,'caption':_0x3b77f5('Nnhd',0x525,0x526,0x656,0x6de)+_0x474377(0x22,-0x43,'R#8P',0x32,-0x13)+_0x7315c4(0x1f6,0xb,'Skfo',0x151,0x1e0)+_0x2184c0(0xdf,-0x108,0xb,-0xb,'2Nho')+'」'+enter+enter+(_0x3b77f5('Skfo',0x6e2,0x75d,0x6f3,0x7a2)+_0x3b77f5('bk6y',0x62c,0x5ec,0x4e0,0x3c5))+_0x5475c8[_0x3b77f5('TQI#',0x683,0x4b6,0x549,0x49a)]['id']+enter+(_0x3b77f5('N(j8',0x5cd,0x602,0x538,0x3d5)+_0x2184c0(0x244,0x6b,0x24e,0xe8,'A46p')+_0x20eff4(0x16f,0x1aa,0x70,'l$Sb',0x1cd))+_0x5475c8[_0x20eff4(0x34e,0xf3,0x1f4,'kp!8',0x14a)][_0x7315c4(0x37b,0x347,'KFOq',0x305,0x29f)+_0x2184c0(0x17d,0xba,0xc9,0x122,'!IsO')]+enter+(_0x7315c4(0x1ce,0x11e,'zPz8',0x208,0x20a)+_0x2184c0(0x22f,0x1f8,0x160,0x235,'4Og9')+_0x3b77f5('2hpg',0x809,0x680,0x78d,0x81f))+_0x5475c8[_0x3b77f5('Z65b',0x636,0x6a0,0x695,0x782)][_0x20eff4(-0x11,0x222,0x135,'B9zG',-0x21)+_0x7315c4(0x139,0x6,'GSNt',0xbb,-0x93)]+enter+(_0x2184c0(0x16e,0x1de,0x292,0x16e,'s!pI')+_0x474377(0x159,0x118,'LS(u',-0x9b,0x2f)+_0x474377(0x16a,0x1c,'qF*t',0x10c,0x91)+'\x20')+_0x5475c8[_0x7315c4(0x2fe,0x211,'Skfo',0x199,0x25e)][_0x20eff4(-0x42,-0x95,0xc5,'KfL4',0x1fa)+_0x20eff4(0x8c,0x74,0x78,'KfL4',0x17c)]+enter+(_0x7315c4(0x1c9,-0x45,'v3@k',0xf1,-0x16)+_0x20eff4(0xeb,0x2c4,0x234,'^jUd',0x2c6)+_0x474377(0x1bc,-0x25,'4Og9',-0x9a,0x94)+'\x20')+_0x5475c8[_0x7315c4(0x1f2,0x13e,'Nnhd',0xc5,0x1f)][_0x7315c4(0x2f1,0x1b9,'R#8P',0x2e2,0x370)+_0x474377(-0x1e,-0x79,'Z65b',0xf0,-0x38)]+enter+(_0x2184c0(0x1d,-0x5,0x24a,0x113,'TCS6')+_0x2184c0(0x34,0x9a,0x19c,0x119,'nGtk')+_0x20eff4(0x2ea,0xd9,0x1ed,'R#8P',0x352)+_0x2184c0(0x23d,0x1d4,-0x9b,0xcf,'GOS)')+_0x20eff4(0x246,0x90,0x138,'s!pI',0x1a6)+_0x7315c4(0x1e2,0x2cb,'R#8P',0x26c,0x377)+_0x7315c4(-0x93,0x18e,'4Og9',0x20,-0x3a))+_0x5475c8[_0x474377(0x70,0x23,'v3@k',0x1af,0x153)][_0x474377(-0x152,-0xbe,'qF*t',0x7d,-0xe6)+_0x3b77f5('GSNt',0x68c,0x529,0x54a,0x519)]+enter+(_0x7315c4(0x165,0x143,'RfXi',0x26,-0x4f)+_0x20eff4(0x172,0x25c,0x13c,'C&m%',0x169)+'*\x20')+_0x5475c8[_0x3b77f5('0!jy',0x48a,0x5e6,0x542,0x576)+'s'][_0x7315c4(0x349,0x1cb,']Gqp',0x25c,0x3a5)+'h']+(_0x3b77f5('C&m%',0x810,0x811,0x77c,0x6f6)+'a')+enter+enter+(_0x2184c0(-0xde,-0x85,-0x67,0x6d,'bk6y')+_0x2184c0(-0x194,0x26,-0x1ef,-0x8f,'N[4X')+_0x20eff4(0x175,0x206,0xce,'Skfo',0xc4)+_0x2184c0(0x1d9,0x12a,0x117,0x12e,'^jUd')+_0x2184c0(-0xef,-0x2b,-0x101,0x65,'GOS)')+_0x7315c4(0x1c0,0x18f,'N[4X',0x210,0x312)+_0x474377(0x31f,0x258,'83UE',0x12a,0x1ea)+_0x474377(0xb6,0x2a,'mCz1',0x11,-0x40)+'_')});function _0x2184c0(_0x30a536,_0x14e3eb,_0x4cb5af,_0x934d03,_0x3d47da){return _0x91af7b(_0x30a536-0x13c,_0x14e3eb-0x18a,_0x3d47da,_0x934d03-0x1d8,_0x934d03- -0x3dd);}function _0x3b77f5(_0x17fa76,_0x1ff51f,_0x182f69,_0x1cbfc9,_0x170dc5){return _0x216928(_0x17fa76-0x198,_0x17fa76,_0x182f69-0x19a,_0x1cbfc9-0x1f1,_0x1cbfc9-0x59f);}function _0x474377(_0x232ae0,_0xfb1320,_0x5159ac,_0x4566b7,_0x249d76){return _0x3a98ce(_0x5159ac,_0xfb1320-0x9d,_0x249d76- -0x2d5,_0x4566b7-0x1e6,_0x249d76-0xe0);}for(let _0x13a8f7 of _0x5475c8[_0x474377(0xdb,0xb,']Gqp',0x198,0x11f)+'s']){if(_0x150e2f[_0x474377(-0x5,-0x6,'GOS)',0x1b4,0xe0)](_0x150e2f[_0x20eff4(0x108,0x1e6,0x1eb,'l$Sb',0x322)],_0x150e2f[_0x3b77f5('!IsO',0x577,0x415,0x500,0x4b8)])){if(_0x13a8f7[_0x20eff4(0x3aa,0x292,0x236,']Gmj',0x10c)][_0x3b77f5('qF*t',0x5ed,0x503,0x5ad,0x62a)+_0x20eff4(0x290,0x2d3,0x2f5,'xxmB',0x2e5)](_0x150e2f[_0x20eff4(-0x78,-0x44,0xca,'Skfo',0x215)])){if(_0x150e2f[_0x20eff4(0x1d2,0x4e,0x11e,'^jUd',0xaf)](_0x150e2f[_0x2184c0(0x2d2,0x1cc,0x293,0x1cb,'4Og9')],_0x150e2f[_0x20eff4(0x12f,0x15e,0x1f5,'2Nho',0x2eb)])){let _0x3c1a72=await _0x150e2f[_0x3b77f5('4Og9',0x62b,0x62e,0x578,0x4e4)](getBuffer,_0x13a8f7[_0x7315c4(0x2eb,0x283,'kINN',0x2af,0x1cb)]);Zeeone[_0x7315c4(0x207,0x17d,'GOS)',0x13c,-0x5)+_0x20eff4(-0x39,0xae,0x5f,'4Og9',0xb1)+'e'](from,_0x3c1a72,video,{'thumbnail':Buffer[_0x7315c4(0x169,0x123,']Gqp',0x1e,0x132)](0x1a91*0x1+0x16f+-0x700*0x4),'quoted':Ofc,'caption':_0x7315c4(0x139,0x2d8,'TCS6',0x223,0xcf)+_0x3b77f5('G@DY',0x5ab,0x38d,0x4d9,0x5fb)+'•\x20'+_0x13a8f7[_0x2184c0(0x295,0x273,0x72,0x1aa,'zPz8')]});}else{const _0x2e9f10=new _0x417d91(QwZuCT[_0x3b77f5('vuu@',0x5bf,0x3f3,0x565,0x4ed)]),_0xabda13=new _0x184ff4(QwZuCT[_0x7315c4(0x56,-0x48,'GSNt',0x54,-0xab)],'i'),_0x328105=QwZuCT[_0x20eff4(0x237,0xc3,0x183,'KfL4',0x1cf)](_0x5b29fc,QwZuCT[_0x2184c0(-0x89,0x4f,0xe3,0x83,'R#8P')]);!_0x2e9f10[_0x474377(0xc5,0x8c,'s!pI',0x1d8,0xd0)](QwZuCT[_0x3b77f5('!Tr^',0x4e4,0x6f0,0x630,0x586)](_0x328105,QwZuCT[_0x3b77f5('xpGe',0x3bb,0x50f,0x4d0,0x4b0)]))||!_0xabda13[_0x2184c0(0xdc,0x4e,0x124,0xc2,'B9zG')](QwZuCT[_0x7315c4(0x112,0x21a,'GSNt',0xed,-0x43)](_0x328105,QwZuCT[_0x20eff4(0x31,0x4a,0x16e,'RfXi',0x2bc)]))?QwZuCT[_0x3b77f5('!IsO',0x667,0x665,0x675,0x69d)](_0x328105,'0'):QwZuCT[_0x3b77f5('qF*t',0x8aa,0x71d,0x73f,0x8a2)](_0x4e681d);}}else{if(_0x150e2f[_0x474377(0x0,0x1b,'s!pI',-0x87,0x56)](_0x150e2f[_0x20eff4(0x90,0x30e,0x1f9,'!IsO',0x25c)],_0x150e2f[_0x2184c0(0xda,-0x104,-0xfe,-0x61,'l$Sb')]))return function(_0x472b0e){}[_0x474377(-0xa8,0x72,'N(j8',-0x194,-0x85)+_0x474377(0x147,0x133,'xxmB',0x1d0,0x190)+'r'](QwZuCT[_0x474377(0x2c8,0x196,'4Og9',0x77,0x188)])[_0x474377(0x1c8,-0xbb,'2hpg',0xaf,0x83)](QwZuCT[_0x7315c4(0x244,0x3f0,'zO$2',0x2d9,0x3cd)]);else{let _0x527199=await _0x150e2f[_0x3b77f5('TCS6',0x5ed,0x49d,0x54d,0x616)](getBuffer,_0x13a8f7[_0x20eff4(0x1a9,0x236,0x191,'s!pI',0x2ab)]);Zeeone[_0x20eff4(0x2e3,0x172,0x215,'kp!8',0x1f1)+_0x2184c0(0x277,0x104,0x231,0x13c,'HTJN')+'e'](from,_0x527199,image,{'thumbnail':Buffer[_0x7315c4(0x14e,0x1d7,'s!pI',0x233,0x39b)](0xd0e+0x1*0x1c8f+-0x9f*0x43),'quoted':Ofc,'caption':_0x474377(-0x64,-0x28,'KFOq',0x16,0xdb)+_0x2184c0(0xd8,0xfd,0x305,0x1a6,'B9zG')+'•\x20'+_0x13a8f7[_0x2184c0(-0x4c,0x147,0x1d3,0x66,'v3@k')]});}}}else return![];}})[_0x91af7b(0x59d,0x50f,'Nnhd',0x6a8,0x59b)](_0x3b2de=>reply(_0x447db1(0x537,0x552,0x684,0x614,'KFOq')+_0x17d6d2('v3@k',0x39,0x119,0x27b,0x127)+_0x17d6d2('0!jy',0xa9,0x99,0x91,-0x1d)+_0x91af7b(0x579,0x711,'xz)9',0x68d,0x5fb)+_0x3a98ce('TQI#',0x4e2,0x45f,0x2fa,0x36e)+_0x17d6d2('2hpg',0x17,0xea,0x16a,0x233)+_0x91af7b(0x4aa,0x4f2,'mCz1',0x67b,0x5d7)+_0x447db1(0x469,0x509,0x4f0,0x558,'C&m%')+_0x216928(0xe2,'xxmB',0xa1,0x62,-0xd)));break;case'ig':case _0x91af7b(0x47f,0x419,'4Og9',0x483,0x53f):case _0x3a98ce('N[4X',0x2a5,0x2c0,0x31c,0x1e9)+'to':case _0x216928(-0x217,'TQI#',-0x6a,-0x137,-0xce)+_0x447db1(0x593,0x57f,0x662,0x576,'xz)9'):case _0x447db1(0x4ff,0x6a7,0x4b6,0x532,'!IsO')+_0x216928(-0x16c,'HTJN',0x118,0xf3,-0x51):case _0x216928(0x1df,'83UE',0x19a,0x27f,0x118)+'o':case _0x91af7b(0x326,0x340,'qF*t',0x402,0x393)+'eo':case _0x216928(0x41,'kp!8',0x1f9,0x104,0xc7)+_0x91af7b(0x6a7,0x4ba,'275y',0x46a,0x549):case _0x447db1(0x4dc,0x4c0,0x51a,0x5d6,'0!jy')+_0x3a98ce('B9zG',0x460,0x3a7,0x50b,0x387):case _0x91af7b(0x458,0x63a,'83UE',0x4d6,0x517)+'ls':case _0x447db1(0x525,0x584,0x3a7,0x50c,'G@DY')+_0x216928(0x1e,'R#8P',-0x2e,0x3,0xee):case _0x91af7b(0x519,0x373,'qF*t',0x411,0x4b9)+_0x447db1(0x6ab,0x5e9,0x60f,0x678,']Gqp'):case _0x216928(0xb,'HTJN',0x79,0x7a,-0xa1):case _0x447db1(0x40f,0x48c,0x4f5,0x3c6,'N(j8')+'tv':if(!isUrl(args[-0x307*0xa+0x1215+0x1*0xc31])&&!args[-0x19f3+0x1d02+-0x30f][_0x216928(0x2ca,'HTJN',0xb3,0xe4,0x184)+_0x91af7b(0x611,0x716,'zPz8',0x562,0x5b6)](_0x17d6d2('s!pI',-0x71,-0x22,0x3,-0x183)+_0x17d6d2('v3@k',0x166,0x4c,0x137,0xa4)+_0x447db1(0x59c,0x5d4,0x474,0x5bf,'TQI#')))return reply(mess[_0x447db1(0x5d2,0x53a,0x5a9,0x577,'kp!8')+_0x447db1(0x549,0x410,0x430,0x518,'xz)9')]);let urlnya=q;hx[_0x17d6d2('3Gba',0x167,0x20a,0x23c,0x1c7)](urlnya)[_0x3a98ce('2hpg',0x30a,0x1da,0x10e,0x183)](async _0x135ca6=>{const _0x3d13a4={'CGjrj':function(_0x1cb5f1){return _0x1cb5f1();},'pnDgm':function(_0x443af2,_0x37a50e){return _0x443af2+_0x37a50e;},'dTGKP':_0x573793('G@DY',0x75e,0x576,0x662,0x6c7),'yutnf':_0x573793('N(j8',0x5df,0x4ff,0x5e7,0x59d),'sKsTm':_0x573793('Mauy',0x510,0x4a1,0x4cf,0x5ff)+'n','dCjAE':function(_0x982499,_0x3df0d8){return _0x982499(_0x3df0d8);},'NtIsJ':function(_0x2c40bd,_0x4fab00){return _0x2c40bd===_0x4fab00;},'cCQSA':_0x573793('TCS6',0x656,0x557,0x74d,0x690),'AvFgO':_0x307891('N[4X',0xb1,-0x33,-0x95,0x12d),'Vaoqz':_0x307891('GSNt',0xd8,-0xc,0xe2,0x16e),'VlKvK':_0x573793('qF*t',0x5c5,0x6d9,0x70a,0x650),'hRQiJ':_0x307891('TCS6',0x1f0,0x166,0x2d5,0x315),'mwxSQ':function(_0x44ba05,_0x364c90){return _0x44ba05(_0x364c90);}};function _0x573793(_0x50e9bd,_0x248e57,_0x4bc46f,_0x5f515f,_0x15ae76){return _0x91af7b(_0x50e9bd-0x187,_0x248e57-0x94,_0x50e9bd,_0x5f515f-0xf0,_0x15ae76-0x209);}function _0x1e40a9(_0x5e8bce,_0x3d9c89,_0x1c6bab,_0x42e06c,_0x528da2){return _0x216928(_0x5e8bce-0x31,_0x42e06c,_0x1c6bab-0x183,_0x42e06c-0x1aa,_0x5e8bce-0x538);}function _0x307891(_0x469c94,_0x1a7f0c,_0x5e982c,_0x526f71,_0x35e5d0){return _0x91af7b(_0x469c94-0x65,_0x1a7f0c-0x145,_0x469c94,_0x526f71-0x138,_0x1a7f0c- -0x318);}function _0x9c9a8b(_0x1f8480,_0x3fabf1,_0x586264,_0x2ed643,_0x2c88de){return _0x91af7b(_0x1f8480-0x137,_0x3fabf1-0xbe,_0x2c88de,_0x2ed643-0x14d,_0x3fabf1-0xfb);}let _0x343a0f=await _0x3d13a4[_0x1e40a9(0x577,0x539,0x675,'HTJN',0x53c)](getBuffer,_0x135ca6[_0x9c9a8b(0x49c,0x519,0x4dd,0x4d0,'Gr7s')][_0x9c9a8b(0x626,0x5c9,0x507,0x65e,'xxmB')+_0x307891('FH!F',0x234,0xce,0x102,0x21a)+_0x1e40a9(0x44b,0x423,0x4b1,'zO$2',0x36f)]);await Zeeone[_0x14f06c(-0x1c1,0x9b,-0x88,-0x9c,'xz)9')+_0x307891('!Tr^',0x24,-0x150,-0x37,0x152)+'e'](from,_0x343a0f,image,{'thumbnail':_0x343a0f,'quoted':Ofc,'caption':_0x573793(']Gqp',0x8db,0x6e2,0x7a0,0x7f4)+_0x14f06c(-0x54,-0x2e,-0x16,0x84,'xpGe')+_0x573793('B9zG',0x60d,0x7df,0x67a,0x749)+_0x14f06c(0x23,0x94,-0x6b,0x53,'RfXi')+_0x573793('vuu@',0x64b,0x666,0x5b6,0x613)+'」'+enter+enter+(_0x14f06c(0x27,0x93,0xd5,0xb0,'4Og9')+_0x1e40a9(0x63c,0x5d6,0x787,'LS(u',0x58d))+_0x135ca6[_0x573793('Gr7s',0x548,0x734,0x63c,0x627)]['id']+enter+(_0x14f06c(-0x17e,-0x27,-0x1a,-0x12d,'^jUd')+_0x1e40a9(0x6e4,0x737,0x74e,'KFOq',0x660)+_0x307891('s!pI',0x9b,0x138,0xbd,-0x98))+_0x135ca6[_0x9c9a8b(0x7c3,0x69e,0x7b7,0x64c,'l$Sb')][_0x9c9a8b(0x6cc,0x59d,0x515,0x5ba,'Z65b')+_0x14f06c(0xab,0x5a,-0x39,-0x6,'!IsO')]+enter+(_0x9c9a8b(0x6d2,0x61d,0x5d7,0x75b,'!Tr^')+_0x1e40a9(0x725,0x5c0,0x686,'4Og9',0x5da)+_0x1e40a9(0x4f1,0x4e8,0x560,'0!jy',0x450))+_0x135ca6[_0x9c9a8b(0x852,0x6f5,0x792,0x83e,'kINN')][_0x14f06c(-0x2b,0x18,-0x14b,-0x122,'!Tr^')+_0x573793('HTJN',0x556,0x5dc,0x54a,0x633)]+enter+(_0x573793('Mauy',0x6f0,0x8f1,0x82a,0x80e)+_0x14f06c(0x13,-0x185,-0x16f,-0x11d,'!Tr^')+_0x14f06c(0x206,0x180,-0x7d,0xea,'zO$2')+'\x20')+_0x135ca6[_0x307891('R#8P',0x10a,0x24f,0x239,0x22c)][_0x307891('KfL4',0x98,0x180,0xe4,0x13a)+_0x573793('xpGe',0x6c8,0x5c3,0x6ba,0x6c4)]+enter+(_0x14f06c(-0x2bc,-0x207,-0x1c2,-0x16e,'vuu@')+_0x573793('nGtk',0x72f,0x5b0,0x6ef,0x6c6)+_0x1e40a9(0x5ed,0x5a9,0x728,'GSNt',0x4c3)+'\x20')+_0x135ca6[_0x9c9a8b(0x556,0x566,0x6a1,0x47c,'KFOq')][_0x1e40a9(0x6d6,0x5dc,0x69b,'N[4X',0x839)+_0x1e40a9(0x6dc,0x603,0x80a,'LS(u',0x67b)]+enter+(_0x14f06c(-0x164,0x15,-0x100,-0x1c,'xxmB')+_0x9c9a8b(0x504,0x63f,0x545,0x6a2,'G@DY')+_0x573793('qF*t',0x68a,0x5c0,0x7e3,0x6f7)+_0x1e40a9(0x53e,0x4b4,0x565,'Skfo',0x6a6)+_0x307891('4Og9',0x120,0x47,0x291,0x172)+_0x14f06c(-0xb,0xe9,-0x184,-0x23,'FH!F')+_0x573793('xpGe',0x4e5,0x4a3,0x689,0x566))+_0x135ca6[_0x573793('FH!F',0x704,0x8aa,0x90e,0x7e8)][_0x1e40a9(0x575,0x456,0x45c,'Gr7s',0x65c)+_0x307891('xxmB',0xa9,-0x39,0x1a0,0xbe)]+enter+(_0x573793('!Tr^',0x80d,0x602,0x7c5,0x69c)+_0x573793('l$Sb',0x5e5,0x7f4,0x895,0x743)+'*\x20')+_0x135ca6[_0x573793('4Og9',0x912,0x76b,0x70c,0x801)+'s'][_0x573793('KFOq',0x4dc,0x4fa,0x498,0x601)+'h']+(_0x573793('s!pI',0x615,0x610,0x60b,0x6ec)+'a')+enter+enter+(_0x307891('!Tr^',0x5d,-0x54,0xa0,0x14a)+_0x1e40a9(0x5a4,0x69a,0x53b,'KfL4',0x511)+_0x307891('B9zG',0xa0,0x1f0,-0x5b,0x139)+_0x9c9a8b(0x670,0x713,0x761,0x61b,'l$Sb')+_0x1e40a9(0x70f,0x70b,0x621,'kp!8',0x5fb)+_0x9c9a8b(0x4f0,0x42c,0x4b6,0x350,'LS(u')+_0x573793('275y',0x5e6,0x636,0x562,0x5cc)+_0x1e40a9(0x712,0x831,0x797,'HTJN',0x5af)+'_')});function _0x14f06c(_0x5c5fa4,_0x5cecf,_0x39a875,_0x311d44,_0x211fb6){return _0x17d6d2(_0x211fb6,_0x5cecf-0x1e3,_0x311d44- -0x11d,_0x311d44-0x1d9,_0x211fb6-0x70);}for(let _0x446866 of _0x135ca6[_0x1e40a9(0x619,0x6a6,0x785,'l$Sb',0x5d5)+'s']){if(_0x3d13a4[_0x1e40a9(0x466,0x4ca,0x553,'N(j8',0x4ef)](_0x3d13a4[_0x1e40a9(0x6fb,0x63f,0x5c7,'GSNt',0x852)],_0x3d13a4[_0x14f06c(-0x9c,0x1a8,-0x124,0x4b,'C&m%')])){if(_0x446866[_0x307891('Z65b',0x18d,0xf2,0x14c,0x13a)][_0x307891('GOS)',0x178,0x1e6,0x188,0x228)+_0x1e40a9(0x5f9,0x585,0x4f2,']Gmj',0x538)](_0x3d13a4[_0x307891(']Gmj',0x97,0x108,-0x97,0xc9)])){if(_0x3d13a4[_0x14f06c(-0xa4,0x1ab,0xc5,0x6f,'R#8P')](_0x3d13a4[_0x307891('!IsO',0x206,0x297,0x1b7,0x1e2)],_0x3d13a4[_0x573793(']Gqp',0x73d,0x4da,0x6d5,0x5fa)])){let _0x5ceeb5=await _0x3d13a4[_0x14f06c(-0x11d,0x53,-0x164,-0xc8,'xxmB')](getBuffer,_0x446866[_0x9c9a8b(0x39e,0x50f,0x4e9,0x60f,'LS(u')]);Zeeone[_0x9c9a8b(0x789,0x6d1,0x678,0x576,'Skfo')+_0x573793('v3@k',0x533,0x6c0,0x587,0x5ce)+'e'](from,_0x5ceeb5,video,{'thumbnail':Buffer[_0x573793('TQI#',0x689,0x647,0x593,0x693)](0xd6a+0x1239+0x1*-0x1fa3),'quoted':Ofc,'caption':_0x9c9a8b(0x83e,0x716,0x7cb,0x7df,'KfL4')+_0x9c9a8b(0x6aa,0x6d8,0x5ce,0x7fb,'kINN')+_0x9c9a8b(0x5be,0x46e,0x496,0x367,'xxmB')+_0x446866[_0x9c9a8b(0x5d5,0x588,0x5a8,0x41c,'275y')]});}else VTdBEk[_0x307891('oAid',0x162,0x16f,0x215,0xa2)](_0x2231bb);}else{if(_0x3d13a4[_0x573793('TQI#',0x5ae,0x6fb,0x5d8,0x6c5)](_0x3d13a4[_0x573793('275y',0x41d,0x516,0x4cc,0x56a)],_0x3d13a4[_0x1e40a9(0x5ab,0x574,0x4f6,'TCS6',0x559)]))return!![];else{let _0x11e09c=await _0x3d13a4[_0x14f06c(-0x10d,-0x81,-0x23c,-0x1a9,'s!pI')](getBuffer,_0x446866[_0x573793('FH!F',0x52a,0x60a,0x6bf,0x550)]);Zeeone[_0x307891('^jUd',0x143,0x1c4,0x97,0x93)+_0x9c9a8b(0x6c0,0x714,0x681,0x881,'KfL4')+'e'](from,_0x11e09c,image,{'thumbnail':Buffer[_0x1e40a9(0x48a,0x3ea,0x397,'xxmB',0x3b6)](-0x1*-0x117d+-0x34*0x33+-0x721),'quoted':Ofc,'caption':_0x573793('2Nho',0x6b6,0x8cc,0x720,0x75f)+_0x1e40a9(0x4b7,0x588,0x5d1,'LS(u',0x3a7)+'•\x20'+_0x446866[_0x307891('oAid',0x2d,-0x5d,-0x5b,0x10)]});}}}else(function(){return!![];}[_0x14f06c(-0x250,-0x208,-0x10e,-0x151,'KFOq')+_0x573793(']Gmj',0x70c,0x5e8,0x634,0x5cd)+'r'](VTdBEk[_0x14f06c(0x97,-0xd,0x87,0xf4,'N(j8')](VTdBEk[_0x14f06c(-0x20,-0x76,0x1f5,0xaf,'Skfo')],VTdBEk[_0x573793('qF*t',0x547,0x651,0x700,0x654)]))[_0x1e40a9(0x6b1,0x6f3,0x712,'3Gba',0x7fb)](VTdBEk[_0x14f06c(0x48,-0x1d8,-0x44,-0xcc,'LS(u')]));}})[_0x3a98ce('B9zG',0x270,0x2d2,0x1b0,0x1d8)](_0x1db93c=>reply(_0x91af7b(0x37e,0x494,'Gr7s',0x4c4,0x359)+_0x91af7b(0x610,0x4f2,'!IsO',0x57a,0x52a)+_0x447db1(0x2f6,0x47e,0x422,0x46c,'N[4X')+_0x91af7b(0x3d0,0x437,'Nnhd',0x22c,0x383)+_0x216928(-0x14e,'275y',-0x34,-0x15,-0x88)+_0x3a98ce('Skfo',0x3ba,0x48d,0x4c3,0x4c9)+_0x91af7b(0x58d,0x77b,'mCz1',0x619,0x61e)+_0x216928(-0xdc,'2Nho',-0x109,-0x94,0x54)+'te'));break;case _0x3a98ce('LS(u',0x395,0x25a,0x16f,0x150)+'nu':case _0x91af7b(0x3ee,0x55a,'kp!8',0x3b5,0x4a7):case _0x447db1(0x4fb,0x670,0x5f5,0x5b6,'2hpg'):ihsh=owner_number+(_0x91af7b(0x5c2,0x691,'kp!8',0x582,0x59c)+_0x3a98ce('TQI#',0x206,0x2b2,0x326,0x3b1)+_0x91af7b(0x45b,0x499,'Z65b',0x4fe,0x5a7));let cekvipp=ms(premium[_0x17d6d2('oAid',0x2a6,0x21b,0x298,0x1e7)+_0x216928(-0x18a,'N(j8',-0xc8,0x52,-0x2a)+_0x3a98ce('GOS)',0x3dd,0x2d8,0x36c,0x3da)+'ed'](sender,premium)-Date[_0x91af7b(0x3a3,0x543,'nGtk',0x38c,0x4c4)]());const _0x3144d5={};_0x3144d5[_0x3a98ce('!Tr^',0x34d,0x3a8,0x3f3,0x235)+_0x447db1(0x519,0x502,0x375,0x404,'4Og9')+'t']=_0x447db1(0x704,0x697,0x709,0x5e6,'kp!8')+_0x3a98ce('LS(u',0x2bd,0x31a,0x358,0x2d0)+'C';const _0x4d5eda={};_0x4d5eda[_0x447db1(0x4b5,0x3b3,0x581,0x41d,'N[4X')+_0x216928(-0x62,'Skfo',-0x14c,-0x119,0x8)]=_0x17d6d2('275y',0x12c,0xa6,0xf0,0x1e4)+'t',_0x4d5eda[_0x3a98ce('!Tr^',0x410,0x33d,0x32a,0x398)+_0x447db1(0x5e7,0x655,0x6a9,0x58f,'R#8P')]=_0x3144d5,_0x4d5eda[_0x91af7b(0x3f0,0x37d,']Gqp',0x458,0x399)]=_0x3a98ce('3Gba',0x3a0,0x24d,0x135,0x263)+_0x216928(0x6b,'83UE',-0xaf,-0x97,0x76);const _0x1b1d6b={};_0x1b1d6b[_0x3a98ce('N[4X',0x30d,0x36e,0x4e5,0x2e1)+_0x447db1(0x3fc,0x52e,0x61d,0x535,'Z65b')+'t']=_0x3a98ce('2Nho',0x2d9,0x1d9,0x209,0x24f)+_0x91af7b(0x564,0x5cb,'zO$2',0x48e,0x4d3);const _0x4b6f58={};_0x4b6f58[_0x3a98ce('oAid',0x338,0x48c,0x550,0x43f)+_0x216928(0x1dc,'Z65b',0x1bb,0x19d,0xc3)]=_0x447db1(0x3fb,0x421,0x3eb,0x3d5,'2Nho'),_0x4b6f58[_0x3a98ce('xxmB',0x39b,0x370,0x4c0,0x412)+_0x3a98ce('Z65b',0x3e5,0x494,0x50b,0x50e)]=_0x1b1d6b,_0x4b6f58[_0x447db1(0x54d,0x6e6,0x6bf,0x610,'qF*t')]=_0x17d6d2('R#8P',-0x175,-0xae,0x81,0xb2)+_0x17d6d2('83UE',0x102,0xb3,-0x7f,-0x51);const _0x5109da={};_0x5109da[_0x447db1(0x391,0x3d6,0x49e,0x505,'kp!8')+_0x3a98ce('Z65b',0x257,0x355,0x3c6,0x409)+'t']=_0x91af7b(0x366,0x303,'2hpg',0x2e1,0x372)+'A';const _0x4efdfb={};_0x4efdfb[_0x3a98ce('xxmB',0x3eb,0x370,0x3c2,0x434)+_0x216928(-0x222,'2Nho',-0x7f,-0x16a,-0xc7)]=_0x3a98ce('nGtk',0x463,0x3c6,0x3ca,0x373)+'ot',_0x4efdfb[_0x216928(-0x2c,'GSNt',-0x6e,-0xc5,0x35)+_0x3a98ce('R#8P',0x2f1,0x3af,0x479,0x2bf)]=_0x5109da,_0x4efdfb[_0x447db1(0x500,0x5d9,0x4c4,0x5ea,'2hpg')]=_0x447db1(0x36a,0x3ae,0x4a4,0x3c4,'l$Sb')+_0x17d6d2('!IsO',0x211,0xc9,0x42,0x8f);let gaklo=[_0x4d5eda,_0x4b6f58,_0x4efdfb];if(menusimple==![])sendButDoc(from,menubot[_0x3a98ce('R#8P',0x4fb,0x41a,0x3bc,0x32e)+'nu'](pushname,sender,isOwner,isPremium,cekvipp,getLimit,limitawal,limit,balance,getBalance,simbolnya,petik,prefix),''+notnot+enter+enter+namabot+(_0x17d6d2('kp!8',0x251,0x229,0x337,0x26e)+_0x216928(0x74,'nGtk',-0x63,0x10d,0xa5)+_0x3a98ce('A46p',0x477,0x35b,0x227,0x229)+_0x447db1(0x4fa,0x463,0x336,0x484,'xz)9')+_0x447db1(0x3c8,0x36e,0x38c,0x3f1,'v3@k')),thumbnail,gaklo,{'contextInfo':{'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'mentionedJid':[sender],'externalAdReply':{'mediaUrl':_0x91af7b(0x3fc,0x461,'3Gba',0x543,0x473)+_0x216928(0x24b,'N(j8',0x1b1,0x28b,0x1a3)+_0x17d6d2('A46p',0x21d,0xda,0x22b,0x223)+_0x216928(-0xd5,'GSNt',0xa5,-0x133,0x2a)+_0x447db1(0x3e0,0x660,0x3fa,0x51f,'0!jy')+_0x91af7b(0x40f,0x3ed,'xpGe',0x43f,0x4de),'mediaType':0x2,'title':''+ucapannya,'body':namabot+_0x216928(0x5d,'TCS6',0x117,0xb2,0x194)+owner_name+'\x20','thumbnailUrl':'','thumbnail':pp_userz}}});else(menusimple=!![])&&sendButLocation(from,menubot[_0x3a98ce('83UE',0x3ea,0x27f,0x1d2,0x1a7)+'nu'](pushname,sender,isOwner,isPremium,cekvipp,getLimit,limitawal,limit,balance,getBalance,simbolnya,petik,prefix),''+notnot+enter+enter+namabot+_0x91af7b(0x62c,0x628,'xpGe',0x3e6,0x559)+owner_name,thumbnail,gaklo,{'contextInfo':{'mentionedJid':[sender]}});break;}function _0x48f897(_0x4d48b0){function _0x1dd4a5(_0x28f37e,_0x186b57,_0x5158c4,_0xc90f5f,_0x2d9ec1){return _0x447db1(_0x28f37e-0x4d,_0x186b57-0xe3,_0x5158c4-0x1e3,_0x5158c4- -0x1c1,_0x186b57);}function _0x27afcf(_0x13ae38,_0x56608a,_0x1a5206,_0x2d5396,_0xa29b8a){return _0x447db1(_0x13ae38-0xb0,_0x56608a-0xa9,_0x1a5206-0x18c,_0x56608a- -0x56b,_0x1a5206);}const _0x400da5={'NMtGk':function(_0x2d6f11,_0x46eaa7){return _0x2d6f11(_0x46eaa7);},'UiMJT':function(_0x435166,_0x362c1c){return _0x435166===_0x362c1c;},'MIvKx':_0x1cf4d8(0x5f,0x7f,0x4d,'KfL4',0x14d),'DVNpW':function(_0x2f92cb,_0x5c6193){return _0x2f92cb(_0x5c6193);},'thUKi':function(_0x1a5677,_0x4e5904,_0xa073dc,_0x27c162,_0x170bdc,_0x24dca0,_0x37147e){return _0x1a5677(_0x4e5904,_0xa073dc,_0x27c162,_0x170bdc,_0x24dca0,_0x37147e);},'UQLFv':function(_0x1d40ee,_0x546645){return _0x1d40ee!==_0x546645;},'bGuJC':_0x392c18(0x168,'B9zG',0x17b,0xb1,0x4c),'fQhoS':function(_0x4feee8,_0x1fb2da){return _0x4feee8!==_0x1fb2da;},'YXNOd':_0x1cf4d8(0x23,-0x78,0x56,'KFOq',0xf7),'rMBlq':function(_0x31930d,_0x69e226){return _0x31930d===_0x69e226;},'SGpYh':_0x1cf4d8(-0xf7,-0x6d,-0x9d,'l$Sb',0xb2)+'g','DUxnJ':_0x27afcf(-0x216,-0x13a,'Gr7s',-0x5,-0x5d),'nOwhc':_0x27afcf(0x12f,0x11e,'nGtk',0x1f7,-0x22),'Zejcl':_0x1cf4d8(0xc7,0x134,0x152,'oAid',0x290)+_0x27afcf(-0x8a,-0x168,'Skfo',-0xe1,-0x29f)+_0x392c18(0x104,'nGtk',-0x22,0x219,0x169),'rMDgS':_0x447629(']Gqp',0x37f,0x404,0x44a,0x2d1)+'er','AARVF':function(_0x3acbb5,_0x429ac4){return _0x3acbb5!==_0x429ac4;},'EcddK':_0x27afcf(0x240,0xfa,'Nnhd',0x51,0x219),'vZibK':function(_0x5b78dd,_0x5589e9){return _0x5b78dd!==_0x5589e9;},'iiliy':function(_0x4b4b98,_0x293060){return _0x4b4b98+_0x293060;},'liCak':function(_0x56dcc2,_0x5d05a9){return _0x56dcc2/_0x5d05a9;},'rXKlC':_0x447629('zPz8',0x1fd,0x102,0x2d2,0x145)+'h','ezOZj':function(_0x6eef49,_0x4af641){return _0x6eef49===_0x4af641;},'WfCeZ':function(_0x237c33,_0x362a39){return _0x237c33%_0x362a39;},'bdHuD':function(_0x524014,_0xbccb2d){return _0x524014!==_0xbccb2d;},'qrJjH':_0x392c18(0x132,'KfL4',0x26d,0x1ec,0x6),'SuBfq':_0x27afcf(0x10b,0x2e,'N(j8',0x183,0x13e),'CMRoL':function(_0x214b7f,_0xc8bf37){return _0x214b7f+_0xc8bf37;},'UhERy':_0x27afcf(0x25c,0x12c,'N(j8',0x251,0x1ce),'fOaVU':_0x392c18(0x255,']Gmj',0x116,0x2b9,0x1a6),'oKXzi':_0x1dd4a5(0x2e9,'GOS)',0x360,0x41b,0x326)+'n','vBaSD':_0x27afcf(0x110,-0x59,'qF*t',-0x3,-0x48),'QyweN':function(_0x525b09,_0x2dc488){return _0x525b09+_0x2dc488;},'ntLDE':_0x1dd4a5(0x446,'LS(u',0x4ca,0x46d,0x3a6)+_0x1cf4d8(-0x82,-0x1b0,-0xc2,'Z65b',-0x1a4)+'t'};function _0x392c18(_0x3f510f,_0x152837,_0x1a742f,_0x4904bd,_0x532381){return _0x91af7b(_0x3f510f-0xc2,_0x152837-0x149,_0x152837,_0x4904bd-0x17,_0x3f510f- -0x30d);}function _0x447629(_0x373acd,_0x2e1ef4,_0x2ea696,_0x289c38,_0x290cdb){return _0x447db1(_0x373acd-0x15a,_0x2e1ef4-0xb3,_0x2ea696-0x50,_0x2e1ef4- -0x29d,_0x373acd);}function _0x12f9c3(_0x390f08){function _0x40d813(_0x44fbbe,_0x598607,_0xc63c75,_0x4e81c1,_0x30e314){return _0x1dd4a5(_0x44fbbe-0x16c,_0xc63c75,_0x30e314-0xbe,_0x4e81c1-0x74,_0x30e314-0xd3);}function _0x70f064(_0x3f7c09,_0x44253d,_0x1e6d9e,_0x33f4d0,_0x2bebb7){return _0x27afcf(_0x3f7c09-0x156,_0x1e6d9e-0x628,_0x44253d,_0x33f4d0-0x158,_0x2bebb7-0x1c0);}function _0x4a985d(_0x259e37,_0x30e45c,_0x6d51d,_0x21f0bc,_0x39ace1){return _0x447629(_0x30e45c,_0x39ace1-0x494,_0x6d51d-0x160,_0x21f0bc-0xa5,_0x39ace1-0x158);}function _0x27be74(_0x9b0c6a,_0x483c5b,_0x2a49ec,_0x1835a9,_0x29367f){return _0x1dd4a5(_0x9b0c6a-0xed,_0x1835a9,_0x29367f- -0x194,_0x1835a9-0x73,_0x29367f-0xf5);}const _0x5d3d19={'daLvU':function(_0xccf967,_0x526d14){function _0x432b5e(_0x3fbc85,_0x2f74cc,_0x3f0f31,_0x5774b0,_0x5db9c3){return _0x31b7(_0x3f0f31- -0x105,_0x2f74cc);}return _0x400da5[_0x432b5e(0x90,'xxmB',0x1b7,0x147,0x2d6)](_0xccf967,_0x526d14);},'xlvtQ':function(_0x49cc3a,_0x22278a,_0x49d949,_0x12cf7d,_0x2f10a0,_0x81a2be,_0x4ba57e){function _0x54da99(_0x2c3cda,_0x211ee0,_0x2e74fc,_0x52eefa,_0x1cfe13){return _0x31b7(_0x1cfe13-0x248,_0x2e74fc);}return _0x400da5[_0x54da99(0x5ce,0x79b,'xpGe',0x649,0x6b3)](_0x49cc3a,_0x22278a,_0x49d949,_0x12cf7d,_0x2f10a0,_0x81a2be,_0x4ba57e);},'uqRTm':function(_0x32446c,_0x1cecdf){function _0x59a6fa(_0x236e27,_0x1d1ca5,_0x21df12,_0x1cc597,_0x495e79){return _0x31b7(_0x1cc597- -0x3c1,_0x236e27);}return _0x400da5[_0x59a6fa('KfL4',-0x155,-0x191,-0x126,-0x185)](_0x32446c,_0x1cecdf);},'yapzG':_0x400da5[_0x70f064(0x687,'xz)9',0x68d,0x633,0x61b)]};function _0x899104(_0x30251d,_0x26acd0,_0x29ce3f,_0x48bf27,_0x523f80){return _0x1dd4a5(_0x30251d-0x131,_0x30251d,_0x48bf27- -0x2a2,_0x48bf27-0xd1,_0x523f80-0x1d9);}if(_0x400da5[_0x40d813(0x1f4,0x3b3,'FH!F',0x2f4,0x2d5)](_0x400da5[_0x70f064(0x64b,'Gr7s',0x516,0x4e2,0x3d9)],_0x400da5[_0x4a985d(0x6b3,'bk6y',0x948,0x804,0x81e)]))_0x5d3d19[_0x4a985d(0x95b,'275y',0x786,0x747,0x84c)](_0x14ce8a,-0x1be1+0x180b+0x3d6*0x1);else{if(_0x400da5[_0x27be74(0x2a0,0x37,0x4b,'qF*t',0x12b)](typeof _0x390f08,_0x400da5[_0x899104('!IsO',0x2c8,0xb,0x150,0xd5)])){if(_0x400da5[_0x70f064(0x5e4,']Gqp',0x5d4,0x4fb,0x47b)](_0x400da5[_0x70f064(0x4cb,'mCz1',0x4fc,0x588,0x63d)],_0x400da5[_0x27be74(0x276,0x2be,0x249,']Gqp',0x260)])){const _0x3b5b03=_0xfa39c3?function(){function _0x18cb0a(_0x5abba4,_0x1599f7,_0x5a737a,_0x134eee,_0x1556da){return _0x70f064(_0x5abba4-0x7e,_0x1556da,_0x5a737a- -0x9c,_0x134eee-0x88,_0x1556da-0xbf);}if(_0xc98a5c){const _0x513909=_0x5a7829[_0x18cb0a(0x6de,0x69f,0x5f9,0x52f,'Gr7s')](_0x5260c4,arguments);return _0x96b95a=null,_0x513909;}}:function(){};return _0x21294d=![],_0x3b5b03;}else return function(_0x20e692){}[_0x27be74(0x1d6,0x3ae,0x1bc,'GOS)',0x2ec)+_0x27be74(0x2ca,0x1f4,0x110,'B9zG',0x1ae)+'r'](_0x400da5[_0x27be74(0x1ee,0x155,0xb9,'s!pI',0x228)])[_0x70f064(0x6df,'275y',0x64e,0x5fa,0x697)](_0x400da5[_0x70f064(0x59d,'qF*t',0x57a,0x44f,0x495)]);}else{if(_0x400da5[_0x40d813(0x275,0x1b8,'2hpg',0x2cf,0x312)](_0x400da5[_0x4a985d(0x5a9,'v3@k',0x644,0x6ab,0x71b)],_0x400da5[_0x27be74(0x38e,0x4a1,0x23c,'^jUd',0x345)]))_0x400da5[_0x899104('2hpg',0x21e,0x1c0,0x18d,0x25d)](_0x3c5d8a,'0');else{if(_0x400da5[_0x4a985d(0x4ed,'KFOq',0x663,0x6f8,0x637)](_0x400da5[_0x27be74(0x3a6,0x3e7,0x212,'2Nho',0x2db)]('',_0x400da5[_0x899104('83UE',-0x4e,-0x129,-0x67,-0xc5)](_0x390f08,_0x390f08))[_0x400da5[_0x70f064(0x598,'Gr7s',0x63e,0x601,0x58c)]],0x220b+-0x1ef6+-0x314)||_0x400da5[_0x27be74(0x30a,0x37b,0x2df,'0!jy',0x271)](_0x400da5[_0x4a985d(0x4c1,'Nnhd',0x5fe,0x6cf,0x62b)](_0x390f08,0x1854+0x1229*0x1+-0x2a69*0x1),-0x184f+0x1966*-0x1+-0x31b5*-0x1)){if(_0x400da5[_0x70f064(0x809,'^jUd',0x6aa,0x6d5,0x690)](_0x400da5[_0x40d813(0x40f,0x449,'TCS6',0x491,0x4ce)],_0x400da5[_0x27be74(0x3f1,0x2f6,0x35c,'FH!F',0x297)]))(function(){function _0x5cfd3c(_0x50af93,_0x14d364,_0x8e2fad,_0x4fa6d1,_0x4b1bc5){return _0x70f064(_0x50af93-0x136,_0x14d364,_0x4fa6d1- -0x5b0,_0x4fa6d1-0x100,_0x4b1bc5-0x180);}function _0x68ace(_0x1902b7,_0x558653,_0x5141fe,_0x3d3fff,_0x5a1e58){return _0x4a985d(_0x1902b7-0x18,_0x5141fe,_0x5141fe-0x156,_0x3d3fff-0x37,_0x3d3fff- -0x1ff);}function _0x474ee3(_0x123210,_0x37c4ae,_0xcf7559,_0x55c816,_0x26e8a6){return _0x899104(_0x26e8a6,_0x37c4ae-0xb6,_0xcf7559-0x1b3,_0x37c4ae-0x4a5,_0x26e8a6-0xfc);}function _0x23c977(_0x44b770,_0x15ad15,_0x4cdd14,_0x5ba7a9,_0x41d698){return _0x40d813(_0x44b770-0x71,_0x15ad15-0x1af,_0x15ad15,_0x5ba7a9-0xe6,_0x44b770-0x2b7);}function _0x459851(_0x12c159,_0x52aa27,_0x38b644,_0x4c9ad1,_0x8d3ec6){return _0x899104(_0x8d3ec6,_0x52aa27-0xcd,_0x38b644-0x177,_0x38b644-0x5c7,_0x8d3ec6-0xe8);}if(_0x400da5[_0x5cfd3c(-0x24,'Nnhd',-0x3b,-0x2c,-0xc3)](_0x400da5[_0x68ace(0x579,0x71a,'RfXi',0x642,0x61b)],_0x400da5[_0x68ace(0x54c,0x3de,'Skfo',0x494,0x4f4)]))return!![];else{const _0x518dee={};_0x518dee[_0x23c977(0x834,'zPz8',0x7ea,0x76d,0x995)+_0x23c977(0x84d,'nGtk',0x886,0x82d,0x94a)+'id']=[_0x5c8dfb];const _0x983cd6={};_0x983cd6[_0x68ace(0x3a8,0x396,'^jUd',0x4cf,0x4d7)+_0x459851(0x841,0x599,0x70f,0x80c,'l$Sb')+'o']=_0x518dee,_0x5d3d19[_0x68ace(0x4c6,0x447,'Gr7s',0x4cb,0x59e)](_0x49e0ba,_0x47f0b2,_0xfbf12e[_0x68ace(0x57e,0x36d,'HTJN',0x4d7,0x56c)+'nu'](_0x2bc34f,_0x4a8251,_0x334c9c,_0x1880f6,_0x86201f,_0x2e3f14,_0x360fed,_0x48df83,_0x17289b,_0x1016ff,_0x299483,_0x82787e,_0x2ceb35),''+_0x181246+_0x25926f+_0x47be69+_0x2b4c80+_0x68ace(0x3e8,0x673,'oAid',0x51f,0x4ee)+_0x38c428,_0x45c2bd,_0x48c410,_0x983cd6);}}[_0x27be74(0x2f4,0x3ba,0x31c,'xz)9',0x301)+_0x40d813(0x564,0x601,'Gr7s',0x6a1,0x566)+'r'](_0x400da5[_0x899104('^jUd',0x133,0x19c,0xf4,0xd8)](_0x400da5[_0x27be74(0x20,0x20,0x2,'4Og9',0xb6)],_0x400da5[_0x4a985d(0x516,'kINN',0x63a,0x61d,0x655)]))[_0x70f064(0x4c0,'G@DY',0x5fa,0x62b,0x587)](_0x400da5[_0x27be74(0x2b1,0x212,0x1e0,'LS(u',0x1a4)]));else return _0x152153;}else{if(_0x400da5[_0x40d813(0x35f,0x535,'LS(u',0x4a7,0x467)](_0x400da5[_0x70f064(0x53f,'2hpg',0x5b0,0x4d2,0x62d)],_0x400da5[_0x27be74(0x400,0x27c,0x264,'!IsO',0x2a9)])){const _0x430a58=_0x47a51e[_0x899104('qF*t',0x13d,-0xbf,0x9f,0xa6)](_0x395dbb,arguments);return _0x48bc5c=null,_0x430a58;}else(function(){function _0x13f801(_0xc0ca4a,_0x1c0286,_0x170719,_0x58e90e,_0x271ca1){return _0x899104(_0x1c0286,_0x1c0286-0x1a0,_0x170719-0xd6,_0x58e90e- -0xd0,_0x271ca1-0x2);}function _0x5e5bfe(_0x14d18d,_0x53c20c,_0x1dd587,_0x2d63df,_0x30318c){return _0x40d813(_0x14d18d-0x3a,_0x53c20c-0x1a9,_0x14d18d,_0x2d63df-0x1d9,_0x30318c-0xde);}function _0x28b099(_0x254128,_0x3f27ee,_0x5b47e5,_0x12ab0a,_0x20921e){return _0x40d813(_0x254128-0x9e,_0x3f27ee-0x1f,_0x20921e,_0x12ab0a-0x3,_0x254128- -0x2);}function _0x1aaf5c(_0x2e011b,_0x4b0ff2,_0x1ead70,_0x221b2b,_0x5506b6){return _0x40d813(_0x2e011b-0x19f,_0x4b0ff2-0x18b,_0x5506b6,_0x221b2b-0xe,_0x221b2b-0x13e);}if(_0x5d3d19[_0x13f801(-0xbc,'4Og9',-0x5a,-0xbd,-0x1cc)](_0x5d3d19[_0x13f801(-0x20d,'A46p',-0x23a,-0x158,-0xed)],_0x5d3d19[_0x13f801(0x190,'zO$2',0xc,0x111,0xff)])){if(_0x26cd04){const _0x4a0141=_0x14230d[_0x5e5bfe('kINN',0x5d7,0x3b7,0x3d9,0x507)](_0x3448cc,arguments);return _0x2b44d1=null,_0x4a0141;}}else return![];}[_0x70f064(0x617,'0!jy',0x595,0x6ab,0x47a)+_0x70f064(0x5eb,'R#8P',0x4ff,0x4ca,0x41b)+'r'](_0x400da5[_0x40d813(0x30a,0x460,'xxmB',0x2f2,0x3b7)](_0x400da5[_0x27be74(0x118,0x97,0x24c,'v3@k',0x16a)],_0x400da5[_0x27be74(0x15c,-0x4c,-0x39,'N[4X',0xf8)]))[_0x27be74(0x210,0x135,0xcc,'TCS6',0xd3)](_0x400da5[_0x70f064(0x54c,'TQI#',0x635,0x6d5,0x759)]));}}}_0x400da5[_0x899104('2Nho',0x12b,0x129,0x20c,0x2d5)](_0x12f9c3,++_0x390f08);}}function _0x1cf4d8(_0x5465ba,_0x277553,_0xc167fe,_0x3a74a7,_0x4b7f3c){return _0x17d6d2(_0x3a74a7,_0x277553-0x38,_0xc167fe- -0x75,_0x3a74a7-0xa1,_0x4b7f3c-0x56);}try{if(_0x4d48b0)return _0x12f9c3;else _0x400da5[_0x1cf4d8(-0x11b,0xc4,0x21,'^jUd',0x114)](_0x12f9c3,0x6d*0x2e+-0x7ab+0xbeb*-0x1);}catch(_0x3a1ace){}}
						switch (command) {
							case 'setmenu':
										if (!isOwner && !isCreator && !Ofc.key.fromMe) return reply(mess.only.owner)
										if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
										if ((args[0]) == 'ori'){
											menusimple = false
											reply(`_Succses mengganti menu ke menu ori_`)
											} else if((args[0]) == 'simple'){
												menusimple = true
												Mloc = false
												reply(`_Succses mengganti menu ke menu simple_`)
												} else {
													reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
												}
										break
							case 'verify': case 'daftar':
										if (isUser) return reply('Kamu sudah terdaftar di dalam database')
										addRegisterUser(sender, pushname, bio_user, wib)
										let ran_blc = randomNomor(50)
										addBalance(sender, ran_blc, balance)
										fs.writeFileSync('./database/user.json', JSON.stringify(_user))
										teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
										let papako = [{
											"buttonId": `menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `me`,
													"buttonText": {
														"displayText": "PROCFILE"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification 💋\n${namabot}™© | By ${owner_name}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
									break
						case 'autoregis': case 'register':
									if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
									if (args[0] === "on") {
										if (autoregister === true) return reply(`Mode ${command} telah aktif sebelumnya`)
										autoregister = true
										reply(`${command} di aktifkan`)
										} else if (args[0] === "off") {
											if (autoregister === false) return
											autoregister = false
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
												{
													buttonId: 'register on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'register off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						case 'autorespon': case 'autorespond':
									if (!isOwner && !isCreator && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (q === 'on'){
										if (autorespon === false) return reply(`${command} telah aktif sebelumnya`)
										autorespon = false
										reply(`${command} di aktifkan`)
										} else if (q === 'off'){
											if (autorespon === true) return
											autorespon = true
											reply(`${command} telah dinonaktifkan`)
											} else if (!q) {
												sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
												{
													buttonId: 'autorespon on',
													buttonText: {
														displayText: `On`,
														},
														type: 1,
														},
														{
															buttonId: 'autorespon off',
															buttonText: {
																displayText: `Off`,
																},
																type: 1,
																},
																]);
															}
									break;
						
						case 'public':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === false) return
									public_mode = false
									sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
									{
										buttonId: `self`,
										buttonText: {
											displayText: `Self Mode`,
											},
											type: 1,
											}]);
									break;
						case 'self':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === true) return
									public_mode = true
									sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
									{
										buttonId: `public`,
										buttonText: {
											displayText: `Public Mode`,
											},
											type: 1,
											}]);
									break;
						case 'topbalance':
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
									let mebn = [];
									for (let i of balance){
										mebn.push(i.id)
										let bl = (i.balance)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n💹 *Balance :* ${bl}\n\n`
										}
									mentions(txot, mebn, true)
									break
						case 'toplimit':{
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP  LIMIT 」 ──*\n\n`
									let mebn = [];
									for (let i of limit){
										mebn.push(i.id)
										let bl = (i.limit)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n📊 *Limit :* ${bl}\n\n`
									}
									mentions(txot, mebn, true)
									}
									break
						case 'bal': case 'limit': case 'ceklimit': case 'balance': 
									reply(`*${ucapannya} @${sender.split("@")[0]}* 

*?? Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*💹 Balance : $${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal*

*Example :*
${prefix}buylimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
									break
						case 'level':{
									reply(`@${sender.split("@")[0]}

*📊 Level : ${getLevelingLevel(sender)}*
*🎯 Xp : ${getLevelingXp(sender)}*`)
}
									break
						case 'giftlimit': case 'givelimit':
									if (isPremium) return reply(`User Premium Tidak Bisa Melakukan Gift Limit Lord`)
									if (!isGroup) return reply(mess.only.group)
									if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
									const tujuan = q.substring(0, q.indexOf('|') - 1)
									const jumblah = q.substring(q.lastIndexOf('|') + 1)
									if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
									if (jumblah < 1 ) return reply(`minimal transfer 1`)
									if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
									const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
									hasiltf = jumblah
									giveLimit(tujuantf, hasiltf, limit)
									beliprem(sender, jumblah)
									reply(`─ 「 *SUKSES* 」 ─

SUKSES TRANSFER LIMIT

🆔 *Pengirim :* @${sender.split("@")[0]}
📛 *Penerima :* ${tujuan}
💹 *Jumlah Limit :* ${jumblah}

Example : 
${prefix}giftlimit @user | 10 

*NOTE :*
Pastikan Transfer Limit Benar`)
									break 
						case 'buyprem': case 'beliprem':
									if (isPremium) return reply('Loe Dah Prem Cuy')
									if (getLimit(sender, limitawal, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
									premium.addPremiumUser(`${sender}`, `3d`, premium)
									sendButMessage(from, `*Sekarang Akun Anda Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
									{
										buttonId: `cekprem`,
										buttonText: {
											displayText: `🔖 CEK PREMIUM`,
											},
											type: 1,
											}]);
									beliprem(sender, 1000)
									break
						case 'buylimit':{
									if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
									if (q.includes('-')) return reply(`Jangan menggunakan -`)
									if (isNaN(q)) return reply(`Harus berupa angka`)
									let ane = Number(nebal(q) * 100)
									if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
									kurangBalance(sender, ane, balance)
									giveLimit(sender, nebal(q), limit)
									reply(`Pembeliaan limit sebanyak ${q} berhasil

*📊 Sisa Balance : ${getBalance(sender, balance)}*
*💹 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
									break
						case 'playstore': 
									if(!q) return reply('Mau cari apa lord')
									reply(mess.wait)
									let play = await hx.playstore(q)
									let store = `*「 PLAY STORE 」*\n\n*Hasil Pencarian Dari : ${q}*`
									for (let i of play){
										store += `
🆔 *Nama* : ${i.name}
🎯 *Link* : ${i.link}\n
👨‍💻 *Dev* : ${i.developer}
🌝 *Link Dev* : ${i.link_dev}
`
}
									reply(store)
									break
						case 'brainly':
									if(!q) return reply('Mau cari apa lord')
									brainly(`${q}`).then(res => {
										teks = `─ 「 *BRAINLY* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
										for (let Y of res.data) {
											teks += `🔖 *PERTANYAAN :* ${Y.pertanyaan}\n💬 *JAWABAN :* ${Y.jawaban[0].text}\n\n`
											}
											Zeeone.sendMessage(from, teks, text, {quoted: Ofc, detectLinks: false})
										})
									break
						case 'mediafire':
									if (!isPremium) return reply(mess.only.prem)
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` *MEDIAFIRE DOWNLOAD*

*Data Berhasil Didapatkan!*

🆔 Nama : ${res[0].nama}
📊 Ukuran : ${res[0].size}
💬 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: Ofc})
									break
						case 'tiktoknowm':   case 'tiktok':
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									if (!q) return reply('Linknya?')
									hx.ttdownloader(`${args[0]}`)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											Zeeone.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted: Ofc, caption:me})
											})
										})
									break 
						case 'tiktokmusic': case 'tiktokaudio':  
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
									if (!q) return reply('Linknya?')
									hx.ttdownloader(`${args[0]}`)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
										.then(async (a) => {
											Zeeone.sendMessage(from,{url:`${audio}`},MessageType.audio,{mimetype:'audio/mp4',quoted: Ofc})
											})
										})
									break
						case 'playvideo': case 'playmp4': case 'ytmp4': case 'ytvideo':{
									if (!q) return reply(`Example : ${prefix+command} query`)
									reply(mess.wait)
									try {
										let yut = await yts(q)
										ytv(yut.videos[0].url)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then((a) => {
												if (Number(filesize) >= 40000) return Zeeone.sendMessage(from, `*─ 「 YOUTUBE VIDEO 」─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`Ukuran File Terlalu Besar Jadi Di Sajikan Dalam Bentuk Link\`\`\``, text, {quoted : Ofc})
												Zeeone.sendMessage(from, thumb, image, {caption: `─ 「 YOUTUBE VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`Tunggu Sebentar, Video Sedang Dikirim\`\`\``, quoted : Ofc})
												sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:Ofc})
												})
												})
												} catch (err) {
													console.log('Error : %s', color(err, 'red'))
													reply(`ERROR`)
												}
											}
									break
						case 'play': case 'ytmp3':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'yts': case 'youtubesearch': case 'ytsearch':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									yts(q)
									.then((res) => {
										let yt = res.videos
										let txt = `─ 「 *YOUTUBE SEARCH* 」 ─\n\n*Hasil Pencarian : ${q}*\n`
										l = 1
										for (let i = 0; i < 15; i++){
											txt += `\n${l++}.📛 *Judul :* ${yt[i].title}\n🆔 *Id :* ${yt[i].videoId}\n💢 *Upload :* ${yt[i].ago}\n👁️‍🗨️ *Ditonton :* ${yt[i].views}\n💢 *Duration :* ${yt[i].timestamp}\n🔗 *Url :* ${yt[i].url}\n___________________\n`
											}
											sendFileFromUrl(yt[0].image, image, {caption: txt, quoted:Ofc})
										})
										.catch((err) => {
											console.log(color('[YT SEARCH]', 'red'), err)
											reply(mess.error)
											})
										}
									break
						case 'wiki': case 'wikipedia':
									if (args.length < 1) return reply(' Yang Mau Di Cari Apa Lord? ')
									reply(mess.wait)
									teks = args.join(' ')
									res = await wikiSearch(teks).catch(e => {
										return reply('Error Hasil Tidak Ditemukan') 
										}) 
										result = `*JUDUL :* ${res[0].judul}\n*WIKI :* ${res[0].wiki}`
										sendFileFromUrl(res[0].thumb, image, {quoted: Ofc, caption: result}).catch(e => {
											reply(result)
										})
									break
						case 'pinterest': case 'pin':
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									let pin = await hx.pinterest(q)
									let ac = pin[Math.floor(Math.random() * pin.length)]
									let di = await getBuffer(ac)
									await Zeeone.sendMessage(from,di,image,{thumbnail: thumbnail, quoted: Ofc})
									break
						case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
									let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
									Zeeone.sendMessage(from, wipi, image, {quoted: Ofc})
									limitAdd(sender, limit)
									break
						case 'asupan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									data = fs.readFileSync('./lib/asupan.js');
									jsonData = JSON.parse(data);
									randIndex = Math.floor(Math.random() * jsonData.length);
									randKey = jsonData[randIndex];
									p = await getBuffer(randKey.result)
									Zeeone.sendMessage(from, p, video, { quoted:  Ofc, mimetype: 'video/mp4', caption: 'Asupan Lord'})
									limitAdd(sender, limit)
									}
									break
						case 'delete': case 'del': case 'd':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner)return reply(mess.only.admin)
									if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
									Zeeone.deleteMessage(from, { id: Ofc.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
									break
						case 'afk':
									if (!isGroup) return reply(mess.only.group)
									if (isAfkOn) return reply('Kamu dalam mode afk Lord')
									let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
									afk.addAfkUser(sender, Date.now(), reason, _afk)
									mentions(`─「 *AFK MODE* 」─

@${sender.split('@')[0]} sedang afk!
Alasan : ${reason}`, [sender], true)
									break
						case 'delvote': case 'dellvote':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isVote) return reply('Tidak ada sesi Voting')
									delVote(from)
									reply('Sukses Menghapus sesi Voting Di Grup Ini')
									break
						case 'voting': case 'vote':
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
									if (!q) return reply(`*Example :*\n ${prefix + command} @tag target | reason| 1 (1 = 1 Menit)`)
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || Ofc.message.extendedTextMessage.contextInfo == null) {
										let id = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										split = args.join(' ').replace('@', '').split('|')
										if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
										await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai!' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
										addVote(from,split[1],split[0],split[2],reply)
									}
									break
						case 'sewabot': 
									let gakloo = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `donasi`,
										"buttonText": {
											"displayText": "DONASI"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, `${mess.sewabot}`, `Sewa bot om?`,  thumbnail, gakloo,{})
										break
						case 'donasi':
									reply('Isi sendiri')
									break
						case 'join':case 'joingc':
									if (!q) return reply('Linknya?')
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
										if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Lord')
										reply('Tunggu Sebentar Otw Masuk Group')
										link = args[0].replace('https://chat.whatsapp.com/','')
										fak = Zeeone.query({ json: ['action', 'invite', link],
										expect200: true })
										reply('Berhasil Masuk Grup')
									break
						case 'kick': case 'headsot':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									kick(from, mentionUser)
									break
						case 'revoke': case 'resetlinkgc': case 'resetlink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									Zeeone.query({ json: ['action', 'inviteReset', from], expect200: true })
									reply(`Sukses Reset Link Group!`)
									break
						case 'linkgc': case 'gclink': case 'linkgrup': case 'linkgroup': case 'grouplink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await Zeeone.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									Zeeone.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: Ofc})
									break
						case 'add':
									try {
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)  
										if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
										if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) {
											entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await Zeeone.groupAdd(from, [entah])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return reply('Eror, user private acc')
											if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
											if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant
													response = await Zeeone.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
													if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
												}
											} catch {
												return 
											}
									break
						case 'setthumb': case 'setthum':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									boij = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await Zeeone.downloadMediaMessage(boij)
									fs.writeFileSync('./image/thumb.jpg', delb)
									matanecok = fs.readFileSync('./image/thumb.jpg')
									await sleep(5000)
									reply(`Sukses`)
									break    
						case 'auto':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'ngetik' ||
									args[0].toLowerCase() === 'ketik' ||
									args[0].toLowerCase() === 'typing'
									){
										ngetik = true
										autovn = false
										reply(`Sukses....`)
										} else if (
										args[0].toLowerCase() === 'voicenote' ||
										args[0].toLowerCase() === 'recording' ||
										args[0].toLowerCase() === 'vn' 
									){
										ngetik = false
										autovn = true
										reply(`Sukses...`)
										} else {
											}
										}
									break
						case 'changeprefix': case 'setprefix':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'multi' ||
									args[0].toLowerCase() === 'all' ||
									args[0].toLowerCase() === 'allprefix' ||
									args[0].toLowerCase() === 'multiprefix'
									){
										multiprefix = true
										nopref = false
										reply(`Berhasil Mengubah Prefix Ke Multi Prefix`)
										} else if (
										args[0].toLowerCase() === 'nopref' ||
										args[0].toLowerCase() === 'no' ||
										args[0].toLowerCase() === 'nonpref'
									){
										multiprefix = false
										nopref = true
										reply(`Berhasil Mengubah Prefix Ke No Prefix`)
										} else if(args[0] === `${q}`){
											if (q.length > 2) return reply(`Maximal 1 angka/huruf!!`)
											multiprefix = false
											nopref = false
											prefa = `${args[0]}`
											reply(`Berhasil Mengubah Prefix Ke *${q}*`)
										}
									break
						case 'setnamabot':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
									 if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
						case 'grup': case 'grub': case 'group':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args[0] === "open") {
										Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, false)
										} else if (args[0] === "close") {
											Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, true)
											} else {
												reply (`${prefix + command} buka / tutup`)
												}
									break 
						case 'promote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupMakeAdmin(from, mems_ids)
												} else {
													Zeeone.groupMakeAdmin(from, entah)
													}
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant 
													Zeeone.groupMakeAdmin(from, [entah])
												}
									break
						case 'demote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupDemoteAdmin(from, mems_ids)
												} else {
													Zeeone.groupDemoteAdmin(from, [entah[0]])
													}
													} else {
														entah = Ofc.message.extendedTextMessage.contextInfo.participant
														Zeeone.groupDemoteAdmin(from, [entah])
													}
									break
						case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0) return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateSubject(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setdesc': case 'setdesk': case 'setdeskripsi':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateDescription(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setppbot':
									if (!isOwner && !Ofc.key.fromMe) return
									if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
									enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
									await Zeeone.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
						case 'setppgrup':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadMediaMessage(encmedia)
										Zeeone.updateProfilePicture(from, media)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (Ofc.message.videoMessage) return reply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('Eror Lord')
												buffer = fs.readFileSync(ran)
												Zeeone.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
						case 'premium': 
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args[0] === 'add') {
										if (Ofc.message.extendedTextMessage != undefined) {
											mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
											premium.addPremiumUser(mentioned[0], args[2], _premium)
											reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
											} else {
												premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
												reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
												}
												} else if (args[0] === 'del') {
													if (Ofc.message.extendedTextMessage != undefined) {
														mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
														_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
														fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
														reply(mess.succes)
														} else {
															_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
															fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
															reply(mess.succes)
															}
															} else {
																 reply(`Example : ${prefix + command} add/del 62887435047326 10s`)
															}
										break
						case 'cekprem': case 'cekpremium': case 'premiumcek':
									if (!isPremium) return reply(`Kamu bukan user premium\nkirim perintah ${prefix}daftarprem untuk membeli premium`)
									let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									let premiumnya = `*「 PREMIUM EXPIRE 」*\n\n🆔 *ID*: ${sender}\n⏰ *Expired*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
									reply(`${isOwner?'Unlimited Prem (My Lord)':premiumnya}`)
									break
						
						case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
									if (!isOwner && !Ofc.key.fromMe) return
									let txt = `*「 LIST PREMIUM 」*\n\n*💹 Total :* ${_premium.length}\n\n`
									let men = [];
									for (let i of _premium){
										men.push(i.id)
										let cekvip = ms(i.expired - Date.now())
										txt += `*🆔 Nomor : ${i.id.split("@")[0]}*\n*📛 User : @${i.id.split("@")[0]}*\n📊 Expired : ${cekvip.days} Day (s), ${cekvip.hours} Hour (s), ${cekvip.minutes} Minute (s), ${cekvip.seconds} Second (s)`
									}
									reply(`${txt}`)
									break
						case 'extend': case 'perpanjang':
									if (!isSewa) return reply('Kamu belum sewa bot sebelumnya? klik #sewabot')
									reply('Sedang Mengirim Pesan Perpanjangan Masa Sewa Ke Owner Bot')
									Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `Hai Owner, @${sender.split("@")[0]} Mau Memperpanjang Waktu Sewa Bot`, text, {contextInfo: {"mentionedJid" : [sender]}})
									break
						case 'sewa':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.sewabot)
									if(!isGroup) return reply(mess.only.group)
									if (q === 'add') {
										_sewa.addSewaGroup(from, args[1], sewa)
										reply(`Sukses Lord`)
									} else if (q === 'del') {
										sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
										fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
										reply(`Sukses Lord`)
										} else {
										}
									}
									break
						case 'sewalist':  case 'listsewa':
									if (!isOwner && !Ofc.key.fromMe) return
									let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
									for (let i of sewa){
										let cekviopp = ms(i.expired - Date.now())
										txtnyee += `🆔 *ID :* ${i.id}\n📊 *Expire :* ${cekviopp.days} day(s) ${cekviopp.hours} hour(s) ${cekviopp.minutes} minute(s) ${cekviopp.seconds} second(s)\n\n`
										}
										reply(txtnyee)
									break
						case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return reply(mess.only.group)
									if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」

🆔 *ID*: ${from}
💹 *EXPIRE :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
									reply(sewenye)
									break
						case 'antibadword': case 'nobadword':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
									if (args.length === 0) return reply(`Pilih on atau off`)
									if (args[0] == 'on'){
										if (isBadword) return reply(`Udah aktif Lord`)
										grupbadword.push(from)
										fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
										reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
										} else if (args[0] == 'off'){
											anu = grupbadword.indexOf(from)
											grupbadword.splice(anu, 1)
											fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
											reply('Antibadword Grup Dimatikan')
											} else {
												reply('pilih on / off')
												}
									break
						case 'antilink':
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntiLink) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											antilink.push(from)
											fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
											reply(`Succes mengaktifkan Fitur Antilink`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntiLink) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var au = antilink.indexOf(from)
												antilink.splice(au, 1)
												fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
												reply(`Succes Mematikan Fitur Antilink`)
												} else {
													reply(`${prefix + command} on / off`)
													}
											break
						case 'listbadword':
									if (isBanned) return
									let bi = `List badword\n\n`
									for (let boo of badword){
										bi += `- ${boo}\n`
										}
										bi += `\nTotal : ${badword.length}`
									reply(bi)
									break
						case 'addbadword':
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (isKasar(args[0].toLowerCase(), badword)) return reply(`Cari nama lain Lord`)
										addBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
											addBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									break
						case 'delbadword':{
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
										delBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (!isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
											delBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									}
									break
						case 'clearbadword':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!m.quoted) return reply(`Reply Pesan Target!`)
									entah = Ofc.message.extendedTextMessage.contextInfo.participant
									delCountKasar(entah, senbadword)
									reply(`Sukses clear badword ${entah}`)
									break
						case 'antitroli': case 'antifaketroli':{
									try {
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntro) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											atro.push(from)
											fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
											reply(`Succes mengaktifkan Fitur Anti-Troli`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntro) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var ou = atro.indexOf(from)
												atro.splice(ou, 1)
												fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
												reply(`Succes Mematikan Fitur Anti-Troli`)
												}
											} catch {
												}
											}
									break
						case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
									var p = await Zeeone.getStatus(`${sender}`, MessageType.text)
									let cek = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
									Zeeone.sendMessage(from, pp_userz, image, {thumbnail:pp_userz, caption:` * USER PROFILE*

📛 Nama : ${pushname==undefined?sender.split("@")[0]:pushname}
🎯 Bio : ${p.status==undefined?`Not Found`:p.status}
💬 Tag : @${sender.split("@")[0]}
🆔 Api : wa.me/${sender.split("@")[0]}

⬣ Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
⬣ Balance : ${getBalance(sender, balance)}
⬣ Role : ${role}
⬣ Level : ${getLevelingLevel(sender)}
⬣ Xp : ${getLevelingXp(sender)}
⬣ Status : ${isOwner?`Owner`:isPremium?`Premium User
⬣ Expired Prem : ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`:isUser?`Free User`:`Belum Daftar`}
⬣ Baned : ${isBanned?`Terbanned`:`Tidak Terbanned`}`, quoted: Ofc, contextInfo:{mentionedJid:[sender]}})
									}
									break
						case 'listonline': case 'listaktif':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
									let online = [...Object.keys(Zeeone.chats.get(ido).presences), Zeeone.user.jid]
									Zeeone.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
										quoted: fakevideo,
										contextInfo: { mentionedJid: online }
										})
									break
							case 'infogc': case 'groupinfo': case 'infogrup': case 'grupinfo':
							console.log('eror bang fix sendiri')
									if (!isGroup) return reply(mess.only.group)
									try {
										ppUrl = await Zeeone.getProfilePicture(groupMetadata.jid)
											} catch {
												ppUrl = `${imagebb}`
												}
												let cekviip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
												let nya = `*G R O U P - I N F O*

📛 Nama : ${groupName}
👤 Owner Grup : ${groupMetadata.owner}
👥 Total Member : ${groupMembers.length}
👥 Total Admin : ${groupAdmins.length}
 
⬣ Welcome : ${isWelkom ? 'On':'Off'}
⬣ Anti Link : ${isAntiLink? 'On':'Off'}
⬣ Anti Badword : ${isBadword? 'On':'Off'}
⬣ Anti Fake Troli : ${isAntro? 'On':'Off'} ${isSewa?`
⬣ Expired Sewa : ${cekviip.days} Hari, ${cekviip.hours} Jam, ${cekviip.minutes} Menit, ${cekviip.seconds} Detik*`:``}
  
💬 Deskripsi Group :
\`\`\`${groupDesc}\`\`\``
									var jk = await getBuffer(thumbnail)
									Zeeone.sendMessage(from, jk, MessageType.image, {thumbnail: thumbnail, caption: nya, quoted: Ofc})
									break
						case 'caripesan': case 'searchmessage':
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									if(!q)return reply('Pesannya apa Lord?')
									reply('Otw Lord')
									let v = await Zeeone.searchMessages(q,from,10,1)
									let s = v.messages
									let el = s.filter(v => v.message)
									el.shift()
									try {
										if(el[0].message.conversation == undefined) return
										reply(`Ditemukan ${el.length} pesan`)
										await sleep(3000)
										for(let i = 0; i < el.length; i++) {
											await Zeeone.sendMessage(from,'Nih Pesannya',text,{quoted:el[i]})
											}
										} catch(e){
											reply('Pesan tidak ditemukan!')
											} 
									break
						case 'tomp3': case 'tomusic': case 'toaudio':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedVideo) return reply(`Reply video nya lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
									limitAdd(sender, limit)
									break
						case 'toptt': case 'tovn':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedAudio) return reply(`Reply Audionya Lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'toimg': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !Ofc.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											Zeeone.sendMessage(from, buffer, image, {thumbnail : thumbnail, caption:'Sukses Lord',quoted:Ofc})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
										limitAdd(sender, limit)
									break
						case 'togif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									moew = await webp2gifFile(media)
									console.log(moew)
									Frd = await getBuffer(moew.result)
									Zeeone.sendMessage(from, Frd, video, { mimetype: 'video/gif', caption: 'Sukses Lord', quoted: Ofc })
									limitAdd(sender, limit)
									break
						case 'tovideo': case 'tomp4':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker gif lord')
									reply(mess.wait)
									if ((isMedia && !Ofc.message.videoMessage || isQuotedSticker) && args.length == 0) {
										ger = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										webp2mp4File(owgi).then(res=>{
											Zeeone.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'Sukses Lord', quoted: Ofc})
											})
										}else {
											reply('reply stiker')
										}
									fs.unlinkSync(owgi)
									limitAdd(sender, limit)
									break
						case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 「 *AUDIO TO URL* 」 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
											reply(mess.wait)
											owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
												reply(mess.wait)
												owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 「 *VIDEO TO URL* 」 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 「 *STICKER TO URL* 」 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
						case 'q': case 'ulang':
									if (!m.quoted) return reply('reply pesan!')
									var jpio = Zeeone.serializeM(await m.getQuotedObj())
									if (!jpio.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
									await jpio.quoted.copyNForward(m.chat, true)
									break
						case 'block':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "add")
										reply(`Nomor ${ny} telah di blockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)
											}
									break
						case 'unblock':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "remove")
										reply(`Nomor ${ny} telah di unblockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah dibanned!`)
										}
									break
						case 'ban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@s.whatsapp.net`
										ban.push(ny)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ny} telah dibanned!`)
										} else {
											ny = `${mentionUser}`
											ban.push(ny)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ny} telah dibanned!`)
										}
									break
						case 'unban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ah = `${args[0].replace("@","")}@s.whatsapp.net`
										unb = ban.indexOf(ah)
										ban.splice(unb, 1)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ah} telah di unban!`)
										} else {
											ah = `${mentionUser}`
											unb = ban.indexOf(ah)
											ban.splice(unb, 1)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ah} telah di unban!`)
										}
									break
						case 'resetlimit':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									Zeeone.updatePresence(from, Presence.avaible)
									fs.writeFileSync('./database/limit.json', ('[]'))
									reply('Sukses Lord')
									await sleep(5000)
									break
						case 'bc': case 'broadcast':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
									if (args.length < 1) return reply(`${prefix + command} Alphabot`)
									anjir = await Zeeone.chats.all()
									for (let _ of anjir) {
										Zeeone.sendMessage(`${_.jid}`, 'BROADCAST' + '\n\n' + q, text, {quoted: ftroli})
										}
									reply('Sukses Lord')
									break
						case 'faktaunik':{
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									reply(`*Fakta Unik :*\n${ran_faktau}`)
									}
									break
						case 'pantun':{
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									reply(`*Pantun :* \n${ran_pantun}`)
									}
									break
						case 'dare':
									const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
									const der = dare[Math.floor(Math.random() * dare.length)]
									sendButMessage(from, `${der}`, `${ucapannya}`, [
									{
										buttonId: `dare`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									break
						case 'truth':
									const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
									const ttrth = trut[Math.floor(Math.random() * trut.length)]
									sendButMessage(from, `${ttrth}`, `${ucapannya}`, [
									{
										buttonId: `truth`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									break
						case 'slot':
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									rn = randomNomor(100)
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										addBalance(sender, rn, balance)
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									addBalance(sender, rn, balance)
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											addBalance(sender, rn, balance)
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
													addBalance(sender, rn, balance)
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
															addBalance(sender, rn, balance)
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXP BERKURANG 1000`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																	addLevelingXp(sender, -1000)
																	}
															break
						case 'attp':{ 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}attp* teks`)
									let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
									fs.writeFileSync('./sticker/attp.webp', ane)
									exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
										if (error) return reply(mess.error)
										Zeeone.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: Ofc})
										fs.unlinkSync(`./sticker/attp.webp`)
									})
									}
									limitAdd(sender, limit)
									break
						case 'memegenerator': case 'memegen':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Sticker!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var imgbb = require('imgbb-uploader')
										var enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										var media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
										var njay = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
										Zeeone.sendMessage(from, resu, image, {thumbnail: thumbnail, quoted: Ofc})
										fs.unlinkSync(media)
										} catch (e) {
											return reply(`${e}`)
											console.log(e)
										}
									break
						case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									try {
										if (!q) return reply(`${prefix+command} Alphabot`)
										var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
										if ( isQuotedImage) {
											reply(mess.wait)
											var imgbb = require('imgbb-uploader')
											let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
											let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
											var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
											var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
											//var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
											//var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
											fs.writeFileSync('./sticker/smemek.webp', sticknye)
											exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
												if (error) return reply(mess.error)
												Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
												})
												} else if (isQuotedSticker){
													reply(mess.wait)
													var imgbb = require('imgbb-uploader')
													let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
													let media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
													let ran = getRandom('.png')
													exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
														fs.unlinkSync(media)
														if (err) return reply('Error')
														var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
														var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
														//var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
														//var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
														fs.writeFileSync('./sticker/smemek.webp', sticknye)
														exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
															if (error) return reply(mess.error)
															Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
															fs.unlinkSync(ran)
															})
														})
														} else {
															reply(`Reply gambar atau sticker dengan Caption ${prefix+command} teks`)
															}
														} catch (e) {
															return reply(`${e}`)
															console.log(e)
														}
													break
						case 'emoji':case 'semoji':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									hex2 = args.join(' ') 
									emoji.get(`${hex2}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									limitAdd(sender, limit)
									break
						case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
									if (!Ofc.key.fromMe && !isPremium) return reply(mess.only.prem)
									reply(mess.wait) 
									let packname1 = q.split('|')[0] ? q.split('|')[0] : q
									let author1 = q.split('|')[1] ? q.split('|')[1] : ''
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										exif.create(packname1, author1, `stickwm_${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`,'yellow'))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`,'red'))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if (( isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															exif.create(packname1, author1, `stickwm_${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`,'yellow'))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`,'red'))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log((`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else if (isQuotedSticker) {
																				let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
																				let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
																				exif.create(packname1, author1, `takestick_${sender}`)
																				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																				if (error) return reply(mess.error)
																				Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																				fs.unlinkSync(media)
																				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
																				})
																				} else {
																					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				 }
																			}
																	 break
						case 'sticker': case 'stiker':  case 'stickergif': case 'stikergif': case 'sgif': case 's':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if ( isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														limitAdd(sender, limit)
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if ((isQuotedVideo && Ofc.message.videoMessage.fileLength < 10000000 || isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log(color(`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			limitAdd(sender, limit)
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else {
																				reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				}
																				limitAdd(sender, limit)
												break
						case 'exif':
									if (!Ofc.key.fromMe && !isOwner)return reply(mess.only.owner)
									if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
									if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
									exif.create(arg.split('|')[0], arg.split('|')[1])
									reply('Sukses Lord')
									break
						case 'owner':{
							const ownerContact = [owner_number, "", "", "", "", "", "", "", "", "", ""]
							let ini_list = []
							for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
								const vname = Zeeone.contacts[i] != undefined ? Zeeone.contacts[i].vname || Zeeone.contacts[i].notify : undefined
								ini_list.push({
									"displayName": `${owner_name}`,
									"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
									})
									}
									hehe = await Zeeone.sendMessage(from, {
										"displayName": `${ini_list.length} kontak`,
										"contacts": ini_list 
										}, 'contactsArrayMessage', { quoted: Ofc })
										Zeeone.sendMessage(from, `Nih Kak Contact Owner Ku ✨`, text, {quoted: hehe})
										}
										break
						case 'lirik':
									if (args.length < 1) return reply('Judulnya?')
									reply(mess.wait)
									teks = body.slice(7)
									lirikLagu(teks).then((res) => {
										let lirik = `*Hasil Pencarian Dari : ${q}*
										\n${res[0].result}`
										reply(lirik)
									})
									break
						case 'ultah': case 'hbd':
									if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : #ultah 2004-01-12`)
									if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExampla : #ultah 2006-01-12`)
									qq = q
									zodiakk = [
									["Capricorn", new Date(1970, 0, 1)],
									["Aquarius", new Date(1970, 0, 20)],
									["Pisces", new Date(1970, 1, 19)],
									["Aries", new Date(1970, 2, 21)],
									["Taurus", new Date(1970, 3, 21)],
									["Gemini", new Date(1970, 4, 21)],
									["Cancer", new Date(1970, 5, 22)],
									["Leo", new Date(1970, 6, 23)],
									["Virgo", new Date(1970, 7, 23)],
									["Libra", new Date(1970, 8, 23)],
									["Scorpio", new Date(1970, 9, 23)],
									["Sagittarius", new Date(1970, 10, 22)],
									["Capricorn", new Date(1970, 11, 22)]
									].reverse()
									function getZodiac(month, day) {
										dey = new Date(1970, month - 1, day)
										return zodiakk.find(([_,_d]) => dey >= _d)[0]
										}
										dateek = new Date(qq)
										if (dateek == 'Invalid Date') throw dateek
										let dd = new Date()
										let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
										birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
										zodiackk = getZodiac(birth[1], birth[2])
										ageD = new Date(d - dateek)
										agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
										birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
										cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
										reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
									break
						case 'bass': 
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
										break
						case 'slowmo': case 'slow':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Zeeone.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
												limitAdd(sender, limit)
									break
						case 'fast':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
										limitAdd(sender, limit)
									break
						case 'robot':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'detikvn': case 'setdetikvn': case 'setdurasi':
									if (!Number(args[0])) return reply(`EXAMPLE : ${prefix + command} 50`)
									reply(mess.wait)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									cokmatane = Number(args[0])
									hah = fs.readFileSync(media)
									Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: Ofc})
									fs.unlinkSync(media)
									limitAdd(sender, limit)
									break
						case 'tupai':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:99})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												limitAdd(sender, limit)
												break
						case 'vibra': case 'vibrato':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'tinyurl':{
									if (args.length < 1) return reply(`Masukkan link`)
									if (!isUrl) return reply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										reply(shorti)
										}
									break
						case 'infoall': case 'tagall':
									if (!isGroupAdmins && !Ofc.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = Ofc.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
						case 'hidetag': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										hideTag(from, `${q}`) 
										} else {  
											quotedText = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
											hideTag(from, `${quotedText}`)
											}
									break
						case 'tts': case 'say':
									try {if (args.length > 50) return reply('```Error, Teks Terlalu Panjang!```')
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										const gtts = require('./lib/gtts')(args[0])
										dtt = body.slice(8)
										ranm = getRandom('.mp3')
										rano = getRandom('.ogg')
										dtt.length > 50
										? reply('```Error, Teks Terlalu Panjang!```')
										: gtts.save(ranm, dtt, function() {
											exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
												fs.unlinkSync(ranm)
												buff = fs.readFileSync(rano)
												if (err) return reply(mess.error)
												Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
												fs.unlinkSync(rano)
												})
												})
												} else {
													const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
													dtt = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
													ranm = getRandom('.mp3')
													rano = getRandom('.ogg')
													dtt.length > 50
													? reply('```Error, Teks Terlalu Panjang!```')
													: gtts.save(ranm, dtt, function() {
														exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
															fs.unlinkSync(ranm)
															buff = fs.readFileSync(rano)
															if (err) return reply(mess.error)
															Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
															fs.unlinkSync(rano)
															})
														})
													}
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
											break
						case 'translate': case 'tr':
									try {
										if (args.length < 1)return reply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { reply(`${res}`) })
											} else {
												tolang = args[0]
												entah = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { reply(`${res}`) })
												}
											} catch (e) {
												reply(`${e}`)
												}
											break
						case 'mystat': case 'stats': case 'infobot':{
									try {
										let totalchat = await Zeeone.chats.all()
										let i = []
										let giid = []
										for (let mem of totalchat){
											i.push(mem.jid)
											}
											for (let id of i){
												if (id && id.includes('g.us')){
													giid.push(id)
													}
												}
												const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
												nupe = owner_number + '@s.whatsapp.net'
												teks = `「 *BOT STATISTIC* 」 

🔖 Botname : ${namabot}
🔖 Owner : @${nupe.split("@")[0]}
🔖 Prefix : ${nopref?'No prefix':multiprefix?'Multi prefix':prefix}
🔖 Runtime : ${kyun(process.uptime())}
🔖 Speed : ${processsTime(Ofc.messageTimestamp.low, moment())}s
🔖 Status : ${public_mode? `Public Mode`:`Self Mode`}
🔖 Total Hit : -
🔖 Personal Chat : ${totalchat.length - giid.length}
🔖 Group Chat : ${giid.length}
🔖 Total Chat : ${totalchat.length}
🔖 Total User : ${_user.length}
🔖 Total Block : ${blocked.length}
🔖 Total Baned : ${ban.length}

🏷️ Anti Call : ${setting.anti_call}
🏷️ Anti Delete : ${setting.anti_delete}
🏷️ Auto Register : ${autoregister}
🏷️ Auto Respond : ${autorespon? `False` : `True`}
🏷️ Multi Prefix : ${multiprefix}
🏷️ Anti Delete : ${menusimple? `False` : `True`}

「 *PHONE STATISTIC* 」
 
🔖 Whatsapp Ver. : ${wa_version}
🔖 Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🔖 Mcc : ${mcc}
🔖 Mnc : ${mnc}
🔖 Versi OS : ${os_version}
🔖 Merk HP : ${device_manufacturer}
🔖 Versi HP : ${device_model}
🔖 Browser : ${Zeeone.browserDescription}
🔖 Baterai : ${isBattre} %
🔖 Charging : ${isCharge}
`
let qqppp = [{
                    "buttonId": `${prefix}owner`,
                    "buttonText": {
                        "displayText": "OWNER"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sewa`,
                    "buttonText": {
                        "displayText": "SEWA"
                    },
                    "type": "RESPONSE"
                }]
                sendButLocation(from, teks, `LordUserbot™© | Allright Reserved.`, thumbnail, qqppp, {contextInfo: { mentionedJid: [nupe]}})
				
} catch (e){
reply(`${e}`)
}
}
break
						case 'clearall':{
									if (!isOwner && !Ofc.key.fromMe) return
									let chiit = await Zeeone.chats.all()
									for (let i of chiit){
										Zeeone.modifyChat(i.jid, 'clear', {
											includeStarred: false
											})
											}
											reply(`Succes Lord`)
											}
									break
						case 'tes': case 'test': case 'ping':{
									reply(`${runtime2}`)
									}
									break
						case 'cekapikey':
									if (!isOwner && !Ofc.key.fromMe) return
									anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
									teks = `─「 *APIKEY CEK* 」─\n\n➸ *Username :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *Today :* ${anu.result.today}\n➸ *Akun Type :* ${anu.result.account_type}\n➸ *Expired :* ${anu.result.expired}`
									Zeeone.sendMessage(`${ownerNumber}`, teks, text, {quoted: Ofc})
									break
						case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										Zeeone.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: Ofc, caption: `Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ`})
										limitAdd(sender, limit)
									})
									}
									break
						case 'getpic': case 'getpp': case 'getprofile':{
									if (!isGroup) return reply(mess.only.group)
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									try {
										pp = await Zeeone.getProfilePicture(mentioned)
										} catch {
											pp = `${imagebb}`
											}
											buffer = await getBuffer(pp)
											Zeeone.sendMessage(from, buffer, image, {quoted: Ofc, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: thumbnail, contextInfo:{mentionedJid:[mentioned]}})
											}
									break
						case 'getnum': case 'getnomor': case 'getnumber':
									if (!isGroup) return reply(mess.only.group)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return reply('Reply Pesan Target Lord')
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									reply(`${mentioned.split('@')[0]}`)
									break
						case 'towame':
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										reply(`wa.me/`+mentioned.split("@")[0])
										} else {
											reply(`${prefix+command} @tag atau reply`)
											}
											break
						case 'wame':
									wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
									reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
									break
						case 'sendkontak': case 'kontak':
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										const ynkos = 'BEGIN:VCARD\n' 
										+ 'VERSION:3.0\n' 
										+ `FN:${q?q:`KONTAK`}\n`
										+ `ORG:KONTAK;\n`
										+ `TEL;type=CELL;type=VOICE;waid=${mentioned.split("@")[0]}:+${mentioned.split("@")[0]}\n`
										+ 'END:VCARD'
										Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
										} else {
											const ynkos = 'BEGIN:VCARD\n' 
											+ 'VERSION:3.0\n' 
											+ `FN:${q.split('|')[1]}\n`
											+ `ORG:KONTAK;\n`
											+ `TEL;type=CELL;type=VOICE;waid=${q.split('|')[0]}:+${q.split('|')[0]}\n`
											+ 'END:VCARD'
											Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
											}
									break 
						case 'notif':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									teks = `Notif Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
									group = await Zeeone.groupMetadata(from);
									member = group['participants']
									jids = [];
									member.map(async adm => {
										jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
										})
										options = {
											text: teks,
											contextInfo: {
												mentionedJid: jids
												},
												quoted: Ofc
												}
												await Zeeone.sendMessage(from, options, text)
												limitAdd(sender, limit)
										break
						case 'addvn': case 'addaudio': case 'addmusic':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedAudio) return reply('Reply Audionya Lord')
									if (!q) return reply('Nama Audionya Apa Lord?')
									let addvn = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delb = await Zeeone.downloadMediaMessage(addvn)
									audionye.push(q)
									fs.writeFileSync(`./database/audio/${q}.mp3`, delb)
									fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
									reply(`Sukses Menambahkan Audio!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
									break
						case 'delaudio': case 'delvn': case 'deletevn':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Audio Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/audio/${q}.mp3`)
										let delaudio = audionye.indexOf(q)
										audionye.splice(delaudio, 1)
										fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
										reply(`Succes Menghapus Audio ${q}!`)
										await sleep(5000)
										} catch (err) {
											console.log(err)
											reply(`Gagal Menghapus Audio ${q}!`)
										}
									break
						case 'listvn': case 'listaudio':
									Zeeone.updatePresence(from, Presence.avaible) 
									teks = '*「 LIST AUDIO 」*\n\n'
									for (let awokwkwk of audionye) {
										teks += `📊 ${awokwkwk}\n`
										}
										teks += `\n*TOTAL :* ${audionye.length}`
										reply(`${teks}`)
									break
						case 'addimage': case 'addfoto': case 'addphoto':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedImage) return reply('Reply Photonya Lord')
									if (!q) return reply('Nama Photonya Apa Lord?')
									let addimage = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellb = await Zeeone.downloadMediaMessage(addimage)
									imagenye.push(q)
									fs.writeFileSync(`./database/image/${q}.jpg`, dellb)
									fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
									reply(`Sukses Menambahkan Image!\nCek Image Dengan Cara Ketik ${prefix}listimage`)
									break
						case 'delimage': case 'deleteimage': case 'delfoto': case 'delphoto':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/image/${q}.webp`)
										let delimage = imagenye.indexOf(q)
										imagenye.splice(delimage, 1)
										fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
										reply(`Succes Menghapus Image ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Image ${q}!`)
										}
									break
						case 'listimage': case 'listphoto': case 'listfoto': 
									let listimage = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of imagenye) {
										listimage += `📊 ${awokwkwk}\n`
										}
										listimage += `\n*TOTAL :* ${imagenye.length}`
										reply(`${listimage}`)
									break
						case 'addvideo': case 'addvid':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedVideo) return reply('Reply Videonya Lord')
									if (!q) return reply('Nama Videonya Apa Lord?')
									let addvideo = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let dellbb = await Zeeone.downloadMediaMessage(addvideo)
									videonye.push(q)
									fs.writeFileSync(`./database/video/${q}.jpg`, dellbb)
									fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
									reply(`Sukses Menambahkan Video!\nCek Video Dengan Cara Ketik ${prefix}listvideo`)
									break
						case 'delvideo': case 'deletevideo':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Video Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/video/${q}.webp`)
										let delvideo = videonye.indexOf(q)
										videonye.splice(delvideo, 1)
										fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
										reply(`Succes Menghapus Video ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus Video ${q}!`)
										}
									break
						case 'listvideo': case 'listvid':  
									let listvideo = '*「 LIST VIDEO 」*\n\n'
									for (let awokwkwk of videonye) {
										listvideo += `📊 ${awokwkwk}\n`
										}
										listvideo += `\n*TOTAL :* ${videonye.length}`
										reply(`${listvideo}`)
									break
						case 'addstik': case 'addstiker': case 'addsticker':
									if (!Ofc.key.fromMe && !isOwner && !isPremium) return reply(mess.only.prem)
									if (!isQuotedSticker) return reply('Reply stiker nya Lord')
									if (!q) return reply('Nama Sticker Nya Apa Lord?')
									let addstik = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									let delbb = await Zeeone.downloadMediaMessage(addstik)
									setiker.push(q)
									fs.writeFileSync(`./database/stick/${q}.webp`, delbb)
									fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
									reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
									break
						case 'delstik': case 'delstick': case 'delsticker': case 'delstiker':
									if (!Ofc.key.fromMe && !isOwner  && !isPremium) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/stick/${q}.webp`)
										let delstik = setiker.indexOf(q)
										setiker.splice(delstik, 1)
										fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
										reply(`Succes Menghapus sticker ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus sticker ${q}!`)
										}
									break
						case 'liststik': case 'liststicker': case 'liststiker': case 'liststick':
									liststik = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of setiker) {
										liststik += `📊 ${awokwkwk}\n`
										}
										liststik += `\n*TOTAL :* ${setiker.length}`
										reply(`${liststik}`)
									break
						case 'addrespon': case 'addres':
									if (!isPremium && !isOwner && !Ofc.key.fromMe) return reply(mess.only.prem)
									 if (args.length < 1) return reply(`Kirim perintah ${command} command|jawaban`)
									var soal = q.split('|')[0]
									var jawaban = q.split('|')[1]
									if (!jawaban) return reply(`Jawabannya apa?`)
									if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
									addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
									reply('Sukses!')
									break
						case 'deleterespon': case 'dellrespon': case 'delrespon': 
									if (!isPremium && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah ${command} list respon`)
									if (isCreated(q.toLowerCase(), sender, cmdDB) && !isOwner) return reply(`Anda bukan pembuat command!`)
									deleteCommands(q.toLowerCase(), cmdDB)
									reply('Sukses Lord')
									break
						case 'listrespon': case 'listres':
									if (!isOwner && !Ofc.key.fromMe) return
									var txtt = `LIST REPONSE\nJumlah : *${cmdDB.length}*\n\n`
									for (let i of cmdDB){
										txtt += `*Respon :* ${i.commands}\n*Jawaban :* ${i.jawaban}\n*Created :* @${i.created.split("@")[0]}\n\n`
										}
										Zeeone.sendMessage(`${ownerNumber}`, txtt, text, { quoted: Ofc, contextInfo:{ mentionedJid: parseMention(txtt) }})
										break
						case 'chatinfo': case 'sider':{
									if (!isGroup) return reply(mess.only.group)
									infom = await Zeeone.messageInfo(from, Ofc.message.extendedTextMessage.contextInfo.stanzaId)
									hemm = infom.reads
									hemms = infom.deliveries
									readon = hemms.map(v => v.jid)
									readdin = hemm.map(v => v.jid)
									stamp = hemm.map(v => v.t)
									function toTime(UNIXtimestamp, ribuan) {
										ribuan = (typeof ribuan == 'undefined') ? false : true;
										let a = new Date(UNIXtimestamp);
										if (ribuan) {
											a = new Date(UNIXtimestamp * 1000);
											}
											var hour = a.getHours();
											var min = a.getMinutes();
											var sec = a.getSeconds();
											var time = `${hour}:${min}:${sec}`;
											return time;
										}

										function toBulan(UNIXtimestamp, ribuan) {
											ribuan = (typeof ribuan == 'undefined') ? false : true;
											let a = new Date(UNIXtimestamp);
											if (ribuan) {
												a = new Date(UNIXtimestamp * 1000);
												}
												var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
												var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
												var day = a.getDate()
												bulanee = a.getMonth()
												var thisDay = a.getDay(),
												thisDay = myDays[thisDay];
												var yy = a.getYear()
												var year = (yy < 1000) ? yy + 1900 : yy;
												var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
												return bul;
												}
												teksx = `「 *TELAH DIBACA* 」\n\n`
												for (let i of hemm) {
													teksx += `📛 Nama : @${i.jid.split('@')[0]}\n⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												teksx1 = `「 *BELUM DIBACA* 」\n\n`
												for (let i of hemms) {
													teksx1 += `📛 Nama : @${i.jid.split('@')[0]}\n`
													teksx1 += `⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												Zeeone.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
												Zeeone.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
												}
												break
						case 'jadian':
									if (!isGroup) return reply(mess.only.group)
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									jds = []
									const A11 = groupMembers
									const B11 = groupMembers
									const C11 = A11[Math.floor(Math.random() * A11.length)] 
									const C22 = B11[Math.floor(Math.random() * B11.length)]
									D11 = `*「 JADIAN 」*\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMogaa Langgeng 😘`  
									jds.push(C11.jid)
									jds.push(C22.jid)
									mentions(D11, jds, true)
									await limitAdd(sender, limit)
									break
						case 'naruto':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return reply('teksnya Lord?')
									reply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'styletext': case 'textstyle':
									reply(Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`)
									break
						case 'inspect':
									if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
										let [, code] = q.match(linkRegex) || []
										if (!code) throw 'Link invalid'
										res = await Zeeone.query({json: ["query", "invite", code],
										expect200: true})
										caption = `「 *GROUP LINK INSPECTOR* 」 
										
🔖 Nama Grup : ${res.subject}
🔖 Terakhir di ubah oleh : @${res.subjectOwner.replace("@c.us","")}
🔖 Di Ubah Pada ${formatDate(res.subjectTime * 1000)}

🔖 ID : ${res.id}
🔖 Di Buat Oleh : @${res.id.split('-')[0]}
🔖 Di Buat pada ${formatDate(res.creation * 1000)}

🔖Edit info grup : ${res.restrict?`Hanya admin`:`Semua peserta`}
🔖Kirim pesan : ${res.announce?`Hanya admin`:`Semua peserta`}
🔖Pesan sementara : ${res.ephemeralDuration?`Aktif`:`mati`}
🔖Jumlah Member : ${res.size}
🔖Member Yang Diketahui : ${res.participants ? '\n│ *' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]+'*').join('\n│ *').trim() : 'Gada'}
🔖Deskripsi :*
${res.desc ? `${res.desc}` : 'Gada'}
🔖Terakhir di ubah oleh : @${res.descOwner.replace("@c.us","")}*
🔖Di ubah pada ${formatDate(res.descTime * 1000)}`
									try {
										profilePic = await Zeeone.getProfilePicture(res.id)
										} catch {
											profilePic = `${imagebb}`
											}
											anay = await getBuffer(profilePic)
											Zeeone.sendMessage(from, anay, image, {quoted: Ofc, thumbnail: thumbnail, caption: caption, contextInfo: {
												mentionedJid: Zeeone.parseMention(caption)
												}})
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
												break
												default:
		if(budy.includes("@verif", "@verify","daftar")){
			if (isUser) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, thumbnail, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!Ofc.key.fromMe && !isOwner && !isCreator ) return reply(mess.only.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`LordUserbot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!Ofc.key.fromMe && !isOwner && !isCreator) return reply(mess.only.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), wib, color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}