const messages = []

const addMessage = (obj) => {
    console.log(obj)
    messages.push(obj)
    return messages
}

const getMessagesInRoom = (room) => {
    return messages.filter(message => message.room === room)
}

module.exports = { addMessage, getMessagesInRoom }