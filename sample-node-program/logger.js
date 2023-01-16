const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  ERROR: 2,
};

function Logger(logLevel) {
  function log(logLevel, content) {
    if(logLevel >= this.logLevel) {
      console.log(`${new Date().toISOString()}: ${content}`)
    }
  }

  this.logLevel = logLevel
  this.log = log;

  return this;
}

module.exports = {
  LOG_LEVELS,
  Logger
};
