<template>
    <div class="bg-red-900">
        <latest-playlist-component/>
    </div>
    <div class="w-full bg-neutral-900 mb-3">
        <cards-container-component title="Hechos para "/>
        <cards-container-component title="Hechos para "/>
        <cards-container-component title="Hechos para "/>
        <cards-container-component title="Hechos para "/>
    </div>
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