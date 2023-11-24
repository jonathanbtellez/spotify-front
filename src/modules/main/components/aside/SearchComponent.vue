<template >
    <section class="bg-neutral-900 rounded-xl font-extrabold h-full">
        <div class="flex mb-4">
            <item_component title="Tu biblioteca">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
            </item_component>

            <button data-title="Crea un nueva lista o carpeta"
                class=" flex items-center gap-2 hover:text-neutral-200 hover:bg-neutral-700 rounded-full p-2 transition ease-in-out delay-100 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
        <div
            class="scroll-container h-4/5 flex flex-col gap-6 hover:overflow-y-auto overflow-hidden scroll-auto scrollbar-thumb-white scrollbar-track-transparent scrollbar-thin">
            <card_info_component title="Crea tu primera lista" buttonContent="Crear lista">
                <p class="font-normal">Es muy facil y te echaremos una mano</p>
            </card_info_component>
            <card_info_component title="Encuentra pódcasts que quieras seguir" buttonContent="Explorar pódcasts">
                <p class="font-normal">Te avisaremos cuando salgan nuevos episodios</p>
            </card_info_component>
        </div>
    </section>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const item_component = defineAsyncComponent(() => /* webpackChunkName: 'item component' */ import('./ItemComponent.vue'))
const card_info_component = defineAsyncComponent(() => /* webpackChunkName: 'card info component' */ import('./CardInfoComponent.vue'))
</script>
<style scoped>
[data-title]:hover:after {
    opacity: 1;
    transition: all 0.3s ease-in-out 0.4s;
    visibility: visible;
}

[data-title]:after {
    content: attr(data-title);
    font-weight: lighter;
    font-size: small;
    position: absolute;
    left: 80px;
    padding: 4px 8px 4px 8px;
    color: #fff;
    border-radius: 5px;
    background: #242424;
    visibility: hidden;
}
</style>