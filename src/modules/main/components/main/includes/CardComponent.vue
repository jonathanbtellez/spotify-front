<template >
    <div class="p-3 rounded-lg text-white text-left">
        <div class="w-full rounded-lg flex justify-center py-5" >
            <div class="loader text-center my-6 h-5" v-if="is_loading"></div>
            <img :src="urlImage" alt="list image" class="rounded-lg " v-else>
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
        const {getUrlImage} = useImage()

        onMounted( () => {
            getImage()
        })

        const getImage = ()=> {
            setTimeout(async ()=>{
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
}</style>