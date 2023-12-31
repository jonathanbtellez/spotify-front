<template>
    <div :style="{ background: gradient }">
        <template v-if="isLoading">
            <div class="w-100 h-20 p-5 flex justify-center">
                <div class="loader mt-5" >
                </div>
            </div>
        </template>
        <playlist-info-component :playlist="playlist" v-else/>
    </div>
    <div class="w-full bg-neutral-900 pb-3">
        
    </div>
</template>
<script setup>
import MainApi from '@/api/MainApi';
import useAuth from '@/modules/auth/composables/useAuth';
import { defineAsyncComponent, ref, onMounted, defineProps, computed } from 'vue';
import useMain from '../composables/useMain';
const PlaylistInfoComponent = defineAsyncComponent(() => import(/* webpackChunkName: 'latest playlist component' */'../components/playlist/PlaylistInfoComponent.vue'))

const props = defineProps(['idPlaylist'])

const { userToken } = useAuth()
const { get_bg_color } = useMain()

const isLoading = ref(false)
const playlist = ref([])

onMounted(()=> {
    getPlaylist()
})

const getPlaylist = async () => {
    isLoading.value = true
    const { data } = await MainApi.get(`/playlist/${props.idPlaylist}`, {
        headers: {
            "Accept": 'application/json',
            "X-Requested-With": "XMLHttpRequest",
            'Authorization': `Bearer ${userToken.value}`
        }
    })
    isLoading.value = false
    playlist.value = data
}
const gradient = computed(() => 'linear-gradient(' + get_bg_color.value + ', #171717 )')

</script>
<style></style>