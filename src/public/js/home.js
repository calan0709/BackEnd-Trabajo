//cliente
const socket = io();


//cartel emergente
/* Swal.fire({
    title: 'saludos',
    text: 'Mensaje inicial',
    icon: 'succes'
})  */
 

let user;

const chatbox = document.getElementById('chatBox');

Swal.fire({
    title: 'identifiquese',
    input: 'text',
    text: 'ingrese nombre de usuario',
    inputValidator: (value)=>{
        return !(value) && "necesitas ingresar nombre de usuario"
    },
    allowOutsideClick: false,
    allowEscapekey: false,
}) .then( result =>{
    user= result.value;
    socket.emit ('authenticated',user)
})
// escuchando el input
chatbox.addEventListener('keyup', evt =>{
    if(evt.key ==='Enter'){ //si el evento es igual a enter enviamos el mensaje al servidor
        if(chatbox.value.trim().length > 0){ //que no tenga un mensaje vacio
            socket.emit('message', {user, message: chatbox.value}); //envio de objeto con nombre de usuario y mensaje de input
            chatbox.value=''; //inicia el input vacio
        }
    }
}) 

