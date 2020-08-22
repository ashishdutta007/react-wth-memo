export function memo(func) {
  // console.log("outer ", arguments);
  var cache = {};
  return function() {
    // console.log("inner ", arguments);
    var key = JSON.stringify(arguments);
    // console.log("key ", key);
    if (cache[key]) {
      console.log("from cache ");
      return cache[key];
    } else {
      const val = func.apply(null, arguments);
      cache[key] = val;
      return val;
    }
  };
}

// function sum(a, b) {
//   return a + b;
// }

// const turbo = memo(sum);

// console.log(turbo(1, 2));
// console.log(turbo(1, 2));
// console.log(turbo(1, 3));
// console.log(turbo(1, 2));
