<template>
    <div class="table w-full">
        <div class="table-header-group">
            <tr>
                <th class="text-gray-400 py-3">#</th>
                <th class="text-gray-400 text-start py-3">Titulo</th>
                <th class="text-gray-400 text-start py-3">Álbum</th>
                <th class="flex justify-center py-3">
                    <div class="w-6 p-1">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="fill-gray-400">
                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z">
                            </path>
                            <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z">
                            </path>
                        </svg>
                    </div>
                </th>
            </tr>
        </div>
        <tbody>
            <tr v-for="(track, index) in tracks" :key="track.id" class="hover:bg-neutral-600 group">
                <td class="text-center text-gray-400">
                    <p class="block group-hover:hidden">{{ index + 1 }}</p>
                    <button :aria-label="track.name" class="w-4 hidden group-hover:inline" tabindex="-1"
                        :data-title="'Reproducir ' + track.name + ' de ' + track.album.artist.name"><svg
                            data-encore-id="icon" role="img" aria-hidden="true" class="fill-neutral-200"
                            viewBox="0 0 24 24">
                            <path
                                d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
                            </path>
                        </svg></button>
                </td>
                <td class="text-gray-400 text-start p-2 ">
                    <div class="flex gap-2">
                        <div class="w-10">
                            <img :src="track.image.path" alt="">
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="text-neutral-200">
                                {{ track.name }}
                            </p>
                            <p class="group-hover:text-neutral-200">
                                {{ track.album.artist.name }}
                            </p>
                        </div>
                    </div>

                </td>
                <td class="text-start text-gray-400 group-hover:text-neutral-200">{{ track.album.name }}</td>
                <td class="text-gray-400 justify-around">
                    <diV class="flex justify-center gap-2">
                        <button class="w-5 invisible group-hover:visible" data-title="Guardar en tu biblioteca">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                                class="fill-gray-400 transition ease-in-out delay-50 hover:fill-gray-200 hover:scale-105 ">
                                <path
                                    d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z">
                                </path>
                            </svg>
                        </button>
                        <div>
                            <p>{{ track.duration }}</p>
                        </div>
                        <button class="w-6 invisible group-hover:visible"
                            :data-title="'Mas opciones para ' + track.name + ' de ' + track.album.artist.name">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                                class="fill-gray-200">
                                <path
                                    d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">
                                </path>
                            </svg>
                        </button>
                    </diV>

                </td>
            </tr>
        </tbody>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    tracks: {
        type: Object,
        required: true
    }
})

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
</style>