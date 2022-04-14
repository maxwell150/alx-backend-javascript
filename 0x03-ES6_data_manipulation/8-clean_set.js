/* eslint-disable */
export default function cleanSet(set, startString) {
  const list = [];

  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }

  return list.join('-');
};
