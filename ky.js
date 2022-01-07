
require('./setting/script')
const { default: makeWASocket,MessageType ,Presence ,
  MessageOptions , BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent,prepareWAMessageMedia, downloadContentFromMessage, downloadHistory, mentionedJid, proto, getMessage, generateWAMessageContent } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const { tmpdir } = require("os")
const Crypto = require("crypto")
const webp = require("node-webpmux")
const ff = require('fluent-ffmpeg')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const yts = require("yt-search");
const request = require('request');
const hx = require('hxz-api');
const xfar = require('xfarr-api');
const axios = require('axios')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./src/ApiOrScrap')
const { sm, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, getRandom, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention } = require('./src/fungsi')
const database = require('./storage/database.json')
fakeThumb = fs.readFileSync('./setting/fake.jpg')
ikythumb = fs.readFileSync('./setting/fake.jpg')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
module.exports = ky = async (ky, m, chatUpdate, isQuotedMsg) => {
    try {
        const {isGroup, mentioned, sender, fromMe, chats } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "Multi Prefix" : prefa ?? global.prefix
        const isMedia = (m.type === 'imageMessage' || m.type === 'videoMessage')
        const isCmd = body.startsWith(prefix)
      
       const cmd = (m.type === 'conversation' && m.message.conversation) ? m.message.conversation : (m.type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
       const { color, bgcolor } = require('./lib/color')
        const pushname = m.pushName || "No Name"
        const isCreator = [ky.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == ky.user.id ? true : false
        const text = m.q = args.join(" ")
        const q = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
        
        const mentionByTag = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        
       /////
let senderr = m.key.fromMe ? ky.user.jid : m.key.remoteJid.endsWith('@g.us') ? m.participant : m.key.remoteJid
const content = JSON.stringify(m.message)
 const from = m.key.remoteJid
const isQuotedImage = m.type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (m.type === 'videoMessage')
const isSticker = (m.type == 'stickerMessage')
const isListm = (m.type == 'listResponseMessage')
const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

        // Group
const type = Object.keys(m.message)[0]
        const groupMetadata = m.isGroup ? await ky.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isImage = (type === 'imageMessage')
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
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
 ky.sendMessage(to, media, type, {quoted: m, mimetype: mime, caption: text, thumbnail: ikythumb, contextInfo: {"mentionedJid": mids}})
 fs.unlinkSync(filename)
  });
}
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
            }
            const mentions = (teks, memberr, id) => {
                let ai = (id == null || id == undefined || id == false) ? ky.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : ky.sendMessage(from, teks.trim(), extendedText, {quoted: m, contextInfo: {"mentionedJid": memberr}})
                return ai
            }
        const sendStickerUrl = async(to, url) => {
            console.log(chalk.black(chalk.bgWhite('[ Otw Build ]')))
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
                ky.sendMessage(to, {sticker:media} )
                console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
                });
                });
              });
            }
            async function videoToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

