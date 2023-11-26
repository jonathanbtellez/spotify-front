<template>
    <main class="bg-black grid grid-cols-5 grid-rows-5 lg:row-span-6 p-3 gap-3 h-screen">
        <section class="row-span-4 lg:row-span-5">
            <aside_component />
        </section>
        <section
            class=" col-span-4 rounded-xl row-span-4 lg:row-span-5 hover:overflow-y-auto overflow-hidden scroll-auto scrollbar-thumb-white scrollbar-track-transparent scrollbar-thin">
            <nav-component />
            <router-view />
        </section>
        <footer class="col-span-5 row-span-1 bg-black">
            <footer_component />
        </footer>
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