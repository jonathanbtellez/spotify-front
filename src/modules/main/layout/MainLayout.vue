<template>
    <main class="bg-black grid grid-cols-5 p-3 grid-rows-5 lg:grid-rows-6 gap-3 h-screen">
        <section class="col-span-1 row-span-4 lg:row-span-5 h-full">
            <aside_component />
        </section>
        <section
            class=" col-span-4 rounded-xl row-span-4 lg:row-span-5 h-full hover:overflow-y-auto overflow-hidden scroll-auto scrollbar-thumb-white scrollbar-track-transparent scrollbar-thin py-4">
            <nav-component />
            <router-view />
        </section>
        <section class="col-span-5 row-span-1">
            <footer_component />
        </section>
    </main>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        'aside_component': defineAsyncComponent(() => import(/* webpackChunkName: 'aside component' */'../components/aside/AsideComponent.vue')),
        'footer_component': defineAsyncComponent(() => import(/* webpackChunkName: 'footer component' */'../components/footer/FooterComponent.vue')),
        'nav-component': defineAsyncComponent(() => import(/* webpackChunkName: 'nav component' */'../components/main/NavComponent.vue')),
    },
}
</script>
<style scoped>
main {
    min-width: 768px;
}
</style>