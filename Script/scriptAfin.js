function cifrar() {
    let texto = document.getElementById('mensaje').value.toUpperCase().replace(/[^A-ZÑ]/g, '');
    const decimacion = parseInt(document.getElementById('decimacion').value);
    const desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    const modulo = parseInt(document.getElementById('modulo').value);
  
    let alfabeto;
    let calFinal=[];
    if (modulo === 27) {
      alfabeto = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z".split(' ');
      for(let i = 0; i<26;i++){
      calFinal.push(((i*decimacion)+desplazamiento)%27);
      }

    } else if (modulo === 26) {
      alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(' ');
      for(let i = 0; i<25;i++){
        calFinal.push(((i*decimacion)+desplazamiento)%26);
        }
    } else {
      alert('Por favor, introduce un valor de módulo válido (26 para alfabeto inglés o 27 para alfabeto con Ñ).');
      return;
    }
  
    if (texto.length === 0) {
      alert('Por favor, introduce un texto válido.');
      return;
    }
  
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      let letra = texto.charAt(i);
      let letraMod = calFinal[alfabeto.indexOf(letra)];
      let letraCifrada = alfabeto[letraMod];
      resultado += letraCifrada;
    }
  
    document.getElementById('outputText').value = resultado;
  }