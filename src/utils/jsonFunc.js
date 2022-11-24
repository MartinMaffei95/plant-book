export const stringify = (obj) => {
  if (!obj || typeof object !== 'object') return;
  const newString = JSON.stringify(obj);
  return newString;
};

export const parse = (string) => {
  if (!string || typeof string === 'object') return;
  const newObj = JSON.parse(string);
  return newObj;
};
