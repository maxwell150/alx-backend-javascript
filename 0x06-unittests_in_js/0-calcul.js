module.exports = function calculateNumber(a, b) {
  const num_1 = Number(a);
  const num_2 = Number(b);

  if (Number.isNaN(num_1) || Number.isNaN(num_2))
    throw TypeError('arguments must be numbers');
  return Math.round(num_1) + Math.round(num_2);
};
