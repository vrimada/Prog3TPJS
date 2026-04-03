/*
Consigna
    API Fecth – File System
    1 - Utilizando el API https://thronesapi.com/ realizar las siguientes tareas:
     swagger (https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2)
    a) Recuperar la información de todos los personajes (GET).
    b) Agregar un nuevo personaje (POST).
    c) Buscar la información de un determinado personaje, utilizando un “id” como parámetro
    (GET).
    d) Persistir los datos de la primer consulta en un archivo local JSON.
    Métodos comunes y avanzados – File System

    
*/
var api = require ('./api.js');
var fs = require('fs').promises; 

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
    await fs.writeFile('./personajes.json', JSON.stringify(personajes));

/**2 - Utilizando el archivo creado en el punto anterior:
    a) Agregar un personaje al final del archivo.
    b) Agregar dos personajes al inicio del archivo.
    c) Eliminar el primer personaje, mostrar en consola el elemento eliminado.
    d) Crear un nuevo archivo que solo contenga los: id y nombres de los personajes.
    e) Para los datos anteriores ordenar por nombre y de forma decreciente, luego mostrar por
    consola (investigar método sort()).
    
    Imprimir en consola para verificar todas las operaciones realizadas.
    Tener en cuenta:
     Realizar funciones individuales para cada punto.
     Utilizar sintaxis Aync/Await, la forma más moderna para el uso de la asincronía.
     Manejar de excepciones, bloques try...catch */
  } catch (error) {
    console.error('Error:', error);
  }
}

main();