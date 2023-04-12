import React from 'react';

const Blog = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-8">
          <h1>When should you use context API?</h1>
          <p>Context API is a feature in React that helps manage state shared across multiple components. It is useful for dealing with deeply nested components and frequently updated data. However, it should be used sparingly to avoid unnecessary complexity in the code.</p>
        </div>
        <div className="col-lg-4">
          <h1>What is useRef?</h1>
          <p>useRef is a hook in React that creates a mutable reference object which persists across re-renders. It can be used to store any mutable value, similar to an instance property on a class component. The mutable value can be accessed and modified directly using the .current property on the reference object.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <h1>What is a custom hook?</h1>
          <p>In React, a custom hook is a JavaScript function that allows to extract stateful logic from a component and reuse it in other components. Custom hooks can be created to manage any kind of stateful logic, such as fetching data from an API or handling form input. They help to reduce code duplication and improve code reusability.</p>
        </div>
        <div className="col-lg-4">
          <h1>What is useMemo?</h1>
          <p>useMemo is a React hook that optimizes the performance of functional components by caching expensive computations. It takes two arguments - a function that returns a value to be memoized, and an array of dependencies. The hook returns the memoized value, which will only be recomputed when the dependencies change.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
