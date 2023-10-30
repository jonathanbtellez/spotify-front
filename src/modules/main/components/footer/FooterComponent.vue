<template>
    <div class="h-full text-neutral-50 items-center flex">
        <audio_player_component />
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        'audio_player_component': defineAsyncComponent(() => import('../audioPlayer/AudioPlayerComponent.vue'))
    },

}
</script>
<style></style>