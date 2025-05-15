function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
function customError(): never {
  throw new Error("Error");
}

console.log("=== Typed functions =============");
showMessage("This is a message");
console.log(calc(7, 8));
try {
  customError();
} catch (err: any) {
  console.log(err.message);
}
