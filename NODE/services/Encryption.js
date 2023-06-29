//Checking the crypto module
const crypto = require('crypto');
const { encryption } = require('../keys/keys')

class Encryption
{
    #algorithm; // setting algorithm for encryption or decryption
    #key = encryption.key; // system default key
    #iv = encryption.iv; // system default iv
    #myKey; // stores randomly genrated key
    #myIv; // stores randomly generated iv

    constructor()
    {
        this.#algorithm = 'aes-256-cbc'; //Using AES encryption

    }

    // use to set key and iv passed by user for decryption
    setKeyIv(key,iv)
    {
        this.#myKey = key;
        this.#myIv = iv;
    }

    // for generating random key and iv
    generateKeyIv()
    {
        this.#myKey = crypto.randomBytes(32).toString('hex');
        this.#myIv = crypto.randomBytes(16).toString('hex');

        return({ key : this.#myKey, iv : this.#myIv })
    }

    // encrypt string using system default key and iv
    hideString(text)
    {
        if(text == "" || text == undefined || text == null) return "";

        try {
            let cipher = crypto.createCipheriv(this.#algorithm, this.#key, this.#iv);
            let encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            return encrypted.toString('hex');
            
         } catch (error) {
      
            return '';
         }
    }

    // decrypt string using system default key and iv
    showString(text)
    {
        if(text == "" || text == undefined || text == null) return "";

        try {
            let encryptedText = Buffer.from(text, 'hex');
      
            let decipher = crypto.createDecipheriv(this.#algorithm, this.#key, this.#iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
            
         } catch (error) {
            
            return '';
         }

    }

    // encrypt string using randomly generated key and iv
    encrypt(text)
    {
        if(text == "" || text == undefined || text == null) return "";

        if(!this.#myKey || !this.#myIv)
        return;

        var lockey = Buffer.from(this.#myKey, 'hex');
        var lociv = Buffer.from(this.#myIv, 'hex');

        try {
            let cipher = crypto.createCipheriv(this.#algorithm, lockey, lociv);
            let encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            return encrypted.toString('hex');
            
         } catch (error) {
      
            return undefined;
         }

    }

    // decrypt string using randomly generated key and iv
    decrypt(text)
    {
        if(text == "" || text == undefined || text == null) return "";
        
        if(!this.#myKey || !this.#myIv)
        return;

        try {
            let iv = Buffer.from(this.#myIv, 'hex');
            let key = Buffer.from(this.#myKey, 'hex');
            let encryptedText = Buffer.from(text, 'hex');
      
            let decipher = crypto.createDecipheriv(this.#algorithm, key, iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
            
         } catch (error) {
            
            return undefined;
         }
    }

}


module.exports = Encryption;