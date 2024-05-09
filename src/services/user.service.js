export const userService = {
    getUser,
}

const user = {
    name: "Omer Kaduri",
    balance: 100,
    transactions: []
}

function getUser() {
    return user
}

