/**
 * Returns a string where all the zeros are removed
 */
function stripZeros(number) {
  return number.replace(/0/g, "");
}

module.exports = {
  stripZeros,
};
