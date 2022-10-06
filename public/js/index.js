// const divResultado = document.getElementById('resultados');
// const btnResultado = document.getElementById('btnResultado');

// const formulario = document.getElementById('form');
// const formId = document.getElementById('form-id');
// const formNombre = document.getElementById('form-nombre');
// const formMarca = document.getElementById('form-marca');
// const formExistencias   = document.getElementById('form-existencias');
// const btnEnviar = document.getElementById('enviar-datos');

// btnEnviar.addEventListener('click', (evt) => {

// });


// btnResultado.addEventListener('click', async (evt) => {
//     evt.preventDefault();
//     divResultado.innerHTML = '';
    
//     const datos = await obtenerDatos();
//     console.log(datos);
//     for(let dato of datos) {
//         const resultado = `
//             id: ${dato.id_producto} <br>
//             nombre: ${dato.nombre_producto} <br>
//             marca: ${dato.marca_producto} <br>
//             existencias: ${dato.numero_existencias} <br>
//         `;
//         divResultado.innerHTML += resultado;
//         divResultado.innerHTML += '<br>';
//     }
// });

// const obtenerDatos = async () => {
//     const datos = await fetch('http://localhost:5050/api/productos');
//     const mostrarDatos = await datos.json();
//     //console.log(mostrarDatos);
//     return mostrarDatos;
// }