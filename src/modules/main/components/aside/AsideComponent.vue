<template >
    <section class="bg-neutral-900 rounded-2xl font-extrabold text-xl text-neutral-400 p-8">
        <button class="w-full hover:text-neutral-200 transition ease-in-out delay-50 duration-300 ">
            <div class=" flex items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg> <span>Inicio</span>
            </div>
        </button>
        <button class="w-full hover:text-neutral-200 transition ease-in-out delay-50 duration-300 mt-5">

            <div class=" flex items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span>Buscar</span>
            </div>
        </button>

    </section>
    <section class="bg-neutral-900 rounded-2xl font-extrabold text-xl text-neutral-400 p-8 h- mt-3">
        <search_component />
    </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        'search_component': defineAsyncComponent(()=> import('./SearchComponent.vue'))
    }

}
</script>
<style ></style>