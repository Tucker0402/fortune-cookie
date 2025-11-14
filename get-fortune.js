const Fortunes = require('./fortunes')
const messages = Fortunes()

const getFortune = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return randomMessage
}

module.exports = getFortune