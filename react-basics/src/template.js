const name = 'giovany';
const lastName = 'dominguez';

const fullName = `${name} ${lastName}`;

console.log(fullName);

function getName(name, lastName) {
    return `${name + ' ' + lastName}`
}
console.log(getName('giovany', 'dominguez'));