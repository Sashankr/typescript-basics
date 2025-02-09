function add(
  input1: number | string,
  input2: number | string,
  resultOutput: "as-text" | "as-number"
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultOutput === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
add(1, 2, "as-number");
add("1", "2", "as-number");
// add("1", "2", "as-numb");// error: as-numb cannot be assigned to type as-text|as-number
