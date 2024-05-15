import { userService } from "@/services/user.service"


export default {
    state() {
        return {
            loggedInUser: null
        }
    },
    mutations: {
        setUser(state, loggedInUser) {
            state.loggedInUser = loggedInUser
            if (state.loggedInUser !== null) {
                state.isAuth = true
            } else {
                state.isAuth = false
            }
        }
    },
    actions: {
        async loadUser({ commit }) {
            const user = await userService.getUser()
            if (user !== null) {
                commit('setUser', user)
            } else {
                commit('setUser', null)
            }
        },
        // async login({ commit, state }, creds) {
        //     try {
        //         console.log(creds)
        //         const user = await userService.login(creds)
        //         if (user) {
        //             commit('setUser', user)
        //             console.log('loggedInUser: ', state.loggedInUser)
        //         }
        //     } catch (err) {
        //         console.error('No User', err)
        //         throw err
        //     }
        // },
        async signup({ commit, state }, username) {
            try {
                const user = await userService.signup(username)
                if (user) {
                    commit('setUser', user)
                }
            } catch (err) {
                console.error('No User', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit('setUser', null)
            } catch (err) {
                console.error('No User', err)
                throw err
            }
        },
        // async transferFunds({ commit, dispatch }, { contactId, funds }) {
        //     try {
        //         const user = await userService.getSessionUser()
        //         if (!user) {
        //             throw new Error('User not found')
        //         }

        //         if (funds > user.balance) {
        //             throw new Error('Insufficient funds')
        //         }

        //         const userToTransfer = await contactService.getById(contactId)
        //         if (!userToTransfer) {
        //             throw new Error('Contact not found')
        //         }

        //         user.balance -= funds
        //         userToTransfer.balance += funds

        //         await Promise.all([
        //             userService.addTransaction(user, userToTransfer, funds),
        //             contactService.save(userToTransfer)
        //         ])

        //         commit('setUser', user)

        //         return 'Transfer successful!'
        //     } catch (err) {
        //         console.error('Error transferring funds:', err)
        //         throw err
        //     }
        // }
    },
    getters: {
        getUser(state) {
            return state.loggedInUser
        }
    },
}