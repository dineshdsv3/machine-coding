function compute() {
    const condition = true;
    if (condition) {
      let a = false;
      let b = false;
    }
    return {
      a: a || null,
      b: b || null
    }
  }
  var r = compute();
  // What do you think would be the output?
  console.log(r);
  //   Error

  // Variables a and b are blocked scope. They do not exist outside the if condition. If we try to use them then it would be an error as those variables are undeclared in that scope.