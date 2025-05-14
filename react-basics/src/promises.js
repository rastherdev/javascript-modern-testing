// import { getHerobyId } from './heroes.js';
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // task:
//          const hero = getHerobyId(1);
//          if (hero) {
//              resolve(hero);
//          } else {
//              reject('Error: Hero not found');
//          }
//     }, 2000);
// });

// promise.then((hero) => {
//     console.log('Promise fulfilled with hero:', hero);
// }
// ).catch((error) => {
//     console.error('Promise rejected:', error);
// }
// ).finally(() => {
//     console.log('Promise settled');
// });

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('Error: Hero not found');
            }
        }, 2000);
    }); 
};
getHeroByIdAsync(4)
    .then(hero => console.log('Hero found:', hero))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Async operation completed'));
