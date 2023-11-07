<template>
    <div :style="{ background: gradient }">
        <latest-playlist-component />
    </div>
    <div class="w-full bg-neutral-900 mb-3">
        <cards-container-component title="Hechos para " :lists="lists" />
        <cards-container-component title="Hechos para " :lists="lists" />
        <cards-container-component title="Hechos para " :lists="lists" />
        <cards-container-component title="Hechos para " :lists="lists" />
    </div>
</template>
<script>

import { defineAsyncComponent, computed } from 'vue';
import  useMain  from '../composables/useMain';

export default {
    components: {
        'cards-container-component': defineAsyncComponent(() => import(/* webpackChunkName: 'cards container component' */'../components/main/CardsContainerComponent.vue')),
        'latest-playlist-component': defineAsyncComponent(() => import(/* webpackChunkName: 'latest playlist component' */'../components/main/LatestPlaylistComponent.vue'))
    },

    setup() {

        const { get_bg_color } = useMain()

        const lists = [
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: [],
                artists: ['in flames', 'Breaking benjamin', 'Dark tranquility']
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: [],
                artists: ['in flames', 'Breaking benjamin', 'Dark tranquility']
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: [],
                artists: ['in flames', 'Breaking benjamin', 'Dark tranquility']
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: [],
                artists: ['in flames', 'Breaking benjamin', 'Dark tranquility']
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: [],
                artists: ['in flames', 'Breaking benjamin', 'Dark tranquility']
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: [],
                artists: ['in flames', 'Breaking benjamin', 'Dark tranquility']
            }
        ]
        return {
            lists,
            gradient: computed(() => 'linear-gradient('+ get_bg_color.value + ', #171717 )')
        }
    }

}
</script>
<style></style>