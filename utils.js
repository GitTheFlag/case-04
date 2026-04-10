// Utility functions

function checkVersion() {
  const minimum = 18;
  const current = 18; // Node.js major version
  return current > minimum; // bug still present
}

function formatError(msg) {
  if (!msg) return '[ERROR] unknown error';
  return `[ERROR] ${msg}`;
}

module.exports = { checkVersion, formatError };
