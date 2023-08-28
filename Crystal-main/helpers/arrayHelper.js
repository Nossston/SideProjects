const where = (array, callback) => {
  let length = 0;

  if (array != null) {
    length = array.length;
  }

  let items = [];
  for (let i = 0; i < length; i++) {
    const val = array[i];
    if (callback(val) === true) {
      items.push(val);
    }
  }
  return items;
};

let indexOf = (arr, callback) => {
  let length = 0;

  if (arr != null) {
    length = arr.length;
  }
  if (length !== 0) {
    for (let i = 0; i < length; i++) {
      const val = arr[i];
      if (callback(val) === true) {
        return i;
      }
    }
  }
  return -1;
};

const sortAsc = (arr) => {
  return arr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};

const firstOrDefault = (arr, callback) => {
  const index = indexOf(arr, callback);
  if (index > -1) {
    return arr[index];
  }

  return null;
};

module.exports = {
  where,
  sortAsc,
  indexOf,
  firstOrDefault,
};
