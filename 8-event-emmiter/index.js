const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("response", (name, age) => {
  console.log(`user data: name: ${name} | age: ${age}`);
});
myEmitter.on("response", () => {
  console.log(`data received.`);
});

myEmitter.emit("response", "Topu Roy", 20);
