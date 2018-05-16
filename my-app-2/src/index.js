import React from 'react';
import ReactDOM from 'react-dom';



class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite La Croix flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input value={null} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }



ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
);

////////////////////////////////////////

// class EsseyForm extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {value: 'Please write an essey about you favorite DOM element.'};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit (event) {
//         alert('An essey was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//     render () {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

// ReactDOM.render(
//     <EsseyForm />,
//     document.getElementById('root')
// );



//////////////////////////////////

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number)=> <li>{number}</li>);

//     return (
//         <ul>{listItems}</ul>
//     );
// }

// const numbers = [1,2,3,4];

// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

////////////////////////////////

// const numbers = [1,2,3,4];
// const listItems = numbers.map((number) =>
//     <li> {number} </li>
// )

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// )


///////////////////////////////////////


// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }

//   function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={true} />,
//     document.getElementById('root')
//   );



/////////////////////////////////////////////////

// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // This binding is necessary to make `this` work in the callback
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//         // console.log(prevState.isToggleOn);
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );



/////////////////////////////////////////////




// class Clock extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//           );
//     }

//     handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//       }
  
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//           date: new Date()
//         });
//       }
    
//     deleteRow(id, e){
//         console.log(id, e);
//     }

//     render (){
//         return (
//         <div>
//             <h1 onClick={this.handleClick}>Hello, world!</h1>
//             <div onClick={this.deleteRow.bind(this, 1)}>aaa</div>
//             <div onClick={this.deleteRow.bind(this, 2)}>bbb</div>
//             <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//         );
//     }
//   }
  

// ReactDOM.render(
//     <div>
//     <Clock />
//     <Clock />
//     <Clock />
//     </div>,
//     document.getElementById('root')
// );

  
//   setInterval(tick, 1000);



////////////////////////////////////////////////


// function formatDate(date) {
//     return date.toLocaleDateString();
//   }
  
//   function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img
//             className="Avatar"
//             src={props.author.avatarUrl}
//             alt={props.author.name}
//           />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }
  
//   const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'http://placekitten.com/g/64/64',
//     },
//   };
//   ReactDOM.render(
//     <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author}
//     />,
//     document.getElementById('root')
//   );


//////////////////////////////////////////////////


// import React from 'react';
// import ReactDOM from 'react-dom';

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez',
// };

// const elemnt = (
//     <h1>
//         Hello, {getGreeting(user)}!
//     </h1>
// );

// function getGreeting(user){
//     if(user){
//         return <h1 src={user.firstName}>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>
// }

// const name='Josh Perez';
// const element = <h1>Hello, {name} </h1>;


// function tick() {
//     const element = (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);
// {/* ReactDOM.render(
//     element,
//     document.getElementById('root')
//   ); */}