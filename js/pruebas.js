function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

  console.assert(
    validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
        validarNombre("1234") === "El campo nombre sólo acepta letras",
        "Validar nombre no validó que el nombre sólo tenga letras"
    );

    console.assert(
        validarNombre('Cristian') === "",
        'Validar nombre falló con un nombre validó'
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('Neuquen') === '',
        'Validar ciudad falló con un nombre de ciudad validó'
    );

    console.assert(
        validarCiudad('') === 'Este campo no debe quedar vacío',
        'Validar ciudad no validó que el campo no quedara vacío'
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener por lo menos una letra o número',
        'Validar descripcion regalo no validó que el campo no quedara vacío'
    );

    console.assert(
        validarDescripcionRegalo('22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222') === 'Este campo debe tener menos de 100 caracteres',
        'Validar descripcion regalo no validó que la descripción sea menor a 100 caracteres'
    );

    console.assert(validarDescripcionRegalo('Regalo') === '',
        'La función validar descripción regalo no funcionó con una descripción correcta'
    );

    console.assert(
        validarDescripcionRegalo(",.,.,.") === "El campo descripción solo puede tener números y letras",
        "La función validar descripción regalo no validó que fuera sólo números y letras"
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
