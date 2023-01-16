const { __, __unknownT } = require('./utils');
const { Logger, LOG_LEVELS } = require('./logger');

const errorLogger = new Logger(LOG_LEVELS.ERROR);
errorLogger.log(LOG_LEVELS.DEBUG, __('some debugging text'));
errorLogger.log(LOG_LEVELS.INFO, __('some valuable information'));
errorLogger.log(LOG_LEVELS.ERROR, __('an error occurred'));

const infoLogger = new Logger(LOG_LEVELS.INFO);
infoLogger.log(LOG_LEVELS.DEBUG, __('another debugging text'));
infoLogger.log(LOG_LEVELS.INFO, __('another valuable piece of information'));
infoLogger.log(LOG_LEVELS.ERROR, __('another error occurred'));

const debugLogger = new Logger(LOG_LEVELS.DEBUG);
debugLogger.log(LOG_LEVELS.DEBUG, __('the final debugging text'));
debugLogger.log(LOG_LEVELS.INFO, __('the final valuable piece of information'));
debugLogger.log(LOG_LEVELS.ERROR, __('the final error occurred'));
