function validateLogin(login) {
    const minLength = 8;
    const maxLength = 10;
    const hasUpperCase = /[A-Z]/.test(login);
    const hasLowerCase = /[a-z]/.test(login);
    const hasNumber = /[0-9]/.test(login);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(login);
    const hasEnoughLength = login.length >= minLength && login.length <= maxLength;
    const hasTwoLetters = (login.match(/[A-Za-z]/g) || []).length >= 2;

    if (!hasEnoughLength) return { isValid: false, message: "El login debe tener entre 8 y 10 caracteres." };
    if (!hasTwoLetters) return { isValid: false, message: "El login debe contener al menos dos letras." };
    if (!hasUpperCase) return { isValid: false, message: "El login debe contener al menos una letra mayúscula." };
    if (!hasLowerCase) return { isValid: false, message: "El login debe contener al menos una letra minúscula." };
    if (!hasNumber) return { isValid: false, message: "El login debe contener al menos un número." };
    if (!hasSpecialChar) return { isValid: false, message: "El login debe contener al menos un carácter especial." };

    return { isValid: true, message: "Registro exitoso." };
}


function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validation = validateLogin(password);

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = validation.message;
    if (validation.isValid) {
        messageDiv.style.color = 'green';
        // Simular redirección a una nueva página
        window.location.href = 'bienvenido.html';  // Redirigir a bienvenido si paso.
    } else {
        messageDiv.style.color = 'red';
    }
}
module.exports = { validateLogin }; //exportamos la funcion validateLogin hacia el testeo 