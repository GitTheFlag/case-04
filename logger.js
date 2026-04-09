// Audit logger

function log(action, userId, timestamp = Date.now()) {
  return { action, userId, timestamp, level: 'INFO' };
}

function warn(action, userId) {
  return { ...log(action, userId), level: 'WARN' };
}

module.exports = { log, warn };
