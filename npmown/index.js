function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function average(arr) {
  return arr.length ? sum(arr) / arr.length : 0;
}

function unique(arr) {
  return [...new Set(arr)];
}

function groupBy(arr, callback) {
  return arr.reduce((acc, item) => {
    const key = callback(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

function countBy(arr, callback) {
  return arr.reduce((acc, item) => {
    const key = callback(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

function compact(arr) {
  return arr.filter(Boolean);
}

function intersect(arr1, arr2) {
  return arr1.filter(val => arr2.includes(val));
}

function difference(arr1, arr2) {
  return arr1.filter(val => !arr2.includes(val));
}

module.exports = {
  sum,
  average,
  unique,
  groupBy,
  countBy,
  chunk,
  flatten,
  compact,
  intersect,
  difference,
};
