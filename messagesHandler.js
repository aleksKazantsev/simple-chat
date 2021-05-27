import cookie from 'cookie'


export default (io, socket) => {
    const socketCookies = cookie.parse(socket.handshake.headers.cookie)
    const userName = socketCookies.user_name
    const clientsCount = io.engine.clientsCount

    socket.broadcast.emit('chat message', `Присоединился пользователь ${userName} !`)
    socket.broadcast.emit('chat message', `Всего присоединилось ${clientsCount} пользователей !`)

    socket.on('disconnect', () => {
        socket.broadcast.emit('chat message', `Пользователь ${userName} покинул чат !`)
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', `${userName}: ` + msg)
    })
}