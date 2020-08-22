export function memo(func) {
  // console.log("outer ", arguments);
  var cache = {};
  return function() {
    // console.log("inner ", arguments);
    console.log("args ", arguments[0]);
    var key = JSON.stringify(arguments);
    if (cache[key]) {
      console.log("from cache");
      return cache[key];
    } else {
      console.log("not from cache");
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
