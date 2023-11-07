function Clock(props) {
    React.useEffect(() => {
        tick();
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [textColor, setTextColor] = React.useState("black");
    const intervalRef = React.useRef();
    const tick = () => {
        intervalRef.current = setInterval(() => {
            setDate(new Date());
        }, 1000)
        
    }

    const changeColor = () => {
        var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
        setTextColor(randomColor);
    }

    const resetColor = () => {
        setTextColor('black')
    }

    const stopClock = (e) => {
        e.preventDefault();
        clearInterval(intervalRef.current);
    }


    const restartClock = (e) => {
        e.preventDefault();
        tick();
    }
    

/*     return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={changeColor}>Changer couleur</button>
            <button onClick={resetColor}>Réinitialiser couleur</button>
        </div>
        ); */

        // Solution Bonus

        return (
            <div>
                <h1>Hello world</h1>
                <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
                <button onClick={stopClock}>Stop</button>
                <button onClick={restartClock}>Reprendre</button>
            </div>
            );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));

function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      <button onClick={toggleLoginStatus}>
        {isLoggedIn ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));