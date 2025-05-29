/*
> Recode script give credits to›
Giddy Tennor

📝 | Created By Giddy Tennor
🖥️ | Base Ori By Giddy Tennor 
📝 | Created By Giddy Tennor
📌 |Credits Giddy Tennor 
📱 |Chat wa:254756182478
👑 |Github: Tennor-modz 
✉️ |Email: giddytennor@gmail.com
*/
const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.owner = "254756182478"
global.ownername = "Giddy Tennor"
global.botname = "Wa-Base-Bot"
global.author = "254756182478"
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