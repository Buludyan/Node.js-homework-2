const fs = require('fs');
let users = require('./users.json');

const usersHandler = {
    getAllUsers() {
        return users;
    },
    getUser(id) {
        return users.find(user => user.id === id);
    },
    addUser(obj) {
        const updatedObj = [...users, obj]
        fs.writeFile('users.json', JSON.stringify(updatedObj), (err) => {
            if (err) console.log(err);
        })
    },
    changeUser(id, newAge) {
        const user = users.find(user => user.id === id);
        user.age = newAge;
    },
    deleteUser(id) {
        users = users.filter(user => user.id !== id)
        const updatedObj = [...users]
        fs.writeFile('users.json', JSON.stringify(updatedObj), (err) => {
            if (err) console.log(err);
        })
    }
}

module.exports.usersHandler = usersHandler;