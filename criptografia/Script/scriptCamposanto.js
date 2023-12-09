function cifrarCamposanto() {
    const inputText = document.getElementById('inputText').value.toUpperCase().replace(/[^A-Z]/g, '');
    const clave = document.getElementById('clave').value.toUpperCase().replace(/[^A-Z]/g, '');
    let outputText = '';

    // Verificar que se ingresó un texto y una clave válida
    if (inputText.length === 0 || clave.length === 0) {
        alert('Por favor, ingresa un texto y una clave válida.');
        return;
    }

    // Asegurarse de que la clave sea del mismo tamaño o más corta que el texto
    while (clave.length < inputText.length) {
        clave += clave;  // Puedes ajustar esto según las reglas del cifrado
    }

    // Implementa la lógica específica del cifrado Camposanto
    for (let i = 0; i < inputText.length; i++) {
        const letraTexto = inputText.charAt(i);
        const letraClave = clave.charAt(i);

        // Aquí implementa la lógica del cifrado Camposanto
        // Puedes usar funciones adicionales si es necesario

        // A modo de ejemplo, simplemente sumamos los códigos ASCII
        const codigoTexto = letraTexto.charCodeAt(0) - 65;  // Suponiendo alfabeto A-Z
        const codigoClave = letraClave.charCodeAt(0) - 65;
        const codigoCifrado = (codigoTexto + codigoClave) % 26 + 65;

        outputText += String.fromCharCode(codigoCifrado);
    }

    // Actualiza el resultado en el área de texto de salida
    document.getElementById('outputText').value = outputText;
}
