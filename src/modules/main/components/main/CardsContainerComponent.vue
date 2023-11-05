<template>
    <div class="text-left p-4 text-xl text-white font-semibold">
        <h3>{{ title + userName }}</h3>
    </div>
    <div class="flex px-4 w-full gap-5">
        <card-component v-for="list, index in lists" :key="index" :list="list" class="w-1/6 bg-neutral-800"/>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import useAuth from '@/modules/auth/composables/useAuth';

export default {
    components: {
        'card-component': defineAsyncComponent(() => /* webpackChunkName: 'card component' */ import('./includes/CardComponent.vue'))
    },
    props: {
        title: {
            type: String
        }
    },
    setup() {
        const { userName } = useAuth()

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
            userName
        }
    }
}
</script>
<style ></style>