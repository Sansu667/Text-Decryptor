const userText = document.getElementById('user_text');
const encryptButton = document.getElementById('encrypt_button');
const decryptButton = document.getElementById('decrypt_button');
const outputText = document.querySelector(".main__output_text .output_text");
const copyButton = document.querySelector(".main__output_text .button_output");


function encriptador() {
  let text = userText.value;
  const encryptedText = text
    .replace(/e/g, "enter") 
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return showText(encryptedText);
}

function desencriptador() {
    let text = userText.value;
    const decryptedText = text
      .replace(/ai/g, "a") 
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
    return showText(decryptedText);
  }

function showText(text) {
    outputText.textContent = text;
    copyButton.disabled = false;
    document.querySelector('.main__output_text').style.display = 'block';
    document.querySelector('.main__output_text p:not(.output_text)').style.display = 'none';
}

function copyText() {
    const text = outputText.textContent;
    navigator.clipboard.writeText(text);
}

encryptButton.onclick = encriptador;
decryptButton.onclick = desencriptador;
copyButton.onclick = copyText;

userText.onfocus = function() {
    if (this.value === "Ingrese el texto aquí") {
        this.value = "";
    }
};

userText.onblur = function() {
    if (this.value === "") {
        this.value = "Ingrese el texto aquí";
    }
}


