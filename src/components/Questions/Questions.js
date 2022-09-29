import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='question-div'>
                <p className='main-question'>How does Reacte works</p>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>

            <div className='question-div'>
                <p className='main-question'>Difference between Props and State</p>
                <p>Props are used to pass data from one component to another.The state is a local data storage that is local to the component only and cannot be passed to other components.The this.setState property is used to update the state values in the component.</p>
            </div>

            <div className='question-div'>
                <p className='main-question'>What can we do using useEffect?</p>
                <p>The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.useEffect
                </p>
            </div>
        </div>
    );
};

export default Questions;