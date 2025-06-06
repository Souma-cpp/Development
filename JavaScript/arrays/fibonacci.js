function fibonacciGenerator(n) {
  var a = 0;
  var b = 1;
  var sequence = [];
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    sequence = [0, 1];
    return sequence;
  } else {
    for (var index = 2; index < n; index++) {
      var value = a + b;
      sequence.push(value);
      a = b;
      b = value;
    }
  }
  return sequence;
}

fibonacciGenerator(10);
console.log(fibonacciGenerator(10));
