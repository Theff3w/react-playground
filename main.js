// const firstName = 'r0ulito';
// const lastName = 'formateur';

// function FirstName(props) {

//     /*
//     // Solution avec bonus
//     const formatFirstName = (firstName) => {
//         return firstName[0].toUpperCase() + firstName.substr(1);
//     }

//     return <span>{formatFirstName(props.text)}</span>
//     */

//     // Solution sans bonus
//     return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
// }

// function LastName(props) {

//     /*
//     // Solution avec bonus
//     const formatLastName = (lastName) => {
//         return lastName.toUpperCase();
//     }

//     return <span>{formatLastName(props.text)}</span>
//     */

//     // Solution sans bonus
//     return <span className="red-text">{props.text.toUpperCase()}</span>

// }

// const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
      <h1>Bonjour, monde !</h1>
      <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  };
};


// function Clock(props) {
//   const [date, setDate] = React.useState(new Date());
//   const [bool, setBool] = false;

//   const time = bool + " " + date;

//   React.useEffect({ => (
//     console.log('render');
//     setDate(new Date());
//   )}, [bool])

//   return (
//     <div>
//     <h1>Bonjour, monde !</h1>
//     <h2>Il est {time}.</h2>
//     <button onClick={() => setBool(!bool)}></button>
//     </div>
//     );
// }





ReactDOM.render(<Clock />, document.querySelector('#app'));
