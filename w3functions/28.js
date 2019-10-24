const withCallback = callback =>  `Hello ${callback()}`;

const world = () => 'World';

console.log(withCallback(world));
