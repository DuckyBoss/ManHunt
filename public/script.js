const socket = io();

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    if (message.trim()) {
        socket.emit('chat message', message);
        document.getElementById('message-input').value = '';
    }
});

document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

socket.on('chat message', (msg) => {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});

