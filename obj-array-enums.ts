// Types infered by ts automatically
const person = {
  name: "Sashank",
  age: 28,
  hobbies: ["cricket", "football"],
  role: [2, "admin"],
};

// Explicit type definitions of object properties, without inference
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Sashank",
  age: 28,
  hobbies: ["cricket", "football"],
  role: [2, "admin"],
};

// arrays

// let friendsList: string[];

// friendsList = ["Joe", "Rogan"];

// tuples

// person2.role[0]='1'; type string is not assignable to type number.

// enums

enum Role {
  ADMIN,
  READ_ONLY_AUTHOR,
}

const person3 = {
  name: "Sashank",
  age: 28,
  hobbies: ["cricket", "football"],
  role: Role.ADMIN,
};

if (person3.role === Role.ADMIN) {
  console.log("hello admin");
}
