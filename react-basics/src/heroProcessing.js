import { heroes} from './data.js';
console.log(heroes);

const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}

const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner);
}

console.log('====================================');
console.log(getHeroById(2));
console.log(getHeroesByOwner('Marvel'));
console.log('====================================');