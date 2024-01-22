<template>
    <div class="flex p-4 justify-between">
        <div class="flex gap-2">
            <button
                class="w-14 p-3 transition ease-in-out delay-50 bg-green-500 rounded-full hover:bg-green-400 hover:scale-105 shadow-lg">
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                    <path
                        d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
                    </path>
                </svg>
            </button>
            <button class=" w-14 p-3">
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                    class="fill-gray-400 transition ease-in-out delay-50 hover:fill-gray-200 hover:scale-105">
                    <path
                        d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z">
                    </path>
                </svg>
            </button>
            <div class="flex">
                <button :data-title="transformTitle" @click="toggleMenuOptions">
                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                        class="fill-gray-400 transition ease-in-out delay-50 hover:fill-gray-200 hover:scale-105 w-8">
                        <path
                            d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">
                        </path>
                    </svg>
                </button>
                <div class="options--menu p-1 flex-row text-gray-400" v-if="canShowMenuOptions">
                    <button class="flex p-1 gap-1 align-middle" aria-disabled="false" role="menuitem" tabindex="-1">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
                            class="w-5 fill-gray-400">
                            <path
                                d="M4.765 1.423c-.42.459-.713.992-.903 1.554-.144.421-.264 1.173-.22 1.894.077 1.321.638 2.408 1.399 3.316v.002l.083.098c.611.293 1.16.696 1.621 1.183a2.244 2.244 0 0 0-.426-2.092l-.127-.153-.002-.001c-.612-.73-.997-1.52-1.051-2.442-.032-.54.066-1.097.143-1.323a2.85 2.85 0 0 1 .589-1.022 2.888 2.888 0 0 1 4.258 0c.261.284.456.628.59 1.022.076.226.175.783.143 1.323-.055.921-.44 1.712-1.052 2.442l-.002.001-.127.153a2.25 2.25 0 0 0 .603 3.39l2.209 1.275a3.248 3.248 0 0 1 1.605 2.457h-5.99a5.466 5.466 0 0 1-.594 1.5h8.259l-.184-1.665a4.75 4.75 0 0 0-2.346-3.591l-2.209-1.275a.75.75 0 0 1-.201-1.13l.126-.152h.001c.76-.909 1.32-1.995 1.399-3.316.043-.721-.077-1.473-.22-1.894a4.46 4.46 0 0 0-.644-1.24v-.002h-.002a4.388 4.388 0 0 0-6.728-.312zM2 12.5v-2h1.5v2h2V14h-2v2H2v-2H0v-1.5h2z">
                            </path>
                        </svg><span>Seguir</span>
                    </button>
                    <button class="flex p-1 gap-1 align-middle" aria-disabled="false" role="menuitem" tabindex="-1">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
                            class="w-5 fill-gray-400">
                            <path
                                d="M5.624 3.886A4.748 4.748 0 0 0 3.25 8c0 1.758.955 3.293 2.375 4.114l.75-1.3a3.249 3.249 0 0 1 0-5.63l-.75-1.298zm4.001 1.299.75-1.3A4.748 4.748 0 0 1 12.75 8a4.748 4.748 0 0 1-2.375 4.114l-.75-1.3a3.249 3.249 0 0 0 0-5.63zM8 6.545a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91z">
                            </path>
                            <path
                                d="M4 1.07A7.997 7.997 0 0 0 0 8a7.997 7.997 0 0 0 4 6.93l.75-1.3A6.497 6.497 0 0 1 1.5 8a6.497 6.497 0 0 1 3.25-5.63L4 1.07zm7.25 1.3.75-1.3A7.997 7.997 0 0 1 16 8a7.997 7.997 0 0 1-3.999 6.93l-.75-1.3A6.497 6.497 0 0 0 14.5 8a6.497 6.497 0 0 0-3.25-5.63z">
                            </path>
                        </svg>
                        <span dir="auto" class="Type__TypeElement-sc-goli3j-0 ieTwfQ ellipsis-one-line PDPsYDh4ntfQE3B4duUI"
                            data-encore-id="type">Ir a radio del artista</span>
                    </button>
                    <button class="flex p-1 gap-1 align-middle" role="menuitem" aria-expanded="true" tabindex="-1">
                        <div class="flex p-1 gap-1 align-middle">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
                                class="w-5 fill-gray-400">
                                <path
                                    d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z">
                                </path>
                                <path
                                    d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z">
                                </path>
                            </svg><span sdata-encore-id="type">Compartir</span>
                        </div>
                        <span>
                            <svg data-encore-id="icon" role="img" aria-hidden="true" class="w-5 fill-gray-400"
                                viewBox="0 0 16 16">
                                <path d="M14 10 8 4l-6 6h12z"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <button class="text-gray-400 flex p-3 gap-2">
                Lista
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="fill-gray-400 w-6">
                    <path
                        d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z">
                    </path>
                </svg>
            </button>
            <button class="text-gray-400 flex p-3 gap-2" v-show="false">
                Compacto
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="fill-gray-400 w-6">
                    <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
    playlist: {
        type: Object,
        required: true
    }
})

const canShowMenuOptions = ref(true)

const toggleMenuOptions = () => {
    canShowMenuOptions.value = !canShowMenuOptions.value
}

const transformTitle = computed(() => props.playlist.name?.includes('_') ? 'Mas opciones para ' + props.playlist.name.replace('_', ' ') : 'Mas opciones para ' + props.playlist.name)

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
    padding: 4px 8px 4px 8px;
    color: #fff;
    border-radius: 5px;
    background: #242424;
    visibility: hidden;
}

.options--menu {
    margin-top: 2.5rem;
    font-weight: lighter;
    position: absolute;
    padding: 4px 8px 4px 8px;
    color: #fff;
    border-radius: 5px;
    background: #242424;
}
</style>