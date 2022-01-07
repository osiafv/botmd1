
require('./setting/script')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage } = require("@adiwajshing/baileys-md")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)

const pino = require('pino')
const fs = require('fs')
const { uncache, nocache } = require('./lib/loader')
const chalk = require('chalk')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { color, bgcolor } = require("./lib/color")
const { smsg, isUrl, generateMessageTag } = require('./src/fungsi')
const figlet = require('figlet')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')


async function start() {
    const ky = makeWASocket({
    logger: pino({ level: 'warn' }),
	   printQRInTerminal: true,
        browser: ['ky Multi Device','Safari','1.0.0'],
        auth: state
    })
    

console.log(color(figlet.textSync('BOT WA', {

		font: 'block',

		horizontalLayout: 'default',

		vertivalLayout: 'default',

		width: 80,

		whitespaceBreak: false

	}), 'cyan'))

	console.log(color('[Scurity Iky]', 'cyan'), color('Bot Online', 'yellow'))
console.log(color('[WARNING]', 'cyan'), color(`INGFO CREATOR`, 'yellow'))
console.log(color('Instagram :', 'cyan'), color(`@-`, 'yellow'))
console.log(color('Github :', 'cyan'), color(`@-`, 'yellow'))
console.log(color('Wangsap :', 'cyan'), color(`-`, 'yellow'))
	console.log(color('\n', 'cyan'), color('\nWelcome back, Owner! Hope you are doing well~', 'yellow'))

	ky.browserDescription = ["IKY - BOT", "Chrome", "3.0.0"];


  
    ky.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!ky.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(ky, mek)
        require("./ky")(ky, m, chatUpdate)
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    ky.public = true

    
    
    
    ky.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update
    if (connection == "close") {
      lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
                ? start()
                : console.log(bgcolor('connection closed'))
    }
  })
  
  ky.ev.on('creds.update', saveState)
  


    // Add Other

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ky.sendText = (jid, text, quoted = '', options) => ky.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ky.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ky.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ky.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ky.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    
    ky.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await ky.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
    
    ky.sendTextWithMentions = async (jid, text, quoted, options = {}) => ky.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })


    ky.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0]
        let extension = mime.split('/')[1]
        trueFileName = attachExtension ? (filename + '.' + extension) : filename
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        //
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    
    ky.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await ky.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    ky.getFile = async (path) => {
        let res
		let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
		if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}

		return {
			res,
			...type,
			data
		}
    }

    return ky
}

start()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
