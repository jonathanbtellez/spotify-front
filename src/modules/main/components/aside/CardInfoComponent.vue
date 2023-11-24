<template>
    <div class="bg-neutral-700 rounded-xl font-bold text-left text-neutral-100 p-3">
        <h2 class="leading-loose">{{ title }}</h2>
        <slot></slot>
        <button
            class=" transition text-black ease-in-out delay-100 rounded-3xl mt-2 px-4 py-1 bg-neutral-100 hover:scale-101 hover:bg-neutral-300 duration-200">
            {{ buttonContent }}
        </button>
    </div>
</template>
<script setup>
import defineProps from 'vue';
defineProps({
    title:{type:String},
    buttonContent:{type:String}
})
</script>
