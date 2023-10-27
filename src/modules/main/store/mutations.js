// the mutations are use to update the state in vuex
// export const myMutations = (state)=>{
// }

export const loginUser = (state, { user, token }) => {
    if (token) {
        localStorage.setItem('token', token)
        state.token = token
    }
    console.log(user)


    state.user = user
    state.status = 'authenticated'
}

// export const logout = (state) => {
//     state.user = null
//     state.idToken = null
//     state.refreshToken = null
//     state.status = "not-authenticated"

//     localStorage.removeItem('idToken')
//     localStorage.removeItem('refreshToken')
// }