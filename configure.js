/*
> Recode script give credits to›
KINGVON

📝 | Created By KINGVON 
🖥️ | Base By KINGVON 
📝 | Created By KINGVON 
📌 |Credits KINGVON 
📱 |Chat wa:254720326316
👑 |Github: SilverTosh
✉️ |Email: kingvon64tho@gmail.com
*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "254720326316"
global.ownername = "KINGVON"
global.botname = "KINGVON MD"
global.author = "254720326316"
global.xprefix = '.'
global.autostatus = true 
global.Public = true 
//=================================================//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""
//=================================================//
global.mess = {
    owner: '`command reserved for owner only<\>`',
 prem: '`command reserved for premium only<\>`',
    admin: '`command reserved for admins only<\>`',
    group: '`feature for group only<\>`',
    done: '`Done ✓`',
    error: 'Error !',
    success: 'Succes •'
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
