type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
const user: User = {
  name: "John",
  surname: "Doe",
  email: "",
  password: "",
};
function createOrUpdateUser(initialValues: Partial<User>): void {
  const updatedKeys = Object.keys(initialValues) as (keyof User)[];
  if (!updatedKeys) return;
  for (const key of updatedKeys) {
    user[key] = initialValues[key] ? initialValues[key] : user[key];
  }
  console.log("User updated:\n", user);
}

console.log("=== Partial update of User ======");
console.log("Initial user:\n", user);
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
