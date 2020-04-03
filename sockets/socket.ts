import { Socket } from 'socket.io';
import Server from '../clasess/server';
import socketIO from 'socket.io';


export const desconectar = ( cliente: Socket) =>{


    cliente.on('disconnect', ()=>{
        console.log('El cliente se ha desconectado');
    });
}

//Escuchar mensajes
export const mensaje = ( cliente:Socket, io: socketIO.Server)=>{
    cliente.on('mensaje', ( payload:{de:string, cuerpo: string})=>{

        console.log('Mensaje recibido', payload);
        
        //Enviar mensajes a todos los usuarios
        io.emit('mensaje-nuevo', payload);

    })
}