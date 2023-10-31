<template>
    <div>
        <h2 class="font-extrabold text-4xl text-neutral-300 text-left px-4">¡{{ greet() +' '+ userName }}!</h2>
    </div>
    <div class="grid md:grid-cols-2 gap-5 lg:grid-cols-3 p-4 mt-4">
        <div class="flex rounded-lg bg-neutral-300 bg-opacity-20 w-full" v-for="item, index in lists" :key="index">
            <div class="md:w-16 lg:w-20">
                    <img :src="item.image" class="rounded-s-lg" alt="list image">
            </div>
            <div class="flex items-center px-5 justify-between shadow-black shadow-inner w-full hover:visible" >
                <div>
                    <h3 class="text-white font-bold">{{ item.name }}</h3>
                </div>
                <div>
                    <button @click="on_reproduce" class="bg-white hover:bg-neutral-300 rounded-full p-2">
                        <svg v-if="!is_reproducing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2 fill-black">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 hover:stroke-green-600 stroke-2 fill-black stroke-black">
                            <path fill-rule="evenodd"
                                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
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

export default {


    setup() {
        const {userName} = useAuth()

        const lists = [
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            },
            {
                name: 'List',
                image: 'https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60',
                list: []
            }
        ]

        const greet = () => {
            const timeOfDay = new Date().getHours()
            if (timeOfDay > 5 && timeOfDay < 12) return 'Buenos dias '
            if (timeOfDay > 13 && timeOfDay < 18) return 'Buenas tardes'
            return 'Buenas noches '
        }

        return {
            userName,
            greet,
            lists
        }
    }
}
</script>
<style scoped>
</style>