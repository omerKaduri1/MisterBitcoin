import { dbService } from "./db.service";

export const userService = {
    getUser,
    signup,
    logout,
    addMove
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
                sessionStorage.setItem(ENTITY_LOGGEDIN_USER, JSON.stringify(user))
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

async function addMove(contact, amount) {
    if (!amount) return null
    const newMove = _createMove(contact, amount)
    const loggedInUser = Object.assign({}, getUser())
    loggedInUser.balance -= amount;
    loggedInUser.transactions.unshift(newMove)
    loggedInUser.transactions = [...loggedInUser.transactions]
    return dbService.put(ENTITY, loggedInUser).then(() => {
        sessionStorage[ENTITY_LOGGEDIN_USER] = JSON.stringify(loggedInUser);
    })
}

function _createMove(contact, amount) {
    return {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }
}

function _createUser(name) {
    return {
        name,
        balance: 100,
        transactions: []
    }
}

