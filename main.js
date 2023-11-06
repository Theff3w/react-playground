const element = React.createElement('h1', { className: "mon-super-titre", id: "heidi" }, 'Hello World!');
console.log(element);

/*
mauvaise pratique :
ReactDOM.render(element, document.body);
*/

ReactDOM.render(element, document.querySelector('.app'));