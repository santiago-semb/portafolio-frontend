export class Proyectos {

    id?:number;
    nombre:string;
    lenguaje:string;
    link:string;
    id_dueño:number;

    public constructor(nombre:string,lenguaje:string,link:string,id_dueño:number) {
        this.nombre = nombre;
        this.lenguaje = lenguaje;
        this.link = link;
        this.id_dueño = id_dueño;
    }

}