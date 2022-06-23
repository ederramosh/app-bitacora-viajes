const bitacora = [{
    nombre: 'Eder Ramos',
    telefono: '70458853',
    tipoPago: 'Tarjeta',
    monto: 7.20,
    fecha: '2022-06-07',
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
            <td>
                <button id="editarBoton" type="submit" onclick="editarBoton(${indice})" class="btn btn-outline-secondary"><svg height="25" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg></button>
                <button id="cerrarBoton" type="submit" class="btn btn-outline-secondary"><svg height="25" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button>
            </td>
        </tr>
        `
    });
}

function editarBoton(indice) {
    nombre.value = bitacora[indice].nombre;
    telefono.value = bitacora[indice].telefono;
    tipoPago.value = bitacora[indice].tipoPago;
    monto.value = bitacora[indice].monto;
    fecha.value = bitacora[indice].fecha;
    hora.value = bitacora[indice].hora;
    zona.value = bitacora[indice].zona;

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
adicionarViaje('Alexander', '22551111', 'Efectivo', 15.55, '2022-06-15', '15:30', 'Escalon');
// editarViaje('Eustaquio', '22551111', 'efectivo', 15.55, '6/5/2022', '15:30', 'Merliot');
// eliminarViaje(1);
mostrarInformacion();
