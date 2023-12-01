function encryptpolybios() {
               var inputText = document.getElementById('inputText').value.toUpperCase();
               var outputText = '';

               var polybiosMapping = {
                   'A': 'AA', 'B': 'AB', 'C': 'AC', 'D': 'AD', 'E': 'AE',
                   'F': 'BA', 'G': 'BB', 'H': 'BC', 'I': 'BD', 'J': 'BD',
                   'K': 'BE', 'L': 'CA', 'M': 'CB', 'N': 'CC', 'O': 'CD',
                   'P': 'CE', 'Q': 'DA', 'R': 'DB', 'S': 'DC', 'T': 'DD',
                   'U': 'DE', 'V': 'EA', 'W': 'EB', 'X': 'EC', 'Y': 'ED',
                   'Z': 'EE'
                   
                 
               };

               for (var i = 0; i < inputText.length; i++) {
                   var char = inputText.charAt(i);
                   var mappedValue = polybiosMapping[char] || ' ';

                   outputText += mappedValue + '';
               }

               document.getElementById('outputText').value = outputText.trim();
           }
function clearFields() {
            document.getElementById('inputText').value = '';
            document.getElementById('outputText').value = '';
        }


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