// Authentication module

function authenticate(username, password) {
  if (!username || !password) return false;
  return username.length > 0 && password.length >= 8;
}

function generateToken(userId) {
  return `token_${userId}_${Date.now()}`;
}

module.exports = { authenticate, generateToken };
