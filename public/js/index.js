let banderaPut = false, banderaPost = false, banderaDelete = false;

const btnGet = document.getElementById('opc-get');
const btnPost = document.getElementById('opc-post');
const btnPut = document.getElementById('opc-put');
const btnDelete = document.getElementById('opc-delete');

const divResultado = document.getElementById('mostrar-resultado');
const documentFragment = document.createDocumentFragment();

const subtituloResultado = document.getElementById('subtitulo-resultado');

const crearFormulario = () => {
    const form = document.createElement('FORM');
    const inputId = document.createElement('INPUT');
    const inputNombre = document.createElement('INPUT');
    const inputMarca = document.createElement('INPUT');
    const inputExistencias = document.createElement('INPUT');
    const buttonEnviar = document.createElement('BUTTON');

    form.setAttribute("id", "form");
    form.setAttribute("method", "POST");
    
    inputId.setAttribute("id", "form-id");
    inputId.setAttribute("name", "id_producto");
    inputId.setAttribute("type", "number");
    inputId.setAttribute("placeholder", "ID");
    
    inputNombre.setAttribute("id", "form-nombre");
    inputNombre.setAttribute("name", "nombre_producto");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("placeholder", "NOMBRE");

    inputMarca.setAttribute("id", "form-marca");
    inputMarca.setAttribute("name", "marca_producto");
    inputMarca.setAttribute("type", "text");
    inputMarca.setAttribute("placeholder", "MARCA");

    inputExistencias.setAttribute("id", "form-existencias");
    inputExistencias.setAttribute("name", "numero_existencias");
    inputExistencias.setAttribute("type", "number");
    inputExistencias.setAttribute("placeholder", "EXISTENCIAS");
    
    buttonEnviar.setAttribute("id", "enviar-datos");
    buttonEnviar.setAttribute("type", "submit");
    buttonEnviar.textContent = "ENVIAR DATOS";

    if(banderaPost) {
        banderaPost = false;
        form.setAttribute("action", "/api/productos");
        inputId.setAttribute("disabled", "");
        inputNombre.setAttribute("required", "");
        inputMarca.setAttribute("required", "");
        inputExistencias.setAttribute("required", "");
    }
    else if(banderaPut) {
        banderaPut = false;
        form.setAttribute("action", "/api/productosput");
        inputId.setAttribute("required", "");
    }
    else if(banderaDelete) {
        banderaDelete = false;
        form.setAttribute("action", "/api/productosdel");
        inputId.setAttribute("required", "");
        inputNombre.setAttribute("disabled", "");
        inputMarca.setAttribute("disabled", "");
        inputExistencias.setAttribute("disabled", "");
    }

    buttonEnviar.classList.add("btn");
    form.classList.add("estilo-formulario");

    form.appendChild(inputId);
    form.appendChild(inputNombre);
    form.appendChild(inputMarca);
    form.appendChild(inputExistencias);
    form.appendChild(buttonEnviar);

    return form;
}

const crearNodos = (id, nombre, marca, existencia) => {
    const nodoPadre = document.createElement('DIV');
    const idN = document.createElement('P');
    const nombreN = document.createElement('P');
    const marcaN = document.createElement('P');
    const existenciaN = document.createElement('P');

    idN.textContent = 'ID: ' + id;
    nombreN.textContent = 'NOMBRE: ' + nombre;
    marcaN.textContent = 'MARCA: ' + marca;
    existenciaN.textContent = 'EXISTENCIAS: ' + existencia;

    nodoPadre.appendChild(idN);
    nodoPadre.appendChild(nombreN);
    nodoPadre.appendChild(marcaN);
    nodoPadre.appendChild(existenciaN);

    nodoPadre.classList.add('estilo-nodos');

    return nodoPadre;
}

const obtenerDatos = async () => {
    const datos = await fetch('http://localhost:5050/api/productos');
    const mostrarDatos = await datos.json();
    return mostrarDatos;
}

btnGet.addEventListener('click', async () => {
    divResultado.innerHTML = '';
    subtituloResultado.innerHTML = 'RESULTADO (OBTENER DATOS / GET)';

    const datos = await obtenerDatos();

    for(let dato of datos) {
        const nodoCreado = crearNodos(dato.id_producto,dato.nombre_producto,dato.marca_producto,dato.numero_existencias);
        documentFragment.appendChild(nodoCreado);
    }
    divResultado.appendChild(documentFragment);
});

btnPost.addEventListener('click', () => {
    banderaPost = true;
    divResultado.innerHTML = '';
    subtituloResultado.innerHTML = 'RESULTADO (REGISTRAR DATOS / POST)';

    const obtenerFormulario = crearFormulario();

    divResultado.appendChild(obtenerFormulario);
});

btnPut.addEventListener('click', () => {
    banderaPut = true;
    divResultado.innerHTML = '';
    subtituloResultado.innerHTML = 'RESULTADO (ACTUALIZAR DATOS / PUT)';

    const obtenerFormulario = crearFormulario();

    divResultado.appendChild(obtenerFormulario);
});

btnDelete.addEventListener('click', () => {
    banderaDelete = true;
    divResultado.innerHTML = '';
    subtituloResultado.innerHTML = 'RESULTADO (ELIMINAR DATOS / DELETE)';

    const obtenerFormulario = crearFormulario();

    divResultado.appendChild(obtenerFormulario);
});