<template >
    <div class="p-3 rounded-lg text-white text-left">
        <div class="w-full rounded-lg flex justify-center group">
            <div class="loader text-center my-6 h-5" v-if="is_loading"></div>
            <img :src="urlImage" alt="list image" class="rounded-lg " v-else>
            <button
                class="transition ease-in-out delay-150 bg-green-600 rounded-full p-2 invisible group-hover:visible hover:bg-green-500 hover:scale-105 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 stroke-2 fill-black">
                    <path fill-rule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div>
            <h3 class=" py-2 ">{{ list.name }}</h3>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import useImage from '../../../composables/useImage';

export default {
    props: {
        list: {
            type: Object
        }
    },
    setup(props) {

        const urlImage = ref('')
        const is_loading = ref(false)
        const { getUrlImage } = useImage()

        onMounted(() => {
            getImage()
        })

        const getImage = () => {
            setTimeout(async () => {
                is_loading.value = true
                urlImage.value = await getUrlImage(props.list.image.path)
                is_loading.value = false
            }, 300)
        }

        return {
            urlImage,
            is_loading
        }
    }
}
</script>
<style scoped>
.loader {
    --d: 22px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    color: #25b09b;
    box-shadow:
        calc(1*var(--d)) calc(0*var(--d)) 0 0,
        calc(0.707*var(--d)) calc(0.707*var(--d)) 0 1px,
        calc(0*var(--d)) calc(1*var(--d)) 0 2px,
        calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
        calc(-1*var(--d)) calc(0*var(--d)) 0 4px,
        calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
        calc(0*var(--d)) calc(-1*var(--d)) 0 6px;
    animation: l27 1s infinite steps(8);
}

@keyframes l27 {
    100% {
        transform: rotate(1turn)
    }
}
</style>