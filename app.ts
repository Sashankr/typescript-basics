type Combined = number | string;
type OutputType = "as-text" | "as-number";

function add1(input1: Combined, input2: Combined, resultOutput: OutputType) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultOutput === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
add1(1, 2, "as-number");
add1("1", "2", "as-number");
// add("1", "2", "as-numb");// error: as-numb cannot be assigned to type as-text|as-number

type User = {
  name: string;
  role: string;
};

function greetUser(user: User) {
  console.log(`Hello ${user.name} your role is ${user.role}`);
}

greetUser({ name: "Sashank", role: "Developer" });
