export interface CredUsuario{
    email:string;
    password:string;
}
export interface respuestaAutenticacion{
    token: string;
    expiracion: Date;
}

export interface CreacionUsuario{
    user:string;
    password :string;
    name:string;
    lastName:string;
    image:string
    email:string;

}