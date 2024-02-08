const EventEmitter = require("events");
// Wahts returned is a class.

const customEmitter = new EventEmitter(); // EE() is a cunstroctor function, cE is now
//an object.

/* on - listen to an event 
   emit - emit an event

   customEmitter.on(eventName, () => {
    console.log(`The response`)
});
   */
customEmitter.on("response", () => {
  console.log(`The response`);
});

customEmitter.on("response", (name, id) => {
  console.log(`The response and data ${name} and the id: ${id}`);
});

customEmitter.emit("response", "John", 78);
