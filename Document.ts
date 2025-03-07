import { rl } from "./readline";
import { Menu } from "./main";

abstract class DataService<T>{
    public abstract add(entity:T):void;
    public abstract SeeContent(id:number):T |undefined;
}

interface BookInterface {
    id: number,
    title: string,
    author:string
}

interface complement{
    id: Number,
    title: string,
    gender: string
}


export class Books extends DataService<BookInterface>{
    public booksList: BookInterface[]= [];

    public add(Libros: BookInterface): void {
        this.booksList.push(Libros)
    }
    public SeeContent(id: number): BookInterface | undefined {
        return this.booksList.find(Libros => Libros.id === id)
    }
}

export const  Libros = new Books();

export class Revistas extends DataService<complement>{
    public RevistasList:complement[]=[]

    public add(revistas: complement): void {
        this.RevistasList.push(revistas)
    }
    public SeeContent(id: number): complement | undefined {
        return this.RevistasList.find(Revistas => Revistas.id === id)
        
    }
}
export const revistas = new Revistas();

export async function agregarLibros() {
    
    const titulo = await rl.question(`escriba el nombre del libro que quiere agregar`)
    const autor = await rl.question(`escriba el nombre del autor del libro`)
     
    Libros.add({id:1, title:titulo, author:autor })
    console.log(`Libro agregado con exito`)
    Menu()
}
export async function SeelIibros() {
    console.log(Libros.SeeContent(1))
    Menu()
}

export async function agregarRevista() {
    
    const titulo = await rl.question(`escriba el nombre de la revista que quiere agregar: `)
    const genero = await rl.question(`escriba el genero de la revista: `)
 
    revistas.add({id:1, title:titulo, gender:genero })
    console.log(`Revista agregada con exito`)
    Menu()
}
export async function SeeRevistas() {
    console.log(revistas.SeeContent(1))
    Menu()
}


export class Articulos extends DataService<complement>{
    public articList:complement[]=[]

    public add(articulos: complement): void {
        this.articList.push(articulos)
    }
    public SeeContent(id: number): complement | undefined {
        return this.articList.find(Articulos => Articulos.id === id)
        
    }
}
export const articulos = new Articulos();

export async function agregarArticulo() {
    
    const titulo = await rl.question(`escriba el nombre del articulo que quiere agregar: `)
    const genero = await rl.question(`escriba el genero del articulo: `)
 
    articulos.add({id:1, title:titulo, gender:genero })
    console.log(`articulo agregada con exito`)
    Menu()
}
export async function SeeArticulos() {
    console.log(articulos.SeeContent(1))
    Menu()
}