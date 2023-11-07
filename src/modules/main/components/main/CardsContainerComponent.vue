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
        },
        lists: {
            type: Array
        }
    },
    setup() {
        const { userName } = useAuth()

        return {
            userName
        }
    }
}
</script>
<style ></style>