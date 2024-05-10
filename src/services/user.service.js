import { dbService } from "./db.service";

export const userService = {
    getUser,
    signup,
    logout
}

const ENTITY = 'user'
const ENTITY_LOGGEDIN_USER = 'loggedinUser'

function getUser() {
    const userJson = sessionStorage.getItem(ENTITY_LOGGEDIN_USER)
    return userJson ? JSON.parse(userJson) : null
}

async function signup(name) {
    return dbService.query(ENTITY)
        .then(users => {
            const user = users.find(_user => _user.name === name);
            if (user) {
                return Promise.resolve(user);
            } else {
                const newUser = _createUser(name);
                return dbService.post(ENTITY, newUser)
                    .then(createdUser => {
                        sessionStorage.setItem(ENTITY_LOGGEDIN_USER, JSON.stringify(createdUser));
                        return createdUser;
                    });
            }
        });
}

function logout() {
    return new Promise((resolve, reject) => {
        sessionStorage.setItem(ENTITY_LOGGEDIN_USER, JSON.stringify(null));
        resolve(null);
    });
}


function _createUser(name) {
    return {
        name,
        balance: 100,
        transactions: []
    }
}

