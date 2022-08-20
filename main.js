let bitacora = [
    {
        nombre: 'Eder Ramos',
        telefono: '70458853',
        tipoPago: 'Tarjeta',
        monto: 7.20,
        fecha: '2022-06-07',
        hora: '21:00',
        zona: 'San Salvador',
    },
    {
        nombre: 'Allison Estrada',
        telefono: '77459652',
        tipoPago: 'Efectivo',
        monto: 15.35,
        fecha: '2022-06-09',
        hora: '19:00',
        zona: 'Santa Tecla',
    }
];

const formulario = document.getElementById('formulario');

// Eventos
formulario.addEventListener('submit', ingresarInformacion);


// Funciones JavaScript
function mostrarInformacion() {

    let bitacoraTemporal = JSON.parse(localStorage.getItem('bitacora'));
    if(bitacoraTemporal !== null){
        bitacora = [...bitacoraTemporal];
    }

    //Limpiamos la tabla
    document.getElementById('tablaBitacora').innerHTML = '';

    bitacora.forEach( ( viaje, indice ) => {
        const { nombre, telefono, tipoPago, monto, fecha, hora, zona } = viaje;
        
        document.getElementById('tablaBitacora').innerHTML += `
        <tr>
            <th scope="row">${indice + 1}</th>
            <td>${nombre}</td>
            <td>${telefono}</td>
            <td class="d-none d-md-table-cell">${tipoPago}</td>
            <td>$${monto}</td>
            <td class="d-none d-md-table-cell">${fecha}</td>
            <td class="d-none d-md-table-cell">${hora}</td>
            <td class="d-none d-md-table-cell">${zona}</td>
            <td>
                <button id="editarBoton" type="submit" onclick="editarBoton(${indice})" class="btn btn-outline-secondary"><svg height="25" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg></button>
                <button id="cerrarBoton" type="submit" onClick="eliminarViaje(${indice})" class="btn btn-outline-secondary"><svg height="25" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button>
            </td>
        </tr>
        `
    });
}

function ingresarInformacion(e) {
    e.preventDefault()

    let indice = document.getElementById('indice').value;
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let tipoPago = document.getElementById('tipoPago').value;
    let monto = document.getElementById('monto').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let zona = document.getElementById('zona').value;

    if(indice === '') {
        adicionarViaje( nombre, telefono, tipoPago, monto, fecha, hora, zona );
    } else {
        editarInformacion( indice, nombre, telefono, tipoPago, monto, fecha, hora, zona )
    }
    localStorage.setItem('bitacora', JSON.stringify(bitacora));
    mostrarInformacion();
    limpiarForm();
}

function editarBoton(indice) {
    document.getElementById('indice').value = indice;
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

function editarInformacion( indice, nombre, telefono, tipoPago, monto, fecha, hora, zona ) {
    //Se guarda la informacion editada
    bitacora[indice].nombre = nombre;
    bitacora[indice].telefono = telefono;
    bitacora[indice].tipoPago = tipoPago;
    bitacora[indice].monto = monto;
    bitacora[indice].fecha = fecha;
    bitacora[indice].hora = hora;
    bitacora[indice].zona = zona;
}

function eliminarViaje(indice) {
    bitacora.splice(indice,1);
    localStorage.setItem('bitacora', JSON.stringify(bitacora));
    mostrarInformacion();

}

function limpiarForm() {
    document.getElementById('formulario').reset();
}

mostrarInformacion();