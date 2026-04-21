const url = 'https://thronesapi.com/api/v2/Characters';

//  Utilizando el API https://thronesapi.com/ realizar las siguientes tareas:
//      swagger (https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2)
   
async function getPersonajes(){ // a) Recuperar la información de todos los personajes (GET).
   try{
    const respuesta = await fetch(url);
    if(!respuesta.ok){ //si no devuelve un status 200, entonces es un error
         console.log(`Error!`);
    }else{ //si no es error, entonces devuelve la respuesta en formato json
        //immprimimos la respuesta
       // console.log("Todos los personajes:");
        return await respuesta.json();
        //console.log(personajes);
        
    }
   }catch(error){
    console.log(`Error! ${error}`); 
  }
} 



async function agregarPersonaje(personaje){ // b) Agregar un nuevo personaje (POST).
    try{
         const post = await fetch( url, { //la url es la misma pero le indicamos que el metood es post
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(personaje)
        })

        if (!post.ok){
            console.log(`Error!`);
        }else{
        //imprimimos la respuesta
        console.log("Respuesta al insertar nuevo personaje:");
        const respuesta = await post.status;
        console.log(respuesta);
        }
    }
    catch(error){
    console.log(`Error! ${error}`);   
 }
}



async function buscarPersonaje(id){ // c) Buscar la información de un determinado personaje, utilizando un “id” como parámetro (GET).
    try{
        const respuesta = await fetch(`${url}/${id}`);
        if (!respuesta.ok){
            console.log(`Error!`);
        }else{
             console.log("Personaje encontrado:");
            const personaje = await respuesta.json();
            console.log(personaje);
        }
    }catch(error){
        console.log(`Error! ${error}`);
    }
}
module.exports = {
    getPersonajes,
    agregarPersonaje,
    buscarPersonaje 
}