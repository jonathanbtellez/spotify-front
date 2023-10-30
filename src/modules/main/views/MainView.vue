<template>
    <div class="rounded-xl bg-red-950 h-full">
    <nav-component/>
    <latest-playlist-component/>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        'nav-component': defineAsyncComponent(()=> import('../components/main/NavComponent.vue')),
        'latest-playlist-component': defineAsyncComponent(()=> import('../components/main/LatestPlaylistComponent.vue'))
    }

}
</script>
<style></style>