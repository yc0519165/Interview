export const JSContent = () => {
  return (
    <>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>1. What are the different data types present in javascript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>1. Primitive types</strong>:
          </li>
          <li>
            • <u>String</u> - It represents a series of characters and is
            written with quotes. A string can be represented using a single or a
            double quote.
          </li>
          <li>
            • <u>Number</u> - It represents a number and can be written with or
            without decimals.
          </li>
          <li>
            • <u>BigInt</u> - This data type is used to store numbers which are
            above the limitation of the Number data type. It can store large
            integers and is represented by adding “n” to an integer literal.
          </li>
          <li>
            • <u>Boolean</u> - It represents a logical entity and can have only
            two values : true or false. Booleans are generally used for
            conditional testing.
          </li>
          <li>
            • <u>Undefined</u> - When a variable is declared but not assigned,
            it has the value of undefined and it’s type is also undefined.
          </li>
          <li>
            • <u>Null</u> - It represents a non-existent or a invalid value.
          </li>
          <li>
            • <u>Symbol</u> - It is a new data type introduced in the ES6
            version of javascript. It is used to store an anonymous and unique
            value.
          </li>
          <li>
            • <strong>2. Non-primitive types</strong>:
          </li>
          <li>
            • Primitive data types can store only a single value. To store
            multiple and complex values, non-primitive data types are used.
          </li>
          <li>• Object - Used to store collection of data.</li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>2. What is JavaScript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - JavaScript (often abbreviated as JS) is a dynamic programming
            language that is commonly used to create interactive features on
            websites.
          </li>
          <li>
            -It is one of the core technologies of the World Wide Web, alongside
            HTML and CSS, and enables the development of complex web
            applications by adding interactivity, animations, and control over
            webpage behavior.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>3. Explain Hoisting in javascript.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Hoisting is the default behaviour of javascript where all the
            variable and function declarations are moved on top.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>3. Why do we use the word “debugger” in javascript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The debugger for the browser must be activated in order to debug
            the code.
          </li>
          <li>
            - Built-in debuggers may be switched on and off, requiring the user
            to report faults.
          </li>
          <li>
            - The remaining section of the code should stop execution before
            moving on to the next line while debugging.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>4. Difference between “ == “ and “ === “ operators.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Both are comparison operators. The difference between both the
            operators is that “==” is used to compare values whereas, “ === “ is
            used to compare both values and types.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>5. Difference between var and let keyword in javascript.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - From the very beginning, the var keyword was used in JavaScript
            programming whereas the keyword let & const was just added in 2015.
          </li>
          <li>
            - The keyword Var has a function scope. Var variable is ES5 Version.
            Var variable is decleared and upadat.
          </li>
          <li>
            - The keyword Let has a block scope. Let variable is ES6 Version.
            Let variable is not decleared but updated.
          </li>
          <li>
            - The keyword Const has a block scope. Const variable is ES6
            Version. Const variable is not decleared and not updated
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          6. Is javascript a statically typed or a dynamically typed language?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- JavaScript is a dynamically typed language.</li>
          <li>
            - The type of a variable is checked during run-time in contrast to a
            statically typed language, where the type of a variable is checked
            during compile-time.
          </li>
          <li>
            - Since javascript is a loosely(dynamically) typed language,
            variables in JS are not associated with any type.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>7. What is NaN property in JavaScript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - NaN property represents the “Not-a-Number” value. It indicates a
            value that is not a legal number.
          </li>
          <li>- typeof of NaN will return a Number.</li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>8. Explain Higher Order Functions in javascript.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Functions that operate on other functions, either by taking them
            as arguments or by returning them, are called higher-order
            functions.
          </li>
          <li>
            - Higher-order functions are a result of functions being first-class
            citizens in javascript.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>9. Explain “this” keyword?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The “this” keyword refers to the object that the function is a
            property of.
          </li>
          <li>
            - The value of the “this” keyword will always depend on the object
            that is invoking the function.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>10. What do you mean by Self Invoking Functions?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Without being requested, a self-invoking expression is
            automatically invoked (initiated).
          </li>
          <li>
            - If a function expression is followed by (), it will execute
            automatically. A function declaration cannot be invoked by itself.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>11. Explain call(), apply() and, bind() methods.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            <strong>1. call():</strong>
          </li>
          <li>• It’s a predefined method in javascript.</li>
          <li>
            • This method invokes a method (function) by specifying the owner
            object.
          </li>
          <li>
            • call() method allows an object to use the method (function) of
            another object.
          </li>
          <li>
            <strong>2. apply():</strong>
          </li>
          <li>
            • The apply method is similar to the call() method. The only
            difference is that,
          </li>
          <li>
            • call() method takes arguments separately whereas, apply() method
            takes arguments as an array.
          </li>
          <li>
            <strong>3. bind():</strong>
          </li>
          <li>
            • This method returns a new function, where the value of “this”
            keyword will be bound to the owner object, which is provided as a
            parameter.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>12. What is currying in JavaScript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Currying is an advanced technique to transform a function of
            arguments n, to n functions of one or fewer arguments.
          </li>
          <li>
            - By using the currying technique, we do not change the
            functionality of a function, we just change the way it is invoked.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>13. What are object prototypes?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- Date objects inherit properties from the Date prototype.</li>
          <li>- Math objects inherit properties from the Math prototype.</li>
          <li>- Array objects inherit properties from the Array prototype.</li>
          <li>
            - On top of the chain is Object.prototype. Every prototype inherits
            properties and methods from the Object.prototype.
          </li>
          <li>
            - A prototype is a blueprint of an object. The prototype allows us
            to use properties and methods on an object even if the properties
            and methods do not exist on the current object.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>14. What are callbacks?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - A callback is a function that will be executed after another
            function gets executed.
          </li>
          <li>
            - In javascript, functions are treated as first-class citizens, they
            can be used as an argument of another function, can be returned by
            another function, and can be used as a property of an object.
          </li>
          <li>
            - Functions that are used as an argument to another function are
            called callback functions.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>15. What are the types of errors in javascript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - <strong>1. Syntax error:</strong> Syntax errors are mistakes or
            spelling problems in the code that cause the program to not execute
            at all or to stop running halfway through. Error messages are
            usually supplied as well.
          </li>
          <li>
            - <strong>2. Logical error:</strong> Reasoning mistakes occur when
            the syntax is proper but the logic or program is incorrect. The
            application executes without problems in this case. However, the
            output findings are inaccurate.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>16. What is memoization?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Memoization is a form of caching where the return value of a
            function is cached based on its parameters.
          </li>
          <li>
            - If the parameter of that function is not changed, the cached
            version of the function is returned.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>17. What is the use of a constructor function in javascript?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Constructor functions are used to create objects in javascript.
          </li>
          <li>
            - If we want to create multiple objects having similar properties
            and methods, constructor functions are used.
          </li>
          <li>
            - The name of a constructor function should always be written in
            Pascal Notation: every word should start with a capital letter.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>18. What is DOM?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- DOM stands for Document Object Model.</li>
          <li>- DOM is a programming interface for HTML and XML documents.</li>
          <li>
            - When the browser tries to render an HTML document, it creates an
            object based on the HTML document called DOM.
          </li>
          <li>
            - Using this DOM, we can manipulate or change various elements
            inside the HTML document.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>19. What do you mean by BOM?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- Browser Object Model is known as BOM.</li>
          <li>
            - It allows users to interact with the browser. A browsers initial
            object is a window.
          </li>
          <li>
            - As a result, you may call all of the windows functions directly or
            by referencing the window.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>20. What are arrow functions?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Arrow functions were introduced in the ES6 version of javascript.
          </li>
          <li>
            - They provide us with a new and shorter syntax for declaring
            functions. Arrow functions can only be used as a function
            expression.
          </li>
        </ul>
      </div>
    </>
  );
};
