export const genID = ((id = 0) => {
  return () => id++;
})();
