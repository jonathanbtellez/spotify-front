<template>
    <latest-playlist-component/>
    <div class="w-full bg-black"></div>
    <cards-container-component/>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        'cards-container-component': defineAsyncComponent(()=> import(/* webpackChunkName: 'cards container component' */'../components/main/CardsContainerComponent.vue')),
        'latest-playlist-component': defineAsyncComponent(()=> import(/* webpackChunkName: 'latest playlist component' */'../components/main/LatestPlaylistComponent.vue'))
    }

}
</script>
<style></style>