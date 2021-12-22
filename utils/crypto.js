const crypto = require('crypto')

// Encrypt plain to cipher text
function encrypt(plain) {
  try {
    let mykey = crypto.createCipher(
      'aes-128-cbc',
      process.env.CRYPTO_PRIVATE_PASSWORD
    )
    let mystr = mykey.update(plain.toString(), 'utf8', 'hex')
    mystr += mykey.final('hex')

    return mystr
  } catch (error) {
    console.log('Encrypt:', error.message)
  }
}

// Decrypt cipher to plain text
function decrypt(cypher) {
  try {
    let mykey = crypto.createDecipher(
      'aes-128-cbc',
      process.env.CRYPTO_PRIVATE_PASSWORD
    )
    let mystr = mykey.update(cypher.toString(), 'hex', 'utf8')
    mystr += mykey.final('utf8')

    return mystr
  } catch (error) {
    console.log('Decrypt:', error.message)
  }
}

module.exports = { encrypt, decrypt }
