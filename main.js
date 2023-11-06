//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const helloWorld = <h1>Hello world!</h1>;
const lastName = "genta";
const firstName = "thomas";

const redLastName = <span className="red-text">{lastName.toUpperCase()}</span>;
const capitalizedFirstName = <span className="capitalize">{firstName.charAt(0).toUpperCase() + firstName.slice(1)}</span>;

const container = (
    <div>
    {helloWorld}
    <p>Last Name: {redLastName}</p>
    <p>First Name: {capitalizedFirstName}</p>
    </div>
);

ReactDOM.render(container, document.querySelector('#app'));

/*
function formatName(firstName, lastName) {
    const formattedLastName = `<span class="red-text">${lastName.toUpperCase()}</span>`;
    const formattedFirstName = `<span class="capitalize">${firstName.charAt(0).toUpperCase() + firstName.slice(1)}</span>`;
    
    return {
        lastName: formattedLastName,
        firstName: formattedFirstName,
    };
}
const { lastName, firstName } = formatName("thomas", "genta");

const container = (
    <div>
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
    </div>
);

ReactDOM.render(container, document.querySelector('#app'));
*/