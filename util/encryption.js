const bcrypt = require('bcrypt');
const SALTROUND = 10;

exports.encrypt = async (password) =>{
  let encrypted = await bcrypt.hash(password, SALTROUND)
  return encrypted
}

exports. decrypt = async (password, hash) =>{
  let valid = await bcrypt.compare(password, hash)
  return valid
}