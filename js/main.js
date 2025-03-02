// 1.Obtener el valor de un formulario
const $form = document.querySelector('#carta-a-santa');

// 2. Validar que el nombre sea válido y escribir una prueba
function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre sólo acepta letras";
    }
    return "";
}

// 6.Hacer validación para otros campos (con sus pruebas)
function validarCiudad(ciudad) {
    if(ciudad === '') {
        return 'Este campo no debe quedar vacío';
    }

    return '';
}

function validarDescripcionRegalo(descripcion) {
    if (descripcion === '') {
        return 'Este campo debe tener por lo menos una letra o número';
    } else if (descripcion.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres';
    } else if (!/^[a-z0-9 ]+$/i.test(descripcion)) {
        return "El campo descripción solo puede tener números y letras";
    } else {
        return "";
    } 
}

// 3. Enviando (submit) el formulario
function validarFormulario(event) {
// 4. Eventos. Botón submit
    // 1.Obtener el valor de un formulario
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    //brackets notation para el caso especial de name="descripcion-regalo"
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
    
    // 7.Objeto
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };
    
    // 9.Interactuando cuando el envío es exitoso
    const esExito = manejarErrores(errores) === 0;
    if(esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout(() => {
            window.location.href = 'wishlist.html';
        }, 5000);
    }

    event.preventDefault();
}

// 5.Éxito o Errores
function manejarErrores(errores) {
    borrarErroresAnteriores();

    const keys = Object.keys(errores);
    let cantidadErrores = 0;

    // 7.forEach y funciones de callback.
    keys.forEach(function(key){
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            $form[key].className = "error";
            mostrarErrores(error);
        } else {
            $form[key].className = "";
        }
    });
    
    return cantidadErrores;
}

//3. Enviando (submit) el formulario
$form.onsubmit = validarFormulario;

function mostrarErrores(error) {
    const $errores = document.querySelector('#errores');

    const $error = document.createElement('li');
    $error.textContent = error;
    $errores.appendChild($error);
}


function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li');

    $errores.forEach(error => error.remove());
}