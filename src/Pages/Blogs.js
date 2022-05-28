import React from 'react';

const Blogs = () => {
    return (
        <div className='align-start'>
            <div>
                <p className='text-xl font-bold'>1. How will you improve the performance of a React Application?</p>
                <p>By practicing a lot, one can improve react appplication and reading documentation provided in the internet</p>
            </div>
            <div>
                <p className='text-xl font-bold mt-5'>2. What are the different ways to manage a state in a React application?</p>
                <p>
                    1. Local state. <br />
                    2. Global state. <br />
                    3. Server state. <br />
                    4. URL state. <br />
                </p>
            </div>
            <div>
                <p className='text-xl font-bold mt-5'>3. How does prototypical inheritance work?</p>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div>
                <p className='text-xl font-bold mt-5'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                <p>
                    When we directly update the state, it does not change this. State does it immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. We will lose control of the state across all components.</p>
            </div>
            <div>
                <p className='text-xl font-bold mt-5'>5. What is a unit test? Why should write unit tests?</p>
                <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently</p>
            </div>
        </div>
    );
};

export default Blogs;