function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

console.log("=== Merge objects function ======");
console.log(merge({ value: 345 }, { weight: 50, age: 30 }));
