<template >
    <div :style="{ background: gradient }">
        <template v-if="isLoading">
            <div class="w-100 h-20 p-5 flex justify-center">
                <div class="loader mt-5" >
                </div>
            </div>
        </template>
        <latest-playlist-component :lists="playlists.lastPlaylist"  v-else/>
    </div>
    <div class="w-full bg-neutral-900 pb-3">
        <template v-if="isLoading">
            <div class="w-100 h-20 p-5 flex justify-center">
                <div class="loader mt-5" >
                </div>
            </div>
        </template>
        <template v-for="list in playlists.playlist" :key="list.id" v-else>
            <template v-if="list.playlist.length > 0">
                <cards-container-component :title="list.name" :lists="list.playlist" />
            </template>
        </template>
    </div>
</template>
<script>

import { defineAsyncComponent, computed, onMounted, ref } from 'vue';
import useMain from '../composables/useMain';
import useAuth from '@/modules/auth/composables/useAuth';
import MainApi from '@/api/MainApi';


export default {
    components: {
        'cards-container-component': defineAsyncComponent(() => import(/* webpackChunkName: 'cards container component' */'../components/main/CardsContainerComponent.vue')),
        'latest-playlist-component': defineAsyncComponent(() => import(/* webpackChunkName: 'latest playlist component' */'../components/main/LatestPlaylistComponent.vue'))
    },

    setup() {

        const { get_bg_color } = useMain()
        const { userToken } = useAuth()

        const playlists = ref({})
        const isLoading = ref(false)

        onMounted(async () => {
            getPlaylist()
        })

        const getPlaylist = async () => {
            isLoading.value = true
            const { data } = await MainApi.get('/playlist', {
                headers: {
                    "Accept": 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': `Bearer ${userToken.value}`
                }
            })
            isLoading.value = false
            playlists.value = data
        }

        return {
            isLoading,
            playlists,
            userToken,
            gradient: computed(() => 'linear-gradient(' + get_bg_color.value + ', #171717 )'),
        }
    }

}
</script>
<style>
.loader {
    --d: 22px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    color: #25b09b;
    box-shadow:
        calc(1*var(--d)) calc(0*var(--d)) 0 0,
        calc(0.707*var(--d)) calc(0.707*var(--d)) 0 1px,
        calc(0*var(--d)) calc(1*var(--d)) 0 2px,
        calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
        calc(-1*var(--d)) calc(0*var(--d)) 0 4px,
        calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
        calc(0*var(--d)) calc(-1*var(--d)) 0 6px;
    animation: l27 1s infinite steps(8);
}

@keyframes l27 {
    100% {
        transform: rotate(1turn)
    }
}
</style>