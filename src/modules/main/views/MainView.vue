<template>
    <div :style="{ background: gradient }">
        <latest-playlist-component />
    </div>
    <div class="w-full bg-neutral-900 pb-3">
        <template v-for="playlist in playlists" :key="playlist.id">
            <template v-if="playlist.playlist.length > 0">
                <cards-container-component :title="playlist.name"  :lists="playlist.playlist"/>
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
        onMounted(async () => {
            getPlaylist()
        })

        const getPlaylist = async () => {
            const {data} = await MainApi.get('/playlist', {
                headers: {
                    "Accept": 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': `Bearer ${userToken.value}`
                }
            })
            playlists.value = data  
        }

        return {
            playlists,
            userToken,
            gradient: computed(() => 'linear-gradient(' + get_bg_color.value + ', #171717 )'),
        }
    }

}
</script>
<style></style>