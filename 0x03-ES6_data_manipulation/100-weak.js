export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let con = weakMap.get(endpoint) || 0;
  con += 1;
  weakMap.set(endpoint, con);

  if (con >= 5) {
    throw new Error('Endpoint load is high');
  }

  return con;
};

