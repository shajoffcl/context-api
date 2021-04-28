import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Style-sheets/welcome.css";

export default class welcome extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome Learner!</h1>
                <p>This is React.js world, where you will create amazing things using it's features.</p>
                <ul>
                    <li>Virtual DOM</li>
                    <li>JSX</li>
                    <li>Components</li>
                    <li>State</li>
                    <li>Props</li>
                    <li>Routing</li>
                    <li>Form Handling</li>
                    <li>React Hooks</li>
                </ul>
                <p>For any kind of queries please refer to the docs.....</p>
                <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer noopener">Click here for React.js docs</a>
                <h3>Real Time Applications List:</h3>
                <ol>
                    <li>To-Do App</li>
                    <Link to="/todo">Click here</Link>
                    <li>Calculator</li>
                    <Link to="/calculator">Click here</Link>
                    <li>Alarm App</li>
                    <Link to="/alarm">Click here</Link>
                    <li>Context with useReducer</li>
                    <Link to="/global">Click here</Link>
                </ol>
            </div>
        )
    }
}
