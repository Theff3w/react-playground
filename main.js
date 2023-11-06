//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';

const helloWorld = (
    <h1>
        Hello <FirstName firstName={firstName} />{" "}
        <LastName lastName={lastName} />
    </h1>
);

/* Solution sans bonus
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;
*/
// Composant FirstName
function FirstName(props) {
    const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);
    return <span>{formatFirstName(props.firstName)}</span>;
}

// Composant LastName
function LastName(props) {
    const formatLastName = (value) => value.toUpperCase();
    return <span className="red-text">{formatLastName(props.lastName)}</span>;
}


/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

ReactDOM.render(helloWorld, document.querySelector('#app'));
