const socket = io()

const form = document.getElementById('socket')
const input = document.getElementById('inputAutoDisabled')
const messages = document.getElementById('messages')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
        socket.emit('chat message', input.value)
        input.value = ''
    }
})

socket.on('chat message', (msg) => {
    const item = document.createElement('li')
    item.classList.add('list-group-item')
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTo(0, messages.scrollHeight)
  })