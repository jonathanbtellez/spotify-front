import { computed } from 'vue';
import { useStore } from "vuex"

const useMain = () => {
    const store = useStore()

    return {
        set_bg_color: (color) => {
            store.commit('main/set_color_background', color)
        },
        get_bg_color: computed(() => store.getters['main/get_color_background'])
    }
}

export default useMain