// Colors the input string in red
function __(inputString) {
  return `\x1b[31m${inputString}\x1b[0m`
}

// Colors the input string in green
const __unknownT = function(inputString) {
  return `\x1b[32m${inputString}\x1b[0m`
}

module.exports = {
  __,
  __unknownT
};
