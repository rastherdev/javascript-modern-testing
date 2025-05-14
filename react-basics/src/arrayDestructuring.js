//array of american countries
const countries = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina'];
const [ , ,p] = countries;
console.log(p);

const returnArray = () => {
    return ['USA', 'Canada', 'Mexico'];
}
const [p1, p2, p3] = returnArray();
console.log(p1);
console.log(p2);

//homework
const useState = (value) => {
    return [value, () => {console.log('Hello world')}];
}

const [name, setName] = useState('USA');
console.log(name);
setName();


