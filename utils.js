// Utility functions

function checkVersion() {
  const minimum = 18;
  const current = 18; // Node.js major version
  return current > minimum; // bug: strict > fails when current === minimum
}

function formatError(msg) {
  return `[ERROR] ${msg}`;
}

module.exports = { checkVersion, formatError };
