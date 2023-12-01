function cifradoColumna(mensaje, clave) {
    mensaje = mensaje.replace(/\s/g, '').toUpperCase();

    const columnas = clave.length;
    const filas = Math.ceil(mensaje.length / columnas);

    const matriz = new Array(filas);
    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
    }

    let k = 0;
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (k < mensaje.length) {
                matriz[i][j] = mensaje[k++];
            } else {
                matriz[i][j] = 'X'; 
            }
        }
    }

    let mensajeCifrado = '';
    for (let j = 0; j < columnas; j++) {
        const indiceColumna = clave.indexOf(j + 1); 
        for (let i = 0; i < filas; i++) {
            mensajeCifrado += matriz[i][indiceColumna];
        }
    }

    return mensajeCifrado;
}

function cifrar() {
    const mensajeOriginal = document.getElementById('mensajeOriginal').value;
    const clave = document.getElementById('clave').value;
    const mensajeCifrado = cifradoColumna(mensajeOriginal, clave);

    document.getElementById('resultado').innerText = mensajeCifrado;
}
