<template >
    <button class="w-full hover:text-neutral-200 transition ease-in-out delay-50 duration-300 ">
        <div class=" flex items-center gap-2">
            <slot></slot>
            <span>{{title}}</span>
        </div>
    </button>
</template>
<script setup>
    import {defineProps} from 'vue';
    defineProps({
        title: {
            type: String
        }
    })
</script>
<style lang="">
    
</style>