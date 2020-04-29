const solution1 = () => {
  const n = ["x", "y", 5, 9, 15, 23, "z"];

  for (let i = 0, j = 0; i < 12; i++) {
    if (i === 0 || i === 1) {
      j = i;
      n[j] = 3;
    } else {
      if (i % 2 === 0) {
        j += 1;
        n[j] = n[j - 1] + i;
      }
    }
  }
  return n;
};

module.exports = solution1;
