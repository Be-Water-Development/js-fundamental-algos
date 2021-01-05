// How would you remove duplicate members from an array?

// love it though implicit returns are possible again
const removeDuplicate = (arr) => {
  return arr.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
};

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1])); // return [1, 3, 5, 6, 7, 8]
