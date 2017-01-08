const fs = require('fs');
const iconv = require('iconv-lite');
const lodash = require('lodash');

const constants = require('./constants');

/**
 * Convert from the original latin1 to proper utf8
 * @param buffer {Buffer} Take a javascript Buffer object as returned by readfile
 * @returns a utf-8 encoded string
 */
function fixEncoding(buffer) {
  // Convert from an encoded buffer to js string.
  return iconv.decode(buffer, 'latin1');
}

function decodeParameters(line) {
  const values = line.split(/\W+/);
  return {
    X: parseInt(values[0], 10),
  };
}

function loadFile(filepath) {
  const lines = fixEncoding(fs.readFileSync(filepath)).split('\n');
  const parameters = decodeParameters(lines[0]);
  // Load rest of file
}

function saveResult(results, parameters, filename) {
  let output = '';
  // Build output
  fs.writeFileSync(output);
}

module.exports = {
  loadFile,
  saveResult,
};
