// function UserGreeting(props) {
//     return <h1>Bienvenue !</h1>;
//   }

//   function GuestGreeting(props) {
//     return <h1>Veuillez vous connecter</h1>;
//   }
//   function Greeting(props) {
//       const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//       const handleLogIn = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(true);
//       }

//       const handleLogOut = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(false);
//       }

//     return(
//         <React.Fragment>
//             {isLoggedIn ?
//             <React.Fragment>
//                 <UserGreeting />
//                 <button onClick={handleLogOut}>Se déconnecter</button>
//             </React.Fragment> :
//             <React.Fragment>
//                 <GuestGreeting />
//                 <button onClick={handleLogIn}>Se connecter</button>
//             </React.Fragment> }
//         </React.Fragment>
//     )
//   }

//   ReactDOM.render(
//     <Greeting />,
//     document.querySelector('#app')
//   );

// main.js

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs", error);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1>Cartes de visite des utilisateurs</h1>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </React.Fragment>
  );
};

const User = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Société: {user.company.name}</p>
      <p>Téléphone: {user.phone}</p>
      <p>Site Web: {user.website}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
