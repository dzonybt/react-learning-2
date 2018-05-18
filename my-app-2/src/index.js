import React from 'react';
import ReactDOM from 'react-dom';



class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }
  
  class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }
  
  class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={filterText} />
          <p>
            <input
              type="checkbox"
              checked={inStockOnly} />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  
  class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
  
  
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
  ];
  
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('root')
  );


//////////////////////////////////////


// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }

//   function Dialog(props) {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           {props.title}
//         </h1>
//         <p className="Dialog-message">
//           {props.message}
//         </p>
//       </FancyBorder>
//     );
//   }
  
//   function WelcomeDialog() {
//     return (
//       <Dialog
//         title="Welcome"
//         message="Thank you for visiting our spacecraft!" />
  
//     );
//   }


// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// );

/////////////////////////////////////


// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }

//   function WelcomeDialog() {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           Welcome
//         </h1>
//         <p className="Dialog-message">
//           Thank you for visiting our spacecraft!
//         </p>
//       </FancyBorder>
//     );
//   }



// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// );

//////////////////////////////////


// function BoilingVerdict(props) {
//     if(props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil</p>;
// }


// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }

//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
//   };
  
//   class TemperatureInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//     //   this.state = {temperature: ''};
//     }
  
//     handleChange(e) {
//     //   this.setState({temperature: e.target.value});
//         this.props.onTemperatureChange(e.target.value);
//     }
  
//     render() {
//       const temperature = this.props.temperature;
//       const scale = this.props.scale;
//       return (
//         <fieldset>
//           <legend>Enter temperature in {scaleNames[scale]}:</legend>
//           <input value={temperature}
//                  onChange={this.handleChange} />
//         </fieldset>
//       );
//     }
//   }

//   class Calculator extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {temperature: '', scale: 'c'};
//     }

//     handleCelsiusChange(temperature) {
//         this.setState({scale: 'c', temperature});
//     }
    
//       handleFahrenheitChange(temperature) {
//         this.setState({scale: 'f', temperature});
//     }

//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//       return (
//         <div>
//             <TemperatureInput
//             scale="c"
//             temperature={celsius}
//             onTemperatureChange={this.handleCelsiusChange} />

//             <TemperatureInput
//             scale="f"
//             temperature={fahrenheit}
//             onTemperatureChange={this.handleFahrenheitChange} />

//             <BoilingVerdict
//             celsius={parseFloat(celsius)} />

//         </div>
//       );
//     }
//   }


// class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {temperature: ''};
//     }
  
//     handleChange(e) {
//       this.setState({temperature: e.target.value});
      
//     }
  
//     render() {
//       const temperature = this.state.temperature;
      
//       return (
//         <fieldset>
//           <legend>Enter temperature in Celsius:</legend>
//           <input
//             value={temperature}
//             onChange={this.handleChange} />
  
//           <BoilingVerdict
//             celsius={parseFloat(temperature)} />
  
//         </fieldset>
//       );
//     }
//   }



// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
// );


//////////////////////////////////////////////


// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite La Croix flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input value={null} />
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }



// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
// );

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