// Aluno: Pedro Wilson Rodrigues de Lima.
// Nº de Matrícula: 2020267.

function caesarEncrypt(message, shift) {
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        if (char.match(/[a-z]/i)) {
            let charCode = message.charCodeAt(i);
            let offset = charCode >= 65 && charCode <= 90 ? 65 : 97;
            let encryptedCharCode = (charCode - offset + shift) % 26 + offset;
            encryptedMessage += String.fromCharCode(encryptedCharCode);
        } else {
            encryptedMessage += char;
        }
    }

    return encryptedMessage;
}

const originalMessage = "Jogo, Futebol, Palmeiras, Campeão";
const shift = 4;

const encryptedMessage = caesarEncrypt(originalMessage, shift);
console.log("Mensagem Original:", originalMessage);
console.log("Mensagem Criptografada:", encryptedMessage);
