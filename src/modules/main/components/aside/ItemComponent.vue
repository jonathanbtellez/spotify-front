<template >
    <button class="w-full hover:text-neutral-200 transition ease-in-out delay-50 duration-300 ">
        <div class=" flex items-center gap-2">
            <slot></slot>
            <router-link :to="{ name: route }">{{ title }}</router-link>
        </div>
    </button>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String
    },
    route: {
        type: String
    }
})
</script>
<style lang="">
    
</style>