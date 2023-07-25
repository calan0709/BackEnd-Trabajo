//SOMOS EL CLIENTE
const socket = io(); //establece el canal de comunicacion 

socket.emit('messaage', 'hola soy alan')//envia un mensaje al servidor

socket.on('event_socket_indvidual', data =>{//el evento a escuchar es message --
    console.log(data)//data recibe el mensaje del servidor y lo muestra
})

socket.on('evento_todos_menos_actual',data =>{
    console.log(data)
})

socket.on('todos', data=>{
    console.log(data)
})

//cartel emergente
/* Swal.fire({
    title: 'saludos',
    text: 'Mensaje inicial',
    icon: 'succes'
})  */