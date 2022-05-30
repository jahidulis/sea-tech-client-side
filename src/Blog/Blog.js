import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      <div className="text-center font-serif p-4">
        <h1 className="text-2xl py-5">
          How will you improve the performance of a React Application?
        </h1>
        <p className="text-primary">
          Learning is best done by doing. The best way to improve skills in a
          web technology, provided me already moderately familiar with the
          programming language (JavaScript), would be to undertake a substantial
          project you are passionate about using said technology. This will
          force me to deal with a variety of design and implementation issues in
          the technology, and by the time I finish and would have gained
          significant experience which can be applied to other projects using
          the technology.
        </p>
      </div>
      <div className="text-center font-serif p-4">
        <h1 className="text-2xl py-5">
          What are the different ways to manage a state in a React application?
        </h1>
        <p className="text-primary">
          At component level, state is initiased at constructor and to be used
          in that component only. If that state needs to be used by other
          component and that component is a parent or child of this component
          then you can pass state as props. but if there are two separate
          components then we use redux for this. redux is a store which manages
          all your state. you need to write some actions and reducers and make
          components aware of state. if page refreshes, store is gone so you
          need to consider that scenario also using Router state and sometimes
          localstorage or api when there are 3rd party redirections like payment
          page
        </p>
      </div>
      <div className="text-center font-serif p-4">
        <h1 className="text-2xl py-5">
          How does prototypical inheritance work?
        </h1>
        <p className="text-primary">
          In a nutshell, prototypal inheritance is when an object inherits from
          another object. This differs from classical inheritance, in which a
          class inherits from another class. In a classical language, classes
          typically define the structure of objects, but in a prototypal
          language, the objects themselves define their structure, and this
          structure can be inherited and modified by other objects at runtime.
          Prototypal inheritance first appeared in Self and has since appeared
          in many other languages, but these days most people think of
          JavaScript when they think of prototypal inheritance.
        </p>
      </div>
      <div className="text-center font-serif p-4">
        <h1 className="text-2xl py-5">
          Why you do not set the state directly in React?
        </h1>
        <p className="text-primary">
          Because of the following reasons, one should never update the state
          directly: If we alter it directly, executing setState() thereafter may
          just overwrite your changes. This.state is not changed instantly when
          we directly update the state. Instead, it generates a pending state
          transition, which will only yield the current value if accessed after
          using this function. we'll lose control of the state in all of our
          components.
        </p>
      </div>
      <div className="text-center font-serif p-4">
        <h1 className="text-2xl py-5">
          How will you implement a search to find products by name?
        </h1>
        <p className="text-primary">
          It can be done in many and many ways. But I think,we should load the
          data from the database and loaded in state. Then we will may filter
          byt id or something is match and also using query for this.
        </p>
      </div>
      <div className="text-center font-serif p-4">
        <h1 className="text-2xl py-5">
          What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-primary">
          Unit testing is a process in which smallest part of the software
          called unit are uniquely individually performing its operation are
          verified. Unit testing increases confidence in changing/ maintaining
          code. If good unit tests are written and if they are run every time
          any code is changed, we will be able to promptly catch any defects
          introduced due to the change.
        </p>
      </div>
    </div>
  );
};

export default Blog;
