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
    inputValidator: (value)={
        return ! (value) && "necesitas ingresar nombre de usuario"
    },
    allowOutsideClick: false,
    allowEscapekey: false,
}) .then( result =>{
    user= result.value;
    socket.emit ('authenticated',user)
})

chatbox.addEventListener('keyup', evt =>{
    if(evt.key ==='Enter'){
        if(chatbox.value.trim().length > 0){
            socket.emit('message', {user, message: chatbox.value});
            chatbox.value='';
        }
    }
})