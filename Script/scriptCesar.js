function cipher() {
  const inputText = document.getElementById('inputText').value;
  const shiftAmount = parseInt(document.getElementById('shiftAmount').value);
  let outputText = '';

  for (let i = 0; i < inputText.length; i++) {
    let charCode = inputText.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) { // Uppercase letters (A-Z)
      outputText += String.fromCharCode(((charCode - 65 + shiftAmount) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters (a-z)
      outputText += String.fromCharCode(((charCode - 97 + shiftAmount) % 26) + 97);
    } else {
      outputText += inputText.charAt(i); // Keep non-letter characters as they are
    }
  }

  document.getElementById('outputText').value = outputText;
}
