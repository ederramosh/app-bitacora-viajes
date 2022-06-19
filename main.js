const bitacora = [{
    nombre: 'Eder Ramos',
    telefono: '70458853',
    tipoPago: 'Tarjeta',
    monto: 7.20,
    fecha: '6/15/2022',
    hora: '21:00',
    zona: 'San Salvador',
}];

function mostrarInformacion() {
    //aqui va el codigo que carga los viajes realizados
    bitacora.forEach( ( viaje, indice ) => {
        const { nombre, telefono, tipoPago, monto, fecha, hora, zona } = viaje;
        console.log(`Indice: ${indice + 1} - Nombre: ${nombre} - telefono: ${telefono} - Tipo de Pago: ${tipoPago}`);
    })
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

//---------- test ----------
adicionarViaje('Alexander', '22551111', 'efectivo', 15.55, '6/5/2022', '15:30', 'Escalon');
// editarViaje('Eustaquio', '22551111', 'efectivo', 15.55, '6/5/2022', '15:30', 'Merliot');
// eliminarViaje(1);
mostrarInformacion();