export class Dueño_proyecto {

    id?:number;
    nombre:string;
    apellido:string;
    edad:number;
    experiencia:string;
    educacion:string; 

    public constructor(nombre:string,apellido:string,edad:number,experiencia:string,educacion:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.experiencia = experiencia;
        this.educacion = educacion;
    }



}