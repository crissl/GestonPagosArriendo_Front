import {Correo} from 'app/models/correo'

export class  Envio {


    
    private asunto: string;
    private mensaje: string;
    private sistema: string;
    private nombre: string;
    private email: Correo;
    private correo: string;
    private direccion: string;


    constructor( $asunto: string, $mensaje: string, $sistema: string,$nombres: string, $email: string, $correo: Correo, $direccion: string) {
        this.asunto = $asunto;
        this.mensaje = $mensaje;
        this.sistema = $sistema; 
        this.nombre = $nombres;
        this.email = $email;
        this.correo = $correo;
        this.direccion = $direccion;
    }

}
