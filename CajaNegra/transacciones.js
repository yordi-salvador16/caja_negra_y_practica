// transacciones.js
function enviarCorreo(destinatarios, mensaje) {
  console.log(`Correo enviado a: ${destinatarios.join(', ')}. Mensaje: ${mensaje}`);
  return `Correo enviado a: ${destinatarios.join(', ')}. Mensaje: ${mensaje}`;
}

function registrarTransaccion(tipo, datos) {
  let destinatarios = [];
  let mensaje = '';

  switch(tipo) {
    case 'pedido':
      destinatarios.push(datos.clienteCorreo);
      mensaje = 'Su pedido ha sido recibido.';
      break;
    case 'despacho':
      destinatarios.push(datos.clienteCorreo);
      mensaje = 'Su mercancía ha sido despachada.';
      break;
    case 'factura':
      destinatarios.push(datos.clienteCorreo, 'facturacion@empresa.com');
      mensaje = 'Su factura ha sido emitida.';
      break;
    case 'cobro':
      destinatarios.push('cuentas@empresa.com', datos.agenteCorreo);
      mensaje = 'Se ha registrado un cobro en su cuenta.';
      break;
    default:
      return 'Tipo de transacción no válido';
  }

  return enviarCorreo(destinatarios, mensaje);
}

module.exports = registrarTransaccion;
