<template>
    <div class="text-left p-4 text-xl text-white font-semibold">
        <h3>{{ title +' '+userName }}</h3>
    </div>
    <div class="flex px-4 w-full gap-5">
        <card-component v-for="list, index in limitList(lists)" :key="index" :list="list" class="w-1/6 bg-neutral-800" />
    </div>
</template>
<script>
import { defineAsyncComponent, ref } from 'vue';
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

        const lists = ref()
        return {
            userName,
            limitList : (list)=> { 
                lists.value = list
                lists.value.splice(6)
                return lists.value
            }
        }
    
    }
}
</script>
<style ></style>