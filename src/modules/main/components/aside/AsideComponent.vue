<template >
    <div class="space-y-3 h-full">
        <section
            class="bg-neutral-900 rounded-xl flex flex-col align-items font-extrabold gap-4 text-neutral-400 p-4">
            <item_component title="Inicio">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </item_component>
            <item_component title="Buscar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </item_component>

        </section>
        <section class="bg-neutral-900 rounded-xl text-neutral-400 p-4 h-full">
            <search_component />
        </section>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        'search_component': defineAsyncComponent(() => /* webpackChunkName: 'item component' */ import('./SearchComponent.vue')),
        'item_component': defineAsyncComponent(() =>/* webpackChunkName: 'item component' */ import('./ItemComponent.vue'))
    }

}
</script>
<style ></style>