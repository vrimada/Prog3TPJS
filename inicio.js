/*
Consigna
    API Fecth – File System
    1 - Utilizando el API https://thronesapi.com/ realizar las siguientes tareas:
    a) Recuperar la información de todos los personajes (GET).
    b) Agregar un nuevo personaje (POST).
    c) Buscar la información de un determinado personaje, utilizando un “id” como parámetro
    (GET).
    d) Persistir los datos de la primer consulta en un archivo local JSON.
   
    Métodos comunes y avanzados – File System
    2 - Utilizando el archivo creado en el punto anterior:
    a) Agregar un personaje al final del archivo.
    b) Agregar dos personajes al inicio del archivo.
    c) Eliminar el primer personaje, mostrar en consola el elemento eliminado.
    d) Crear un nuevo archivo que solo contenga los: id y nombres de los personajes.
    e) Para los datos anteriores ordenar por nombre y de forma decreciente, luego mostrar por
    consola (investigar método sort()).
*/
var api = require ('./api.js');
var fs = require('fs'); 
const funciones = require('./funciones');

async function main() {
  try {
    //a) Recuperar la información de todos los personajes (GET).
    const personajes = await api.getPersonajes(); 
    console.log('Todos los personajes:');
    console.log(personajes);

    
    // b) Agregar un nuevo personaje (POST).
    const nuevoPersonaje = {
        "id": 99,
        "firstName": "Harry", 
        "lastName": "potter",
        "fullName": "El niño que vivió",
        "title": "mago",
        "family": "huerfano",
        "image": "harry.jpg",
        "imageUrl": "https://thronesapi.com/assets/images/harry.jpg"
    }  

    api.agregarPersonaje(nuevoPersonaje);
    // c) Buscar la información de un determinado personaje, utilizando un “id” como parámetro (GET).
    api.buscarPersonaje(1);
    //d) Persistir los datos de la primer consulta en un archivo local JSON.
     fs.writeFileSync('./personajes.json', JSON.stringify(personajes,null, 2));


    
    // a) Agregar un personaje al final del archivo
    funciones.agregarAlFinal({
        firstName: "Ronald",
        lastName: "Weasley",
        fullName: "Ronald Weasley",
        title: "Ninguno",
        family: "Weasley",
        image: "Ron.jpg",
        imageUrl: "https://thronesapi.com/assets/images/ron.jpg"
    });
    
    // b) Agregar dos personajes al inicio del archivo
   funciones.agregarAlInicio(
        {
            firstName: "Hermione",
            lastName: "Granger",
            fullName: "Hermione Granger",
            title: "Ninguno",
            family: "Granger",
            image: "Hermione.jpg",
            imageUrl: "https://thronesapi.com/assets/images/hermione.jpg"
        },
        {
            firstName: "Ginny",
            lastName: "Weasley",
            fullName: "Ginny Weasley",
            title: "Ninguno",
            family: "Weasley",
            image: "Ginny.jpg",
            imageUrl: "https://thronesapi.com/assets/images/ginny.jpg"
        }
    );
    
    
    // c) Eliminar el primer personaje, mostrar en consola el elemento eliminado.
    await funciones.eliminarPrimero();
    
    // d)Crear un nuevo archivo que solo contenga los: id y nombres de los personajes.
    await funciones.crearJsonReducido();
    
    // e)
    funciones.ordenarPorNombreDesc();
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();