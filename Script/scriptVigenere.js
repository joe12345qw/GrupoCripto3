function encrypt() {
  let message = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, '');
  let keyword = document.getElementById("keyword").value.toUpperCase().replace(/[^A-Z]/g, '');
  let encryptedText = vigenereEncrypt(message, keyword);
  document.getElementById("result").value = encryptedText;
}

function decrypt() {
  let message = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, '');
  let keyword = document.getElementById("keyword").value.toUpperCase().replace(/[^A-Z]/g, '');
  let decryptedText = vigenereDecrypt(message, keyword);
  document.getElementById("result").value = decryptedText;
}

function vigenereEncrypt(message, keyword) {
  let encryptedText = '';
  let keywordIndex = 0;
  for (let i = 0; i < message.length; i++) {
    let charCode = ((message.charCodeAt(i) - 65) + (keyword.charCodeAt(keywordIndex) - 65)) % 26 + 65;
    encryptedText += String.fromCharCode(charCode);
    keywordIndex = (keywordIndex + 1) % keyword.length;
  }
  return encryptedText;
}

function vigenereDecrypt(message, keyword) {
  let decryptedText = '';
  let keywordIndex = 0;
  for (let i = 0; i < message.length; i++) {
    let charCode = ((message.charCodeAt(i) - 65) - (keyword.charCodeAt(keywordIndex) - 65) + 26) % 26 + 65;
    decryptedText += String.fromCharCode(charCode);
    keywordIndex = (keywordIndex + 1) % keyword.length;
  }
  return decryptedText;
}