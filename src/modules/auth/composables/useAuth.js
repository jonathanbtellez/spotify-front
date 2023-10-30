import { computed } from "vue";
import { useStore } from "vuex";

const useAuth = () => {
    const store = useStore();
    const createUser = async (user) => {
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    };

    const signInUser = async (user) => {
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }

    const checkAuthentication = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logOut = () => {
        store.commit('auth/logout')
    }

    return {
        authStatus: computed(() => store.getters['auth/currentState']),
        userName: computed(() => store.getters['auth/userName']),
        logOut,
        checkAuthentication,
        createUser,
        signInUser,
    };
};

export default useAuth;