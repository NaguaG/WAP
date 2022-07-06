Array.prototype.even = function () {
    return this.filter((a) => a % 2 === 0);
  };
  
  Array.prototype.odd = function () {
    return this.filter((a) => a % 2 !== 0);
  };
  
  console.log([7, 15, 22, 90, 5].even());
  console.log([9, 3, 17, 18, 22, 98].odd());
  console.log([96, 56, 4, 5, 3, 1].odd());
  
  // Question 2

  // 1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
  /* setImmediate() is to schedule the immediate execution of callback after I/O events 
  callbacks and before setTimeout and setInterval . setTimeout() is to schedule execution of 
  a one-time callback after delay milliseconds.
   */
  
  // 2. Explain the difference between process.nextTick and setImmediate?
  /* nextTick() is processed after every phase of the event 
  loop and setImmediate() is only processed on the check handler phase of the event loop.
  */
  
  // 3. Does Node.js has window object?
  /* Answer: In the Node. js module system, each file is treated as a separate module. The Global objects 
  are available in all modules. While in browsers, the global scope is the window object, in nodeJS, the global
   scope of a module is the module itself, so when you define a variable in the global scope of your Node.*/