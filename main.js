const bitacora = [{
    nombre: 'Eder Ramos',
    telefono: '70458853',
    tipoPago: 'Tarjeta',
    monto: 7.20,
    fecha: '6/15/2022',
    hora: '21:00',
    zona: 'San Salvador',
}];

const formulario = document.getElementById('formulario');


// Eventos
formulario.addEventListener('submit', validarFormulario);



// Funciones JavaScript

function mostrarInformacion() {
    //aqui va el codigo que carga los viajes realizados

    //Limpiamos la tabla
    document.getElementById('tablaBitacora').innerHTML = '';

    bitacora.forEach( ( viaje, indice ) => {
        const { nombre, telefono, tipoPago, monto, fecha, hora, zona } = viaje;
        
        document.getElementById('tablaBitacora').innerHTML += `
        <tr>
            <th scope="row">${indice + 1}</th>
            <td>${nombre}</td>
            <td>${telefono}</td>
            <td>${tipoPago}</td>
            <td>$${monto}</td>
            <td>${fecha}</td>
            <td>${hora}</td>
            <td>${zona}</td>
        </tr>
        `
    });
}

function adicionarViaje( nombre, telefono, tipoPago, monto, fecha, hora, zona ) {
    //aqui va el codigo de adicion de viaje
    // ----- validacion que todo vaya lleno ----
    const nuevoViaje = {
        nombre,
        telefono,
        tipoPago,
        monto,
        fecha,
        hora,
        zona,
    }
    bitacora.push( nuevoViaje );
}

function editarViaje( nombreEditado, telefonoEditado, tipoPagoEditado, montoEditado, fechaEditado, horaEditado, zonaEditado ) {
    // ----- validacion que todo vaya lleno ----
    const resultadoIndice = bitacora.findIndex( viaje => {
        return viaje.telefono === telefonoEditado;
    });

    bitacora[resultadoIndice].nombre = nombreEditado;
    bitacora[resultadoIndice].telefono = telefonoEditado;
    bitacora[resultadoIndice].tipoPago = tipoPagoEditado;
    bitacora[resultadoIndice].monto = montoEditado;
    bitacora[resultadoIndice].fecha = fechaEditado;
    bitacora[resultadoIndice].hora = horaEditado;
    bitacora[resultadoIndice].zona = zonaEditado;

}

function eliminarViaje(indice) {
    bitacora.splice(indice,1);
}

function validarFormulario(e) {
    e.preventDefault()
    
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let tipoPago = document.getElementById('tipoPago').value;
    let monto = document.getElementById('monto').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let zona = document.getElementById('zona').value;
    
    if( nombre !== '' && telefono !== '' && tipoPago !== '' && monto !== '' && fecha !== '' && hora !== '' && zona !== '' ) {
        adicionarViaje( nombre, telefono, tipoPago, monto, fecha, hora, zona );
        mostrarInformacion();
        limpiarForm();
    } else {
        console.log('no paso');
    }
}

function limpiarForm() {
    document.getElementById('formulario').reset();
}

//---------- test ----------
adicionarViaje('Alexander', '22551111', 'Efectivo', 15.55, '6/5/2022', '15:30', 'Escalon');
// editarViaje('Eustaquio', '22551111', 'efectivo', 15.55, '6/5/2022', '15:30', 'Merliot');
// eliminarViaje(1);
mostrarInformacion();
