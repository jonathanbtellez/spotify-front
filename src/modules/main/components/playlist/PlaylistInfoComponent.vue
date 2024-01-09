<template>
    <div class="flex px-5 pt-10 pb-3 w-100">
        <div class="w-60 shadow-black">
            <img :src="playlist.image.path" class="rounded-lg shadow-black shadow-2xl" alt="list image">
        </div>
        <div class="text-start ms-5 w-100 flex flex-col justify-between pt-">
            <p class="text-white text-sm mt-10">Lista</p>
            <h3 class="text-5xl text-white font-bold">{{ transformTitle(playlist.name) }}</h3>
            <div class="w-100">
                <p class="text-white text-sm w-100">
                    <template v-for="(artist, index) in getArtists" :key="artist.id">
                        <span class="hover:underline hover:underline-offset-2 cursor-pointer">{{ artist.album.artist.name }}
                        </span> {{ index == 0 ? ',' : '' }} {{ index == 1 ? ' y ' : '' }}
                    </template>
                </p>
                <div class="mt-2 flex gap-2">
                    <div class="w-6 rounded-full ">
                        <img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" class="rounded-full">
                    </div>
                    <div class="text-white text-sm">
                        <span class="font-bold hover:underline hover:underline-offset-2 cursor-pointer">Spotify</span> •
                        <span class="font-medium">{{ playlist.tracks.length }} canciones</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import useHelpers from '@/modules/main/composables/useHelpers';
import { defineProps, computed } from 'vue';
const { transformTitle } = useHelpers()
const props = defineProps({
    playlist: {
        type: Object,
        required: true
    }
})

const getArtists = computed(() => {
    let artists = []
    let endValue = 3
    while (artists.length < 3) {
        const artistsList = props.playlist.tracks.slice(0, endValue)
        artists = new Set(artistsList)
        endValue++
    }
    return artists
})

</script>