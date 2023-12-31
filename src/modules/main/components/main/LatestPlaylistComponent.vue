<template>
    <div>
        <h2 class="font-extrabold text-4xl text-white text-left px-4">¡{{ greet() + ' ' + userName }}!</h2>
    </div>
    <div class="grid md:grid-cols-2 gap-5 lg:grid-cols-3 p-4 mt-4">
        <div class="flex rounded-lg bg-neutral-300 hover:bg-opacity-30 bg-opacity-20 w-full group"
            @mouseover="get_color(list.color)" v-for="list in listsWithColor" :key="list.index" @click="navigateTo(list.id)">
            <div class="w-1/4">
                <img :src="list.image.path" class="rounded-s-lg" alt="list image">
            </div>
            <div class="flex items-center px-5 justify-between shadow-black shadow-inner w-full hover:visible">
                <div>
                    <h3 class="text-white font-bold">{{ transformTitle(list.name) }}</h3>
                </div>
                <div>
                    <button
                        class="transition ease-in-out delay-50 bg-green-600 rounded-full p-2 invisible group-hover:visible hover:bg-green-500 hover:scale-105 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 stroke-2 fill-black">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import useAuth from '../../../auth/composables/useAuth'
import useMain from '../../composables/useMain'
import useHelpers from '@/modules/main/composables/useHelpers';

import randomColor from 'randomcolor'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    props: ['lists'],
    setup(props) {
        const router = useRouter()
        const { userName } = useAuth()
        const { set_bg_color } = useMain()
        const listsWithColor = ref([])
        const { transformTitle } = useHelpers()

        onMounted(() => {
            listsWithColor.value = props.lists.map(list => {
                const newList = {
                    ...list, color: randomColor({
                        luminosity: 'dark',
                        hue: 'random'
                    })
                }
                return newList
            }
            )
        })

        const greet = () => {
            const timeOfDay = new Date().getHours()
            if (timeOfDay > 5 && timeOfDay < 12) return 'Buenos dias '
            if (timeOfDay > 13 && timeOfDay < 18) return 'Buenas tardes'
            return 'Buenas noches '
        }

        const navigateTo = (idPLaylist) => {
            router.push({ name: 'showPlaylist', params: { id: idPLaylist } })
        }

        const get_color = (color) => {
            set_bg_color(color)
        }
        return {
            userName,
            greet,
            get_color,
            listsWithColor,
            transformTitle,
            navigateTo
        }
    }
}
</script>
<style scoped></style>