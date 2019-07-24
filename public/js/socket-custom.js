var socket = io();

// on = Sirve para escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit = Sirve para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Yudino',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});