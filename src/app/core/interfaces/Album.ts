import { Songs } from "./Songs";

export interface Album{
    id:number,
    nombre: string,
    foto: string,
    canciones: Songs[]
}