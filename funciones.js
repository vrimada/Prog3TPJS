const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, 'personajes.json');

// Leer JSON
function leer() {
    const data = fs.readFileSync(ruta, 'utf-8');
    return JSON.parse(data);
}

// Escribir JSON
function escribir(data) {
    fs.writeFileSync(ruta, JSON.stringify(data, null, 2));
}

//////////////////////////////////////////////////////
// a) Agregar un personaje al FINAL
//////////////////////////////////////////////////////
function agregarAlFinal(nuevoPersonaje) {
    const personajes = leer();

    const nuevoId = personajes.length > 0
        ? personajes[personajes.length - 1].id + 1
        : 0;

    nuevoPersonaje.id = nuevoId;

    personajes.push(nuevoPersonaje);

    escribir(personajes);
}

//////////////////////////////////////////////////////
// b) Agregar DOS personajes al INICIO
//////////////////////////////////////////////////////
function agregarAlInicio(personaje1, personaje2) {
    const personajes = leer();

    // reasignar IDs para evitar repetidos
    const nuevos = [personaje1, personaje2];

    nuevos.forEach((p, index) => {
        p.id = index;
    });

    const personajesActualizados = [
        ...nuevos,
        ...personajes.map((p, index) => ({
            ...p,
            id: index + 2
        }))
    ];

    escribir(personajesActualizados);
}

//////////////////////////////////////////////////////
// c) Eliminar el PRIMER personaje y mostrarlo
//////////////////////////////////////////////////////
function eliminarPrimero() {
    const personajes = leer();

    const eliminado = personajes.shift(); // elimina el primero

    escribir(personajes);

    console.log("Elemento eliminado:");
    console.log(eliminado);
}

//////////////////////////////////////////////////////
// d) Crear nuevo archivo con ID y NOMBRE
//////////////////////////////////////////////////////
function crearJsonReducido() {
    const personajes = leer();

    const reducido = personajes.map(p => ({
        id: p.id,
        nombre: p.fullName
    }));

    fs.writeFileSync(
        path.join(__dirname, 'personajes_reducido.json'),
        JSON.stringify(reducido, null, 2)
    );
}

//////////////////////////////////////////////////////
// e) Ordenar por nombre DESC y mostrar
//////////////////////////////////////////////////////
function ordenarPorNombreDesc() {
    const personajes = leer();

    const reducido = personajes.map(p => ({
        id: p.id,
        nombre: p.fullName
    }));

    reducido.sort((a, b) => {
        if (a.nombre < b.nombre) return 1;
        if (a.nombre > b.nombre) return -1;
        return 0;
    });

    console.log("Ordenados de forma decreciente:");
    console.log(reducido);
}

//////////////////////////////////////////////////////
// EXPORTAR FUNCIONES
//////////////////////////////////////////////////////
module.exports = {
    agregarAlFinal,
    agregarAlInicio,
    eliminarPrimero,
    crearJsonReducido,
    ordenarPorNombreDesc
};