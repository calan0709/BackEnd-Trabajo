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

//escucha al servidor
socket.on('messagelogs', data => {
    let log = document.getElementById('messagelogs');
    let messages = ''; 
    data.forEach(message=> { //recorre el mensaje 
        messages += `${message.user} dice: ${message.message}<br/>`
    });
        
    log.innerHTML = messages;
});

//cada vez que se canecte un nuevo usuario, que muestre un modal
socket.on('newUserConnected', data =>{
    Swal.fire({
        toast:true,
        position: 'top-end',
        showConfirmationButton: false,
        timer: 3000,
        title:`${data} se ha unido al chat`,
        icon: 'success'
    })
})