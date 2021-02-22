module.exports = (stringLength = 6) => {
  let returnVal = '';
  let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < stringLength; i++) {
    const idx = Math.floor(Math.random() * alphabets.length);
    returnVal += alphabets[idx];
  }

  return returnVal;
};
