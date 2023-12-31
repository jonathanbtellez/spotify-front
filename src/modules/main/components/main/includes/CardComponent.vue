<template >
    <div class="p-3 rounded-lg text-white text-left group">
        <div class="w-full rounded-lg flex flex-col justify-center">
            <img :src="list.image.path" alt="list image" class="rounded-lg ">
        </div>
        <div class="relative">
            <button
                class="absolute group-hover:transition-opaciy group-hover:-translate-y-8 right-0  group-hover:ease-in-out duration-300 bg-green-600 opacity-0 group-hover:opacity-100 rounded-full p-2 invisible group-hover:visible hover:bg-green-500 hover:scale-105 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 stroke-2 fill-black">
                    <path fill-rule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <h3 class=" py-2 ">{{ list.name }}</h3>
            <p class="text-sm text-neutral-400">{{ list.description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Object
        }
    },

}
</script>
<style scoped>

</style>