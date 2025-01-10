
function mostrarAdjuntar(button) {
    const targetId = button.getAttribute('data-target');
    const adjuntarDiv = document.getElementById(targetId);

    if (adjuntarDiv.classList.contains('mostrar')) {
        adjuntarDiv.classList.remove('mostrar');
    } else {
        adjuntarDiv.classList.add('mostrar');
    }
}
document.querySelectorAll('.enviar').forEach(boton => {
    boton.addEventListener('click', function(){
        const chat = this.closest('.dentro-chat');
        const input = chat.querySelector('.Mensaje');
        const mensaje = input.value.trim();

        if (mensaje) {
            const chatMensaje = chat.querySelector('.mensajes'); 
            const nuevoMensaje = document.createElement('h4');
            nuevoMensaje.textContent = mensaje;
            nuevoMensaje.classList.add('enviado');
            chatMensaje.appendChild(nuevoMensaje);
            input.value = '';
        }
    })
})
function Reajuste() {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 992) {
            const mostrarChats = document.querySelectorAll('.dentro-chat');

            mostrarChats.forEach(chat => {
                if (chat.style.display === 'block') {
                    chat.style.display = 'none';
                }
            });
        }
    });
} 
window.addEventListener('load', Reajuste);
function Chat1() {
    const mostrarChat = document.getElementById("mensajes1");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat2() {
    const mostrarChat = document.getElementById("mensajes2");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat3() {
    const mostrarChat = document.getElementById("mensajes3");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat4() {
    const mostrarChat = document.getElementById("mensajes4");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat5() {
    const mostrarChat = document.getElementById("mensajes5");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat6() {
    const mostrarChat = document.getElementById("mensajes6");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat7() {
    const mostrarChat = document.getElementById("mensajes7");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat8() {
    const mostrarChat = document.getElementById("mensajes8");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat9() {
    const mostrarChat = document.getElementById("mensajes9");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}
function Chat10() {
    const mostrarChat = document.getElementById("mensajes10");
    const totalChats = document.querySelector('.todos-chats')
    const chats = document.querySelectorAll('.dentro-chat');
    const imagen = document.getElementById('imagen-espera');
    
    if (window.innerWidth >= 992) {
        
        chats.forEach(chat => {
            imagen.style.display = 'none';
            chat.style.display = chat === mostrarChat ? 'block' : 'none';
        });
    }
    else {
        if (mostrarChat.style.display === 'none' || mostrarChat.style.display === '') {
            totalChats.style.display = 'none';
            mostrarChat.style.display = 'block';
        }
    }
}

// FUNCIONES PARA VOLVER A LA COLUMNA DE CHATS
function verChats1() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes1')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats2() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes2');

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none';
        verChats.style.display = 'block';
    }
}
function verChats3() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes3');

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none';
        verChats.style.display = 'block';
    }
}
function verChats4() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes4')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats5() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes5')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats6() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes6')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats7() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes7')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats8() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes8')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats9() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes9')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}
function verChats10() {
    const verChats = document.querySelector('.todos-chats');
    const chat = document.getElementById('mensajes10')

    if (verChats.style.display === 'none' || verChats.style.display === '') {
        chat.style.display = 'none'
        verChats.style.display = 'block';
    }
}

