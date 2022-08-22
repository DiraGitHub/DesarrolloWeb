class usuario{

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    getFullName(){
        let fullName = this.nombre + " " + this.apellido; 
        //console.log(`getFullName::fullName [${fullName}]`);
        return fullName;
    }

    addMascota(nombreMascota){
        //console.log(`addMascota::mascotas [${this.mascotas}]`);
        this.mascotas.push(nombreMascota);
        //console.log(`addMascota::mascotas_NEW [${this.mascotas}]`);
    }

    countMascotas(){
        let totalMascotas = this.mascotas.length;
        //console.log(`countMascotas::totalMascotas [${totalMascotas}]`);

        return totalMascotas;
    }

    addBook(nombreLibro,autor){
        //console.log(`addBook::libros [${this.libros}]`);

        let newBook = {
            nombre: nombreLibro,
            autor: autor
        }
        //console.log(`addBook::newBook [${newBook}]`);

        this.libros.push(newBook);
        //console.log(`addBook::libros [${this.libros}]`);
    }

    getBooksNames(){
        let booksNames = [];

        //console.log(`getBooksNames::libros [${this.libros}]`);
        this.libros.forEach(element => {
            booksNames.push(element.nombre);
        });

        //console.log(`getBooksNames::booksNames [${booksNames}]`);
        return booksNames;
    }

}

let libros= [{nombre:"El Esclavo", autor:"Francisco J. Ángel"},{nombre:"La Casa de los Espiritus", autor:"Isabel Allende"}];
let mascotas = ["gato","pollo","gato"];

const user = new usuario("Mir", "Flores", libros, mascotas);

let stringLibros = JSON.stringify(user.libros);

console.log(`nombre [${user.nombre}]`);
console.log(`apellido [${user.apellido}]`);
console.log(`libros [${stringLibros}]`);
console.log(`mascotas [${user.mascotas}]`);

console.log("/***************************/");
console.log("    EJECUTANDO FUNCIONES");
console.log("/***************************/");

console.log(`Nombre completo = [${user.getFullName()}]`);
console.log(`Número mascotas = [${user.countMascotas()}]`);
console.log(`Agregando mascota.`); user.addMascota("perro")
console.log(`Neva lista mascotas [${user.mascotas}]`);
console.log(`Nuevo número mascotas = [${user.countMascotas()}]`);
console.log(`Nombres de libros = [${user.getBooksNames()}]`);
console.log(`Agregando libro.`); user.addBook("Los Pilares de la Tierra", "Ken Follett")
console.log(`Nuevos nombres de libros = [${user.getBooksNames()}]`);