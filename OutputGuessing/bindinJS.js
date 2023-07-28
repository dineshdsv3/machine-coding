var foo = 1;
var change = () => {
  this.foo = 2;
  console.log(this.foo);
};
var obj = {
  foo: 3
};
var bounded = change.bind(obj);

// What would be the output of the following?
console.log(foo); //1
console.log(change()); //2
console.log(foo); //2
console.log(obj.foo); //3
console.log(bounded()); //2




// Arrow functions always take up the definition scope, not the calling scope. Therefore, .bind doesn't work with them.

