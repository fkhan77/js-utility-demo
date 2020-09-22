// Load the full build. Loads every lodash method. 24kb.
const _ = require("lodash");

// Load the core build. Loads 63 most commonly used methods. 4kb.
// const _ = require("lodash/core");

// Load method categories.
// const array = require("lodash/array");
// const object = require("lodash/object");

// Cherry-pick methods for smaller bundle size.
// const partition = require("lodash/partition");

// Partitioning
_.partition([1, 2, 3, 4, 5, 6], (element) => element % 3 === 0);
// [ [ 3, 6 ], [ 1, 2, 4, 5 ] ]

// Chunking
_.chunk(["a", "b", "c", "d", "e", "f", "g"], 3);
// [ [ "a", "b", "c" ], [ "d", "e", "f" ], ["g"] ]

// Defaults
_.defaults({ a: 42 }, { b: "foo" }, { a: "bar", c: "banana" });
// { a:42, b: "foo", c: "banana" }

// Currying

function addThree(a, b, c) {
  return a + b + c;
}

addThree(1, 2, 3);
// 6

addThree(1)(2, 3);
// not a function

addThree(1)(2)(3);
// not a function

// Native currying example 1
function curriedAddThree(x) {
  let x = 3;
  return function (y) {
    if (y) {
      return curriedAddThree(x + y);
    } else {
      return x;
    }
  };
}

curriedAddThree(1, 2, 3)();
// 1

curriedAddThree(1)(2, 3)();
// 3

curriedAddThree(1)(2)(3)();
// 6

// Native currying example 2
function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

const improvedCurriedAddThree = curry(addThree);

improvedCurriedAddThree(1, 2, 3);
// function

improvedCurriedAddThree(1)(2, 3);
// function

improvedCurriedAddThree(1)(2)(3);
// 6

// Lodash currying example
const curriedLodashAddThree = _.curry(addThree);

curriedLodashAddThree(1, 2, 3);
// 6

curriedLodashAddThree(1)(2, 3);
// 6

curriedLodashAddThree(1)(2)(3);
// 6
