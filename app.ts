// Types infered by ts automatically
const person = {
  name: "Sashank",
  age: 28,
};

// Explicit type definitions of object properties, without inference
const person2: {
  name: string;
  age: number;
} = {
  name: "Sashank",
  age: 28,
};
