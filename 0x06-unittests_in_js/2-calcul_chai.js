module.exports = function calculateNumber(type, a, b) {
  let num_1 = Number(a);
  let num_2 = Number(b);

  if (Number.isNaN(num_1) || Number.isNaN(num_2))
    throw TypeError('arguments must be numbers');

  num_1 = Math.round(num_1);
  num_2 = Math.round(num_2);

  switch(type) {
    case 'SUM':
      return num_1 + num_2;
    case 'SUBTRACT':
      return num_1 - num_2;
    case 'DIVIDE':
      if (num_2 === 0)
        return 'ERROR';
      return num_1 / num_2;
    default:
      throw Error('Invalid operator type');
  }
};
