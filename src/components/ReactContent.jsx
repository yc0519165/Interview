export const ReactContent = () => {
  return (
    <>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>1. What is React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - React is a front-end and open-source JavaScript library which is
            useful in developing user interfaces specifically for applications
            with a single page.
          </li>
          <li>
            - It is helpful in building complex and reusable user interface(UI)
            components of mobile and web applications as it follows the
            component-based approach.
          </li>
          <li>
            <u>The important features of React are:</u>
          </li>
          <li>• It supports server-side rendering.</li>
          <li>
            • It will make use of the virtual DOM rather than real DOM (Data
            Object Model) as RealDOM manipulations are expensive.
          </li>
          <li>• It follows unidirectional data binding or data flow.</li>
          <li>
            • It uses reusable or composable UI components for developing the
            view.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>2. What are the advantages of using React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            • Use of Virtual DOM to improve efficiency: React uses virtual DOM
            to render the view. As the name suggests, virtual DOM is a virtual
            representation of the real DOM.
          </li>
          <li>
            • Gentle learning curve: React has a gentle learning curve when
            compared to frameworks like Angular.
          </li>
          <li>
            • SEO friendly: React allows developers to develop engaging user
            interfaces that can be easily navigated in various search engines.
          </li>
          <li>
            • Reusable components: React uses component-based architecture for
            developing applications.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>3. What are the limitations of React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            • React is not a full-blown framework as it is only a library.
          </li>
          <li>
            • The components of React are numerous and will take time to fully
            grasp the benefits of all.
          </li>
          <li>
            • It might be difficult for beginner programmers to understand
            React.
          </li>
          <li>
            • Coding might become complex as it will make use of inline
            templating and JSX.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>4. What is useState() in React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The useState() is a built-in React Hook that allows you for having
            state variables in functional components.
          </li>
          <li>
            - It should be used when the DOM has something that is dynamically
            manipulating/controlling.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>5. What are keys in React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            • A key is a special string attribute that needs to be included when
            using lists of elements.
          </li>
          <li>
            • Keys help react identify which elements were added, changed or
            removed.
          </li>
          <li>
            • Without keys, React does not understand the order or uniqueness of
            each element.
          </li>
          <li>
            • With keys, React has an idea of which particular element was
            deleted, edited, and added.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>6. What is JSX?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- JSX stands for JavaScript XML.</li>
          <li>
            - It allows us to write HTML inside JavaScript and place them in the
            DOM without using functions like appendChild( ) or createElement( ).
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          7. What are the differences between functional and class components?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Functional components are nothing but JavaScript functions and
            therefore can be declared using an arrow function or the function
            keyword.
          </li>
          <li>
            - Class components, on the other hand, are declared using the ES6
            class.
          </li>
          <li>
            - Let’s render the following component with props and analyse how
            functional and class components handle props
          </li>
          <li>
            - In functional components, the handling of props is pretty
            straightforward. Any prop provided as an argument to a functional
            component can be directly used inside HTML elements
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          8. What is the virtual DOM? How does react use the virtual DOM to
          render the UI?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - As stated by the react team, virtual DOM is a concept where a
            virtual representation of the real DOM is kept inside the memory and
            is synced with the real DOM by a library such as ReactDOM.
          </li>
          <li>
            - DOM manipulation is an integral part of any web application, but
            DOM manipulation is quite slow when compared to other operations in
            JavaScript.
          </li>
        </ul>
      </div>

      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>9. What are props in React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>- The props in React are the inputs to a component of React.</li>
          <li>
            - They can be single-valued or objects having a set of values that
            will be passed to components of React during creation by using a
            naming convention that almost looks similar to HTML-tag attributes.
          </li>
          <li>
            - We can say that props are the data passed from a parent component
            into a child component.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>10. Explain React state and props.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            <strong>React State</strong>
          </li>
          <li>
            • Every component in react has a built-in state object, which
            contains all the property values that belong to that component.
          </li>
          <li>
            • In other words, the state object controls the behaviour of a
            component. Any change in the property values of the state object
            leads to the re-rendering of the component.
          </li>
          <li>
            <strong>React Props</strong>
          </li>
          <li>
            • Every React component accepts a single object argument called
            props (which stands for “properties”). These props can be passed to
            a component using HTML attributes and the component accepts these
            props as an argument.
          </li>
          <li>• Using props, we can pass data from one component to another</li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>11. Explain about types of side effects in React component.</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            <strong>Effects without Cleanup -</strong>
          </li>
          <li>
            • This side effect will be used in useEffect which does not restrict
            the browser from screen update.
          </li>
          <li>
            • also improves the responsiveness of an application. A few common
            examples are network requests, Logging, manual DOM mutations, etc.
          </li>
          <li>
            <strong>Effects with Cleanup -</strong>
          </li>
          <li>
            • Some of the Hook effects will require the cleanup after updating
            of DOM is done.
          </li>
          <li>
            • For example, if you want to set up an external data source
            subscription, it requires cleaning up the memory else there might be
            a problem of memory leak.{" "}
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>12. What is prop drilling in React?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Sometimes while developing React applications, there is a need to
            pass data from a component that is higher in the hierarchy to a
            component that is deeply nested.
          </li>
          <li>
            - To pass data between such components, we pass props from a source
            component and keep passing the prop to the next component in the
            hierarchy till we reach the deeply nested component.
          </li>
          <li>
            - The disadvantage of using prop drilling is that the components
            that should otherwise be not aware of the data have access to the
            data.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>13. What is an error boundary?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Any component which uses one of the following lifecycle methods is
            considered an error boundary.
          </li>
          <li>
            <u>Render phase</u>
          </li>
          <li>
            <u>Inside a lifecycle method</u>
          </li>
          <li>
            <u>Inside the constructor</u>
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>14. What is React Hooks?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - React Hooks are the built-in functions that permit developers for
            using the state and lifecycle methods within React components.
          </li>
          <li>
            - These are newly added features made available in React 16.8
            version.
          </li>
          <li>
            - Each lifecycle of a component is having 3 phases which include
            mount, unmount, and update. Along with that, components have
            properties and states.
          </li>
          <li>
            - Hooks will allow using these methods by developers for improving
            the reuse of code with higher flexibility navigating the component
            tree.
          </li>
          <li>
            - Using Hook, all features of React can be used without writing
            class components.
          </li>
          <li>
            - For example, before React version 16.8, it required a class
            component for managing the state of a component. But now using the
            useState hook, we can keep the state in a functional component.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          15. What are the rules that must be followed while using React Hooks?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - There are 2 rules which must be followed while you code with
            Hooks:
          </li>
          <li>
            • React Hooks must be called only at the top level. It is not
            allowed to call them inside the nested functions, loops, or
            conditions.
          </li>
          <li>
            • It is allowed to call the Hooks only from the React Function
            Components.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>16. What is the use of useEffect React Hooks?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - The useEffect React Hook is used for performing the side effects
            in functional components.
          </li>
          <li>
            • With the help of useEffect, you will inform React that your
            component requires something to be done after rendering the
            component or after a state change.
          </li>
          <li>
            • The function you have passed(can be referred to as “effect”) will
            be remembered by React and call afterwards the performance of DOM
            updates is over.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>17. Why do React Hooks make use of refs?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - Earlier, refs were only limited to class components but now it can
            also be accessible in function components through the useRef Hook in
            React:
          </li>
          <li>• Managing focus, media playback, or text selection.</li>
          <li>• Integrating with DOM libraries by third-party.</li>
          <li>• Triggering the imperative animations.</li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>18. What are Custom Hooks?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - A Custom Hook is a function in Javascript whose name begins with
            ‘use’ and which calls other hooks.
          </li>
          <li>
            - It is a part of React v16.8 hook update and permits you for
            reusing the stateful logic without any need for component hierarchy
            restructuring.
          </li>
          <li>
            - In almost all of the cases, custom hooks are considered to be
            sufficient for replacing render props and HoCs (Higher-Order
            components) and reducing the amount of nesting required.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>19. What is React Router?</h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            - React Router refers to the standard library used for routing in
            React. It permits us for building a single-page web application in
            React with navigation without even refreshing the page when the user
            navigates.
          </li>
          <li>
            <u>BrowserRouter</u>: It is a router implementation that will make
            use of the HTML5 history API (pushState, popstate, and event
            replaceState) for keeping your UI to be in sync with the URL. It is
            the parent component useful in storing all other components.
          </li>
          <li>
            <u>Routes</u>: It is a newer component that has been introduced in
            the React v6 and an upgrade of the component.
          </li>
          <li>
            <u>Route</u>: It is considered to be a conditionally shown component
            and some UI will be rendered by this whenever there is a match
            between its path and the current URL.
          </li>
          <li>
            <u>Link</u>: It is useful in creating links to various routes and
            implementing navigation all over the application. It works similarly
            to the anchor tag in HTML.
          </li>
        </ul>
      </div>
      <div className="h-auto w-full border mb-4 shadow-sm rounded-lg p-3 hover:cursor-pointer hover:-translate-y-1 hover:duration-300">
        <h3>
          20. How does the performance of using Hooks will differ in comparison
          with the classes?
        </h3>
        <ul className="flex flex-col text-lg mt-4 gap-2">
          <li>
            • React Hooks will avoid a lot of overheads such as the instance
            creation, binding of events, etc., that are present with classes.
          </li>
          <li>
            • Hooks in React will result in smaller component trees since they
            will be avoiding the nesting that exists in HOCs (Higher Order
            Components) and will render props which result in less amount of
            work to be done by React.
          </li>
        </ul>
      </div>
    </>
  );
};
