const getNamesAndValues = (e) => {
  const keysAndValues = [];
  for (const [key, value] of Object.entries(e)) {
    keysAndValues.push({ name: getName(key), value: value });
  }
  return keysAndValues;
};

const getName = (enumKey) => {
  return enumKey.replace(/([A-Z])/g, " $1").trim();
};

module.exports = { getNamesAndValues, getName };
