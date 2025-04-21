const hi = function(name) {
    return `helo, ${name}`;
}

const hi2 = (name) =>{
    return `helo, ${name}`;
}

const hi3 = (name) => `helo, ${name}`;

const hi4 = () => `helo`;

const getUser = () => {
    return {
        uid: 'DSA',
        username: 'el_cagao'
    }
}

const getUser2 = () => ({
    uid: 'DSA',
    username: 'el_cagao'
});

function getActiveUser(name) {
    return {
        uid: '123',
        username: name
    }
}

const activeUser = getActiveUser('Giovany');
console.log(activeUser);

const getActiveUser2 = (userArrow) => ({
    uid: 'DASDWD',
    username: userArrow,
});  


console.log('====================================');
console.log(getActiveUser2('Giovany'));
console.log('====================================');