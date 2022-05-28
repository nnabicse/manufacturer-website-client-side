import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='all-blogs-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Blogs</h1>
            </div>
            <div className='blogs-container'>
                <div className='blog'>
                    <div>
                        <h5 className='title'>How will you improve the performance of a React Application?</h5>
                    </div>
                    <div>
                        <p>you can sort out about more than half of performance issues by analyzing how your components interacted in your app by using amazing tools such as React dev tools. Prioritize the resources which are needed to be loaded first and lazyload the rest of code or resources with techniques such as code-splitting. There might be higher chances when you are duplicating things more unnecessarily or unintentionally. Make sure to get them analyzed and sort out the size of your bundled code. Server side rendering is not as fancy as it sounds. If not implemented properly, it can make performance of your app more worse or even disaster.</p>
                    </div>
                </div>
                <div className='blog'>
                    <div>
                        <h5 className='title'>What are the different ways to manage a state in a React application?</h5>
                    </div>
                    <div>
                        <p><span className='title'>Communication State</span>
                            Communication state is the “loading phase” of the transactions between different states. It stores the following information when used in a React app. With the Communication state, you can now access the state of the request without setting any particular command.
                        </p>
                        <p><span className='title'>Data State</span>The Data state will receive all the information from the outer world. But how will it identify which information is what and whether it needs to be stored in the data state or not? Every piece of information will have an identifier that will help the Data state recognize and request for particular information that it can store.</p>
                        <p><span className='title'>Control State</span>Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information.</p>
                        <p><span className='title'>Seassion State</span>Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular user’s preferences.</p>
                        <p><span className='title'>Location State</span>Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them.</p>
                    </div>
                </div>
                <div className='blog'>
                    <div>
                        <h5 className='title'>How does prototypical inheritance work?</h5>
                    </div>
                    <div>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                            <div className='text-center my-2'>
                                <img className='img-fluid' src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" />
                            </div>
                            Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    </div>
                </div>
                <div className='blog'>
                    <div>
                        <h5 className='title'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h5>
                    </div>
                    <div>
                        <p>In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print.</p>
                    </div>
                </div>
                <div className='blog'>
                    <div>
                        <h5 className='title'>What is a unit test and Why should write unit tests?</h5>
                    </div>
                    <div>
                        <p>Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance. A unit is a single testable part of a software system and tested during the development phase of the application software.</p>
                        <p className='title'>Reasons to do write tests: </p>
                        <ul>
                            <li>
                                Unit testing helps tester and developers to understand the base of code that makes them able to change defect causing code quickly.
                            </li>
                            <li>
                                Unit testing helps in the documentation.
                            </li>
                            <li>
                                Unit testing fixes defects very early in the development phase that's why there is a possibility to occur a smaller number of defects in upcoming testing levels.
                            </li>
                            <li>
                                It helps with code reusability by migrating code and test cases.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;