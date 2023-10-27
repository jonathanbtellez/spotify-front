<template>
    <main class="bg-black p-3 grid grid-cols-4 grid-rows-6 gap-1 h-screen">
        <section class="col-span-1 row-span-5">
            <aside_component/>
        </section>
        <section class="col-span-3 row-span-5">
            sdfgsdfg
            <router-view />
        </section >
        <section class="col-span-4 row-span-1">
            <footer_component />
        </section>
    </main>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        'aside_component': defineAsyncComponent(()=> import('../components/aside/AsideComponent.vue')),
        'footer_component': defineAsyncComponent(()=> import('../components/footer/FooterComponent.vue')),

    }

}
</script>
<style></style>