async function writeExifImg (media, metadata) {
    let wMedia = await imageToWebp(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/rizkiadiasa/IkyOgiwara`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

async function writeExifVid (media, metadata) {
    let wMedia = await videoToWebp(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/rizkiadiasa/IkyOgiwara`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}
        // Public & Self
async function imageToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

ky.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await ky.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ky.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await ky.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	

                if (!ky.public) {
            if (!m.key.fromMe && m.key.fromMe) return
        }
const reply = (teks) => {
  var ids = teks.includes('@') ? teks.split('@'): []
  let semdertag = []
  for (var con of ids) {
 semdertag.push(con.split(' ')[0]+'@s.whatsapp.net')
  }
  ky.sendMessage(m.chat, {text:teks},  {
 quoted: m, thumbnail: fs.readFileSync('./setting/iky.jpg'), contextInfo: {
mentionedJid: semdertag }});
}
const sendFileFromUrl = async (from, url, caption, m, men) => {
    let mime = '';
    let res = await axios.head(url)
    mime = res.headers['content-type']
    if (mime.split("/")[1] === "gif") {
        return ky.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
        }
    let type = mime.split("/")[0]+"Message"
    if(mime.split("/")[0] === "image"){
        return ky.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
    } else if(mime.split("/")[0] === "video"){
        return ky.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
    } else if(mime.split("/")[0] === "audio"){
        return ky.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
    } else {l
        return ky.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
    }
}
const textImg = (teks) => {
  return ky.sendMessage(m.chat, teks, text, {quoted: m, thumbnail: fs.readFileSync('./media/wpmobile.png')})
}

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        switch(command) {
            //Pake Apikey
            case 'play': case 'yts':
                reply(mess.wait)
                if (!q) return reply('Linknya?')
                     var res = await yts(text)
                let thumbInfo = ` Youtube Download
•Title : ${res.all[0].title}
•ID : ${res.all[0].videoId}
•Upload : ${res.all[0].ago}
•Views : ${res.all[0].views}
•Duration : ${res.all[0].timestamp}
•Channel : ${res.all[0].author.name}
•Link Author : ${res.all[0].author.url}
`
                thumb = await getBuffer(res.all[0].image)
                anu = `${thumbInfo}`

                message = await prepareWAMessageMedia({ image : { url:res.all[0].image } }, { upload: ky.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `playaudio ${q}`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `playvideo ${q}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                ky.relayMessage(m.chat, template.message, { messageId: template.key.id })
                break
                case 'playaudio': case 'ytmp3':
                    reply(mess.wait)
                    if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                    try {
                        let yut = await yts(q)
                        yta(yut.videos[0].url)
                        .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 1000000) return sendFileFromUrl(from, thumb, `─ 「 PLAY MP3 」─\n\n*▢ Title :* ${title}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ URL :* ${a.data}\n\n─━─━「 ‼️ 」━─━─\n*DURASI MELEBIHI BATAS, ANDA BISA DOWNLOAD MELALUI URL DI ATAS*`, m)
                        const captionis = `─ 「 PLAY MP3 」─\n\n*▢ Title :* ${title}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ URL :* ${a.data}\n\n─━─━「 WAIT 」━─━─\n_LAGU SEDANG DI KIRIM MUNGKIN BUTUH BEBERAPA MENIT_`
                        sendFileFromUrl(from, thumb, captionis, m)
                        sendFileFromUrl(from, dl_link, '', m)
                        })
                        })                           
                        } catch (err) {
                        console.log('Error : %s', chalk.bgWhite(err, 'red'))
                        reply(`${err}`)
                        }   
                           break
             case 'playvideo': case 'ytmp4':
                            if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} Melukis Senja`)
                            try {
                            let yut = await yts(q)
                       
                            ytv(yut.videos[0].url)
                            .then((res) => {
                            const { dl_link, thumb, title, filesizeF, filesize } = res
                            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                            .then((a) => {
                            	     vd = getBuffer (dl_link)
                            
                            if (Number(filesize) >= 1000000) return sendFileFromUrl(from, thumb, `─ 「 PLAY VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ URL :* ${a.data}\n\n─━─━「 ‼️ 」━─━─\n*DURASI MELEBIHI BATAS, ANDA BISA DOWNLOAD MELALUI URL DI ATAS*`, msg)
                            const captionis = `─ 「 PLAY VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ ID :* ${yut.videos[0].videoId}\n*▢ URL :* ${a.data}\n\n─━─━「 WAIT 」━─━─\n_VIDEO SEDANG DI KIRIM MUNGKIN BUTUH BEBERAPA MENIT_`
                           
                            sendFileFromUrl(from, thumb, captionis, m)
                            sendFileFromUrl(from, dl_link, '', m)
                            })
                            })
                            } catch (err) {
                            console.log('Error : %s', color(err, 'red'))
                            reply(`${err}`)
                            } 
                            break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Media'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ky.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ky.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Media'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ky.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ky.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true },{ quoted: m })
                await fs.unlinkSync(media) 
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await ky.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ky.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ky.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
                

case 'igvidio':
case 'igvid':
m.reply('process')
anu = await igDownloader(`${teks}`)

ky.sendMessage(m.chat , { video : { url : `${anu.result.link}`} , caption: `${anu.result.desc}` , quoted : m })
break
case 'igft': 
case 'igfoto':
m.reply('process')
ttt = await igDownloader (`https://www.instagram.com/p/CMl92cVpeaJ/?utm_medium=share_sheet`)

return ttt
break 
case 'insta':
xfar.Instagram(args[1]).then(async data => {
                    let txt = `*----「 INSTAGRAM DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎥📸 Total File :* ${data.medias.length}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    await sendFileFromUrl(from,data.thumbnail,txt,msg).then(async res => {
                        for (let i of data.medias) {
                            sendFileFromUrl(from, i.url, '', res)
                        }
                    })
                })
                break

break
                 break
            case 'tiktokapi': case 'tiktok1':
                 reply(mess.wait)
                 anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${text}`)
                 ky.sendMessage(m.chat, { video: { url: anu.result.video.nowm } }, { quoted: m })
     		break

             case 'tiktok':
                case 'tiktoknowm':
                reply(mess.wait)
 		if (!text) return reply('Linknya?')
		hx.ttdownloader(`${text}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		var me = `▹ Media Url : ${a.data}\n\n_Silahkan Reply Pesan Video ini Lalu ketik .tomp3 Untuk Menjadikan Audio_`
		ky.sendMessage(m.chat, { video: { url: `${nowm}` },  caption: me }, { mimetype:'video/mp4', quoted: m })
		})
		})
     		.catch(e => console.log(e))
     		break

             case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh # ${pushname}`)
var anjay = `http://zekais-api.herokuapp.com/text2png?text=${text}&color=white`
sendStickerUrl(m.chat, anjay)
break

case 'storyanime':
await reply ('wait for a few minutes')
anu = `Done Masz`
  message = await prepareWAMessageMedia({ video: {url:'https://megayaa.herokuapp.com/api/randomaesthetic' }, jpegThumbnail: fakeThumb}, { upload: ky.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/IkyOgiwara/IkyOgiwara'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 852-1531-9934'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: 'storyanime'
                                    }
                                },{quickReplyButton: {
                                    displayText: 'menu',
                                    id: '.menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                ky.relayMessage(m.chat, template.message, { messageId: template.key.id })
             break

 case 'getvid':
 case 'getvidio':
m.reply('process')
 if (!args.length) return reply(m.chat, "Urutan keberapa? #getvideo/getimage urutan", lin)
  quotedText = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation
var pilur = quotedText.split('👱🏻‍♂️ *Username :* ')
var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)
var l = await fetchJson(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)

if (!q.match(/^[0-9]/)) return reply(m.chat, "Pastikan urutan hanya angka", m)
  
result = `${a.data.data[q - 1].url}`
  await ky.sendMessage(m.chat, { video: { url: result }, caption: `*Succses*\nInstagram story dari @${l.username}` }, { quoted: m })

break
case 'getimage':
case 'getfoto':
m.reply('procces')
 if (!args.length) return reply(m.chat, "Urutan keberapa? #getimage/getvideo urutan", lin)
  quotedText = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation
var pilur = quotedText.split('👱🏻‍♂️ *Username :* ')
var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)
var mm = await fetchJson(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)
if (!q.match(/^[0-9]/)) return reply(m.chat, "Pastikan urutan hanya angka", m)
  result = `${a.data.data[q - 1].url}`
  await ky.sendMessage(m.chat, { image: { url: result }, caption: `*Succses*\nInstagram story dari @${mm.username}` }, { quoted: m })

break
case 'igstory':
m.reply('procces')
var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${text}`)
var teks = `*Instagram story downloader*\n\n👱🏻‍♂️ *Username :* ${a.data.username}\n🖼️ *Count :* ${a.data.stories_count}\n\nreply pesan dan ketik\n*getvid* (urutan story) untuk mengambil video\njika story nya foto maka ketik\n*getimage* (urutan story)\n\n`
var urut = 1
for (let i = 0; i < a.data.data.length; i++) {
  var ab = await axios.get(`https://megayaa.herokuapp.com/api/short/tiny?url=${a.data.data[i].url}`)
  teks += `*Urutan : ${urut++}*\n💻 *Type :* ${a.data.data[i].type === "mp4" ? "video 🎥" : "foto 📸"}\n📑 *Url :* ${ab.data.result}\n\n\n`
  
}

ky.sendMessage(m.chat, { text : `${teks}` },{ quoted: m})

break
case 'waifu':
case 'neko':

m.reply('Process')
anu = `Done Masz`
   message = await prepareWAMessageMedia({ image: {url: `https://api.waifu.pics/sfw/${command}` }}, { upload: ky.waUploadToServer })
                 template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: 'Next waifu',
                                    id: 'waifu'
                                    }
                                },{quickReplyButton: {
                                    displayText: 'menu',
                                    id: '.menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                ky.relayMessage(m.chat, template.message, { messageId: template.key.id })
   break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ky.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await ky.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await ky.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await ky.updateProfilePicture(ky.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value open/close'
                if (args[0].toLowerCase() === 'close') {
                    await ky.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                m.reply('sukses grup di tutup oleh admin')
               } else if (args[0].toLowerCase() === 'open') {
                    m.reply('sukses grup di buka oleh admin')
             await ky.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ky.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ky.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
             //Batas
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ky.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ky.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ky.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ky.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ky.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ky.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ky.chatModify({ clear: { message: { id: m.quoted, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await ky.groupInviteCode(m.chat)
                ky.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
	    case 'pinterest':
            if(!text) return reply('gambar apa?')
            let pin = await hx.pinterest(text)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
	    ky.sendMessage(m.chat, { image: { url: di }, caption: 'Nih gan'}, { quoted: m })
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                ky.sendMessage(m.chat, { image: { url: result.image }, caption: `▹ Title : ${result.title}\n▹ Category : ${result.type}\n▹ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                ky.sendMessage(m.chat, { image: { url: result.image }, caption: `▹ Title : ${result.title}\n▹ Source : ${result.source}\n▹ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner
                ky.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                ky.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'addprefix': {
                let dahada = prefa.includes(text)
                if (dahada)return reply('Prefix Tersebut Telah Terdaftar, Coba Yang Lain...')
                prefa.push(text)
                m.reply(`Sukses Menambahkan "${text}" Sebagai Prefix`)
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`.trim()
                m.reply(respon)
            }
            break
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break


          case 'sticker': case 's': case 'stickergif': case 'sgif': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
		m.reply(mess.wait)
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await ky.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
		    let media = await quoted.download()
		    let encmedia = await ky.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		
	    }
	    break

     }
       case 'tes': case 'menu': case 'help': 
                anu = `
 Hi ${pushname} Di Sini Bot Pribadi
 WhatsApp 

 #ping
 *Simple Menu*
 
#sticker
#toimg
#tomp4
#togif
#tourl

 *Download Menu*
 
#tiktok / tiktokapi
#igfoto
#igvideo
#igstory
#getfoto
#getvid
#play [ judul/link ]
#ytmp4 / ytmp3

 *Group Menu*
 
#linkgroup
#grup [ close/open]
#setname
#setpp

 *Search Menu*
 
#pinterest
#wallpaper
#wikimedia

 *Random Menu*

#waifu
#neko
 
 *owner Menu*
 
#self
#public
# > / =>

`
                 message = await prepareWAMessageMedia({ image: fs.readFileSync('./setting/iky.jpg') , jpegThumbnail: fs.readFileSync('./setting/fake.jpg') }, { upload: ky.waUploadToServer })
                 template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                ky.relayMessage(m.chat, template.message, { messageId: template.key.id })
            
            break
            default:
                if (budy.startsWith('+>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                
if (/^=?>/.test(budy)){
	if (!isCreator) return m.reply(mess.owner)
  let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

  try{

 let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

 return reply(require('util').format(evaluate))

  } catch(e){

return reply(require('util').format(e))

 }
  }
                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
