const path = require('path')
const os = require('os')

process.on('uncaughtException', function (err) {
  let msg = 'Uncaught exception: ' + err.stack
  console.error(msg)
})

module.exports = async () => {
  process.env.NODE_ENV = 'test'
  process.env.HTTP_PROXY = 'http://127.0.0.1:7070'
  process.env.COC_DATA_HOME = path.join(os.homedir(), '.config/coc')
  process.env.COC_VIMCONFIG = path.join(__dirname, 'src/__tests__')
}
