
function encrypt() {
    let message = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, '');
    let keyword = document.getElementById("keyword").value.toUpperCase().replace(/[^A-Z]/g, '');
    let encryptedText = beaufortEncrypt(message, keyword);
    document.getElementById("result").value = encryptedText;
  }
  
  function decrypt() {
    let message = document.getElementById("message").value.toUpperCase().replace(/[^A-Z]/g, '');
    let keyword = document.getElementById("keyword").value.toUpperCase().replace(/[^A-Z]/g, '');
    let modulo = parseInt(document.getElementById("modulo").value);
    let decryptedText = beaufortDecrypt(message, keyword);
    document.getElementById("result").value = decryptedText;
  }
  
  function beaufortEncrypt(message, keyword) {
    let encryptedText = '';
    let keywordIndex = 0;
    for (let i = 0; i < message.length; i++) {
      let charCode = (message.charCodeAt(i) - keyword.charCodeAt(keywordIndex) + 26) % 26 + 65;
      encryptedText += String.fromCharCode(charCode);
      keywordIndex = (keywordIndex + 1) % keyword.length;
    }
    return encryptedText;
  }
  
  function beaufortDecrypt(message, keyword) {
    let decryptedText = '';
    let keywordIndex = 0;
    for (let i = 0; i < message.length; i++) {
      let charCode = (keyword.charCodeAt(keywordIndex) - message.charCodeAt(i) + 26) % 26 + 65;
      decryptedText += String.fromCharCode(charCode);
      keywordIndex = (keywordIndex + 1) % keyword.length;
    }
    return decryptedText;
  }