# Data fetch

With React Server Components, we directly do fetch or any operations that we want to do without any need for hooks.

## General overview of how JavaScript execution works

1. Parsing - The JavaScript engine parses the entire script to understand its syntax. This involves breaking down the code into tokens and creating an Abstract Syntax Tree.

2. Execution Context Creation - Before executing any code, the engine creates a global execution context. This context includes the global object, the this keyword(which refers to the global object in the global context and a reference to the outer environment)

3. Hoisting - Variable and function declarations are  hoisted to the top of their respective scopes. This means that they are processed before the execution of the code starts.

4. Execution Phase - The code is executed line by line starting from the top of the script. Each statement is executed in order unless it involves asynchronous operations.

5. Asynchronous Operations - When encountering asynchrous operations, JavaScript doesn't wait for them to complete. Instead it continues executing the rest of the code. Once the asynchronous operation is complete, a callback function is added to the event queue.

6. Event Loop and Callback Queue - JavaScript runtime maintains an event loop that continously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack for execution.

7. Function Execution: When a function is called, a new execution contec=xt is created for that function, which follows the same steps as the global execution context.

8. Scope Chain: During execution, JavaScript resolves variable and function references by traversing the scope chain, which includes the local scope, the outer function scope and the global scope

9. Garbage collection: As the code executes, the JavaScript engine keeps tarck of objects and variables no longer in use. These are marked for garbage collectio to free up memory.