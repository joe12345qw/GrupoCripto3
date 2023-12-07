function cifrar() {
    let texto = document.getElementById('inputText').value.toUpperCase().replace(/[^A-ZÑ]/g, '');
    let clave = document.getElementById('keyword').value.toUpperCase().replace(/[^A-ZÑ]/g, '');
    const modulo = parseInt(document.getElementById('modulo').value);
  
    let alfabeto;
    if (modulo === 27) {
      alfabeto = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z".split(' ');
    } else if (modulo === 26) {
      alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(' ');
    } else {
      alert('Por favor, introduce un valor de módulo válido (26 para alfabeto inglés o 27 para alfabeto con Ñ).');
      return;
    }
  
    if (texto.length === 0) {
      alert('Por favor, introduce un texto válido.');
      return;
    }
  
    // Ajuste de la longitud de la clave al texto si es necesario
    if (clave.length < texto.length) {
      const diff = texto.length - clave.length;
      clave += texto.slice(0, diff);
    }
  
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      const letra = texto.charAt(i);
      const claveLetra = clave.charAt(i);
      const letraCifrada = calcularCifrado(letra, claveLetra, alfabeto, modulo);
      resultado += letraCifrada;
    }
  
    document.getElementById('outputText').value = resultado;
  }
  
  function calcularCifrado(letra, claveLetra, alfabeto, modulo, esDescifrado) {
    const letraIndex = alfabeto.indexOf(letra);
    const claveIndex = alfabeto.indexOf(claveLetra);
  
    if (letraIndex === -1 || claveIndex === -1) {
      return letra; // Si la letra no se encuentra en el alfabeto, se retorna sin cifrar/descifrar
    }
  

  return alfabeto[indiceCifrado];
  }
  
  