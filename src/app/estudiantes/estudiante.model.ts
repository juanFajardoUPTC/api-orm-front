export class Estudiante{
    constructor(
        public codigo : number,
        public nombre : string,
        public apellido : string,
        public tipo_documento : string,
        public numero_documento : string,
        public estado? : string,
        public genero? : string,
        public path?:string

    ){}
}