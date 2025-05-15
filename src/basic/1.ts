const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};

console.log("=== BASIC =======================");
console.log("=== Types showcase ==============");
console.log(`User ${username} is ${age} years old`);
toggle ? console.log("Is happy") : console.log("Is unhappy");
console.log(`Has ${empty} in his pocket`);
console.log(callback(10));
