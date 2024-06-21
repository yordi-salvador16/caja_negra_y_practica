const { validateLogin } = require('./login');  //aqui ya estamos en las pruebas de testeo

test('1. Supere 10 caracteres', () => {
    const result = validateLogin("A1!abcdefghi");
    expect(result.isValid).toBe(false);
    expect(result.message).toBe("El login debe tener entre 8 y 10 caracteres.");
});

test('2. Menor a 8 caracteres', () => {
    const result = validateLogin("A1!abcd");
    expect(result.isValid).toBe(false);
    expect(result.message).toBe("El login debe tener entre 8 y 10 caracteres.");
});

test('3. Entre 8 a 10 caracteres', () => {
    const result = validateLogin("A1!abcdef");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe("Registro exitoso.");
});

test('4. Verificar que exista letra mayuscula', () => {
    const result1 = validateLogin("a1!abcdef");
    expect(result1.isValid).toBe(false);
    expect(result1.message).toBe("El login debe contener al menos una letra mayúscula.");

    const result2 = validateLogin("A1!abcdef");
    expect(result2.isValid).toBe(true);
});

test('5. Verificar que exista alguna letra', () => {
    const result1 = validateLogin("12345678!");
    expect(result1.isValid).toBe(false);
    expect(result1.message).toBe("El login debe contener al menos dos letras.");

    const result2 = validateLogin("A1!2bcdef");
    expect(result2.isValid).toBe(true);
});

test('6. Verificar que exista un caracter especial', () => {
    const result1 = validateLogin("A1abcdef");
    expect(result1.isValid).toBe(false);
    expect(result1.message).toBe("El login debe contener al menos un carácter especial.");

    const result2 = validateLogin("A1!abcdef");
    expect(result2.isValid).toBe(true);
});

test('7. Verificar que exista un número', () => {
    const result1 = validateLogin("A!abcdef");
    expect(result1.isValid).toBe(false);
    expect(result1.message).toBe("El login debe contener al menos un número.");

    const result2 = validateLogin("A1!abcdef");
    expect(result2.isValid).toBe(true);
});

test('8. Verificar que exista letra minuscula', () => {
    const result1 = validateLogin("A1!ABCDEF");
    expect(result1.isValid).toBe(false);
    expect(result1.message).toBe("El login debe contener al menos una letra minúscula.");

    const result2 = validateLogin("A1!abcDEF");
    expect(result2.isValid).toBe(true);
});

test('9. Verificar que cumpla todas las condiciones', () => {
    const result = validateLogin("A1!bcdef");
    expect(result.isValid).toBe(true);
    expect(result.message).toBe("Registro exitoso.");
});
