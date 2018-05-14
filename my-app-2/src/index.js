import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
};

const elemnt = (
    <h1>
        Hello, {getGreeting(user)}!
    </h1>
);

function getGreeting(user){
    if(user){
        return <h1 src={user.firstName}>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

const name='Josh Perez';
const element = <h1>Hello, {name} </h1>;


function tick() {
    const element = (
        <div>
            <h1>Hello world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
{/* ReactDOM.render(
    element,
    document.getElementById('root')
  ); */}