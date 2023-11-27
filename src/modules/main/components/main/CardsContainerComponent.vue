<template>
    <div class="text-left p-4 text-xl text-white font-semibold">
        <h3>{{ "Playlists of " + handleTitle }}</h3>
    </div>
    <div class="flex px-4 w-full gap-5">
        <card-component v-for="list in lists" :key="list.id" :list="list" class="w-1/6 bg-neutral-800" />
    </div>
</template>
<script>
import useAuth from '@/modules/auth/composables/useAuth';
import useHelpers from '@/modules/main/composables/useHelpers';

import { computed, defineAsyncComponent } from 'vue';

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
    setup(props) {
        const { userName } = useAuth()
        const { transformTitle } = useHelpers()
        return {
            userName,
            handleTitle: computed(() => transformTitle(props.title))

        }

    }
}
</script>
<style ></style>