module.exports = (name) => {
  if (!name || name.length < 1 || typeof name !== 'string') {
    return false;
  }
  return true;
};