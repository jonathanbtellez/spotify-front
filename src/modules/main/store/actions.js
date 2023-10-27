// Actions received the commit of the context the are use to drive info the api
// and they can call a mutation of the state
// export const myActions = async ({commit})=>{
// }

import AuthApi from "@/api/AuthApi";

export const createUser = async ({ commit }, newUser) => {
    try {
        const { data } = await AuthApi.post('/register', newUser)
        const { token, user } = data
        delete user.password
        commit('loginUser', { user, token })
        return { status: true }
    } catch (error) {
        return { status: false, message: error.response.data.errors }
    }
}

export const signInUser = async ({ commit }, userInfo) => {
    try {
        const { data } = await AuthApi.post('/login', userInfo)

        const { token, user } = data

        commit('loginUser', { user, token })

        return { status: true }

    } catch (error) {
        return { status: false, message: error.response.data.errors }
    }
}

// export const checkAuthentication = async ({ commit }) => {
//     const token = localStorage.getItem('token')

//     if (!token) {
//         commit('logout')
//         return { status: false, message: 'There is not token in the request' }
//     }

//     try {
//         const { data } = await AuthApi.post('/user', { token })
//         const { displayName, email } = data.users[0]

//         const user = {
//             name: displayName,
//             email
//         }

//         commit('loginUser', { user, token })

//         return { status: true }

//     } catch (error) {
//         commit('logout')
//         return { status: false, message: error.response.data.error.message }
//     }

// }