// transacciones.test.js
const registrarTransaccion = require('./transacciones');

test('Caso 1.1: Registrar pedido de venta', () => {
  const resultado = registrarTransaccion('pedido', { clienteCorreo: 'cliente@correo.com' });
  expect(resultado).toBe('Correo enviado a: cliente@correo.com. Mensaje: Su pedido ha sido recibido.');
});

test('Caso 1.2: Registrar despacho de mercancía al cliente', () => {
  const resultado = registrarTransaccion('despacho', { clienteCorreo: 'cliente@correo.com' });
  expect(resultado).toBe('Correo enviado a: cliente@correo.com. Mensaje: Su mercancía ha sido despachada.');
});

test('Caso 1.3: Registrar factura de cliente', () => {
  const resultado = registrarTransaccion('factura', { clienteCorreo: 'cliente@correo.com' });
  expect(resultado).toBe('Correo enviado a: cliente@correo.com, facturacion@empresa.com. Mensaje: Su factura ha sido emitida.');
});

test('Caso 1.4: Registrar cobro', () => {
  const resultado = registrarTransaccion('cobro', { agenteCorreo: 'agente@correo.com' });
  expect(resultado).toBe('Correo enviado a: cuentas@empresa.com, agente@correo.com. Mensaje: Se ha registrado un cobro en su cuenta.');
});
