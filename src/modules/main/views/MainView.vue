<template>
    <div class="rounded-xl bg-red-950 h-full">
    <latest-playlist-component/>       
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        'latest-playlist-component': defineAsyncComponent(()=> import('../components/main/LatestPlaylistComponent.vue'))
    }

}
</script>
<style></style>